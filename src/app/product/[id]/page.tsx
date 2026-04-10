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
    <div className="container m-auto py-4 md:py-6 px-3 md:px-0">

      {/* BREADCRUMB */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-gray-500 font-semibold hover:text-[#15803D]"
            >
              <div className="flex items-center gap-1">
                <IoHome /> Home
              </div>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink className="text-gray-500 font-semibold hover:text-[#15803D]">
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#15803D] font-semibold">
              Product Details
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10">

        {/* IMAGES */}
        <div className="md:col-span-1 lg:col-span-1 p-2 rounded-2xl border border-[#15803D27]">
          <ProductImages images={productDetails?.images || []} />
        </div>

        {/* INFO */}
        <div className="md:col-span-1 lg:col-span-3 p-4 md:p-6 rounded-2xl border border-[#15803D27] bg-gray-100">

          {/* tags */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-3">
            <span className="bg-[#15803D46] text-gray-600 px-3 py-1 rounded-full text-xs md:text-sm">
              {productDetails?.category.name}
            </span>

            <span className="bg-gray-200 text-[#15803D] px-3 py-1 rounded-full text-xs md:text-sm">
              {productDetails?.brand.name}
            </span>
          </div>

          {/* title */}
          <h1 className="text-xl md:text-3xl font-bold mb-3">
            {productDetails?.title}
          </h1>

          {/* rating */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => {
                const rating = productDetails?.ratingsAverage ?? 0;

                if (rating >= i + 1) return <FaStar key={i} />;
                if (rating >= i + 0.5) return <FaStarHalfAlt key={i} />;

                return <FaStar key={i} className="text-gray-300" />;
              })}
            </div>

            <span className="text-gray-500 text-sm">
              {productDetails?.ratingsAverage} (
              {productDetails?.ratingsQuantity} reviews)
            </span>
          </div>

          {/* price */}
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            {productDetails?.price} EGP
          </h2>

          {/* stock */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full mb-6 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            In Stock
          </div>

          {/* description */}
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            {productDetails?.description}
          </p>

          {/* actions (Responsive Buttons) */}
          <div className="flex flex-col gap-3 w-full">
            <ProductActions
              price={productDetails?.price}
              quantity={productDetails?.quantity}
              id={productDetails?._id}
            />
          </div>

        </div>

      </div>
    </div>
  );
}