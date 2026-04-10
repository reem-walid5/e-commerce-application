import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "_/components/ui/card";
import Image from "next/image";
import {
  FaEye,
  FaHeart,
  FaStar,
  FaStarHalfAlt,
  FaSyncAlt,
} from "react-icons/fa";
import { ProductCardProps } from "./ProductCard.Types";
import Button from "./AddToCardButton/Button";
export default async function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      key={product._id}
      className="bg-white rounded-xl border border-[#15803D0f] p-3 relative flex flex-col h-full"
    >
      {/* Icons */}
      <div className="absolute right-3 top-3 flex flex-col gap-3">
        <button className="bg-white shadow-md p-2 rounded-full">
          <FaHeart className="text-gray-500" />
        </button>

        <button className="bg-white shadow-md p-2 rounded-full">
          <FaSyncAlt className="text-gray-500" />
        </button>

        <button className="bg-white shadow-md p-2 rounded-full">
          <FaEye className="text-gray-500" />
        </button>
      </div>

      {/* Image */}
      <CardHeader className="flex justify-center mb-4 relative h-37.5">
        <Image
          src={product.imageCover}
          alt={product.title}
          fill
          className="object-contain"
        />
      </CardHeader>

      <CardContent className="flex-1 mb-0 pb-0">
        {/* Category */}
        <p className="text-gray-400 text-sm">{product.category.name}</p>

        {/* Title */}
        <h3 className="text-[18px] font-meduim text-[#15803D]">
          {product.title.length > 25
            ? product.title.slice(0, 25) + "..."
            : product.title}
        </h3>
        {/* Rating */}
        <div className="flex items-center gap-2 mb-0 mt-3.5">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => {
              const rating = product.ratingsAverage;

              if (rating >= index + 1) {
                return <FaStar key={index} />;
              } else if (rating >= index + 0.5) {
                return <FaStarHalfAlt key={index} />;
              } else {
                return <FaStar key={index} className="text-gray-300" />;
              }
            })}
          </div>

          <span className="text-gray-500 text-sm">
            {product.ratingsAverage} ({product.ratingsQuantity})
          </span>
        </div>
      </CardContent>

      {/* Price */}
      <CardFooter className="flex items-center justify-between p-0 mt-0 border-0 mb-2 bg-white px-1">
        {/* Prices */}
        <div className="flex items-center gap-2 pl-3">
          <span className="text-[18px] text-[#15803D] font-bold">
            {product.priceAfterDiscount ?? product.price} EGP
          </span>

          {product.priceAfterDiscount && (
            <span className="text-gray-400 line-through text-sm">
              {product.price} EGP
            </span>
          )}
        </div>

        {/* Add button */}
        <Button id={product._id}/>
      </CardFooter>
    </Card>
  );
}
