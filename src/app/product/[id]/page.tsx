import ProductActions from "_/app/_components/ProductActions";
import { getProductDetails } from "_/app/api/Services/Route.Services";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "_/components/ui/breadcrumb";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import ProductImages from "./ProductImages";
export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const productDetails = await getProductDetails(id);
  if (!productDetails) {
  return <div>Loading product...</div>;
}
  return (
    <div className="container m-auto py-3">
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-gray-500 font-semibold hover:text-[#15803D] duration-100"
            >
              <div className="flex items-center justify-center gap-1">
                <IoHome /> Home
              </div>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-gray-500 font-semibold hover:text-[#15803D] duration-100"
            >
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-gray-500 font-semibold hover:text-[#15803D] duration-100"
            >
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#15803D] font-semibold">
              Breadcrumb
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-4 mt-10 gap-6 ">
        <div className="col-span-1 p-2 rounded-2xl border border-[#15803D27]">
          <ProductImages images={productDetails?.images || []} />
        </div>
        <div className="col-span-3 p-6 rounded-2xl border border-[#15803D27] bg-gray-100">
          {/* info */}
          <div className="flex gap-3 mb-3 ">
            <span className="bg-[#15803D46] text-gray-600 px-3 py-1 rounded-full text-sm">
              {productDetails?.category.name}
            </span>

            <span className="bg-gray-200 text-[#15803D] px-3 py-1 rounded-full text-sm">
              {productDetails?.brand.name}
            </span>
          </div>

          {/* title */}
          <h1 className="text-3xl font-bold mb-3">{productDetails?.title}</h1>

          {/* rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => {
                const rating = productDetails?.ratingsAverage ?? 0;

                if (rating >= i + 1) return <FaStar key={i} />;
                if (rating >= i + 0.5) return <FaStarHalfAlt key={i} />;

                return <FaStar key={i} className="text-gray-300" />;
              })}
            </div>

            <span className="text-gray-500">
              {productDetails?.ratingsAverage} (
              {productDetails?.ratingsQuantity} reviews)
            </span>
          </div>

          {/* price */}
          <h2 className="text-4xl font-bold mb-5">
            {productDetails?.price} EGP
          </h2>

          {/* stock */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            In Stock
          </div>

          {/* description */}
          <p className="text-gray-500 mb-6">{productDetails?.description}</p>

          {/* actions */}
          <ProductActions
            price={productDetails?.price}
            quantity={productDetails?.quantity}
            id={productDetails?._id}
          />
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
