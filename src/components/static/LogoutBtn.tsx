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
    <Button variant={"outline"} onClick={handleLogout} className="cursor-pointer border-none w-full text-red-600 hover:text-red-600 hover:bg-red-50">
      <LogOut /> Logout
    </Button>
  );
};

export default LogoutBtn;
