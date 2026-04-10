"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { ProductType } from "../api/Type";
export interface WishlistContextType {
  numberOfWishlistItems: number;
  updateWishlistNumber: (num: number) => void;
}

const WishlistContext = createContext<WishlistContextType>({
  numberOfWishlistItems: 0,
  updateWishlistNumber() {}
});

export default function WishlistContextProvider({
  children,
  products,
}: {
  children: ReactNode;
  products: ProductType[] | null | undefined;
}) {
  const [numberOfWishlistItems, setNumberOfWishlistItems] = useState(products?.length ?? 0);

  function updateWishlistNumber(num: number) {
    setNumberOfWishlistItems(num);
  }

  return (
    <WishlistContext.Provider value={{ numberOfWishlistItems, updateWishlistNumber }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistContextProvider");
  return context;
}