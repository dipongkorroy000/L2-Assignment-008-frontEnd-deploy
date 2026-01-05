"use client";

import {motion} from "framer-motion";

const benefits = [
  {title: "Earn Income", desc: "Set your own fees and earn by guiding tourists."},
  {title: "Flexibility", desc: "Create tours based on your schedule and expertise."},
  {title: "Recognition", desc: "Build your reputation through ratings and reviews."},
];

export default function BenefitsSection() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-16 max-md:py-8 max-md:gap-5 max-xl:mx-10 max-md:mx-0 p-5">
      {benefits.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: i * 0.2}}
          className="bg-white rounded-lg shadow-md py-14 px-6 text-center hover:scale-105 transform transition max-md:py-10"
        >
          <h2 className="text-xl font-semibold text-primary max-lg:text-lg">{item.title}</h2>
          <p className="text-gray-600 mt-2 max-lg:text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
