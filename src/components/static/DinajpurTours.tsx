'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DinajpurPage() {
  const places = [
    {
      name: "Kantajew Temple",
      description: "A masterpiece of terracotta art built in the 18th century. It represents the heritage of Dinajpur.",
      img: "/images/kantajew.jpg"
    },
    {
      name: "Ramsagar",
      description: "The largest man-made pond in Bangladesh, symbolizing the tradition and struggle of the locals.",
      img: "/images/ramsagar.jpg"
    },
    {
      name: "Paharpur Buddhist Monastery",
      description: "A UNESCO World Heritage Site, once a major Buddhist religious center in ancient Bengal.",
      img: "/images/paharpur.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 py-20">
      {/* Hero Section */}
      <section className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-700"
        >
          Dinajpur Attractions
        </motion.h1>
        <p className="mt-4 text-gray-600">
          Explore history, culture, and nature in Dinajpur for an unforgettable journey.
        </p>
      </section>

      {/* Places Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {places.map((place, i) => (
          <motion.div
            key={place.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
          >
            <Image
              src={place.img}
              alt={place.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-700">{place.name}</h2>
              <p className="text-gray-600 mt-2">{place.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Find Guides
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
