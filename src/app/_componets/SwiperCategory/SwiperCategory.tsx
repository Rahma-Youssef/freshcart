"use client";
import { SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import React from "react";
import { Category } from "@/Types/Product.type";
import Image from "next/image";
import dynamic from "next/dynamic";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

const SwiperCategory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={1}
        slidesPerView={7}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        className="cursor-grab"
      >
        {" "}
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
              priority
              className="w-full h-[200px] object-cover "
            />
            <p className="text-center mt-3 font-semibold ">{category.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCategory;
