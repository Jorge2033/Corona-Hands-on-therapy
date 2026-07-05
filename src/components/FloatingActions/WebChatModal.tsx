"use client";

import { useEffect, useState } from "react";
import { SITE, HOURS, SERVICES } from "@/lib/siteData";
import { CloseIcon } from "@/components/icons/Icons";
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

// Bot de preguntas guiadas: NO es un modelo de IA ni WhatsApp.
// Es un árbol de opciones fijas + un input de texto libre con una
// respuesta de respaldo que siempre dirige a llamar o escribir por email.
export default function WebChatModal({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      from: "bot",
      text: `Hi! I'm Vika, the virtual assistant for ${SITE.name}.`,
    },
    { id: 2, from: "bot", text: "Please select an option below, or type your own question." },
  ]);
  const [options, setOptions] = useState<QuickOption[]>([]);
  const [inputValue, setInputValue] = useState("");

  function pushBotMessage(text: string) {
    setMessages((prev) => [...prev, { id: prev.length + 1, from: "bot", text }]);
  }

  function pushUserMessage(text: string) {
    setMessages((prev) => [...prev, { id: prev.length + 1, from: "user", text }]);
  }

  function showMainMenu() {
    setOptions([
      { label: "Request an appointment", onSelect: () => selectOption("Request an appointment", showAppointmentInfo) },
      { label: "Office hours", onSelect: () => selectOption("Office hours", showHours) },
      { label: "Insurance", onSelect: () => selectOption("Insurance", showInsurance) },
      { label: "Location", onSelect: () => selectOption("Location", showLocation) },
      { label: "Services offered", onSelect: () => selectOption("Services offered", showServices) },
    ]);
  }

  function selectOption(label: string, next: () => void) {
    pushUserMessage(label);
    next();
  }

  function showAppointmentInfo() {
    pushBotMessage(
      `You can request an appointment using the "Request Appointment" button, or call us directly at ${SITE.phoneDisplay}.`
    );
    backToMenuOption();
  }

  function showHours() {
    const hoursText = HOURS.map((h) => `${h.day}: ${h.time}`).join(" · ");
    pushBotMessage(hoursText);
    backToMenuOption();
  }

  function showInsurance() {
    pushBotMessage(
      "We work with most major insurance plans, including coverage for auto accident, work injury, home accident, and personal injury cases. Call us and we can check your specific plan."
    );
    backToMenuOption();
  }

  function showLocation() {
    pushBotMessage(`We're located at ${SITE.address.line1}, ${SITE.address.line2}.`);
    backToMenuOption();
  }

  function showServices() {
    const list = SERVICES.map((s) => s.name).join(", ");
    pushBotMessage(`We offer: ${list}.`);
    backToMenuOption();
  }

  function backToMenuOption() {
    setOptions([{ label: "Back to main menu", onSelect: showMainMenu }]);
  }

  function handleTextSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    pushUserMessage(text);
    setInputValue("");
    setOptions([]);
    setTimeout(() => {
      pushBotMessage(
        `I'm a simple assistant so I can't answer everything, but you can call us at ${SITE.phoneDisplay} or email ${SITE.email} and our team will help right away.`
      );
      backToMenuOption();
    }, 400);
  }

  // Muestra el menú principal la primera vez que se abre el chat
  useEffect(() => {
    showMainMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>Web Chat</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={`${styles.body} ${chatStyles.chatBody}`}>
          {messages.map((m) => (
            <div key={m.id} className={m.from === "bot" ? chatStyles.botBubble : chatStyles.userBubble}>
              {m.text}
            </div>
          ))}

          {options.length > 0 && (
            <div className={chatStyles.optionsWrap}>
              {options.map((opt) => (
                <button key={opt.label} className={chatStyles.optionBtn} onClick={opt.onSelect}>
                  {opt.label}
                </button>
              ))}
            </div>
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