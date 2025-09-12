import { useLang } from "@/app/context/LangProvider";

export default function AreasText() {
  const { t } = useLang();

  return (
    <div className=" text-[#888888] font-extralight">
      {t("activitypage.discription_conflicts")}
    </div>
  );
}
