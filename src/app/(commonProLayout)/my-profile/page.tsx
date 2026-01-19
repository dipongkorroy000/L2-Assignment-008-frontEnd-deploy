import MyProfile from "@/src/components/modules/profile/MyProfile";
import LogoutButton from "@/src/components/static/LogoutBtn";
import getProfile from "@/src/services/authentication/profile";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Local Guide | Profile",
  description: "Profile Setting",
};

const ProfilePage = async () => {
  const userInfo = await getProfile();

  return (
    <section className="min-h-screen py-8 px-20 max-md:px-5" style={{backgroundImage: "var(--gradient-primary-foreground)"}}>
      <MyProfile userInfo={userInfo}></MyProfile>

      <div className="my-10 max-w-7xl mx-auto border rounded-md">
        <LogoutButton></LogoutButton>
      </div>
    </section>
  );
};

export default ProfilePage;
