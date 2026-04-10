import ProductCard from "_/app/_components/ProductCard";
import NoProducts from "_/app/_components/Prdoducts/NoProducts";
import { ProductType } from "_/app/api/Type";
import Link from "next/link";
import { getWomenProducts } from "_/app/api/Services/Route.Services";
import { Tag } from "lucide-react";

export default async function Page() {
  const womenProducts = await getWomenProducts();

  return (
   <div>
     <div className="bg-linear-to-r from-purple-600 to-purple-400 text-white py-16 px-10 mb-10">
        <div className="container m-auto">
          <div className="text-sm opacity-80">
            <Link href="/">Home /</Link>
            <Link href="/Categories" className="font-semibold mx-2">
              Categories /  
            </Link>
            <Link href="/WomenFashion" className="font-semibold mx-2">
              Women&apos;s Fashion 
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
       <div className="container m-auto">
        <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-4">
      {womenProducts?.length ? (
        womenProducts.map((product: ProductType) => (
          <Link key={product._id} href={`/product/${product._id}`} ><ProductCard product={product} /></Link>
        ))
      ) : (
        <NoProducts/>
      )}
    </div>
    </div>
   </div>
  );
}