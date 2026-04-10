import { Tag } from "lucide-react";
import Link from "next/link";
import { getAllBrands } from "../api/Services/Route.Services";
import BrandCard from "../_components/BrandDetais/BrandCard";
export default async function page() {
  const brands = await getAllBrands();
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-linear-to-r from-purple-600 to-purple-400 text-white py-16 px-10 ">
        <div className="container m-auto">
          <div className="text-sm opacity-80">
            <Link href="/">Home</Link> /{" "}
            <Link href="/brands" className="font-semibold">
              Brands
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Tag className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">Top Brands</h1>
              <p className="opacity-80 mt-1">Shop from your favorite brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="container m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-7">
        {brands?.map((brand) => (
          <Link key={brand._id}  href={`/Brands/brand/${brand._id}`}>
            <BrandCard brand={brand} />
          </Link>
        ))}
      </div>
    </div>
  );
}
