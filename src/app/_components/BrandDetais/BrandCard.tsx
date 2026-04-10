import React from 'react'
import { Card, CardContent } from "_/components/ui/card";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { BrandCardProps } from './BrandCard.Types';
export default function BrandCard({brand}:BrandCardProps) {
  return (
    <Card
              className="group rounded-2xl shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:-translate-y-2 hover:shadow-xl hover:border-purple-200"
            >
              <CardContent className="p-7 pb-2 text-center">
                <div className="bg-gray-100 relative h-24 flex items-center justify-center mb-4 p-4 rounded-xl shadow-2xl">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <p className="font-semibold text-[16px] group-hover:text-purple-500">
                    {brand.name}
                  </p>
                  <p className="font-meduim text-white text-[14px] flex items-center gap-1 group-hover:text-purple-500">
                    View Products <FaArrowRight />
                  </p>
                </div>
              </CardContent>
            </Card>
  )
}
