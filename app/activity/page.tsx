import Conflicts from "@/components/activity/Conflicts";
import Consultations from "@/components/activity/Consultations";
import Courses from "@/components/activity/Сourses";
import ButtonComponents from "@/components/ButtonComponents";
import Partners from "@/components/Partners";
import Publications from "@/components/Publications";

export default function ActivityPage() {
  return (
    <>
      <Conflicts />
      <Courses/>
      <Partners/>
      <Consultations/>
      <Publications/>
    </>
  );
}
