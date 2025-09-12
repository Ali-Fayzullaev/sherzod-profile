"use client";

import { useLang } from "@/app/context/LangProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ItemProp = {
  title: string;
  note: string;
};

export default function Courses() {
  const { t } = useLang();

  const title = t(
    "activitypage.courses.title",
    "Услуги по организации и проведению обучающих курсов и семинар-тренингов:"
  );

  const items: ItemProp[] = [
    {
      title: t("activitypage.courses.paragraphTitle1"),
      note: t("activitypage.courses.paragraph1"),
    },
    {
      title: t("activitypage.courses.paragraphTitle2"),
      note: t("activitypage.courses.paragraph2"),
    },
    {
      title: t("activitypage.courses.paragraphTitle3"),
      note: t("activitypage.courses.paragraph3"),
    },
    {
      title: t("activitypage.courses.paragraphTitle4"),
      note: t("activitypage.courses.paragraph4"),
    },
  ];

  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto py-4">
        <div className="rounded border bg-white/70 backdrop-blur shadow-sm overflow-hidden">
          <Accordion type="single" collapsible defaultValue="exp">
            <AccordionItem value="exp" className="border-0">
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
                <div className="relative pl-6">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 bottom-0 w-px bg-blue-600"
                  />
                  <span
                    aria-hidden
                    className="absolute -left-1 top-0 -translate-x-[6px] h-5 w-5 rounded-full bg-sky-600 ring-4 ring-white"
                  />

                  <div className="space-y-6">
                    {items.map((item, index) => (
                      <div key={index}>
                        <div className="font-bold text-[#888888]">
                          {item.title}
                        </div>
                        <div className="text-slate-600">{item.note}</div>
                      </div>
                    ))}
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
