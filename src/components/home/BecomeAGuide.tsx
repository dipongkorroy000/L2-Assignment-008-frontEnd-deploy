"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import { Button } from "../ui/button";

const BecomeAGuide = () => {
  return (
    <>
      <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} className="text-4xl font-semibold text-primary max-lg:text-xl">
        Become a Guide
      </motion.h2>
      <p className="mt-4 text-gray-600 max-md:text-sm">Share your city’s stories and earn by guiding travelers.</p>
      <Link href="/register?role=guide">
        <Button className="mt-6 bg-primary text-white rounded-lg hover:bg-chart-4 cursor-pointer">Join Now</Button>
      </Link>
    </>
  );
};

export default BecomeAGuide;
