"use client";

import Link from "next/link";
import {motion} from "framer-motion";

const BecomeAGuide = () => {
  return (
    <section className="py-20 text-center bg-blue-50">
      <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} className="text-3xl font-semibold text-primary">
        Become a Guide
      </motion.h2>
      <p className="mt-4 text-gray-600">Share your city’s stories and earn by guiding travelers.</p>
      <Link href="/register?role=guide">
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-chart-4 cursor-pointer">Join Now</button>
      </Link>
    </section>
  );
};

export default BecomeAGuide;
