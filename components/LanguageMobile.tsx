"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/context/LangProvider";

type Props = { compact?: boolean };

const ORDER: Array<"ru" | "kz" | "en"> = ["ru", "kz", "en"];

export default function LanguageMobile({ compact = true }: Props) {
  const { lang, setLang, t } = useLang();
  const idx = ORDER.indexOf(lang);

  const next = () => setLang(ORDER[(idx + 1) % ORDER.length]);
  const switchTo = (code: "ru" | "kz" | "en") => code !== lang && setLang(code);

  return (
    <div className="flex items-center gap-2">
      {ORDER.map((code) => (
        <button
          key={code}
          role="tab"
          aria-selected={lang === code}
          onClick={() => switchTo(code)}
          className={`relative z-10 border-2 border-blue-200 font-light rounded px-4 py-1.5 text-sm  transition w-1/3 text-center
                        ${
                          lang === code
                            ? "text-white bg-[#0072AB] "
                            : "text-blue-700/70 hover:text-blue-700"
                        }`}
        >
          {code === "ru" ? "RUS" : code === "en" ? "ENG" : "KAZ"}
        </button>
      ))}
    </div>
  );
}
