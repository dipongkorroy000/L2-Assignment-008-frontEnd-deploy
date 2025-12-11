// components/about/FeaturesCard.tsx
"use client";
import {motion} from "framer-motion";

export default function FeaturesCard() {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.4, duration: 0.8}}
      className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold text-primary mb-3">⚡ Features</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Search tours by city, category, or guide</li>
        <li>Book authentic experiences with locals</li>
        <li>Review and rate guides</li>
        <li>Secure booking system</li>
      </ul>
    </motion.div>
  );
}
