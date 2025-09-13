"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/context/LangProvider";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, Quote } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Hero() {
  const { t } = useLang();

  const fullName = t("hero.full_name", "Пулатов Шерзод Аббозович");
  const tagline = t("hero.tagline", "");
  const missionLabel = t("hero.mission_label", "Мой смысл жизни:");
  const mission = t("hero.life_mission", "");
  const cta = t("hero.cta_contact", "Связаться");

  const photo = t("hero.photo", "images/hero.jpg");
  const bg = t("hero.bg", "images/hero-bg.jpg");
  const roles = (t("hero.roles") as unknown as string[]) || [];
  const socials = (t("hero.socials") as unknown as Record<string, string>) || {};
  const SOCIAL_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    youtube: Youtube,
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={`/${bg}`} alt="" className="w-full h-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-[#0b76ad]/80" />
      </div>

      <div className="relative container mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">
    
        <div className="text-white order-1">
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-3xl md:text-5xl font-medium leading-tight">
            {fullName}
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-3 h-1 w-12 bg-white/80 rounded" />

          <motion.p variants={fadeUp} initial="hidden" animate="show" className="mt-4 text-white/95 text-base md:text-lg max-w-2xl">
            {tagline || roles.join(", ")}
          </motion.p>

          {(mission || missionLabel) && (
            <motion.blockquote variants={fadeUp} initial="hidden" animate="show" className="mt-6 italic">
              <div className="flex items-start gap-2 text-white/90">
                <Quote className="mt-1 h-5 w-5 opacity-70" />
                <div>
                  <div className="font-semibold">{missionLabel}</div>
                  <div className="text-white/90">{mission}</div>
                </div>
              </div>
            </motion.blockquote>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="justify-self-end order-2"
        >
          <Image
            src={`/${photo}`}
            alt={fullName}
            width={1036}
            height={494}
            className="w-[80%] sm:w-[70%] md:w-[95%] lg:w-[100%] h-auto max-w-[620px] lg:max-w-[700px]"
            priority
          />
        </motion.div>

        <div className="order-3 text-white">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-2 flex justify-center md:justify-start">
            <Button
              asChild
              className="h-11  px-25 rounded bg-white text-[#0b76ad] hover:bg-white/90 shadow"
            >
              <a href="#contacts">{cta}</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 flex items-center gap-4 justify-center md:justify-start"
          >
            {Object.keys(SOCIAL_ICONS).map((key) => {
              const Icon = SOCIAL_ICONS[key];
              const href = socials?.[key] || "";
              const disabled = !href;
              const Wrapper = (disabled ? "span" : "a") as any;
              return (
                <Wrapper
                  key={key}
                  {...(!disabled ? { href, target: "_blank", rel: "noreferrer" } : {})}
                  className="rounded-2xl text-[#0072AB] bg-white p-1"
                  aria-label={key}
                >
                  <Icon className="h-6 w-6" />
                </Wrapper>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
