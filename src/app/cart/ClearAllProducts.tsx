"use client";

import { cartContextType, useCart } from "../_Context/CartContextProvider";
import { clearProducts } from "./CartActions";
import { toast } from "sonner";

export default function ClearAllProducts() {
  const { updataCartNumber } = useCart() as cartContextType;
  async function handleClearAll() {
    const res = await clearProducts();
    if (res === null) {
      toast.error("Error occured while deleting this product");
    } else {
      updataCartNumber(res);
      toast.success("All products deleted successfully");
    }
  }
  return (
    <div>
      <button
        className="bg-red-500 text-[16px] text-white py-2 px-4 cursor-pointer rounded-2xl right-0"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  );
}
