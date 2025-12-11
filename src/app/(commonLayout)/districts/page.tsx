"use client";

import Link from "next/link";
import {motion} from "framer-motion";

export default function DistrictsPage() {
  // List of all districts in Bangladesh (64)
  const districts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokati",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-r from-blue-100 via-white to-blue-50 py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <motion.h1 initial={{opacity: 0, y: -30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="text-4xl font-bold text-blue-700">
          Districts of Bangladesh
        </motion.h1>
        <p className="mt-4 text-gray-600">Select a district to find available local guides.</p>
      </section>

      {/* Districts Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {districts.map((district, i) => (
          <motion.div
            key={district}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: i * 0.02}}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transform transition"
          >
            <h2 className="text-lg font-semibold text-blue-700">{district}</h2>
            <Link href={`/guides/${district.toLowerCase()}`} className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View Guides
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
