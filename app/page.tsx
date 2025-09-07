"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLang } from "./context/LangProvider";

export default function Page() {
  const { t } = useLang();
  return (
    <div className="p-6">
      <div className="flex justify-end"><LanguageSwitcher /></div>
      <h1 className="text-2xl font-bold">{t("nav.home", "Главная")}</h1>
    </div>
  );
}
