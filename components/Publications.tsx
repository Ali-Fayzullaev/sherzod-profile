"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useLang } from "@/app/context/LangProvider";
import ButtonComponents from "./ButtonComponents";
import { motion } from "framer-motion";

type Item = { img: string; label: string; title: string };

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Publications() {
  const { t } = useLang();

  const data: Item[] = [
    {
      img: "/publications/publications1.png",
      label: t("publications.text1"),
      title: t("publications.titleText1"),
    },
    {
      img: "/publications/publications2.png",
      label: t("publications.text2"),
      title: t("publications.titleText2"), // ← свой ключ
    },
    {
      img: "/publications/publications3.png",
      label: t("publications.text3"),
      title: t("publications.titleText3"), // ← свой ключ
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-10 px-3 sm:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        {t("publications.title")}
      </h2>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-2 sm:mt-3 h-1 w-12 sm:w-14 rounded bg-[#0b76ad]"
      />

      <Carousel className="mt-4 sm:mt-5 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
        <CarouselContent className="-ml-2 sm:-ml-4">
          {data.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="pl-2 sm:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="overflow-hidden rounded-2xl border bg-white/80 backdrop-blur transition hover:shadow-sm">
                {/* Картинка */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                {/* Текст под картинкой */}
                <div className="p-4">
                  <p className="text-slate-900 font-semibold text-[15px] leading-snug">
                    {item.title}
                  </p>
                  <p className="mt-1 text-slate-600/90 text-sm leading-relaxed line-clamp-3 min-h-[3.5rem]">
                    {item.label}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Стрелки — над каруселью справа */}
        <CarouselPrevious
          aria-label="Prev"
          className="
            !left-auto !right-14
            !-top-10 sm:!-top-12 lg:!-top-16
            !-translate-y-0
            z-10 h-9 w-9 rounded-full
            bg-white/90 text-blue-600 border-2 border-blue-600 shadow
          "
        />
        <CarouselNext
          aria-label="Next"
          className="
            !right-2
            !-top-10 sm:!-top-12 lg:!-top-16
            !-translate-y-0
            z-10 h-9 w-9 rounded-full
            bg-white/90 text-blue-600 border-2 border-blue-600 shadow
          "
        />
      </Carousel>

      <div className="mt-2">
        <ButtonComponents
          href="/publications"
          label={t(
            "publications.learnmore",
            t("publication.learnmore", "Другие публикации")
          )}
          className="w-full sm:w-auto"
        />
      </div>
    </section>
  );
}
