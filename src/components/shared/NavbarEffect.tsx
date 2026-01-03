/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {useEffect, useState} from "react";
import {MainNavbar} from "./MainNavbar";

const Navbar = ({profile}: {profile: any}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-border" : "bg-gradient-to-r from-primary-foreground via-white to-primary-foreground backdrop-blur"
      }`}
    >
      <MainNavbar profile={profile} />
    </header>
  );
};

export default Navbar;
