"use client";
import React, { useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

interface SliderImagesType {
  id: number;
  image: string;
  name: string;
}

const DetailsPageSlider = () => {
  // Properly typing the Swiper ref
  const mainSwiperRef = useRef<SwiperClass | null>(null);

  const sliderImages: SliderImagesType[] = [
    {
      id: 1,
      image: "/assets/image 9.png",
      name: "Slider-1",
    },
    {
      id: 2,
      image: "/assets/02.png",
      name: "Slider-2",
    },
    {
      id: 3,
      image: "/assets/image 10.png",
      name: "Slider-3",
    },
    {
      id: 4,
      image: "/assets/01.png",
      name: "Slider-4",
    },
  ];

  // Function to handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="pt-10"> {/* Added relative positioning to parent div */}
     <div className="relative">
           {/* Custom navigation and pagination container */}
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        {/* Left arrow */}
        <div className="swiper-button-prev !text-primary-600">
          <FaRegArrowAltCircleLeft />
        </div>
      </div>
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        {/* Right arrow */}
        <div className="swiper-button-next !text-primary-600">
          <FaRegArrowAltCircleRight />
        </div>
      </div>

      {/* Main Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full"
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
      >
        {sliderImages.map((product: SliderImagesType) => (
          <SwiperSlide key={product.id} className="flex justify-center py-2">
            <div className="shadow-md rounded-lg overflow-hidden w-full">
              <div className="bg-primary-100">
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>

      {/* Thumbnail Slider */}
      <div className="mt-6">
        <div className="flex gap-4 justify-center">
          {sliderImages.map((product: SliderImagesType, index: number) => (
            <div
              key={product.id}
              onClick={() => handleThumbnailClick(index)}
              className="cursor-pointer shadow-md rounded-lg overflow-hidden w-24 h-24 border-2 border-transparent hover:border-primary-600"
            >
              <Image
                width={100}
                height={100}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPageSlider;
