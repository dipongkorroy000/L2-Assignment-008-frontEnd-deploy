"use client";

import {logoutUser} from "@/src/services/authentication/logout";
import {LogOut} from "lucide-react";
import {Button} from "../ui/button";
import {toast} from "sonner";

const LogoutBtn = () => {
  const handleLogout = async () => {
    await logoutUser();
    toast.success("Logout successfully");
  };

  return (
    <Button variant="destructive" onClick={handleLogout} className="cursor-pointer">
      <LogOut /> Logout
    </Button>
  );
};

export default LogoutBtn;
