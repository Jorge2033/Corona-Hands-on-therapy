"use client";

import { useEffect, useState } from "react";
import { SITE, HOURS, SERVICES } from "@/lib/siteData";
import { CloseIcon } from "@/components/icons/Icons";
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

// Avatar de Vika con foto real, si existe /images/assistant-avatar.jpg.
// Mientras no se agregue esa imagen, cae automáticamente en la inicial "V".
function AssistantAvatar({ size, className }: { size: number; className: string }) {
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
      src="/images/assistant-avatar.jpg"
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
export default function WebChatModal({ onClose }: { onClose: () => void }) {
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
    const delay = 500 + Math.random() * 400;
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

  function handleTextSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    pushUserMessage(text);
    setInputValue("");
    pushBotMessage(
      `${t.webchat.fallbackPrefix} ${SITE.phoneDisplay} ${t.webchat.fallbackMiddle} ${SITE.email} ${t.webchat.fallbackSuffix}`,
      backToMenuOption
    );
  }

  // Saludo inicial escalonado (con pausa de "escribiendo") al abrir el chat
  useEffect(() => {
    pushBotMessage(`${t.webchat.greeting1Prefix} ${SITE.name}.`, () => {
      pushBotMessage(t.webchat.greeting2, showMainMenu);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.header} ${chatStyles.chatHeader}`}>
          <div className={chatStyles.headerIdentity}>
            <AssistantAvatar size={34} className={chatStyles.headerAvatar} />
            <div className={chatStyles.headerText}>
              <span className={styles.headerTitle}>Vika</span>
              <span className={chatStyles.headerSubtitle}>
                <span className={chatStyles.onlineDot} aria-hidden="true" />
                {t.webchat.virtualAssistant}
              </span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label={t.modals.close}>
            <CloseIcon />
          </button>
        </div>

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
              <div className={chatStyles.typingBubble} aria-label={`Vika ${t.webchat.virtualAssistant}`}>
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
            placeholder="Type your message"
          />
          <button type="submit" aria-label="Send">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 20l16-8L4 4v6l10 2-10 2v6Z" fill="currentColor" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
