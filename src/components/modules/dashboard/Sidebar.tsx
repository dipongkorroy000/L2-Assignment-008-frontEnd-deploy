import React from "react";
import SidebarContent from "./SidebarContent";
import {getNavItemsByRole} from "@/src/utils/navItems.config";
import {NavSection} from "@/src/types/navItems.interface";
import getProfile from "@/src/services/authentication/profile";
import {IUserProfile} from "@/src/types";

const Sidebar = async () => {
  const userInfo = (await getProfile()) as IUserProfile;

  if (!userInfo) return null;

  const navItems: NavSection[] = getNavItemsByRole(userInfo.role);

  return <SidebarContent userInfo={userInfo} navItems={navItems}></SidebarContent>;
};

export default Sidebar;
