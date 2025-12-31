"use client";

import {motion} from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center py-16 max-md:py-10">
      <motion.h1 initial={{opacity: 0, y: -30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="text-4xl font-bold text-chart-5   max-xl:text-2xl max-md:text-xl">
        Become a Local Guide
      </motion.h1>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto max-md:text-sm max-md:px-10">Share your city’s stories, earn money, and connect with travelers from around the world.</p>
      <Link href="/register?role=guide">
        <button className="mt-6 px-6 py-3 bg-chart-4 text-white rounded-lg hover:bg-chart-5 cursor-pointer max-md:px-3 max-md:text-sm max-md:py-2">Sign Up as a Guide</button>
      </Link>
    </section>
  );
}
