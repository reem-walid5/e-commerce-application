"use server";
import { revalidatePath } from "next/cache";
import getUserToken from "../Utilis";
export default async function wishlistActions(id: string) {
  const bodyObj = { productId: id };
  const userToken = await getUserToken();
  if (userToken) {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
        method: "post",
        headers: { token: userToken, "content-type": "application/json" },
        body: JSON.stringify(bodyObj),
      });
      if (res.ok) {
        const finalRes = await res.json();
        console.log("finalRes WISHLIST", finalRes);
        // return finalRes.numOfCartItems;
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
export async function removeProductFromWishlist(productId: string) {
  const userToken = await getUserToken();
  if (userToken) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        method: "delete",
        headers: { token: userToken},
      });
      if (res.ok) {
        const finalRes = await res.json();
        console.log("finalres delete wishlist" , finalRes);
        revalidatePath("/WishList")
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