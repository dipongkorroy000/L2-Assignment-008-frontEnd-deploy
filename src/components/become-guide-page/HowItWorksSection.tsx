"use client";

import {motion} from "framer-motion";

const steps = ["Register as a Guide", "Create Tour Listings", "Get Bookings", "Earn & Grow"];

export default function HowItWorksSection() {
  return (
    <section className="py-16 max-w-6xl mx-auto max-md:mx-10 max-md:py-10 md:px-20">
      <h2 className="text-4xl font-semibold text-center text-chart-4 mb-10 max-md:text-xl">How It Works</h2>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center max-md:gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: i * 0.2}}
            className="bg-white rounded-lg shadow-md py-12 px-6 max-md:py-8"
          >
            <h3 className="text-lg font-semibold text-primary">Step {i + 1}</h3>
            <p className="text-gray-600 mt-2 max-lg:text-sm">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
