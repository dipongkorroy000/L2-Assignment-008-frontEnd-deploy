import {NavSection} from "@/src/types/navItems.interface";
import {getDefaultDashboardRoute} from "@/src/utils/auth-utils";
import {getNavItemsByRole} from "@/src/utils/navItems.config";
import {IUserProfile} from "@/src/types";
import getProfile from "@/src/services/authentication/profile";
import NavbarContent from "./NavbarContent";

const Navbar = async () => {
  const userInfo = (await getProfile()) as IUserProfile;

  const navItems: NavSection[] = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return <NavbarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome}></NavbarContent>;
};

export default Navbar;
