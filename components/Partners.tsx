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
    <section className="w-full max-w-7xl mx-auto my-10 px-3 sm:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        {t("partners.title", "Партнёры")}
      </h2>
      <div className="mt-2 h-1 w-14 rounded bg-[#0b76ad]" />

      <Carousel className="mt-4 sm:mt-5 mb-6 sm:mb-8">
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <div className="mx-2 p-4 sm:p-5 h-56 sm:h-56 md:h-48 flex items-center justify-center rounded-2xl border bg-white/80 backdrop-blur transition hover:shadow-sm">
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

        <CarouselPrevious
          aria-label="Prev"
          className="!left-auto !right-14 !-top-10 sm:!-top-12 lg:!-top-16 !-translate-y-0 z-10 h-9 w-9 rounded-full bg-white/90 text-blue-600 border-2 border-blue-600 shadow"
        />
        <CarouselNext
          aria-label="Next"
          className="!right-2 !-top-10 sm:!-top-12 lg:!-top-16 !-translate-y-0 z-10 h-9 w-9 rounded-full bg-white/90 text-blue-600 border-2 border-blue-600 shadow"
        />
      </Carousel>
      <div className="mt-14">
        <ButtonComponents
          href="#contacts"
          label={t("activitypage.buttonNameCta", "Записаться на консультацию")}
          className="w-full sm:w-auto"
        />
      </div>
    </section>
  );
}
