"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AnimateCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-5 md:p-10 bg-gray-100 items-center justify-center">

      {/* Left Card */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-150 rounded-2xl p-6 md:p-8 text-white bg-linear-to-r from-green-500 to-emerald-700 relative overflow-hidden"
      >
        <span className="bg-green-400/30 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm inline-block mb-4">
          🔥 Deal of the Day
        </span>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Fresh Organic Fruits
        </h2>

        <p className="mb-4 text-sm opacity-90">
          Get up to 40% off on selected organic fruits
        </p>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">40% OFF</h1>
          <span className="text-xs md:text-sm">
            Use code: <b>ORGANIC40</b>
          </span>
        </div>

        <button className="bg-white text-green-700 px-5 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 font-semibold">
          Shop Now <FaArrowRight />
        </button>
      </motion.div>

      {/* Right Card */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-150 rounded-2xl p-6 md:p-8 text-white bg-linear-to-r from-orange-400 to-pink-500 relative overflow-hidden"
      >
        <span className="bg-white/20 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm inline-block mb-4">
          ✨ New Arrivals
        </span>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Exotic Vegetables
        </h2>

        <p className="mb-4 text-sm opacity-90">
          Discover our latest collection of premium vegetables
        </p>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">25% OFF</h1>
          <span className="text-xs md:text-sm">
            Use code: <b>FRESH25</b>
          </span>
        </div>

        <button className="bg-white text-orange-500 px-5 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 font-semibold">
          Explore Now <FaArrowRight />
        </button>
      </motion.div>

    </div>
  );
}