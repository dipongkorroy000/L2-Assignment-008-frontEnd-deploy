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
    <section className="bg-gray-100 min-h-screen py-8 px-20 max-md:px-5 bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <MyProfile userInfo={userInfo}></MyProfile>

      <div className="my-10">
        <LogoutButton></LogoutButton>
      </div>
    </section>
  );
};

export default ProfilePage;
