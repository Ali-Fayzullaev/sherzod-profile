"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/app/context/LangProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ButtonComponents from "./ButtonComponents";

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
  Phone,
  Download,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

import Image from "next/image";
import LanguageMobile from "./LanguageMobile";

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
  const logo = "/activity/activity1.png";

  const nav: NavItem[] = [
    { key: "home", href: "/", icon: Home, label: t("nav.home", "Главная") },
    {
      key: "profile",
      href: "/profile",
      icon: UserRound,
      label: t("nav.profile", "Профайл"),
    },
    {
      key: "activity",
      href: "/activity",
      icon: Activity,
      label: t("nav.activity", "Деятельность"),
    },
    {
      key: "publications",
      href: "/#publications",
      icon: BookOpenText,
      label: t("nav.publications", "Публикации"),
    },
    {
      key: "contacts",
      href: "/#contacts",
      icon: Phone,
      label: t("nav.contacts", "Контакты"),
    },
  ];

  const onNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50  w-full bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
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
                    width={36}
                    height={36}
                    alt="Sherzod"
                    className=" rounded-3xl"
                    src={logo}
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="p-4 flex flex-col gap-4">
                <nav className="space-y-1">
                  {nav.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={onNavClick}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg font-light hover:bg-[#0072AB] hover:text-white text-[#888888]"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </nav>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("label.socials", "Социальные сети:")}
                  </p>
                  <div className="flex items-center gap-6 text-slate-500">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className=" rounded-2xl  bg-[#888888] text-white p-1"
                    >
                      <Facebook className="h-6 w-6  " />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className=" rounded-2xl  bg-[#888888] text-white p-1"
                    >
                      <Instagram className="h-6 w-6 " />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className=" rounded-2xl  bg-[#888888] text-white p-1"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      aria-label="YouTube"
                      className=" rounded-2xl  bg-[#888888] text-white p-1"
                    >
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("label.language", "Язык")}
                  </p>
                  <LanguageMobile />
                </div>

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
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-main text-white"
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

          <Image
            width={56}
            height={56}
            alt="Sherzod"
            className="rounded-4xl"
            src={logo}
          />
        </div>

        <nav className="hidden md:flex items-center gap-3">
          {nav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-700 hover:bg-[#0072AB] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ButtonComponents
            href="#contacts"
            label={t("cta.contact", "Связаться")}
          />
        </div>
      </div>
    </header>
  );
}
