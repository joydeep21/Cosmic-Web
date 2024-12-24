import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

import { FreeMode, Pagination } from "swiper/modules";
import dataItem from "../../Mobilecategory/Mcategory";
export default function MobileCategory() {
  return (
    <div className="w-full h-24 border-b-1 border-gray-300 text-black">
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          modules={[Pagination, FreeMode]}
          className="mySwiper "
        >
          {dataItem.slice(1, 11).map((d, i) => (
            <div key={i} className="w-20  ">
              <SwiperSlide className="flex flex-col bg-[#f5f5f5] justify-center items-center pl-4">
                <div className="h-16 w-16 ">
                  <Image
                    src={d.mainImage}
                    alt="logo Image"
                    height={60}
                    width={60}
                    className=""
                  />
                </div>
                <h1 className="text-sm">{d.name}</h1>
              </SwiperSlide>
              ;
            </div>
          ))}
        </Swiper>
      </>
    </div>
  );
}
