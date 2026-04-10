
import Link from "next/link";
import ProductCard from "./_components/ProductCard";
import { getAllProducts } from "./api/Services/Route.Services";
import MainSlider from "./_components/ui/MainSlider";
import AnimateCard from "./_components/ui/AnimateCard";
import SmallCards from "./_components/ui/SmallCards";
import CategoriesCard from "./Categories/CategoriesCard";
export default async function page() {
  
  const allProducts = await getAllProducts();
  console.log("allProducts", allProducts);

  return (
    <div>
      <MainSlider/>
      <SmallCards />
      <AnimateCard />
      <CategoriesCard/>
      <div className="container m-auto">
        <p className="my-3 font-bold text-xl text-gray-600">Showing 40 products</p>
        <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-4">
      {allProducts?.map((product) => (<Link key={product._id} href={`/product/${product._id}`} > <ProductCard product={product} /></Link>))}
    </div>
    </div>
    </div>
  );
}

