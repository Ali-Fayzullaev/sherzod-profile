"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/app/context/LangProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";


// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

// lucide-react
import {
  Menu,
  Home,
  UserRound,
  Activity,
  BookOpenText,
  GraduationCap,
  Award,
  Users,
  Phone,
  Download,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Music2,
} from "lucide-react";

import Image from "next/image";

type NavItem = {
  key: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

export default function Header() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const logo =  "/activity/activity1.png";
  const nav: NavItem[] = [
    { key: "home", href: "#home", icon: Home, label: t("nav.home", "Главная") },
    { key: "profile", href: "#profile", icon: UserRound, label: t("nav.profile", "Профайл") },
    { key: "activity", href: "#activity", icon: Activity, label: t("nav.activity", "Деятельность") },
    { key: "publications", href: "#publications", icon: BookOpenText, label: t("nav.publications", "Публикации") },
    // { key: "partners", href: "#partners", icon: Users, label: t("nav.partners", "Партнеры") },
    // { key: "diplomas", href: "#diplomas", icon: GraduationCap, label: t("nav.diplomas", "Дипломы и сертификаты") },
    // { key: "awards", href: "#awards", icon: Award, label: t("nav.awards", "Галерея наград") },
    { key: "contacts", href: "#contacts", icon: Phone, label: t("nav.contacts", "Контакты") },
  ];

  const onNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50  w-full bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-3">
        {/* Left: burger + brand */}
        <div className="flex items-center gap-3">
          {/* Mobile burger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="text-left">
                 <Image
                    width={26}
                    height={26}
                    alt="Sherzod"
                    src={logo}
                 />
                </SheetTitle>
              </SheetHeader>

              {/* Offcanvas body */}
              <div className="p-4 flex flex-col gap-4">
                {/* Нав */}
                <nav className="space-y-1">
                  {nav.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={onNavClick}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-700"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Соцсети */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("label.socials", "Социальные сети:")}
                  </p>
                  <div className="flex items-center gap-3 text-slate-500">
                    <a href="#" aria-label="Facebook" className="hover:text-slate-800">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-slate-800">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-slate-800">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" aria-label="YouTube" className="hover:text-slate-800">
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a href="#" aria-label="TikTok" className="hover:text-slate-800">
                      <Music2 className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Переключатель языка */}
                <div className="pt-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("label.language", "Язык")}
                  </p>
                  <LanguageSwitcher compact={false} />
                </div>

                {/* CTA */}
                <div className="mt-2 grid gap-2">
                  <a
                    href="/docs/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border hover:bg-blue-50"
                  >
                    <Download className="h-4 w-4" />
                    {t("cta.download_resume", "Скачать резюме")}
                  </a>
                  <a
                    href="#contacts"
                    onClick={onNavClick}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {t("cta.contact", "Связаться")}
                  </a>
                </div>

                <SheetClose asChild>
                  <Button variant="ghost" className="mt-2">
                    OK
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          {/* Логотип / имя */}
          <Image
                    width={56}
                    height={56}
                    alt="Sherzod"
                    src={logo}
                 />
        </div>

        {/* Center: десктоп нав */}
        <nav className="hidden md:flex items-center gap-3">
          {nav.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: язык + CTA */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contacts"
            className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            {t("cta.contact", "Связаться")}
          </a>
        </div>
      </div>
    </header>
  );
}
