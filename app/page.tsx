"use client";
import { useLang } from "./context/LangProvider";
import Hero from "@/components/Hero";

export default function Page() {
  const { t } = useLang();
  return (
    <div>
      <Hero/>
    </div>
  );
}
