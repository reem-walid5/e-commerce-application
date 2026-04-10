'use server';
import { getCartProducts } from "_/app/api/Services/Route.Services";
export default async function getCurrentUserLogin() {
    try {
    const res = await getCartProducts();
    return res;
  } catch (error) {
    console.log("error getting cart", error);
    return null;
  }
}