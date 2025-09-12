import Profile from "@/components/profile/Profile";
import Education from "@/components/profile/Education";
import Experience from "@/components/profile/Experience";
import Diplomas from "@/components/Diplomas";
import Commendations from "@/components/profile/Commendations";
import Awards from "@/components/Awards";
export default function ProfilePage() {
  return (
    <>
      <Profile />
      <Education />
      <Diplomas />
      <Experience />
      <Commendations />
      <Awards />
    </>
  );
}
