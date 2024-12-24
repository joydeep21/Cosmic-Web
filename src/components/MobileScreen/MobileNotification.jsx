"use client";
import { IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";
import { BiSolidOffer } from "react-icons/bi";
import React, { useRef, useState } from "react";
import Image from "next/image";
import dataItem from "../../Data/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import MainAd from "./MainAd";

export default function MobileNotification() {
  const [dataFilter, setDataFilter] = useState("All");
  const handleFilterClick = (filter) => {
    setDataFilter(filter);
  };
  return (
    <div className="w-full bg-white text-black pt-4 pb-20">
      <div className="flex flex-col ">
        <div className="border-b-1 shadow-sm">
          <div className="flex flex-col px-4">
            <div className="flex gap-4 pb-3 ">
              <Link href="/">
                <IoArrowBackSharp className=" text-xl mt-1" />
              </Link>
              <div className="flex gap-2">
                <h1 className="font-sans text-lg italic">Notification</h1>
                <h1 className="font-sans text-lg italic">{"(0)"}</h1>
              </div>
            </div>
            <div className="flex gap-2 px-3 pb-2">
              <button
                onClick={() => handleFilterClick("All")}
                className={`flex gap-2 justify-center items-center border-1 px-3 rounded-lg ${
                  dataFilter === "All"
                    ? "bg-blue-100 text-blue-900 border-blue-900"
                    : " text-black bg-white "
                }`}
              >
                All
              </button>

              <button
                onClick={() => handleFilterClick("Offers")}
                className={`flex gap-2 justify-center items-center border-1 px-3 rounded-lg ${
                  dataFilter === "Offers"
                    ? "bg-blue-100 text-blue-900 border-blue-900"
                    : " text-black bg-white "
                }`}
              >
                <BiSolidOffer
                  className={`${
                    dataFilter === "Offers"
                      ? "bg-blue-100 text-blue-900 border-blue-900"
                      : " text-gray-500 bg-white "
                  }`}
                />
                Offers
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4 pb-4 border-b-1 py-2 bg-gray-100 ">
          <div className="flex flex-col gap-4  border-1 h-80 bg-white shadow-md rounded-sm px-2 pt-2 ">
            <div className="flex flex-col ">
              <h1 className="font-medium">Top Products</h1>
              <h1 className="text-xs text-gray-500">1 day ago</h1>
            </div>
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              spaceBetween={10}
              grabCursor={true}
              modules={[Pagination]}
              className="mySwiper h-56"
            >
              {dataItem.slice(0, 10).map((d) => {
                return (
                  <SwiperSlide
                    key={d.id}
                    className="border shadow-lg flex flex-col"
                  >
                    <div className="flex justify-center">
                      <Image
                        src={d.mainImage}
                        alt="logo Image"
                        height={600}
                        width={600}
                        className="h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-center items-center ">
                        <h1 className="font-sans text-xs">{d.tagline}</h1>
                      </div>
                      <div className="flex md:flex flex-col text-xs justify-center items-center">
                        {/* <div className="flex">
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStarHalf className="text-yellow-500" />
                          <IoMdStarOutline className="text-yellow-500" />
                        </div> */}
                        <h1 className="font-medium text-gray-400">
                          ( {d.ratings} Ratings )
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="shadow-lg pb-2 pt-2">
          <MainAd />
        </div>
      </div>
    </div>
  );
}
