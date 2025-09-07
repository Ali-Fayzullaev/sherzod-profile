//context/LangProvider.tsx
"use client";
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import ru from "../../locales/ru.json";
import kz from "../../locales/kz.json";
import en from "../../locales/en.json";

type Lang = "ru" | "kz" | "en";
type Dict = Record<string, any>;

const DICTS: Record<Lang, Dict> = { ru, kz, en };

function get(obj: Dict, path: string, fallback?: string) {
  return path.split(".").reduce<any>((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj) ?? fallback ?? path;
}

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  // простая память в localStorage (по желанию)
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved && ["ru", "kz", "en"].includes(saved)) setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang,
    t: (key, fallback) => get(DICTS[lang], key, fallback)
  }), [lang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}
