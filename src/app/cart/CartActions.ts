"use server";
import { revalidatePath } from "next/cache";
import getUserToken from "../Utilis";
import { OrderPlaceType } from './../api/Type';

export default async function CartActions(id: string) {
  const bodyObj = { productId: id };
  const userToken = await getUserToken();
  // console.log("userToken" , userToken);

  if (userToken) {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
        method: "post",
        headers: { token: userToken, "content-type": "application/json" },
        body: JSON.stringify(bodyObj),
      });
      if (res.ok) {
        const finalRes = await res.json();
        console.log("finalRes token", finalRes);
        return finalRes.numOfCartItems;
      }else{
        return false 
      }
    } catch (error) {
      console.log("cart error", error);
    }
  } else {
    return new Error("session ended ");
  }
}
export async function removeProduct(productId: string) {
  const userToken = await getUserToken();
  if (userToken) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
        method: "delete",
        headers: { token: userToken},
      });
      if (res.ok) {
        const finalRes = await res.json();
        console.log("finalres delete" , finalRes);
        revalidatePath("/cart")
        return finalRes.numOfCartItems
      }else{
        return false 
      }
    } catch (error) {
      console.log("cart error", error);
    }
  } else {
    return new Error("session ended please,login again");
  }
}
export async function UdpateNumber(productId: string ,newCount:number ) {
  const userToken = await getUserToken();
  if (userToken) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
        method: "put",
        headers: { token: userToken , "content-type": "application/json"},
        body:JSON.stringify({count:newCount})
      });
      if (res.ok) {
        const finalRes = await res.json();
        console.log("finalres delete" , finalRes);
        revalidatePath("/cart")
        return finalRes.numOfCartItems
      }else{
        return false 
      }
    } catch (error) {
      console.log("cart error", error);
    }
  } else {
    return new Error("session ended please,login again");
  }
}
export async function clearProducts() {
  const userToken = await getUserToken();
  if (userToken) {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
        method: "delete",
        headers: { token: userToken},
      });
      if (res.ok) {
        const finalRes = await res.json();
        console.log("finalres delete" , finalRes);
        revalidatePath("/cart")
        return finalRes.numOfCartItems
      }else{
        return false 
      }
    } catch (error) {
      console.log("cart error", error);
    }
  } else {
    return new Error("session ended please,login again");
  }
}
export async function createCachCard(cartId: string , bodyObject:OrderPlaceType ) {
  const userToken = await getUserToken();
  if (userToken) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`, {
        method: "post",
        headers: { token: userToken , "content-type": "application/json"},
        body:JSON.stringify(bodyObject)
      });
      if (res.ok) {
        const finalRes = await res.json();
        console.log("finalres cach order " , finalRes);
        // revalidatePath("/Cart")
        // return finalRes.numOfCartItems
      }else{
        return false 
      }
    } catch (error) {
      console.log("cart error", error);
    }
  } else {
    return new Error("session ended please,login again");
  }
}
export async function createOnlinePayment(cartId: string , bodyObject:OrderPlaceType ) {
  const userToken = await getUserToken();
  if (userToken) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
        method: "post",
        headers: { token: userToken , "content-type": "application/json"},
        body:JSON.stringify(bodyObject)
      });
      if (res.ok) {
        const finalRes = await res.json();
        console.log("finalres online order " , finalRes);
        // revalidatePath("/Cart")
        return finalRes
      }else{
        return false 
      }
    } catch (error) {
      console.log("cart error", error);
    }
  } else {
    return new Error("session ended please,login again");
  }
}

