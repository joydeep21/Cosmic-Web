import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function MobileHeroSlider() {
  return (
    <div className="h-[150px] w-full">
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <div className="">
            <SwiperSlide>
              <div className="h-full">
                <Image
                  className=""
                  src="/banner1.png"
                  alt="Product"
                  width={2000}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-full ">
                <Image
                  className="object-contain"
                  src="/banner2.png"
                  alt="Product"
                  width={2000}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full">
                <Image
                  className=""
                  src="/banner3.png"
                  alt="Product"
                  width={2000}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full">
                <Image
                  className=""
                  src="/banner4.png"
                  alt="Product"
                  width={2000}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </>
    </div>
  );
}
