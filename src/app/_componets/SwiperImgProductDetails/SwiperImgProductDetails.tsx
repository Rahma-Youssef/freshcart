"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay} from "swiper/modules";    
import React from "react";
import { Product } from "@/Types/Product.type";
import Image from "next/image";


const SwiperImgProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="  ">

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
           autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)} 
        className="cursor-grab"
      >
        {" "}
        {product?.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={product?.title} width={200} height={200} className="w-full " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImgProductDetails;



