import Footer from "@/src/components/shared/Footer";
import MainNavbar from "@/src/components/shared/MainNavbar";
import React from "react";

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <MainNavbar></MainNavbar>
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
