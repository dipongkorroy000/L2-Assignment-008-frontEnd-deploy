import SettingsComponent from "@/src/components/modules/settings/SettingsComponent";
import getProfile from "@/src/services/authentication/profile";

const SettingsPage = async () => {
  const userInfo = await getProfile();

  return <SettingsComponent user={userInfo}></SettingsComponent>;
};

export default SettingsPage;
