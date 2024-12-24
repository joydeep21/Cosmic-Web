"use client";
import React from "react";

import { IoArrowBackSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import dataItem from "../../Mobilecategory/Mcategory";
import MobileHeroSlider from "@/components/MobileScreen/MobileHeroSlider";
export default function page() {
  return (
    <div className="w-full bg-white pb-20">
      <div className="flex flex-col ">
        <div className="flex bg-[#142962] text-white justify-between py-2 px-4">
          <div className="flex gap-24">
            <Link href="/">
              <IoArrowBackSharp className=" text-xl mt-1" />
            </Link>
            <div className="flex items-center justify-center">
              <h1 className="font-sans text-lg italic font-extralight ">
                All Categories
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-white text-black px-4">
          <div className="grid grid-cols-4 gap-2">
            {dataItem.map((d) => {
              return (
                <div
                  key={d.id}
                  className=" flex flex-col gap-2 justify-center items-center"
                >
                  <Image
                    src={d.mainImage}
                    alt="Category"
                    height={600}
                    width={600}
                    className="h-20 w-20 "
                  />
                  <h1 className="text-sm font-sans italic">{d.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
