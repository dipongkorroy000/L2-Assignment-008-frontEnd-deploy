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
        icon: "BadgePlus",
        roles: ["GUIDE"],
      },
      {
        title: "Requested Tours",
        href: "/guide/dashboard/requested-tours",
        icon: "BadgePlus",
        roles: ["GUIDE"],
      },
      {
        title: "Canceled Tours",
        href: "/guide/dashboard/canceled-tours",
        icon: "BadgePlus",
        roles: ["GUIDE"],
      },
      {
        title: "Completed Tours",
        href: "/guide/dashboard/completed-tours",
        icon: "BadgePlus",
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
        icon: "BadgeDollarSign",
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
        icon: "FileText",
        roles: ["TOURIST"],
      },
      {
        title: "Completed Tours",
        href: "/dashboard/completed-tours",
        icon: "FileText",
        roles: ["TOURIST"],
      },
      {
        title: "Canceled Tours",
        href: "/dashboard/canceled-tours",
        icon: "FileText",
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
        icon: "Calendar",
        roles: ["TOURIST"],
      },
      {
        title: "Payments",
        href: "/dashboard/payments",
        icon: "ClipboardList",
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
        icon: "Shield",
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
        icon: "Clock",
        roles: ["ADMIN"],
      },
      {
        title: "Canceled  Tours",
        href: "/admin/dashboard/canceled-tours",
        icon: "Clock",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Category Management",
    items: [
      {
        title: "Category",
        href: "/admin/dashboard/category-management",
        icon: "Calendar",
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
        icon: "Calendar",
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
