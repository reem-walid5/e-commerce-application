import NoProducts from "_/app/_components/Prdoducts/NoProducts";
import ProductCard from "_/app/_components/ProductCard";
import { getProductsByBrand } from "_/app/api/Services/Route.Services";
import { ProductType } from "_/app/api/Type";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const id = (await params).id
  const products = await getProductsByBrand(id);

  return (
    <div className="container m-auto mt-10">
      {products && products.length > 0 ? (
        <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product: ProductType) => (
            <Link key={product._id} href={`/product/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : <NoProducts/>
      }
    </div>
  );
}