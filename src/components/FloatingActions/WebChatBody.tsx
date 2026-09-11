"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, HOURS, SERVICES } from "@/lib/siteData";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Modal.module.css";
import chatStyles from "./WebChatModal.module.css";

interface ChatLink {
  label: string;
  href: string;
}

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
  // Enlace opcional que lleva a la sección del sitio que responde la pregunta
  link?: ChatLink;
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
export default function WebChatBody({ onNavigate }: { onNavigate?: () => void } = {}) {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [options, setOptions] = useState<QuickOption[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function pushUserMessage(text: string) {
    setMessages((prev) => [...prev, { id: prev.length + 1, from: "user", text }]);
  }

  // Simula una breve pausa de "escribiendo" antes de insertar el mensaje del bot.
  // `link` adjunta un botón que lleva a la sección correspondiente del sitio.
  function pushBotMessage(text: string, opts?: { link?: ChatLink; after?: () => void }) {
    setOptions([]);
    setIsTyping(true);
    const delay = 1400 + Math.random() * 900;
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, from: "bot", text, link: opts?.link },
      ]);
      setIsTyping(false);
      (opts?.after ?? backToMenuOption)();
    }, delay);
  }

  function showMainMenu() {
    setOptions([
      { label: t.webchat.optionAppointment, onSelect: () => selectOption(t.webchat.optionAppointment, showAppointmentInfo) },
      { label: t.webchat.optionHours, onSelect: () => selectOption(t.webchat.optionHours, showHours) },
      { label: t.webchat.optionInsurance, onSelect: () => selectOption(t.webchat.optionInsurance, showInsurance) },
      { label: t.webchat.optionServices, onSelect: () => selectOption(t.webchat.optionServices, showServices) },
      { label: t.webchat.optionConditions, onSelect: () => selectOption(t.webchat.optionConditions, showConditions) },
      { label: t.webchat.optionLocation, onSelect: () => selectOption(t.webchat.optionLocation, showLocation) },
    ]);
  }

  function selectOption(label: string, next: () => void) {
    pushUserMessage(label);
    next();
  }

  // --- Respuestas -------------------------------------------------------

  function showAppointmentInfo() {
    pushBotMessage(`${t.webchat.appointmentInfoPrefix} ${SITE.phoneDisplay}.`, {
      link: { label: t.webchat.linkAppointmentForm, href: "/#contact" },
    });
  }

  // Resalta el horario de HOY antes de listar la semana completa: es lo que
  // casi siempre quiere saber quien pregunta "¿están abiertos?".
  function showHours() {
    const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const today = HOURS.find((h) => h.day === todayName);
    const isClosed = !today || /closed/i.test(today.time);
    const todayLine = isClosed
      ? t.webchat.hoursTodayClosed
      : `${t.webchat.hoursTodayOpen} ${today.time}.`;
    const full = HOURS.map((h) => `${t.contact.days[h.day] ?? h.day}: ${h.time}`).join(" · ");
    pushBotMessage(`${todayLine} ${t.webchat.hoursFullIntro} ${full}`);
  }

  function showInsurance() {
    pushBotMessage(t.webchat.insuranceInfo, {
      link: { label: t.webchat.linkInsurance, href: "/patient-info/insurance" },
    });
  }

  function showLocation() {
    pushBotMessage(`${t.webchat.locationPrefix} ${SITE.address.line1}, ${SITE.address.line2}.`, {
      link: {
        label: t.webchat.linkMap,
        href: "https://www.google.com/maps/search/?api=1&query=90-46+Corona+Ave+Elmhurst+NY+11373",
      },
    });
  }

  function showServices() {
    const list = SERVICES.map((s) => t.services.items[s.id]?.name ?? s.name).join(", ");
    pushBotMessage(`${t.webchat.servicesPrefix} ${list}.`, {
      link: { label: t.webchat.linkServices, href: "/#services" },
    });
  }

  function showConditions() {
    pushBotMessage(t.webchat.conditionsInfo, {
      link: { label: t.webchat.linkConditions, href: "/conditions" },
    });
  }

  function showTeam() {
    pushBotMessage(t.webchat.teamInfo, {
      link: { label: t.webchat.linkTeam, href: "/team" },
    });
  }

  function showCareers() {
    pushBotMessage(t.webchat.careersInfo, {
      link: { label: t.webchat.linkCareers, href: "/careers" },
    });
  }

  function showForms() {
    pushBotMessage(t.webchat.formsInfo, {
      link: { label: t.webchat.linkForms, href: "/patient-info/forms" },
    });
  }

  function showFaqs() {
    pushBotMessage(t.webchat.faqsInfo, {
      link: { label: t.webchat.linkFaqs, href: "/patient-info/faqs" },
    });
  }

  function showReferral() {
    pushBotMessage(t.webchat.formsInfo, {
      link: { label: t.webchat.linkReferral, href: "/patient-info/refer-a-friend" },
    });
  }

  function showContact() {
    pushBotMessage(
      `${t.webchat.contactInfo} ${SITE.phoneDisplay}, ${t.webchat.contactInfoEmail} ${SITE.email}.`
    );
  }

  function showLanguages() {
    pushBotMessage(t.webchat.languagesInfo);
  }

  function showFirstVisit() {
    pushBotMessage(t.webchat.firstVisitInfo, {
      link: { label: t.webchat.linkForms, href: "/patient-info/forms" },
    });
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
      "rehab", "rehabilitation", "pain management", "orthopedic", "orthopaedic",
      "massage", "dry needling", "traction", "ultrasound", "modalities",
      "servicios", "servicio", "tratamiento", "tratamientos", "terapia",
      "fisioterapia", "quiropráctico", "quiropractico", "quiropráctica",
      "acupuntura", "ofrecen", "que tratan", "qué tratan", "tratan",
      "rehabilitación", "rehabilitacion", "manejo del dolor", "ortopedia",
      "ortopédico", "ortopedico", "masaje",
    ],
    conditions: [
      "back pain", "neck pain", "shoulder", "hip pain", "knee", "elbow",
      "wrist", "hand pain", "foot", "ankle", "sciatica", "arthritis",
      "whiplash", "sports injury", "sports injuries", "post surgical",
      "post-surgical", "herniated", "disc", "pinched nerve", "condition",
      "conditions", "injury", "injuries", "hurt", "pain",
      "dolor de espalda", "dolor de cuello", "hombro", "cadera", "rodilla",
      "codo", "muñeca", "muneca", "mano", "pie", "tobillo", "ciática", "ciatica",
      "artritis", "latigazo", "lesión", "lesion", "lesiones", "hernia",
      "nervio", "condición", "condicion", "dolor",
    ],
    firstVisit: [
      "first visit", "first appointment", "what to bring", "bring", "what do i need",
      "prepare", "preparation", "what should i bring", "id", "before my visit",
      "primera visita", "primera cita", "que llevar", "qué llevar", "que traer",
      "qué traer", "que necesito", "qué necesito", "preparar", "antes de mi visita",
    ],
    forms: [
      "form", "forms", "paperwork", "intake", "documents", "download",
      "new patient form", "fill out",
      "formulario", "formularios", "papeleo", "documentos", "descargar", "llenar",
    ],
    faqs: [
      "faq", "faqs", "question", "questions", "frequently asked", "how does it work",
      "preguntas", "pregunta", "preguntas frecuentes", "como funciona", "cómo funciona",
    ],
    team: [
      "team", "staff", "doctor", "doctors", "therapist", "therapists",
      "who works", "provider", "providers", "physician", "specialist",
      "equipo", "personal", "doctor", "doctora", "doctores", "terapeuta",
      "terapeutas", "quien trabaja", "quién trabaja", "proveedor", "especialista",
    ],
    careers: [
      "job", "jobs", "career", "careers", "hiring", "hire", "employment",
      "work with you", "vacancy", "vacancies", "position", "apply", "resume",
      "trabajo", "trabajos", "empleo", "empleos", "carrera", "contratan",
      "contratando", "vacante", "vacantes", "postular", "aplicar", "currículum",
      "curriculum", "hoja de vida",
    ],
    referral: [
      "refer", "referral", "refer a friend", "recommend",
      "referir", "referencia", "recomendar", "referido",
    ],
    languages: [
      "spanish", "espanol", "español", "habla espanol", "habla español",
      "language", "translator", "interpreter",
      "idioma", "hablan español", "hablan espanol", "traductor", "intérprete",
      "interprete",
    ],
    contact: [
      "phone", "call", "telephone", "number", "whatsapp", "text", "sms",
      "email", "e-mail", "contact", "reach you", "talk to someone", "speak to",
      "teléfono", "telefono", "llamar", "número", "numero", "correo",
      "contacto", "contactar", "hablar con alguien", "escribir",
    ],
  } as const;

  // El orden decide qué categoría gana cuando el texto coincide con varias.
  // Las más específicas van primero: "first visit" contiene "visit", y
  // "back pain" contiene "pain", así que deben ganarle a las genéricas.
  const INTENT_ORDER: (keyof typeof INTENT_KEYWORDS)[] = [
    "firstVisit", "forms", "referral", "careers", "faqs", "languages",
    "appointment", "insurance", "location", "hours", "team", "services",
    "conditions", "contact",
  ];

  const INTENT_HANDLERS: Record<keyof typeof INTENT_KEYWORDS, () => void> = {
    appointment: showAppointmentInfo,
    hours: showHours,
    insurance: showInsurance,
    location: showLocation,
    services: showServices,
    conditions: showConditions,
    firstVisit: showFirstVisit,
    forms: showForms,
    faqs: showFaqs,
    team: showTeam,
    careers: showCareers,
    referral: showReferral,
    languages: showLanguages,
    contact: showContact,
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
    // Enviar vacío no hace nada: el reenganche por inactividad se encarga
    if (!text) return;
    pushUserMessage(text);
    setInputValue("");
    bumpActivity();
    const intent = detectIntent(text);
    if (intent) {
      INTENT_HANDLERS[intent]();
      return;
    }
    pushBotMessage(
      `${t.webchat.fallbackPrefix} ${SITE.phoneDisplay} ${t.webchat.fallbackMiddle} ${SITE.email} ${t.webchat.fallbackSuffix}`
    );
  }

  // --- Reenganche por inactividad ---------------------------------------
  // Si el visitante se queda callado, Vika vuelve a ofrecer ayuda y muestra
  // el menú otra vez. Se limita a 2 veces para no resultar insistente.
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleCountRef = useRef(0);
  const IDLE_MS = 45000;
  const MAX_IDLE_PROMPTS = 2;

  function bumpActivity() {
    idleCountRef.current = 0;
    scheduleIdlePrompt();
  }

  function scheduleIdlePrompt() {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (idleCountRef.current >= MAX_IDLE_PROMPTS) return;
    idleTimerRef.current = setTimeout(() => {
      idleCountRef.current += 1;
      pushBotMessage(t.webchat.idlePrompt, { after: showMainMenu });
    }, IDLE_MS);
  }

  // Reprograma el recordatorio cada vez que cambia la conversación, y lo
  // limpia al cerrar el chat para no dejar temporizadores sueltos.
  useEffect(() => {
    if (messages.length > 0) scheduleIdlePrompt();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  // Saludo inicial escalonado (con pausa de "escribiendo") al abrir el chat.
  // El guard evita que el doble-montaje de React Strict Mode en desarrollo
  // dispare el saludo dos veces.
  const hasGreetedRef = useRef(false);
  useEffect(() => {
    if (hasGreetedRef.current) return;
    hasGreetedRef.current = true;
    pushBotMessage(`${t.webchat.greeting1Prefix} ${SITE.name}.`, {
      after: () => pushBotMessage(t.webchat.greeting2, { after: showMainMenu }),
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
              {m.link && (
                <a
                  className={chatStyles.bubbleLink}
                  href={m.link.href}
                  target={m.link.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  // Los enlaces internos cierran el chat para que se vea
                  // la sección a la que llevan.
                  onClick={() => {
                    if (!m.link!.href.startsWith("http")) onNavigate?.();
                  }}
                >
                  {m.link.label} →
                </a>
              )}
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
