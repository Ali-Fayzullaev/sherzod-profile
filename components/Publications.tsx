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

export default function publications() {
  const { t } = useLang();

  // Картинки положи в /public/activity/ с расширениями
  const data: Item[] = [
    {
      img: "/publications/publications1.png",
      label: t("publications.text1"),
      title: t("publications.titleText1"),
    },
    {
      img: "/publications/publications2.png",
      label: t("publications.text2"),
      title: t("publications.titleText1"),
    },
    {
      img: "/publications/publications3.png",
      label: t("publications.text3"),
      title: t("publications.titleText1"),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-10 mt-15">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        {t("publications.title")}
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
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  priority={idx === 0}
                />
              </div>
              {/* Текст ВНУТРИ фото (внизу) */}
              <div className=" inset-x-0 bottom-0 p-4 pb-0">
                    <p className="text-black font-bold text-sm sm:text-[15px] leading-snug drop-shadow-md">
                      {item.title}
                    </p>
                  </div>
              {/* Текст ВНУТРИ фото (внизу) */}
              <div className=" inset-x-0 bottom-0 p-4">
                <p className="text-[#3a3a3a88] font-light text-sm sm:text-[15px] leading-snug drop-shadow-md">
                  {item.label}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      <div className="mt-2">
        <ButtonComponents
          href="/publications"
          label={t("publication.learnmore", "Другие публикации")}
          className="w-full sm:w-auto"
        />
      </div>
    </section>
  );
}
