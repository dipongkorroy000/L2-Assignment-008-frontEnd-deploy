import Navbar from "@/src/components/modules/dashboard/Navbar";
import Sidebar from "@/src/components/modules/dashboard/Sidebar";
import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Local Guide | Dashboard",
  description: "Explore Bangladesh like a local",
};

export const dynamic = "force-dynamic";

const DashboardLayout = async ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar></Sidebar>
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar></Navbar>
        <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
