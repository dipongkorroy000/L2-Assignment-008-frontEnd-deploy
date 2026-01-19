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
    // <header
    //   className={`sticky top-0 z-50 w-full transition-all duration-300`}
    //   style={{ background: "var(--gradient-primary-foreground)" }}
    // >
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "shadow dark:bg-secondary bg-white" : ""}`}
      style={{backgroundImage: !scrolled ? "var(--gradient-primary-foreground)" : undefined}}
    >
      <MainNavbar profile={profile} />
    </header>
  );
};

export default Navbar;
