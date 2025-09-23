// "use client";
// import React from "react";
// import banner1 from "../../../../public/assets/slider/banner1.webp";
// import banner2 from "../../../../public/assets/slider/grocery-banner-2.webp";
// import slider1 from "../../../../public/assets/slider/slider-image-1.webp";
// import slider2 from "../../../../public/assets/slider/slider-image-2.webp";
// import slider3 from "../../../../public/assets/slider/slider-image-3.webp";
// import Image from "next/image";
// import { Swiper } from "swiper/react";
// import { SwiperSlide } from "swiper/react";
// import { Autoplay} from "swiper/modules";
// import { Pagination} from "swiper/modules";

// import "swiper/css/pagination";






// const MainSlider = () => {
//   return (
//     <div className="mb-10 flex-col md:flex-row flex   ">
//       <div className="md:w-2/3  cursor-grab">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={true}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           className="mySwiper"
//           onSlideChange={() => console.log("slide change")}
//           onSwiper={(swiper) => console.log(swiper)}
//         >
//           <SwiperSlide>
//             <Image
//               src={slider1}
//               alt="slider 1"
//               className="h-[250px] md:h-[400px] w-full md:object-cover   "
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image
//               src={slider2}
//               alt="slider 2"
//               className="h-[250px] md:h-[400px] w-full md:object-cover  "
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image
//               src={slider3}
//               alt="slider 3"
//               className="h-[250px] md:h-[400px]  w-full md:object-cover  "
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       <div className=" md:w-1/3   ">
//         <Image
//           src={banner1}
//           alt="Banner 1"
//           className=" h-[130px] md:h-[200px]  object-cover   "
//         />
//         <Image
//           src={banner2}
//           alt="Banner 2"
//           className="h-[130px]  md:h-[200px]  object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default MainSlider;

"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import banner1 from "../../../../public/assets/slider/banner1.webp";
import banner2 from "../../../../public/assets/slider/grocery-banner-2.webp";
import slider1 from "../../../../public/assets/slider/slider-image-1.webp";
import slider2 from "../../../../public/assets/slider/slider-image-2.webp";
import slider3 from "../../../../public/assets/slider/slider-image-3.webp";

import "swiper/css";
import "swiper/css/pagination";

// dynamic import للـ Swiper بس
const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), {
  ssr: false,
});

const MainSlider = () => {
  const slides = [slider1, slider2, slider3];

  return (
    <div className="mb-10 flex flex-col md:flex-row ">
      {/* Slider */}
      <div className="md:w-2/3 w-full cursor-grab">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={slides.length > 1} // loop يشتغل بس لو فيه اكتر من slide
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className=" overflow-hidden "
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[250px] md:h-[400px]">
                <Image
                  src={img}
                  alt={`slider ${index + 1}`}
                  fill 
                  priority={index === 0}
           
                  className="h-[250px] md:h-[400px] w-full md:object-cover "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Banners */}
      <div className="md:w-1/3 w-full flex flex-col ">
        <div className="relative w-full h-[130px] md:h-[200px]">
          <Image
            src={banner1}
            alt="Banner 1"
            fill
 
            className="object-cover "
          />
        </div>
        <div className="relative w-full h-[130px] md:h-[200px]">
          <Image
            src={banner2}
            alt="Banner 2"
            fill
        
            className="object-cover  "
          />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
