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
    <section className="flex flex-col items-center justify-center text-center min-h-svh">
      <motion.h1 initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} className="text-5xl font-bold text-primary">
        🌍 Explore Bangladesh Like a Local
      </motion.h1>

      <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}} className="mt-4 text-lg text-gray-600">
        Find guides, discover hidden gems, and enjoy authentic experiences.
      </motion.p>

      {/* Search Box */}
      <form onSubmit={searchTour}>
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
          className="mt-6 px-6 py-2 border rounded-lg shadow-lg w-80 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button type="submit" className="mt-4 ml-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-chart-4">
          Search
        </button>
      </form>
    </section>
  );
};

export default HeroSection;
