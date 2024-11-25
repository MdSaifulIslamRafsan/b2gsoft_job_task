"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

interface CollectionType {
  title: string;
  img: string;
}

const Collection = () => {
  const collectionData: CollectionType[] = [
    {
      title: "men collection",
      img: "/assets/man.png",
    },
    {
      title: "women collection",
      img: "/assets/woman.png",
    },
  ];

  return (
    <section className="my-10 font-manrope">
      <div className="hidden md:block">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {collectionData.map((item: CollectionType) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Image Section */}
                <Image
                  src={item.img}
                  width={500}
                  height={400}
                  className="max-h-[400px]"
                  alt={item.title}
                />

                {/* Text Section */}
                <div className="space-y-5 text-center lg:text-left">
                  <h3 className="uppercase font-bold text-2xl lg:text-3xl">
                    {item.title}
                  </h3>
                  <div className="flex justify-center lg:justify-start items-center gap-3">
                    <Link
                      href="/"
                      className="bg-primary-500 py-2 px-5 font-medium inline-block rounded-full text-lg text-white"
                    >
                      Shop Now
                    </Link>
                    <Link
                      href="/"
                      className="bg-primary-500 p-4 rounded-full text-white inline-block"
                    >
                      <MdArrowOutward />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {collectionData.map((item: CollectionType) => (
         
            <div key={item.title} className="flex flex-col md:hidden gap-10 items-center">
              {/* Image Section */}
              <Image
                src={item.img}
                width={500}
                height={400}
                className="max-h-[400px]"
                alt={item.title}
              />

              {/* Text Section */}
              <div className="space-y-5 text-center lg:text-left">
                <h3 className="uppercase font-bold text-2xl lg:text-3xl">
                  {item.title}
                </h3>
                <div className="flex justify-center lg:justify-start items-center gap-3">
                  <Link
                    href="/"
                    className="bg-primary-500 py-2 px-5 font-medium inline-block rounded-full text-lg text-white"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="/"
                    className="bg-primary-500 p-4 rounded-full text-white inline-block"
                  >
                    <MdArrowOutward />
                  </Link>
                </div>
              </div>
            </div>
        
        ))}
    </section>
  );
};

export default Collection;
