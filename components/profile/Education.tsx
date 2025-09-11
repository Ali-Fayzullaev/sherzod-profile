"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LangProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { items } from "@/lib/edication";

export default function Education() {
  const { t } = useLang();

  const title = t("education.title", "Образование");
  const cap = "/cap.png";

  return (
    <section id="education" className="py-10">
      <div className="container mx-auto py-4">
        <div className="rounded border bg-white/70 backdrop-blur shadow-sm overflow-hidden">
          <Accordion type="single" collapsible defaultValue="edu">
            <AccordionItem value="edu" className="border-0">
              {/* Заголовок */}
              <AccordionTrigger className="px-6 sm:px-8 py-5 md:py-6 hover:no-underline">
                <div className="flex items-start justify-between w-full gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
                    <div className="mt-2 h-1 w-14 rounded bg-[#0b76ad]" />
                  </div>
                  <div className="hidden sm:block relative w-24 h-24 -mt-6">
                    <Image src={cap} alt="" fill className="object-contain" priority />
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 sm:px-8 pb-8 md:pb-10">
                {/* --- ТОЛЬКО область таймлайна --- */}
                <div className="relative">
                  {/* обёртка для линии, чтобы она не заходила на note */}
                  <div className="relative">
                    {/* центральная линия (только md+) */}
                    <div
                      className="hidden md:block pointer-events-none absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"
                      aria-hidden
                    />
                    <ul className="grid gap-8 md:grid-cols-2 md:gap-x-10">
                      {items.map((it, idx) => {
                        const side = it.side || (idx % 2 === 0 ? "left" : "right");
                        const isLeft = side === "left";
                        return (
                          <li
                            key={idx}
                            className={`relative ${
                              isLeft ? "md:pr-8" : "md:pl-8"
                            } border-b border-slate-200/80 pb-6 last:pb-0 last:border-none md:border-none`}
                          >
                            {/* ОДНА точка у линии (md+) */}
                            <span
                              className={`hidden md:block absolute top-2 ${
                                isLeft ? "right-[-6px]" : "left-[-6px] "
                              } h-3 w-3 rounded-full bg-sky-600 ring-4 ring-white`}
                            />
                            <div className="text-slate-900">
                              <div className="font-semibold">{it.year}</div>
                              {it.html ? (
                                <p
                                  className="mt-1 text-slate-600 leading-relaxed"
                                  dangerouslySetInnerHTML={{ __html: it.html }}
                                />
                              ) : (
                                <p className="mt-1 text-slate-600 leading-relaxed">{it.text}</p>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Примечание — линия до сюда НЕ доходит */}
                  <p className="text-sm mt-8 md:mt-10 text-slate-600 leading-relaxed">
                    {t("profile.education.note")}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
