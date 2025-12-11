import Link from "next/link";
import {Button} from "../ui/button";
import {CircleUserRound, Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "../ui/sheet";
import getProfile from "@/src/services/authentication/profile";
import {getDefaultDashboardRoute} from "@/src/utils/auth-utils";
import Image from "next/image";

const Navbar = async () => {
  const navItems = [
    {href: "/explore-tours", label: "Explore Tours"},
    {href: "/become-a-guide", label: "Become a Guide"},
    {href: "/about", label: "About"},
  ];

  const profile = await getProfile();
  const dashboardPath = getDefaultDashboardRoute(profile?.role);
  const profilePhoto = profile?.guide?.profilePhoto || profile?.tourist?.profilePhoto || profile?.admin?.profilePhoto || null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  dark:bg-background/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          <h1 className="text-chart-5">Local Guide</h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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
            <Link href="/my-profile">
              {!profilePhoto && <CircleUserRound />}

              {profilePhoto && (
                <Button variant="outline" size="icon" className="rounded-full">
                  <Image src={profilePhoto} alt="Profile Photo" width={32} height={32} className="rounded-full cursor-pointer" />
                </Button>
              )}
            </Link>
          )}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
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
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
