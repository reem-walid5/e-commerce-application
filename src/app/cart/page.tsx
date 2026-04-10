import { Card } from "_/components/ui/card";
import Image from "next/image";
import RemoveButton from "../_components/removeBurron/RemoveButton";
import { getCartProducts } from "../api/Services/Route.Services";
import { CartResponse } from "../api/Type";
import UpdateCountButton from "./updateCountButton";
import Link from "next/link";
import ClearAllProducts from "./ClearAllProducts";
export default async function page() {
  const userCart = await getCartProducts();
  console.log("user cart details" , userCart); 
  
  if (userCart === undefined) {
    return new Error("session ended , please login again");
  }
  <div className="text-center mt-10">
      No products in cart 🛒
    </div>
  // totalCartPrice => cartResponse
  const { products, _id } = userCart as CartResponse;
  return (
    <div className="grid grid-cols-1 container m-auto gap-5">
      {products.map((product) => (
        <Card
          className="w-full p-5 rounded-2xl shadow-sm flex flex-row justify-between"
          key={product._id}
        >
          {/* LEFT SECTION */}
          <div className="flex gap-4 ">
            {/* Image */}
            <div className="flex flex-col gap-4">
              <div className="w-30 h-30 bg-gray-100 rounded-xl p-4 relative shadow-2xl">
                <Image
                  src={product.product.imageCover}
                  alt={product._id}
                  fill
                />
              </div>
              <div className="bg-green-500 rounded-2xl px-3 w-fit text-white">
                Instock
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">{product.product.title}</h2>
              <div className="flex gap-3 items-center ">
                <div className="w-fit px-1 bg-green-100 rounded-2xl">
                  {product.product.category.name}
                </div>
                <p className="text-gray-500">.</p>
                <p className="text-gray-500">
                  SKU.{product.product._id.slice(0, 6)}
                </p>
              </div>
              <div className="flex gap-2">
                <h2 className="text-green-600 font-bold text-2xl">
                  {product.price} EGP
                </h2>
                <span className="text-gray-500 self-end items-center">
                  per unit
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center mt-2 border rounded-lg overflow-hidden w-fit">
                <div>
                  <UpdateCountButton
                    isIncrement={false}
                    id={product.product._id}
                    newCount={product.count - 1}
                  />
                </div>

                <span className="px-4">{product.count}</span>

                <div className=" bg-green-600 text-white">
                  <UpdateCountButton
                    isIncrement={true}
                    id={product.product._id}
                    newCount={product.count + 1}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-end justify-end h-full gap-3">
            <div className="flex flex-col items-end text-gray-500">
              <p>Total</p>
              <p className="font-semibold">
                <span className="text-black text-[20px]">
                  {product.price * product.count}
                </span>{" "}
                EGP
              </p>
            </div>

            {/* remove button */}
            <RemoveButton productId={product.product._id} />
          </div>
        </Card>
      ))}
      <Link href={`/cart/${_id}`}>
        <button className="p-4 bg-amber-600">go to pay</button>
      </Link>
      <ClearAllProducts />
    </div>
  );
}
