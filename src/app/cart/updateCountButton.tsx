"use client";
import { toast } from "sonner";
import { UdpateNumber } from "./CartActions"

export default function UpdateCountButton({isIncrement , id , newCount}:{isIncrement:boolean , id:string , newCount:number}) {
    async function handleUpdateNum() {
       const updateProductNumber = await UdpateNumber(id , newCount)
       if (updateProductNumber) {
        toast.success("successfull")
       }
    }
  return (
    <button className=" px-3 py-1 font-bold text-xl cursor-pointer" disabled={newCount<=0} onClick={handleUpdateNum}>
    {isIncrement? "+": "-"}
    </button>
  )
}
