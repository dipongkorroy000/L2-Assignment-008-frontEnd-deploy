"use client";

import React from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {useState} from "react";

const HeroSection = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const searchTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/find-tour?searchTerm=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <section className="lg:space-y-5 space-y-5 w-full">
      {/* 🌍  */}
      <motion.h1 initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} className="w-full">
        <div className="wrapper">
          <svg id="header-name">
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-lg font-normal max-md:font-sans"
            >
              Explore Bangladesh Like a Local
            </text>
          </svg>
        </div>
      </motion.h1>

      <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5, duration: 1}}
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-md:text-sm max-md:mt-2"
      >
        Find guides, discover hidden gems, and enjoy authentic experiences.
      </motion.p>

      {/* Search Box */}
      <form onSubmit={searchTour} className="flex items-center justify-center">
        <motion.input
          type="text"
          placeholder="What tour do you like?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchTerm.trim()) {
              router.push(`/find-tour?searchTerm=${encodeURIComponent(searchTerm)}`);
            }
          }}
          initial={{scale: 0.8, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{delay: 1, duration: 0.5}}
          className="px-6 py-2 border rounded-lg shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-primary max-md:w-52 max-md:text-sm max-md:px-3 max-md:py-1"
        />

        <button
          type="submit"
          className="ml-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-chart-4 cursor-pointer max-md:text-sm max-md:px-3 max-md:py-1"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default HeroSection;
