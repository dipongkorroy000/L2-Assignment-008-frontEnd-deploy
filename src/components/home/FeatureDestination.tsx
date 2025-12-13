"use client";
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";

const FeatureDestination = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-primary mb-10">Featured Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {["Dinajpur", "Sylhet", "Sundarbans"].map((city, i) => (
          <motion.div
            key={city}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: i * 0.3}}
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-white hover:scale-105 transform transition"
          >
            <h3 className="text-xl font-bold text-chart-5">{city}</h3>
            <p className="text-gray-600 mt-2">Discover the culture, history, and hidden gems of {city}.</p>
            <Link href={`/find-tour?searchTerm=${encodeURIComponent(city)}`}>
              <button className="mt-4 px-4 py-2 bg-white rounded-lg hover:bg-primary hover:text-white">Find Guides</button>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FeatureDestination;
