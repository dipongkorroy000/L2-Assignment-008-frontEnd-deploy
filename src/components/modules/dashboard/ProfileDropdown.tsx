"use client";

import {IUserProfile} from "@/src/types";
import {User} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "../../ui/dropdown-menu";
import {Button} from "../../ui/button";
import Link from "next/link";

interface UserDropdownProps {
  userInfo: IUserProfile;
}

const ProfileDropdown = ({userInfo}: UserDropdownProps) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default" className="px-5 cursor-pointer text-chart-4 hover:bg-chart-4 hover:text-white">
          {userInfo.role}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{userInfo.name}</p>
            <p className="text-xs text-muted-foreground">{userInfo.email}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator></DropdownMenuSeparator>

        <DropdownMenuItem asChild>
          <Link href={"/my-profile"} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator></DropdownMenuSeparator>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
