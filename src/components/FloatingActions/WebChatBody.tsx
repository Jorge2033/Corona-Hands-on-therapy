"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, HOURS, SERVICES } from "@/lib/siteData";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Modal.module.css";
import chatStyles from "./WebChatModal.module.css";

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
}

interface QuickOption {
  label: string;
  onSelect: () => void;
}

// Avatar de Vika con foto real. Si la imagen falla en cargar, cae en la inicial "V".
export function AssistantAvatar({ size, className }: { size: number; className: string }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <span className={className} style={{ width: size, height: size }} aria-hidden="true">
        V
      </span>
    );
  }

  return (
    <img
      src="/images/assistant-avatar.png"
      alt=""
      className={`${className} ${chatStyles.avatarImg}`}
      style={{ width: size, height: size }}
      onError={() => setImageFailed(true)}
    />
  );
}

// Bot de preguntas guiadas: NO es un modelo de IA ni WhatsApp.
// Es un árbol de opciones fijas + un input de texto libre con una
// respuesta de respaldo que siempre dirige a llamar o escribir por email.
// El indicador de "escribiendo..." es solo una pausa simulada para que la
// experiencia se sienta como un chat en vivo, no una respuesta real generada.
export default function WebChatBody() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [options, setOptions] = useState<QuickOption[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function pushUserMessage(text: string) {
    setMessages((prev) => [...prev, { id: prev.length + 1, from: "user", text }]);
  }

  // Simula una breve pausa de "escribiendo" antes de insertar el mensaje del bot,
  // y opcionalmente ejecuta algo después (mostrar las siguientes opciones, etc.)
  function pushBotMessage(text: string, after?: () => void) {
    setOptions([]);
    setIsTyping(true);
    const delay = 1400 + Math.random() * 900;
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: prev.length + 1, from: "bot", text }]);
      setIsTyping(false);
      after?.();
    }, delay);
  }

  function showMainMenu() {
    setOptions([
      { label: t.webchat.optionAppointment, onSelect: () => selectOption(t.webchat.optionAppointment, showAppointmentInfo) },
      { label: t.webchat.optionHours, onSelect: () => selectOption(t.webchat.optionHours, showHours) },
      { label: t.webchat.optionInsurance, onSelect: () => selectOption(t.webchat.optionInsurance, showInsurance) },
      { label: t.webchat.optionLocation, onSelect: () => selectOption(t.webchat.optionLocation, showLocation) },
      { label: t.webchat.optionServices, onSelect: () => selectOption(t.webchat.optionServices, showServices) },
    ]);
  }

  function selectOption(label: string, next: () => void) {
    pushUserMessage(label);
    next();
  }

  function showAppointmentInfo() {
    pushBotMessage(
      `${t.webchat.appointmentInfoPrefix} ${SITE.phoneDisplay}.`,
      backToMenuOption
    );
  }

  function showHours() {
    const hoursText = HOURS.map((h) => `${t.contact.days[h.day] ?? h.day}: ${h.time}`).join(" · ");
    pushBotMessage(hoursText, backToMenuOption);
  }

  function showInsurance() {
    pushBotMessage(t.webchat.insuranceInfo, backToMenuOption);
  }

  function showLocation() {
    pushBotMessage(`${t.webchat.locationPrefix} ${SITE.address.line1}, ${SITE.address.line2}.`, backToMenuOption);
  }

  function showServices() {
    const list = SERVICES.map((s) => t.services.items[s.id]?.name ?? s.name).join(", ");
    pushBotMessage(`${t.webchat.servicesPrefix} ${list}.`, backToMenuOption);
  }

  function backToMenuOption() {
    setOptions([{ label: t.webchat.backToMenu, onSelect: showMainMenu }]);
  }

  // Palabras clave (inglés + español) para detectar de qué tema habla el
  // usuario cuando escribe su propia pregunta en vez de usar los botones.
  // El orden de INTENT_ORDER decide qué categoría gana si el texto coincide
  // con más de una (p. ej. "schedule" podría ser cita u horario).
  const INTENT_KEYWORDS = {
    appointment: [
      "appointment", "appointments", "appt", "book", "booking", "schedule",
      "scheduling", "reschedule", "reserve", "reservation", "availability",
      "available", "slot", "slots", "come in", "see a doctor", "see a therapist",
      "see someone", "sign up", "get started", "new patient", "first visit",
      "cita", "citas", "agendar", "agenda", "agendamiento", "reservar", "reserva",
      "turno", "turnos", "consulta", "consultar", "programar", "cupo", "cupos",
      "disponibilidad", "disponible", "nuevo paciente", "primera visita",
    ],
    hours: [
      "hours", "hour", "open", "opens", "opening", "close", "closes", "closing",
      "closed", "time", "times", "what time", "when are you open", "business hours",
      "office hours", "today", "tomorrow", "weekend", "saturday", "sunday",
      "horario", "horarios", "hora", "horas", "abren", "abierto", "abierta",
      "cierran", "cerrado", "cerrada", "cuando abren", "que hora", "qué hora",
      "hoy", "mañana", "fin de semana", "sábado", "domingo",
    ],
    insurance: [
      "insurance", "insured", "coverage", "covered", "copay", "co-pay",
      "deductible", "plan", "plans", "billing", "bill", "cost", "costs",
      "price", "prices", "pricing", "payment", "pay", "out of pocket", "hsa",
      "fsa", "medicaid", "medicare", "aetna", "cigna", "united", "unitedhealthcare",
      "blue cross", "bluecross", "oxford", "humana", "no fault", "workers comp",
      "workers' compensation", "self pay",
      "seguro", "seguros", "cobertura", "cubre", "copago", "deducible",
      "plan", "planes", "facturación", "factura", "costo", "costos", "precio",
      "precios", "pago", "pagos", "medicaid", "seguro médico", "sin seguro",
    ],
    location: [
      "location", "address", "where", "directions", "map", "parking",
      "located", "find you", "clinic address", "office location", "how far",
      "near me", "zip code",
      "dirección", "direccion", "ubicación", "ubicacion", "donde", "dónde",
      "como llegar", "cómo llegar", "mapa", "estacionamiento", "ubicados",
      "ubicado", "cerca", "queda",
    ],
    services: [
      "services", "service", "treatment", "treatments", "therapy",
      "physical therapy", "chiropractic", "chiropractor", "acupuncture",
      "offer", "offerings", "what do you do", "what do you treat", "treat",
      "rehab", "rehabilitation",
      "servicios", "servicio", "tratamiento", "tratamientos", "terapia",
      "fisioterapia", "quiropráctico", "quiropractico", "quiropráctica",
      "acupuntura", "ofrecen", "que tratan", "qué tratan", "tratan",
      "rehabilitación", "rehabilitacion",
    ],
  } as const;

  const INTENT_ORDER: (keyof typeof INTENT_KEYWORDS)[] = [
    "appointment", "insurance", "location", "hours", "services",
  ];

  const INTENT_HANDLERS: Record<keyof typeof INTENT_KEYWORDS, () => void> = {
    appointment: showAppointmentInfo,
    hours: showHours,
    insurance: showInsurance,
    location: showLocation,
    services: showServices,
  };

  function detectIntent(text: string): keyof typeof INTENT_KEYWORDS | null {
    const normalized = text.toLowerCase();
    for (const category of INTENT_ORDER) {
      if (INTENT_KEYWORDS[category].some((k) => normalized.includes(k))) {
        return category;
      }
    }
    return null;
  }

  function handleTextSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    pushUserMessage(text);
    setInputValue("");
    const intent = detectIntent(text);
    if (intent) {
      INTENT_HANDLERS[intent]();
      return;
    }
    pushBotMessage(
      `${t.webchat.fallbackPrefix} ${SITE.phoneDisplay} ${t.webchat.fallbackMiddle} ${SITE.email} ${t.webchat.fallbackSuffix}`,
      backToMenuOption
    );
  }

  // Saludo inicial escalonado (con pausa de "escribiendo") al abrir el chat.
  // El guard evita que el doble-montaje de React Strict Mode en desarrollo
  // dispare el saludo dos veces.
  const hasGreetedRef = useRef(false);
  useEffect(() => {
    if (hasGreetedRef.current) return;
    hasGreetedRef.current = true;
    pushBotMessage(`${t.webchat.greeting1Prefix} ${SITE.name}.`, () => {
      pushBotMessage(t.webchat.greeting2, showMainMenu);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`${styles.body} ${chatStyles.chatBody}`}>
        {messages.map((m) => (
          <div key={m.id} className={m.from === "bot" ? chatStyles.botRow : chatStyles.userRow}>
            {m.from === "bot" && <AssistantAvatar size={26} className={chatStyles.avatar} />}
            <div className={m.from === "bot" ? chatStyles.botBubble : chatStyles.userBubble}>
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className={chatStyles.botRow}>
            <AssistantAvatar size={26} className={chatStyles.avatar} />
            <div className={chatStyles.typingBubble} aria-label={t.webchat.typingLabel}>
              <span className={chatStyles.typingDot} />
              <span className={chatStyles.typingDot} />
              <span className={chatStyles.typingDot} />
            </div>
          </div>
        )}

        {!isTyping && options.length > 0 && (
          <>
            <div className={chatStyles.timestamp}>
              {new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
            </div>
            <div className={chatStyles.optionsWrap}>
              {options.map((opt) => (
                <button key={opt.label} className={chatStyles.optionBtn} onClick={opt.onSelect}>
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <form className={chatStyles.inputRow} onSubmit={handleTextSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={t.webchat.inputPlaceholder}
        />
        <button type="submit" aria-label={t.webchat.send}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 20l16-8L4 4v6l10 2-10 2v6Z" fill="currentColor" />
          </svg>
        </button>
      </form>
    </>
  );
}
