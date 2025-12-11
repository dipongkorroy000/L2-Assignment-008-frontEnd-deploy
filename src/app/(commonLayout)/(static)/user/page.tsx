"use client";

import Image from "next/image";
import {motion} from "framer-motion";

export default function GuidesPage() {
  const guides = [
    {
      name: "Rahim Uddin",
      city: "Dinajpur",
      languages: "Bangla, English",
      expertise: "History & Culture",
      price: "1500 BDT/day",
      img: "/images/guide1.jpg",
    },
    {
      name: "Shafiqul Islam",
      city: "Dinajpur",
      languages: "Bangla",
      expertise: "Nature & Adventure",
      price: "1200 BDT/day",
      img: "/images/guide2.jpg",
    },
    {
      name: "Anika Chowdhury",
      city: "Dinajpur",
      languages: "English, Bangla",
      expertise: "Photography Tours",
      price: "2000 BDT/day",
      img: "/images/guide3.jpg",
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-r from-blue-100 via-white to-blue-50 py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <motion.h1 initial={{opacity: 0, y: -30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="text-4xl font-bold text-blue-700">
          Available Guides in Dinajpur
        </motion.h1>
        <p className="mt-4 text-gray-600">Choose from trusted local guides to explore Dinajpur’s heritage and culture.</p>
      </section>

      {/* Guides Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {guides.map((guide, i) => (
          <motion.div
            key={guide.name}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: i * 0.2}}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
          >
            <Image src={guide.img} alt={guide.name} width={400} height={250} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-700">{guide.name}</h2>
              <p className="text-gray-600 mt-1">📍 {guide.city}</p>
              <p className="text-gray-600 mt-1">🗣 {guide.languages}</p>
              <p className="text-gray-600 mt-1">🎯 {guide.expertise}</p>
              <p className="text-gray-600 mt-1">💰 {guide.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Profile</button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
