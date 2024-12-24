"use client";
import React from "react";
import dataItem from "../../Data/data.js";
import { useState } from "react";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import Image from "next/image.js";
import Link from "next/link";

export default function BestDeal() {
  const [hoverStates, setHoverStates] = useState(
    Array(dataItem.length).fill(false)
  );
  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };
  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };
  return (
    <div className="bg-white text-black w-full lg:px-6 pt-4">
      <div className="w-full h-40 border-1"></div>
      <div className="flex lg:gap-10 md:gap-8 py-10">
        <div className="w-[200px] lg:block md:hidden mt-40 border h-[900px]">
          <div className=" "></div>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex items-center justify-center">
            <h1 className="mx-auto text-6xl text-black font-bold font-sans">
              Best Deals
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="mx-auto text-gray-400 text-xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim Nullam nunc varius.
            </h1>
          </div>
          <div className="flex justify-between items-center ">
            <div className="lg:grid lg:grid-cols-6 lg:gap-10 md:grid md:grid-cols-3 md:gap-10 pt-5 justify-center items-center ">
              {dataItem.map((d, index) => {
                return (
                  <div
                    className="h-[100px] lg:w-[180px] md:w-[200px] flex flex-col gap-2 mb-40"
                    key={d.id}
                  >
                    <Link href={`/product-details?did=${d.id}`}>
                      <div className=" w-full ">
                        <Image
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave(index)}
                          src={hoverStates[index] ? d.mainImage : d.images[0]}
                          alt="logo Image"
                          height={700}
                          width={700}
                          className="  cursor-pointer"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center ">
                        <h1 className="font-sans text-base cursor-pointer">
                          {d.tagline}
                        </h1>
                        <div className="flex justify-center items-center">
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStar className="text-yellow-500" />
                          <IoMdStarHalf className="text-yellow-500" />
                          <IoMdStarOutline className="text-yellow-500" />
                          <h1 className="font-medium text-gray-400 text-sm">
                            ( {d.ratings} Ratings )
                          </h1>
                        </div>
                      </div>
                    </Link>
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
