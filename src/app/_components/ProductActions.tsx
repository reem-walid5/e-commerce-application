"use client";

import { useState } from "react";
import WishlistButton from "../WishList/WishlistButton";
import Button from "./AddToCardButton/Button";

interface Props {
  price: number;
  quantity: number;
  id:string
}

export default function ProductActions({ price, quantity , id}: Props) {

  const [count, setCount] = useState(1);

  return (
    <div className="mt-6">

      {/* quantity */}
      <p className="text-gray-700 font-medium  mb-2">Quantity</p>

      <div className="flex items-center gap-4 mb-6">

        <div className="flex border border-[#15803D28] rounded-lg overflow-hidden">

          <button
            onClick={() => setCount((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2.5 font-semibold text-2xl"
          >
            -
          </button>

          <span className="px-6 py-2.5 text-[#15803D] font-semibold text-2xl">{count}</span>

          <button
            onClick={() => setCount((prev) => Math.min(quantity, prev + 1))}
            className="px-4 py-2.5 font-semibold text-2xl"
          >
            +
          </button>

        </div>

        <span className="text-gray-500">
          {quantity} available
        </span>

      </div>

      {/* total price */}
      <div className="bg-gray-200 rounded-lg p-4 flex justify-between mb-6 ">
        <span className="text-2xl text-gray-600">Total Price:</span>

        <span className="text-[#15803D] font-bold text-2xl">
          {(price * count).toFixed(2)} EGP
        </span>
      </div>

      {/* buttons */}
      <div className="flex gap-4 w-full">

        <Button id={id} className="flex-1 w-full bg-[#22c35d] font-semibold text-white border border-gray-300 text-2xl  py-3 rounded-xl">
          Add to Cart
        </Button>

        <button className="flex-1 w-full bg-gray-900 font-semibold text-white border border-[#15803D] text-2xl py-3 rounded-xl">
          Buy Now
        </button>

      </div>
      <WishlistButton id={id} />
    </div>
  );
}