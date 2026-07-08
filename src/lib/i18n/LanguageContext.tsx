"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Language, TranslationDict } from "./translations";

interface LanguageContextValue {
  language: Language;
  t: TranslationDict;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "corona-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Carga la preferencia guardada del visitante al montar (client-only).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  function toggleLanguage() {
    setLanguage(language === "en" ? "es" : "en");
  }

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
