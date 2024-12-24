import React from "react";
import Image from "next/image";
import dataItem from "../../Data/data";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import Link from "next/link";

export default function MobileDeals({ detail }) {
  if (!detail || detail.length === 0) {
    return <h1>No detail available</h1>;
  }
  return (
    <div className="w-full bg-gradient-to-r from-green-200 to-[#95baff] pb-4 text-black px-4">
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex justify-between gap-2">
          <h1 className="text-base font-serif italic">{detail}</h1>
          <Link href={"/offer-zone"}>
            <div className="/offer-zone">
              <IoIosArrowForward className="text-white px-auto py-1 rounded-full text-2xl bg-[#2a55e5]" />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          {dataItem.slice(0, 4).map((d) => {
            return (
              <div
                className=" bg-white flex flex-col w-40 h-56 mx-auto shadow-lg rounded-md items-center justify-center"
                key={d.id}
              >
                <div className="flex justify-center">
                  <Image
                    src={d.mainImage}
                    alt="logo Image"
                    height={600}
                    width={600}
                    className="rounded-t-md"
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
  );
}
