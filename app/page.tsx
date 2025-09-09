"use client";
import Profile from "@/components/Profile";
import { useLang } from "./context/LangProvider";
import Hero from "@/components/Hero";
import Activity from "@/components/Activity";
import Partners from "@/components/Partners";
import Publications from "@/components/Publications";
import Diplomas from "@/components/Diplomas";
import Awards from "@/components/Awards";

export default function Page() {
  const { t } = useLang();
  return (
    <div className="mb-100">
      <Hero/>
      <Profile/>
      <Activity/>
      <Partners/>
      <Publications/>
      <Diplomas/>
      <Awards/>
    </div>
  );
}
