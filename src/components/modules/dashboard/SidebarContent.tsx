"use client";

import {Separator} from "@/src/components/ui/separator";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Link from "next/link";
import {Badge} from "@/src/components/ui/badge";
import {usePathname} from "next/navigation";
import {cn} from "@/src/lib/utils";
import {IUserProfile} from "@/src/types";
import {NavSection} from "@/src/types/navItems.interface";
import { getLucideIcon } from "@/src/lib/getLucideIcon";

interface MobileSidebarContentProps {
  userInfo: IUserProfile;
  navItems: NavSection[];
}

const SidebarContent = ({userInfo, navItems}: MobileSidebarContentProps) => {
  const path = usePathname();

  return (
    <div className="hidden md:flex h-full w-64 flex-col border-r bg-card">
      {/* Logo/Brand */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Local Guide</span>
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-6">
          {navItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              {section.title && <h4 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{section.title}</h4>}

              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = path === item.href;
                  const Icon = getLucideIcon(item.icon);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                        isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge variant={isActive ? "secondary" : "default"} className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </div>

              {sectionIdx < navItems.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* User Info at Bottom */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">{userInfo.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">{userInfo.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{userInfo.role.toLowerCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
