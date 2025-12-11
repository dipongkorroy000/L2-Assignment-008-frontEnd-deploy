"use client";
import {motion} from "framer-motion";

const benefits = [
  {title: "Earn Income", desc: "Set your own fees and earn by guiding tourists."},
  {title: "Flexibility", desc: "Create tours based on your schedule and expertise."},
  {title: "Recognition", desc: "Build your reputation through ratings and reviews."},
];

export default function BenefitsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: i * 0.2}}
          className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transform transition"
        >
          <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
          <p className="text-gray-600 mt-2">{item.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
