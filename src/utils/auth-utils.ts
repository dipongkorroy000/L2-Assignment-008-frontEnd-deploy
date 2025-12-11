import {UserRole} from "../types";

type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

const commonRoutes: RouteConfig = {
  exact: ["/my-profile", "/settings", "/change-password"],
  patterns: [],
};

const guideRoutes: RouteConfig = {
  patterns: [/^\/guide/],
  exact: [],
};

const adminRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};

const touristRoutes: RouteConfig = {
  patterns: [/^\/dashboard/],
  exact: [],
};

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) return true;

  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
};

export const getRouteOwner = (pathname: string): "ADMIN" | "GUIDE" | "TOURIST" | "COMMON" | null => {
  if (isRouteMatches(pathname, adminRoutes)) return "ADMIN";
  if (isRouteMatches(pathname, guideRoutes)) return "GUIDE";
  if (isRouteMatches(pathname, touristRoutes)) return "TOURIST";
  if (isRouteMatches(pathname, commonRoutes)) return "COMMON";
  return null;
};


export const isValidRedirectForRole = (redirectPath: string, role: UserRole): boolean => {
  const routeOwner = getRouteOwner(redirectPath);
  
  if (routeOwner === null || routeOwner === "COMMON") return true;
  
  if (routeOwner === role) return true;
  
  return false;
};

export const getDefaultDashboardRoute = (role: UserRole): string => {
  if (role === "ADMIN") return "/admin/dashboard";
  if (role === "GUIDE") return "/guide/dashboard";
  if (role === "TOURIST") return "/dashboard";
  return "/";
};