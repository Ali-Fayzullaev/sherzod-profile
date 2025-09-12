"use client";

import { useLang } from "@/app/context/LangProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, X } from "lucide-react";

type ItemProp = {
  title: string;
  note: string;
};

export default function Commendations() {
  const { t } = useLang();

  const title = t("profile.commendations.title", "Награды и благодарности");

  

  return (
    <section id="experience" className="py-10">
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
                  {/* вертикальная линия — только в области таймлайна */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 bottom-0 w-px bg-blue-600"
                  />
                  {/* один маркер вверху линии */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 -translate-x-[6px] h-4 w-4 rounded-full bg-sky-600 ring-4 ring-white"
                  />

                  <div className="space-y-6">

                    <div>
                      <div className="text-[#888888]">
                        {t("profile.commendations.note")}
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
