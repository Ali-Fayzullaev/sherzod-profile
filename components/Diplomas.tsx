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
import { motion } from "framer-motion";

type Item = { img: string };

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Diplomas() {
  const { t } = useLang();

  const data: Item[] = [
    { img: "/сertificates/certificates1.png" },
    { img: "/сertificates/certificates2.jpg" },
    { img: "/сertificates/certificates3.jpg" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-10 px-3 sm:px-0">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        {t("diplomas.title")}
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
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
                <Image
                  src={item.img}
                  alt={`certificate-${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                  className="object-contain"
                  priority={idx === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          aria-label="Prev"
          className="
            !left-auto !right-14
            !-top-10 sm:!-top-12 lg:!-top-16
            !-translate-y-0
            z-10 h-9 w-9 rounded-full
            bg-white/90 text-blue-600 border-2 border-blue-600 shadow
            ring-1 ring-slate-200 hover:bg-white
            focus-visible:ring-2 focus-visible:ring-sky-500
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
            ring-1 ring-slate-200 hover:bg-white
            focus-visible:ring-2 focus-visible:ring-sky-500
          "
        />
      </Carousel>
    </section>
  );
}
