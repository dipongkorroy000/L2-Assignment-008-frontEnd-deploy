"use client";

import {motion} from "framer-motion";

const AboutCard = ({title, description}: {title: string; description: string}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      className="p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition text-start h-full"
    >
      <h3 className="text-xl font-semibold text-primary mb-3 max-md:text-lg">{title}</h3>
      <p className="text-gray-600 max-md:text-sm">{description}</p>
    </motion.div>
  );
};

export default AboutCard;
