import Image from "next/image";
import { getAllCategories } from "../api/Services/Route.Services";
import Link from "next/link";
export default async function page() {
  const allCategories = await getAllCategories();
  return (
    <div className="container m-auto">
        <div className="flex items-center gap-3 my-5">
        <div className="w-1 h-4 bg-green-500 "></div>
        <p className="text-2xl font-semibold text-gray-800">
          Shop By <span className="text-green-600">Category</span>
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {allCategories?.map((product) => (
          <Link key={product._id} href={`/Categories/${product._id}`}>
            <div
              className="bg-white w-60 h-80 flex flex-col items-center justify-center rounded-xl shadow-2xl gap-1 p-2 cursor-pointer "
              key={product._id}
            >
              <div className="relative w-30 h-30">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-800 font-semibold text-[16px]">
                {product.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      </div>
  );
}
