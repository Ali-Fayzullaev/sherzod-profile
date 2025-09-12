"use client";

import { useLang } from "@/app/context/LangProvider";
import { motion } from "framer-motion";
import ButtonComponents from "../ButtonComponents";
import AreasText from "./AreasText";

type Note = { title: string; text: string | string[] };

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Conflicts() {
  const { t } = useLang();

  const raw = t("activitypage.note_conflicts") as unknown;
  const notes: Note[] = Array.isArray(raw) ? (raw as Note[]) : [];

  return (
    <section className="px-4 py-8 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <AreasText/>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
          {t("activitypage.title_conflicts")}
        </h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-2 sm:mt-3 h-0.5 w-12 sm:w-14 rounded bg-[#0b76ad]"
        />

        <ul className="mt-4 space-y-2" role="list">
          {notes.map((n, i) => {
            const parts = Array.isArray(n.text) ? n.text : [n.text];
            return (
              <li
                key={i}
                className="relative pl-5 text-[#888888] leading-relaxed"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.85em] -translate-y-1/2 text-[#888888]"
                >
                  –
                </span>

                <strong className="text-[#888888] font-bold">
                  {n.title}
                </strong>
                {parts.length > 0 && parts[0] && (
                  <>
                    : <span>{parts[0]}</span>
                  </>
                )}

                {parts.slice(1).map((p, idx) => (
                  <p key={idx} className="mt-1 text-slate-700">
                    {p}
                  </p>
                ))}
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <ButtonComponents
            href="#contacts"
            label={t(
              "activitypage.buttonNameCta",
              "Записаться на консультацию"
            )}
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
