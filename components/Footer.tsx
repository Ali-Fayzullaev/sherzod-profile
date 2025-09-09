"use client";

import { useLang } from "@/app/context/LangProvider";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Music2, // TikTok
  Send,   // Telegram
} from "lucide-react";

export default function Footer() {
  const { t } = useLang();

  // Тексты/значения из локалей (с безопасными дефолтами)
  const title = t("contacts.title", "Контакты");
  const address = t(
    "contacts.address",
    "ул. Момышулы, 26 каб.17 (Дом дружбы), город Астана, Республика Казахстан"
  );
  const email = t("contacts.email", "pulatovs@mail.ru");
  const phone = t("contacts.phone", "+7 (701) 162 78-00");

  const labels = {
    address: t("contacts.label.address", "Адрес:"),
    email: t("contacts.label.email", "Email:"),
    phone: t("contacts.label.phone", "Тел/WhatsApp:"),
    socials: t("contacts.label.socials", "Социальные сети:"),
  };

  // Берём соцсети либо из contacts.socials, либо из hero.socials
  const socials =
    (t("contacts.socials") as any) ||
    (t("hero.socials") as any) || {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
      tiktok: "",
      telegram: "",
    };

  const SOCIAL_ICONS: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin, youtube: Youtube, tiktok: Music2, telegram: Send };

  return (
    <section id="contacts" className="pt-10">
      <div className=" mx-auto">
        <div className=" border bg-white/70 backdrop-blur p-5 sm:p-7 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          <div className="mt-2 h-1 w-14 rounded bg-[#0b76ad]" />

          <div className="mt-6 grid gap-4">
            {/* Адрес — на всю ширину */}
            <div className="rounded-2xl border p-4 flex items-start gap-3">
              <div className="shrink-0 rounded-xl ring-1 ring-[#0b76ad]/30 p-2 text-[#0b76ad]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold">{labels.address}</div>
                <div className="text-slate-600">{address}</div>
              </div>
            </div>

            {/* Три колонки ниже */}
            <div className="grid gap-4 md:grid-cols-3">
              {/* Email */}
              <div className="rounded-2xl border p-4 flex items-start gap-3">
                <div className="shrink-0 rounded-xl ring-1 ring-[#0b76ad]/30 p-2 text-[#0b76ad]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">{labels.email}</div>
                  <a href={`mailto:${email}`} className="text-slate-600 hover:underline">
                    {email}
                  </a>
                </div>
              </div>

              {/* Телефон */}
              <div className="rounded-2xl border p-4 flex items-start gap-3">
                <div className="shrink-0 rounded-xl ring-1 ring-[#0b76ad]/30 p-2 text-[#0b76ad]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">{labels.phone}</div>
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="text-slate-600 hover:underline">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Соцсети */}
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">{labels.socials}</div>
                <div className="mt-3 flex items-center gap-3 text-slate-500">
                  {Object.entries(SOCIAL_ICONS).map(([key, Icon]) => {
                    const href = socials?.[key] || "";
                    const disabled = !href;
                    const Wrapper = (disabled ? "span" : "a") as any;
                    return (
                      <Wrapper
                        key={key}
                        {...(!disabled ? { href, target: "_blank", rel: "noreferrer" } : {})}
                        className={`inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-slate-200 ${
                          disabled ? "bg-slate-100 text-slate-400" : "bg-white text-slate-600 hover:text-slate-800"
                        }`}
                        aria-label={key}
                      >
                        <Icon className="h-5 w-5" />
                      </Wrapper>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Нижняя подпись (при необходимости) */}
          <div className="mt-8 text-center text-sm text-slate-500">
            {t("footer.copyright", "")}
          </div>
        </div>
      </div>
    </section>
  );
}
