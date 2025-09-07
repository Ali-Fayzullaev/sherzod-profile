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

type Item = { img: string; alt?: string };

export default function Partners() {
  const { t } = useLang();

  const data: Item[] = [
    { img: "/partners/partners1.png", alt: "Partner 1" },
    { img: "/partners/partners2.png", alt: "Partner 2" },
    { img: "/partners/partners3.png", alt: "Partner 3" },
    { img: "/partners/partners4.png", alt: "Partner 4" },
    { img: "/partners/partners5.png", alt: "Partner 5" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        {t("partners.title", "Партнёры")}
      </h2>
      <div className="mt-2 h-1 w-14 rounded bg-[#0b76ad]" />

      <Carousel className="mt-5">
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="pl-2 md:pl-4 basis-full sm:basis-1/3 lg:basis-1/5"
            >
              <div className="mx-2 rounded-2xl border bg-white/80 backdrop-blur p-4 sm:p-5 flex items-center justify-center h-52 sm:h-56 md:h-40">
                <div className="relative w-full h-full">
                  <Image
                    src={item.img}
                    alt={item.alt ?? "partner logo"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-contain"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>

      <div className="mt-6">
        <ButtonComponents
          href="/activity"
          label={t("button.learnmore", "Подробнее")}
          className="w-full sm:w-auto"
        />
      </div>
    </section>
  );
}
