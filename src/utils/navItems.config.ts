import {getDefaultDashboardRoute} from "./auth-utils";
import {UserRole} from "../types";
import {NavSection} from "../types/navItems.interface";

export const commonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);

  return [
    {
      items: [
        {
          title: "Dashboard",
          href: defaultDashboard,
          icon: "LayoutDashboard",
          roles: ["GUIDE", "TOURIST", "ADMIN"],
        },
      ],
    },
  ];
};

export const guideNavItems: NavSection[] = [
  {
    title: "Guide Management",
    items: [
      {
        title: "Upcoming Tours",
        href: "/guide/dashboard/upcoming-tours",
        icon: "Clock",
        roles: ["GUIDE"],
      },
      {
        title: "Requested Tours",
        href: "/guide/dashboard/requested-tours",
        icon: "ArrowUpToLine",
        roles: ["GUIDE"],
      },
      {
        title: "Canceled Tours",
        href: "/guide/dashboard/canceled-tours",
        icon: "CircleX",
        roles: ["GUIDE"],
      },
      {
        title: "Completed Tours",
        href: "/guide/dashboard/completed-tours",
        icon: "CheckCheck",
        roles: ["GUIDE"],
      },
    ],
  },
  {
    title: "Tours Management",
    items: [
      {
        title: "My Tours",
        href: "/guide/dashboard/my-tours",
        icon: "TramFront",
        roles: ["GUIDE"],
      },
      {
        title: "Create Tour",
        href: "/guide/dashboard/create-tour",
        icon: "BadgePlus",
        roles: ["GUIDE"],
      },
    ],
  },
  {
    title: "Payments Management",
    items: [
      {
        title: "Payments",
        href: "/guide/dashboard/payments",
        icon: "WalletMinimal",
        roles: ["GUIDE"],
      },
    ],
  },
];

export const touristNavItems: NavSection[] = [
  {
    title: "Tours",
    items: [
      {
        title: "Upcoming Tours",
        href: "/dashboard/upcoming-tours",
        icon: "Clock",
        roles: ["TOURIST"],
      },
      {
        title: "Completed Tours",
        href: "/dashboard/completed-tours",
        icon: "CheckCheck",
        roles: ["TOURIST"],
      },
      {
        title: "Canceled Tours",
        href: "/dashboard/canceled-tours",
        icon: "CircleX",
        roles: ["TOURIST"],
      },
    ],
  },
  {
    title: "Tours Status",
    items: [
      {
        title: "My Requested Tours",
        href: "/dashboard/requested-tours",
        icon: "ArrowUpToLine",
        roles: ["TOURIST"],
      },
      {
        title: "Payments",
        href: "/dashboard/payments",
        icon: "WalletMinimal",
        roles: ["TOURIST"],
      },
    ],
  },
];

export const adminNavItems: NavSection[] = [
  {
    title: "Users Management",
    items: [
      {
        title: "All Users",
        href: "/admin/dashboard/users-management",
        icon: "User",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Tours Management",
    items: [
      {
        title: "Completed  Tours",
        href: "/admin/dashboard/completed-tours",
        icon: "CheckCheck",
        roles: ["ADMIN"],
      },
      {
        title: "Upcoming  Tours",
        href: "/admin/dashboard/upcoming-tours",
        icon: "Clock",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Category Management",
    items: [
      {
        title: "Tours Category",
        href: "/admin/dashboard/category-management",
        icon: "ChartColumnStacked",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Payments Management",
    items: [
      {
        title: "Payments",
        href: "/admin/dashboard/payments",
        icon: "WalletMinimal",
        roles: ["ADMIN"],
      },
    ],
  },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const items = commonNavItems(role);

  switch (role) {
    case "ADMIN":
      return [...items, ...adminNavItems];
    case "GUIDE":
      return [...items, ...guideNavItems];
    case "TOURIST":
      return [...items, ...touristNavItems];
    default:
      return [];
  }
};
