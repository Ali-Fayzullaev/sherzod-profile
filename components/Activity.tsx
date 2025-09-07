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

type Item = { img: string; label: string };

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Activity() {
  const { t } = useLang();

  // Картинки положи в /public/activity/ с расширениями
  const data: Item[] = [
    { img: "/activity/activity1.png", label: t("activity.text1") },
    { img: "/activity/activity2.png", label: t("activity.text2") },
    { img: "/activity/activity3.png", label: t("activity.text3") },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        {t("activity.title")}
      </h2>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-2 sm:mt-3 h-1 w-12 sm:w-14 rounded bg-[#0b76ad]"
      />
      <Carousel className="mt-4 sm:mt-5 mb-6 sm:mb-8  text-sm sm:text-base md:text-lg ">
        <CarouselContent>
          {data.map((item, idx) => (
            <CarouselItem key={idx} className="pl-2 md:basis-1/2 lg:basis-1/3">
              {/* Карточка без лишних отступов — вся «магия» внутри картинки */}
              <div className="group relative overflow-hidden rounded-2xl shadow-sm  border bg-white/50 backdrop-blur">
                {/* Изображение */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    priority={idx === 0}
                  />

                  {/* Градиент поверх фото (снизу вверх) */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0072AB] via-black/20 to-transparent" />

                  {/* Текст ВНУТРИ фото (внизу) */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-white text-sm sm:text-[15px] font-medium leading-snug drop-shadow-md">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      <div className="mt-2">
        <ButtonComponents
        href="/activity"
          label={t("button.learnmore", "Подробнее")}
          className="w-full sm:w-auto"
        />
      </div>
    </section>
  );
}
