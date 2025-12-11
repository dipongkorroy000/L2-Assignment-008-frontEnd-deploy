// components/about/VisionCard.tsx
"use client";
import {motion} from "framer-motion";

export default function VisionCard() {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold text-primary mb-3">🌍 Vision</h3>
      <p className="text-gray-600">To build a trusted tourism ecosystem where travelers experience Bangladesh like locals.</p>
    </motion.div>
  );
}
