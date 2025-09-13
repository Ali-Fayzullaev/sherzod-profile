// app/publications/[id]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLang } from "@/app/context/LangProvider";

const images = [
  "publications1.png", // id = 1
  "publications9.jpg", // id = 2
  "publications3.png", // id = 3
  "publications4.png", // id = 4
  "publications5.png", // id = 5
  "publications6.png", // id = 6
  "publications7.png", // id = 7
  "publications8.png", // id = 8
  "publications2.png", // id = 9
] as const;

export default function PublicationPage() {
  const { t } = useLang();
  const params = useParams<{ id: string }>();
  const id = Number(params?.id);
  const idx = Number.isFinite(id) ? id - 1 : -1;
  const valid = idx >= 0 && idx < images.length;

  if (!valid) {
    return (
      <section className="container mx-auto py-10">
        <div className="rounded border bg-white/70 backdrop-blur p-8 text-center">
          <p className="text-lg">
            {t("activitypage.morepublication.notfound", "Публикация не найдена")}
          </p>
          <Link href="/#experience" className="mt-4 inline-block text-[#0b76ad] hover:underline">
            {t("common.back", "Назад")}
          </Link>
        </div>
      </section>
    );
  }

  const title = t(`activitypage.morepublication.title${id}`);
  const label = t(`activitypage.morepublication.note${id}`);
  const img = `/publications/${images[idx]}`;

  const prevId = id > 1 ? id - 1 : null;
  const nextId = id < images.length ? id + 1 : null;

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="rounded border bg-white/70 backdrop-blur shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            {/* Заголовок + навигация */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
                <div className="mt-2 h-1 w-14 rounded bg-[#0b76ad]" />
              </div>

              <div className="flex items-center gap-2">
                {prevId && (
                  <Link
                    href={`/publications/${prevId}`}
                    className="rounded-full border px-3 py-2 text-sm hover:bg-white/60"
                    aria-label="Предыдущая публикация"
                  >
                    ← {prevId}
                  </Link>
                )}
                {nextId && (
                  <Link
                    href={`/publications/${nextId}`}
                    className="rounded-full border px-3 py-2 text-sm hover:bg-white/60"
                    aria-label="Следующая публикация"
                  >
                    {nextId} →
                  </Link>
                )}
              </div>
            </div>

            {/* Картинка */}
            <div className="relative mt-6 w-full aspect-[4/3] rounded-xl overflow-hidden border bg-white/80">
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 1024px"
                className="object-cover"
                priority
              />
            </div>

            {/* Описание */}
            <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
              {label}
            </p>

            {/* Назад к списку */}
            <div className="mt-8">
              <Link
                href="/#experience"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-white/60"
              >
                ← {t("common.back", "Назад к списку")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
