"use client";

import { FaShoppingCart, FaHome, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gray-100 flex items-center justify-center py-20 relative h-full">
      
      {/* Floating icons (خلفية خفيفة) */}
      <span className="absolute left-10 top-20 text-green-200 text-3xl opacity-20">🍏</span>
      <span className="absolute right-20 top-32 text-green-200 text-2xl opacity-20">🥕</span>
      <span className="absolute left-20 bottom-32 text-green-200 text-2xl opacity-20">🍏</span>
      <span className="absolute right-80 bottom-30 text-green-200 text-2xl opacity-20">🍏</span>
      <span className="absolute right-5 bottom-10 text-green-200 text-2xl opacity-20">🥕</span>
      <span className="absolute left-60 bottom-90 text-green-200 text-2xl opacity-20">🥕</span>

      <div className="text-center max-w-xl">
        
        {/* الكارت */}
        <div className="relative w-40 h-40 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <FaShoppingCart className="text-green-400 text-5xl" />

          {/* الدائرة 404 */}
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full text-xl font-bold shadow-md">
            404
          </div>
        </div>

        {/* النقاط */}
        <div className="flex justify-center items-center gap-2 mt-6 text-green-400">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="w-6 h-3 border-b-2 border-green-400 rounded-full"></span>
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        </div>

        {/* العنوان */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6">
          Oops! Nothing Here
        </h1>

        {/* الوصف */}
        <p className="text-gray-500 mt-4 leading-relaxed">
          Looks like this page went out of stock! Don&apos;t worry,
          there&apos;s plenty more fresh content to explore.
        </p>

        {/* الأزرار */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          
          <Link href="/"  >
            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition">
              <FaHome />
              Go to Homepage
            </button>
          </Link>

          <Link href="/" >
          <button
            className="flex items-center gap-2 bg-white border px-6 py-3 rounded-xl shadow-sm hover:bg-gray-50 transition"
          >
            <FaArrowLeft />
            Go Back
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}