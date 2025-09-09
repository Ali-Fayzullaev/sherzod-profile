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

type Item = { img: string };

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Awards() {
  const { t } = useLang();

  // Картинки положи в /public/activity/ с расширениями
  const data: Item[] = [
    {
      img: "/awards/awards1.png",
    },
    {
      img: "/awards/awards2.png",
    },
    {
      img: "/awards/award3.png",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-10 mt-15">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        {t("awards.title")}
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
                  alt={item.img}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  priority={idx === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 " />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  );
}
