"use client";

import {logoutUser} from "@/src/services/authentication/logout";
import {LogOut} from "lucide-react";
import {Button} from "../ui/button";

const LogoutBtn = () => {
  const handleLogout = async () => await logoutUser();

  return (
    <Button variant="destructive" onClick={handleLogout}>
      <LogOut /> Logout
    </Button>
  );
};

export default LogoutBtn;
