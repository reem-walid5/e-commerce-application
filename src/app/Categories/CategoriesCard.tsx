import Image from "next/image";
import { getAllCategories } from "../api/Services/Route.Services";
import Link from "next/link";

export default async function CategoriesCard() {
  const allCategories = await getAllCategories();
  return (
    <div className="px-10 md:px-15 lg:px-25 m-auto">
      <div className="flex items-center gap-3 my-5">
        <div className="w-1 h-4 bg-green-500 "></div>
        <p className="text-2xl font-semibold text-gray-800">
          Shop By <span className="text-green-600">Category</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {allCategories?.map((product) => (
          <Link key={product._id} href={`/Categories/${product._id}`}>
            <div
              className="bg-white w-40 h-40 flex flex-col items-center justify-center rounded-xl shadow-2xl gap-1 p-2 cursor-pointer "
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
