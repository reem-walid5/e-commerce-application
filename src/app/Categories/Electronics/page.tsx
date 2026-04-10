import { getElectronicsProducts } from "_/app/api/Services/Route.Services";
import ProductCard from "_/app/_components/ProductCard";
import NoProducts from "_/app/_components/Prdoducts/NoProducts";
import { ProductType } from "_/app/api/Type";
import Link from "next/link";

export default async function Page() {
  const electronics = await getElectronicsProducts();

  return (
    <div className="container m-auto">
        <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-4">
      {electronics?.length ? (
        electronics.map((product: ProductType) => (
          <Link key={product._id} href={`/product/${product._id}`} ><ProductCard product={product} /></Link>
        ))
      ) : (
        <NoProducts/>
      )}
    </div>
    </div>
  );
}