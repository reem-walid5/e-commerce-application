"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import sliderImg from "_/images/slider.png";
export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
    arrows: true,
  };
  return (
    <div className="mb-0 bg-gray-200">
      <Slider {...settings} >
      <div className="relative w-full h-100">
        <Image src={sliderImg} alt="img1" fill className="object-cover" />
        <div className="absolute inset-0 bg-green-600/80"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center container m-auto text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Fresh Products Delivered <br /> to your Door
          </h1>

          <p className="text-lg mb-6">get 20% off your first order</p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
              Shop Now
            </button>

            <button className="border border-white px-6 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-100">
        <Image src={sliderImg} alt="img1" fill className="object-cover" />
        <div className="absolute inset-0 bg-green-600/80"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center container m-auto text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Premium Quality <br /> Guaranteed
          </h1>

          <p className="text-lg mb-6">Fresh from farm to your table</p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
              Shop Now
            </button>

            <button className="border border-white px-6 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-100">
        <Image src={sliderImg} alt="img1" fill className="object-cover" />
        <div className="absolute inset-0 bg-green-600/80"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center container m-auto text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Fast and Free Delivery
          </h1>

          <p className="text-lg mb-6">same day delivery available</p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
              Order Now
            </button>

            <button className="border border-white px-6 py-2 rounded-lg">
              Delivery Info
            </button>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  );
}
