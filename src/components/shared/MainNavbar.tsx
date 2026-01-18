/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import {Button} from "../ui/button";
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "../ui/sheet";
import {getDefaultDashboardRoute} from "@/src/utils/auth-utils";
import Image from "next/image";
import {Popover, PopoverTrigger, PopoverContent} from "@/src/components/ui/popover";
import LogoutBtn from "../static/LogoutBtn";
import {LuCircleUser} from "react-icons/lu";

export const MainNavbar = ({profile}: {profile: any}) => {
  const navItems = [
    {href: "/explore-tours", label: "Explore Tours"},
    {href: "/become-a-guide", label: "Become a Guide"},
    {href: "/about", label: "About"},
  ];

  const dashboardPath = getDefaultDashboardRoute(profile?.role);
  const profilePhoto = profile?.guide?.profilePhoto || profile?.tourist?.profilePhoto || profile?.admin?.profilePhoto || null;

  return (
    <div className="max-w-7xl mx-auto max-xl:mx-10 max-md:mx-0 px-5 flex h-16 items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        <h1 className="text-chart-5">Local Guide</h1>
      </Link>

      <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
        {navItems.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-primary transition-colors text-lg">
            {link.label}
          </Link>
        ))}
        {!profile && (
          <Link href="/login" className="text-lg bg-primary rounded-2xl py-1 px-4 text-white hover:bg-chart-4 transition-colors">
            Login
          </Link>
        )}
        {profile && (
          <Link href={dashboardPath} className="hover:text-primary transition-colors text-lg">
            Dashboard
          </Link>
        )}

        {profile && (
          <Popover>
            <PopoverTrigger asChild>
              {!profilePhoto ? (
                <LuCircleUser size={26} />
              ) : (
                <Image src={profilePhoto} alt="Profile Photo" width={200} height={200} className="rounded-full h-10 w-10 object-cover" />
              )}
            </PopoverTrigger>

            <PopoverContent className="w-64 p-4 space-y-3 mt-2">
              <div className="flex items-center space-x-3 border-b pb-2">
                {!profilePhoto ? (
                  <LuCircleUser size={26} />
                ) : (
                  <Image src={profilePhoto} alt="Profile Photo" width={200} height={200} className="rounded-full h-10 w-10 object-cover" />
                )}
                <div>
                  <p className="font-semibold">{profile.name || "Your Name"}</p>
                  <p className="text-sm text-muted-foreground">{profile.email}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <Link href="/my-profile" className="block font-semibold hover:text-primary">
                  My Profile
                </Link>
                <Link href="/settings" className="block font-semibold hover:text-primary">
                  Settings
                </Link>
                <Link href="/blogs" className="block font-semibold hover:text-primary">
                  Blogs
                </Link>
                <LogoutBtn></LogoutBtn>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </nav>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="p-4">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((link) => (
                <Link key={link.label} href={link.href} className="text-lg font-medium">
                  {link.label}
                </Link>
              ))}
              <div className="">
                {!profile && (
                  <Link href="/login" className="text-lg font-medium p-0">
                    <Button variant="link" className="p-0">
                      Login
                    </Button>
                  </Link>
                )}
                {profile && (
                  <>
                    <Link href={dashboardPath} className="block font-medium pb-2 text-lg">
                      Dashboard
                    </Link>
                    <Link href="/my-profile" className="block font-medium py-2 text-lg">
                      My Profile
                    </Link>
                    <Link href="/settings" className="block font-medium py-2 text-lg">
                      Settings
                    </Link>
                    <Link href="/blogs" className="block font-medium py-2 text-lg">
                      Blogs
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
