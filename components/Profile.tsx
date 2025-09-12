"use client";

import { useLang } from "@/app/context/LangProvider";
import { motion } from "framer-motion";
import ButtonComponents from "./ButtonComponents";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  
};

export default function Profile() {
  const { t } = useLang();

  return (
    <section className="px-4 py-8 sm:px-6 md:px-8">
      <div className="container mx-auto ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight ">
          {t("profile.title")}
        </h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-2 sm:mt-3 h-1 w-12 sm:w-14 rounded bg-[#0b76ad]"
        />

        <p className="mt-4 sm:mt-5 mb-6 sm:mb-8 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
          {t("profile.text")}
        </p>

        {/* Кнопка: 100% ширина на мобилке, авто на ≥sm */}
        <div className="mt-2">
          <ButtonComponents
          href="/profile"
            label={t("button.learnmore", "Подробнее")}
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
