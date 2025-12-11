// components/about/MissionCard.tsx
"use client";
import {motion} from "framer-motion";

export default function MissionCard() {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.2, duration: 0.8}}
      className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold text-primary mb-3">🎯 Mission</h3>
      <p className="text-gray-600">Empower local guides with digital tools, provide safe curated experiences, and promote sustainable tourism.</p>
    </motion.div>
  );
}
