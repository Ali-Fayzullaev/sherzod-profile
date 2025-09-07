"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/context/LangProvider"; 

type Props = { compact?: boolean };

const ORDER: Array<"ru" | "kz" | "en"> = ["ru", "kz", "en"];

export default function LanguageSwitcher({ compact = true }: Props) {
  const { lang, setLang, t } = useLang();
  const idx = ORDER.indexOf(lang);

  const next = () => setLang(ORDER[(idx + 1) % ORDER.length]);
  const switchTo = (code: "ru" | "kz" | "en") => code !== lang && setLang(code);

  return (
    <div className="flex items-center">
      {/* Мобильный круглый тоггл — циклический RU → KZ → EN */}
      {compact && (
        <button
          onClick={next}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full
                     bg-white/80 backdrop-blur ring-1 ring-black/10 text-sm font-bold
                     text-blue-700 shadow hover:shadow-md transition"
          aria-label={t("label.language")}
          title={t("label.language")}
        >
          {lang.toUpperCase()}
        </button>
      )}

      {/* ≥ md: сегментный контрол с «пилюлей» */}
      <div
        className="relative ml-2 hidden md:flex items-center gap-1 rounded-full
                   bg-[#eaf0ff] ring-1 ring-[#0776AD]/20 p-1"
        role="tablist"
        aria-label={t("label.language")}
        style={{ width: 210 }}
      >
        {/* Плавающий индикатор (1/3 ширины контейнера) */}
        <motion.div
          layout
          layoutId="langPill"
          className="absolute top-1 bottom-1 rounded-full bg-white shadow"
          animate={{ left: `calc(${idx} * (100%/3) + 4px)`, width: "calc(33.333% - 8px)" }}
          transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.3 }}
        />

        {ORDER.map(code => (
          <button
            key={code}
            role="tab"
            aria-selected={lang === code}
            onClick={() => switchTo(code)}
            className={`relative z-10 px-4 py-1.5 text-sm font-semibold transition w-1/3 text-center
                        ${lang === code ? "text-blue-700" : "text-blue-700/70 hover:text-blue-700"}`}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
