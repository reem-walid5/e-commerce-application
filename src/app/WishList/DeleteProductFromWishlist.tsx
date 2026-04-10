"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { removeProductFromWishlist } from "./wishlistActions";
import { toast } from "sonner";
import { useWishlist } from "../_Context/WishlistContextProvider";

export default function DeleteProductFromWishlist({
  productId,
}: {
  productId: string;
}) {
  const { numberOfWishlistItems, updateWishlistNumber } = useWishlist();
  async function handleDeleteProduct() {
    const res = await removeProductFromWishlist(productId);
    if (res === null) {
      toast.error("Error occured while deleting this product");
    } else {
      updateWishlistNumber(numberOfWishlistItems - 1);

      toast.success("product removed from wishlist successfully");
    }
  }
  return (
    <button
      onClick={handleDeleteProduct}
      className="p-3 border rounded-lg text-gray-500 hover:bg-red-500 hover:text-white duration-150 transition-all cursor-pointer"
    >
      <FaTrash />
    </button>
  );
}
