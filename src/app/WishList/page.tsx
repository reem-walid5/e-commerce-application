import { Card } from "_/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Button from "../_components/AddToCardButton/Button";
import { getWishlistProducts } from "../api/Services/Route.Services";
import DeleteProductFromWishlist from "./DeleteProductFromWishlist";

export default async function page() {
  const userWishlist = await getWishlistProducts();

  if (userWishlist === undefined) {
    return (
      <div className="text-center mt-10 text-red-500">
        session ended , please login again
      </div>
    );
  }

  if (!userWishlist || userWishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-5">
        <div className="bg-red-100 p-5 rounded-full">
          <FaHeart className="text-red-500 text-3xl" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-700">
          Your wishlist is empty 
        </h2>

        <p className="text-gray-500">
          Start adding products you love
        </p>

        <Link href="/">
          <button className="bg-green-600 text-white px-6 py-2 rounded-2xl hover:bg-green-700 transition">
            Go to shopping
          </button>
        </Link>
      </div>
    );
  }

  const products = userWishlist;

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 py-12 mb-12">
        <div className="flex items-center gap-4 container m-auto">
          <div className="bg-red-100 p-4 rounded-xl">
            <FaHeart className="text-red-500 text-xl" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold">My Wishlist</h1>
            <p className="text-gray-500 text-sm">
              {products.length} items saved
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className=" container m-auto">
        <Card className="rounded-2xl p-0 overflow-hidden mb-10">
          <div className="grid grid-cols-4 px-6 py-4 text-gray-500 text-[16px] font-semibold border-b">
            <p className="text-left ml-20">Product</p>
            <p className="text-center">Price</p>
            <p className="text-center">Status</p>
            <p className="text-center ml-20">Actions</p>
          </div>

          {products.map((product) => (
            <div
              className="grid grid-cols-4 items-center px-6 py-5 border-b"
              key={product._id}
            >
              <div className="flex items-center gap-4">
                <div className="w-15 h-16 shadow-2xl shadow-gray-500 rounded-xl flex items-center justify-center relative">
                  <Image
                    src={product.imageCover}
                    alt={product.title}
                    fill
                    className="object-fill"
                  />
                </div>

                <div>
                  <p className="font-semibold text-[16px]">
                    {product.title
                      ? product.title.split(" ").length > 3
                        ? product.title.split(" ").slice(0, 3).join(" ") + "..."
                        : product.title
                      : ""}
                  </p>
                  <p className="text-sm text-gray-400">
                    {product.category.name}
                  </p>
                </div>
              </div>

              <p className="text-center font-semibold text-xl">
                {product.price} EGP
              </p>

              <div className="flex justify-center">
                <span
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                    product.quantity > 0
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      product.quantity > 0 ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>

                  {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="flex justify-end items-center gap-3">
                <Button
                  id={product._id}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  <FaShoppingCart size={16} /> Add to cart
                </Button>

                <DeleteProductFromWishlist productId={product._id} />
              </div>
            </div>
          ))}
        </Card>

        <Link
          href="/"
          className=" text-gray-600 text-[18px] cursor-pointer hover:underline hover:text-green-500 transition-all duration-150"
        >
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}