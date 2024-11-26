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
  FaStar,
} from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { summerProducts, summerProductType } from "@/lib/summerProductsData";
import Link from "next/link";

const SummerBigDealProducts: React.FC = () => {
  return (
    <section className="p-6 relative min-h-screen">
      <h4 className="text-lg text-primary-500 font-bold ">Summer</h4>
      <h1 className="text-2xl font-bold mb-8 ">Big Deal</h1>
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
          {summerProducts.map((product: summerProductType) => (
            <SwiperSlide key={product.id} className="flex justify-center py-2">
              <div className="  shadow-md rounded-lg overflow-hidden w-full max-w-xs">
                <div className="relative bg-primary-100">
                  <Image
                    width={500}
                    height={500}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-0 w-10 text-center right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-b-full">
                    {product.discount}
                  </span>
                </div>
                <div className="p-4 text-center">
                  {/* Rating stars */}
                  <div className="flex  items-center mt-2">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < product.rating ? (
                        <FaStar className="text-yellow-500" key={i} />
                      ) : (
                        <CiStar className="text-yellow-500" key={i} />
                      )
                    )}
                    (50)
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm">{product.name}</p>
                    <h4 className="font-semibold">BDT {product.price}</h4>
                  </div>

                  <button className="mt-3 border-primary-600 hover:text-white border-2 text-primary-500 py-2 w-full rounded hover:bg-primary-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden lg:block">
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
            {summerProducts.map((product: summerProductType) => (
              <SwiperSlide
                key={product.id}
                className="flex justify-center py-2"
              >
                <div className="  shadow-md rounded-lg overflow-hidden w-full max-w-xs">
                  <div className="relative bg-primary-100">
                    <Image
                      width={500}
                      height={500}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-0 w-10 text-center right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-b-full">
                      {product.discount}
                    </span>
                  </div>
                  <div className="p-4 text-center">
                    {/* Rating stars */}
                    <div className="flex  items-center mt-2">
                      {Array.from({ length: 5 }, (_, i) =>
                        i < product.rating ? (
                          <FaStar className="text-yellow-500" key={i} />
                        ) : (
                          <CiStar className="text-yellow-500" key={i} />
                        )
                      )}
                      (50)
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm">{product.name}</p>
                      <h4 className="font-semibold">BDT {product.price}</h4>
                    </div>

                    <button className="mt-3 border-primary-600 hover:text-white border-2 text-primary-500 py-2 w-full rounded hover:bg-primary-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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

export default SummerBigDealProducts;
