"use client";

import { useLang } from "@/app/context/LangProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

type Item = { img: string; label: string; title: string };

export default function MorePublication() {
  const { t } = useLang();

  const title = t("activitypage.morepublication.title", "Публикации");

  const data: Item[] = [
    {
      img: "/publications/publications1.png",
      title: t("activitypage.morepublication.title1"),
      label: t("activitypage.morepublication.note1"),
    },
    {
      img: "/publications/publications9.jpg",
      title: t("activitypage.morepublication.title2"),
      label: t("activitypage.morepublication.note2"),
    },
    {
      img: "/publications/publications3.png",
      title: t("activitypage.morepublication.title3"),
      label: t("activitypage.morepublication.note3"),
    },
  ];
  const datas: Item[] = [
    {
      img: "/publications/publications4.png",
      title: t("activitypage.morepublication.title4"),
      label: t("activitypage.morepublication.note4"),
    },
    {
      img: "/publications/publications5.png",
      title: t("activitypage.morepublication.title5"),
      label: t("activitypage.morepublication.note5"),
    },
    {
      img: "/publications/publications6.png",
      title: t("activitypage.morepublication.title6"),
      label: t("activitypage.morepublication.note6"),
    },
  ];
  const datas2: Item[] = [
    {
      img: "/publications/publications7.png",
      title: t("activitypage.morepublication.title7"),
      label: t("activitypage.morepublication.note7"),
    },
    {
      img: "/publications/publications8.png",
      title: t("activitypage.morepublication.title8"),
      label: t("activitypage.morepublication.note8"),
    },
    {
      img: "/publications/publications2.png",
      title: t("activitypage.morepublication.title9"),
      label: t("activitypage.morepublication.note9"),
    },
  ];

  return (
    <section id="publications" className="py-10">
      <div className="container mx-auto py-4">
        <div className="rounded border bg-white/70 backdrop-blur shadow-sm overflow-hidden">
          <Accordion type="single" collapsible defaultValue="exp">
            <AccordionItem value="exp" className="border-0">
              {/* Заголовок + кнопка (Plus/X) */}
              <AccordionTrigger className="px-6 sm:px-8 py-5 md:py-6 hover:no-underline">
                <div className="flex items-center justify-between w-full gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                      {title}
                    </h2>
                    <div className="mt-2 h-1 w-14 rounded bg-[#0b76ad]" />
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 sm:px-8 pb-8 md:pb-10">
                {/* Левая линия + один круг вверху */}
                <div className="relative pl-6">
                  <Carousel className="mt-14 sm:mt-5 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                    <CarouselContent className="-ml-2 sm:-ml-4">
                      {data.map((item, idx) => (
                        <CarouselItem
                          key={idx}
                          className="pl-2 sm:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                        >
                          <Link href={`publications/${idx + 1}`}>
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
                                <p className="text-slate-900 truncate  font-semibold text-[15px] leading-snug">
                                  {item.title}
                                </p>
                                <p className="mt-1 text-slate-600/90 text-sm leading-relaxed line-clamp-3 min-h-[3.5rem]">
                                  {item.label}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Стрелки — над каруселью справа */}
                    <CarouselPrevious
                      aria-label="Prev"
                      className="
                              flex  lg:hidden
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
                         flex lg:hidden
                               !right-2
                               !-top-10 sm:!-top-12 lg:!-top-16
                               !-translate-y-0
                               z-10 h-9 w-9 rounded-full
                               bg-white/90 text-blue-600 border-2 border-blue-600 shadow
                             "
                    />
                  </Carousel>
                  <Carousel className="mt-14 sm:mt-5 mb-6  sm:mb-8 text-sm sm:text-base md:text-lg">
                    <CarouselContent className="-ml-2 sm:-ml-4">
                      {datas.map((item, idx) => (
                        <CarouselItem
                          key={idx}
                          className="pl-2 sm:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="overflow-hidden rounded-2xl border bg-white/80 backdrop-blur transition hover:shadow-sm">
                            {/* Картинка */}
                            <Link href={`publications/${idx + 4}`}>
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
                            </Link>

                            {/* Текст под картинкой */}
                            <div className="p-4">
                              <p className="text-slate-900 truncate font-semibold text-[15px] leading-snug">
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

                    <CarouselPrevious
                      aria-label="Prev"
                      className="
                              flex  lg:hidden
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
                         flex lg:hidden
                               !right-2
                               !-top-10 sm:!-top-12 lg:!-top-16
                               !-translate-y-0
                               z-10 h-9 w-9 rounded-full
                               bg-white/90 text-blue-600 border-2 border-blue-600 shadow
                             "
                    />
                  </Carousel>
                  <Carousel className="mt-14 sm:mt-5 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                    <CarouselContent className="-ml-2 sm:-ml-4">
                      {datas2.map((item, idx) => (
                        <CarouselItem
                          key={idx}
                          className="pl-2 sm:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="overflow-hidden rounded-2xl border bg-white/80 backdrop-blur transition hover:shadow-sm">
                            {/* Картинка */}
                            <Link href={`publications/${idx + 7}`}>
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
                            </Link>

                            {/* Текст под картинкой */}
                            <div className="p-4">
                              <p className="text-slate-900 truncate font-semibold text-[15px] leading-snug">
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

                    <CarouselPrevious
                      aria-label="Prev"
                      className="
                              flex  lg:hidden
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
                         flex lg:hidden
                               !right-2
                               !-top-10 sm:!-top-12 lg:!-top-16
                               !-translate-y-0
                               z-10 h-9 w-9 rounded-full
                               bg-white/90 text-blue-600 border-2 border-blue-600 shadow
                             "
                    />
                  </Carousel>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
