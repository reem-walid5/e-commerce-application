"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
};

function ProductImages({ images }: Props) {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  return (
    <div className="space-y-6 w-full">
      
      {/* ✅ MAIN IMAGE FIXED WRAPPER */}
      <div className="w-full h-130 bg-white rounded-xl border overflow-hidden">
        <Slider
          asNavFor={nav2 as any}
          ref={(slider) => setNav1(slider)}
          arrows={false}
        >
          {images.map((img, i) => (
            <div key={i}>
              <div className="relative w-full h-130 ">
                <Image
                  src={img}
                  alt={`img-${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ THUMBNAILS WITH REAL SPACE */}
      <Slider
        asNavFor={nav1 as any}
        ref={(slider) => setNav2(slider)}
        slidesToShow={5}
        swipeToSlide
        focusOnSelect
        arrows={false}
      >
        {images.map((img, i) => (
          <div key={i} className="px-2">
            <div className="mx-1">
              <div
                className="
                  relative 
                  w-24 h-24
                  border-2 border-gray-200 
                  rounded-lg overflow-hidden 
                  hover:border-green-500 
                  transition
                "
              >
                <Image
                  src={img}
                  alt={`thumb-${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default ProductImages;