import React from "react";
import Image from "next/image";
import dataItem from "../../Data/data";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Products from "./Products";
import ProductItem from "./ProductItem";

export default function ThreeAd({ detail }) {
  return (
    <div className="md:block sm:hidden w-full bg-white px-20 pt-4 pb-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="h-[550px] flex flex-col gap-4 border shadow-xl ">
          <div className="flex justify-between gap-2 px-4 pt-2">
            <h1 className="text-3xl">{detail}</h1>
            <Link href={"/offer-zone"}>
              <div className="/offer-zone">
                <IoIosArrowForward className="text-white px-auto py-1 mt-2 rounded-full text-2xl bg-[#2a55e5]" />
              </div>
            </Link>
          </div>
          <div className="h-[550px] flex gap-8 px-4 bg-gray-50 py-4">
            {dataItem.slice(1, 2).map((d) => {
              return (
                <div key={d.id} className="mt-10">
                  <Image
                    src={d.mainImage}
                    alt="logo Image"
                    height={1000}
                    width={1000}
                    className="h-[310px] w-60"
                  />
                  <div className="lg:flex lg:flex-col mt-2">
                    <div className="flex justify-center items-center ">
                      <h1 className="font-sans lg:text-lg md:text-sm">
                        {d.tagline}
                      </h1>
                    </div>
                    <div className="lg:flex md:flex md:flex-col justify-center items-center">
                      <h1 className="font-medium text-green-700 text-sm">
                        Discount Upto 70%
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="h-3/4 grid grid-cols-2 gap-1">
              {dataItem.slice(1, 5).map((d) => {
                return (
                  <div key={d.id}>
                    <Image
                      src={d.mainImage}
                      alt="logo Image"
                      height={1000}
                      width={1000}
                      className="h-[180px] w-40"
                    />
                    <div className="lg:flex lg:flex-col">
                      <div className="flex justify-center items-center ">
                        <h1 className="font-sans lg:text-lg md:text-sm">
                          {d.tagline}
                        </h1>
                      </div>
                      <div className="lg:flex md:flex md:flex-col justify-center items-center">
                        {/* <div className="flex">
            <IoMdStar className="text-yellow-500" />
            <IoMdStar className="text-yellow-500" />
            <IoMdStar className="text-yellow-500" />
            <IoMdStarHalf className="text-yellow-500" />
            <IoMdStarOutline className="text-yellow-500" />
          </div> */}
                        <h1 className="font-medium text-green-700 text-sm">
                          Discount Upto 70%
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Image
          src={"/homeappliances.png"}
          alt="logo Image"
          height={1000}
          width={1000}
          className="h-[550px]"
        />
      </div>
    </div>
  );
}
