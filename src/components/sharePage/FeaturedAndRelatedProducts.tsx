"use client";

import React from "react";
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

import Link from "next/link";
import {featuredAndRelatedProducts , FeaturedAndRelatedProductType } from "@/lib/FeaturedAndRelatedProducts"; 

interface FeaturedAndRelatedProductsProps {
  title?: string;
  subtitle: string;
}

const FeaturedAndRelatedProducts : React.FC<FeaturedAndRelatedProductsProps> = ({title  , subtitle }) => {
  return (
    <section className="p-6 relative min-h-screen">
      {title && <h4 className="text-lg text-primary-500 font-bold ">{title}</h4>}
     <h1 className="text-2xl font-bold mb-8 ">{subtitle}</h1>
      
      
      <div className="">
        {/* Custom navigation and pagination container */}
        <div className="absolute top-8 right-28 flex items-center gap-4 p-2 z-10">
          <div className="swiper-button-prev !text-primary-600">
            <FaRegArrowAltCircleLeft />
          </div>
        </div>
        <div className="absolute top-8 right-10 flex items-center gap-4 p-2 z-10">
          <div className="swiper-button-next !text-primary-600">
            <FaRegArrowAltCircleRight />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {featuredAndRelatedProducts.map((product: FeaturedAndRelatedProductType) => (
            <SwiperSlide key={product.id} className="flex justify-center py-2">
              <Link href={`/pages/product/${product.id}`} className="  shadow-md rounded-lg overflow-hidden w-full max-w-xs">
                <div className=" bg-primary-100">
                  <Image
                    width={500}
                    height={500}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                 
                </div>
                <div className="p-4 text-center">

                  <div className="flex items-center justify-between">
                    <p className="text-sm">{product.name}</p>
                    <h4 className="font-semibold">BDT {product.price}</h4>
                  </div>

                  <button className="mt-3 border-primary-600 hover:text-white border-2 text-primary-500 py-2 w-full rounded hover:bg-primary-700">
                    Add to Cart
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <Link
          href="/"
          className="mt-3 bg-primary-600 text-white  py-2 px-8 rounded-lg hover:bg-primary-700"
        >
          See more
        </Link>
      </div>
    </section>
  );
};

export default FeaturedAndRelatedProducts;
