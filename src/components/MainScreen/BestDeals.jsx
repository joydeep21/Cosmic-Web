import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dataItem from "../../Data/data";
import Image from "next/image";
import ProductItem from "./ProductItem.jsx";
import Link from "next/link.js";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Style.css";
// import { useRouter } from "next/router";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function BestDeals({ detail, details }) {
  // const router = useRouter();
  return (
    <div>
      <div className="bg-white w-full lg:px-20 md:px-12 px-6">
        <div className="md:block hidden ">
          <div className="flex flex-col md:gap-2">
            <div className="flex flex-col lg:gap-1 md:gap-2  ">
              <div className="flex justify-between">
                <h1 className=" text-3xl text-black font-sans">{details}</h1>
                <div className="lg:flex items-center justify-center">
                  <Link href={"/offer-zone"}>
                    <h1 className="text-blue-600 lg:pt-0 md:pt-4 text-lg hover:cursor-pointer hover:text-[#007275]">
                      See All
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:h-[300px] md:h-[230px] ">
              <>
                <Swiper
                  slidesPerView={7}
                  spaceBetween={10}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {dataItem.slice(0, 10).map((d) => {
                    return (
                      <SwiperSlide key={d.id}>
                        {/* <div
                            onClick={() =>
                              router.push(`/product-details?did=${d.id}`)
                            }
                          > */}
                        <ProductItem data={d} />
                        {/* </div> */}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-green-200 to-[#95baff] md:hidden block pb-4 px-4">
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex justify-between gap-2">
            <h1 className="text-base font-serif italic">{detail}</h1>
            <Link href={"/offer-zone"}>
              <div className="/offer-zone">
                <IoIosArrowForward className=" text-white px-auto py-1 rounded-full text-2xl bg-[#2a55e5]" />
              </div>
            </Link>
          </div>
          <div className="">
            <div className="grid grid-cols-2 gap-2">
              {dataItem.slice(0, 4).map((d) => {
                return (
                  <div
                    className=" bg-white flex flex-col justify-center items-center w-40 h-56 mx-auto shadow-lg rounded-md"
                    key={d.id}
                  >
                    <div className="flex justify-center">
                      <Image
                        src={d.mainImage}
                        alt="logo Image"
                        height={600}
                        width={600}
                        className=" rounded-t-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-center items-center ">
                        <h1 className="font-sans text-xs">{d.tagline}</h1>
                      </div>
                      <div className="flex md:flex flex-col text-xs justify-center items-center">
                        <div className="flex">
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStarHalf className="text-yellow-500" />
                          <IoMdStarOutline className="text-yellow-500" />
                        </div>
                        <h1 className="font-medium text-gray-400">
                          ( {d.ratings} Ratings )
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}