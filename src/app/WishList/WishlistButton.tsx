"use client";
import { toast } from 'sonner';
import wishlistActions from './wishlistActions';
import { MouseEvent } from 'react';
import { useWishlist } from '../_Context/WishlistContextProvider';

export default function WishlistButton({ id }: { id: string }) {
  const { numberOfWishlistItems, updateWishlistNumber } = useWishlist();
    async function handleAddToWishlist(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const res= await wishlistActions(id)
        if(res!= false) {
            toast.success("product add to wishlist")
            updateWishlistNumber(numberOfWishlistItems + 1);
        }else{
          toast.error("Failed to add Product to wishlist ");
        }
    }
  return (
    <button onClick={handleAddToWishlist} className="mt-3 w-full bg-white font-semibold border cursor-pointer border-gray-300 text-2xl py-3 rounded-xl">
          {/* {numberOfWishlistItems > 0 ? "In Fav" : "Add to Fav"} */}
          Add to wishlist
    </button>
  )
}
