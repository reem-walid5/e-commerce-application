import { IoArrowBack } from "react-icons/io5";
import { Button } from "_/components/ui/button";
import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa";
import { getCategoryDetails } from "_/app/api/Services/Route.Services";
import Image from "next/image";

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id;
  const category = await getCategoryDetails(id);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      {category && (
        <div className="bg-linear-to-r from-green-700 to-green-500 text-white py-12 mb-20">
          <div className="container mx-auto">
            <p className="text-sm opacity-80 mb-6">
              <Link href="/">Home</Link> / <Link href="/">Categories</Link> /{" "}
              <span className="font-semibold">{category.name}</span>
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-30 h-30">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="rounded-full"
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold">{category.name}</h1>
                <p className="text-white/90 mt-1">
                  Choose a subcategory to browse products
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Body */}
      <div className="container mx-auto">
        <div className="py-10">
          <Link href="/">
            <button className="flex items-center gap-2 text-gray-700 my-16 text-xl cursor-pointer">
              <IoArrowBack size={20} />
              Back to Categories
            </button>
          </Link>

          <div className="flex flex-col items-center justify-center text-center mt-20">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center p-5 justify-center mb-6">
              <FaFolderOpen className="text-gray-500 text-3xl" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No Subcategories Found
            </h2>

            <p className="text-gray-500 mb-6">
              This category doesn&apos;t have any subcategories yet.
            </p>

            <Link href="/Shop">
              <Button className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-xl cursor-pointer">
                View All Products in {category?.name}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
