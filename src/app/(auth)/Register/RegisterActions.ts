'use server';
import { registerObjectType } from "./Register.type";
export async function registerActions(data:registerObjectType) {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        {
          method: "post",
          body: JSON.stringify(data),
          headers: { "content-type": "application/json" },
        },
      );
      const finalRes = await res.json();
      console.log("finalRes", finalRes);
      return {
      success: res.ok,
      message: finalRes.message,
    };
    } catch (error) {
      console.log("register error", error);
    }
}