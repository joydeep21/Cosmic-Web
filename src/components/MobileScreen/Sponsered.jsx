import React from "react";
import dataItem from "../../Data/data.js";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function sponsered({ detail }) {
  if (!detail || detail.length === 0) {
    return <h1>No detail available</h1>;
  }
  return (
    <div className="bg-gray-100 text-black px-4 pb-6 pt-2">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <h1 className="text-base font-serif italic">{detail}</h1>
          <Link href={"/offer-zone"}>
            <div className="/offer-zone">
              <IoIosArrowForward className="text-white px-auto py-1 rounded-full text-2xl bg-[#2a55e5]" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-4 rounded-full">
          {dataItem.slice(0, 8).map((d) => {
            return (
              <div
                className=" flex flex-col gap-1 items-center justify-center"
                key={d.id}
              >
                <div className="flex justify-center">
                  <Image
                    src={d.mainImage}
                    alt="logo Image"
                    height={600}
                    width={600}
                    className="w-full rounded-full shadow-lg"
                  />
                </div>
                <h1 className="text-[10px]">{d.tagline}</h1>
                <div className="flex font-bold mx-auto">
                  <h1 className="text-[10px] text-green-700">50% Discount</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
