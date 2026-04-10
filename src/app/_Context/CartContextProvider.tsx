"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CartResponse } from "../api/Type";
export interface cartContextType{
    numberOfCartItems : number;
    updataCartNumber: (num: number) => void;
}
const CartContext = createContext<cartContextType>({numberOfCartItems:0 ,updataCartNumber(){} })
export default function CartContextProvider({children , res}:{children:ReactNode ;  res: CartResponse | undefined | null}) {
    const [numberOfCartItems , setNumberOfCartItems] = useState(()=>{
        return res === undefined ? 0 : (res as CartResponse).products.length
    })
    function updataCartNumber(num:number) {
      setNumberOfCartItems(num)
    }
  return (
    <CartContext.Provider value={{numberOfCartItems , updataCartNumber }}>
      {children}
    </CartContext.Provider>
  )
}
export function useCart() {
    const res = useContext(CartContext)
    if(!res){
        throw new Error("can't use cart context outside")
    }
    return res
}