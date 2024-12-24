import React from "react";
import Image from "next/image";
import dataItem from "../../Data/data";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Link from "next/link";

export default function MobileSponsored({ detail }) {
  if (!detail || detail.length === 0) {
    return <h1>No detail available</h1>;
  }
  return (
    <div className="w-full text-black pb-4 px-4 pt-2">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="text-base font-serif italic">{detail}</h1>
          <div className=" ">
            <IoIosArrowForward className="text-white px-auto py-1 rounded-full text-2xl bg-[#2a55e5]" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-2">
          {dataItem.slice(0, 6).map((d) => {
            return (
              <div
                className="flex flex-col gap-1 border-1 shadow-md rounded-md"
                key={d}
              >
                <Image
                  src={d.mainImage}
                  alt="logo Image"
                  height={600}
                  width={600}
                  className="w-full rounded-t-md"
                />
                <div className="flex flex-col pb-1">
                  <h1 className="text-xs mx-auto text-gray-700">{d.tagline}</h1>
                  <div className="flex font-bold mx-auto">
                    <MdOutlineCurrencyRupee className="pt-1" />
                    <h1 className="text-sm">{d.StartingPrice}</h1>
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
