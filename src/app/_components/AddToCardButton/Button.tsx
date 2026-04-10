"use client";

import { cartContextType, useCart } from "_/app/_Context/CartContextProvider";
import CartActions from "_/app/cart/CartActions";
import { MouseEvent, ReactNode } from "react";
import { FiPlus } from "react-icons/fi";
import { toast } from "sonner";

interface AddToCartButton {
  id: string;
  children?: ReactNode;
  className?: string;
  onSuccessMsg?: string;
  onErrorMsg?: string;
}

export default function Button({
  id,
  children,
  className = "bg-[#15803D] p-3 rounded-full text-white",
}: AddToCartButton) {
  const { updataCartNumber } = useCart() as cartContextType;
  async function handleAddtoCart(e: MouseEvent) {
    e.preventDefault();

    const newItemsCount = await CartActions(id);
    if (newItemsCount != false) {
      toast.success("Product added to cart successfully");
      updataCartNumber(newItemsCount);
    } else {
      toast.error("Failed to add Product to cart ");
    }
  }
  return (
    <button
      onClick={handleAddtoCart}
      // className="bg-[#15803D] p-3 rounded-full cursor-pointer text-white"
      className={`${className} cursor-pointer`}
    >
      {children || <FiPlus/>}
    </button>
  );
}
