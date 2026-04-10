"use client";
import { cartContextType, useCart } from "_/app/_Context/CartContextProvider";
import { removeProduct } from "_/app/cart/CartActions";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

export default function RemoveButton({productId}:{productId:string}) {
    const {updataCartNumber} = (useCart() as cartContextType)
    async function handleRemoveProduct() {
      const res= await removeProduct(productId)
      if(res===null){
        toast.error("Error occured while deleting this product")
      }else{
        updataCartNumber(res)
        toast.success("product deleted successfully")
      }
    }
  return (
    <button onClick={handleRemoveProduct} className="border border-red-300 cursor-pointer hover:text-white hover:bg-red-500 duration-150 transition-all text-red-500 p-3 rounded-lg">
      <FaTrash />
    </button>
  );
}
