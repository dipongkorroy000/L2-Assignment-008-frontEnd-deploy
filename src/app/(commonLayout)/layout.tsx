import Footer from "@/src/components/shared/Footer";
import Navbar from "@/src/components/shared/NavbarEffect";
import getProfile from "@/src/services/authentication/profile";
import React from "react";

const CommonLayout = async ({children}: {children: React.ReactNode}) => {
  const profile = await getProfile();
  return (
    <>
      <Navbar profile={profile}></Navbar>
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
