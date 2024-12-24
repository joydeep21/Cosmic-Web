import React from "react";
import { BiArrowBack } from "react-icons/bi";
import dataItem from "../Data/data";
import Image from "next/image";
import Link from "next/link";

export default function Offers() {
  return (
    <div className=" w-full bg-white text-black pt-4 px-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl mx-auto font-serif italic">Offer Zone</h1>
        <div className="grid grid-cols-2 gap-2 pt-2">
          {dataItem.map((d) => {
            return (
              <Link href={`/product-details?did=${d.id}`} key={d}>
                <div className="flex flex-col gap-1 border-1 shadow-md rounded-md">
                  <Image
                    src={d.mainImage}
                    alt="logo Image"
                    height={600}
                    width={600}
                    className="w-full rounded-t-md"
                  />
                  <div className="flex flex-col pb-1">
                    <h1 className="text-xs mx-auto text-gray-700">
                      {d.tagline}
                    </h1>
                    <div className="flex font-bold mx-auto">
                      <h1 className="text-sm text-green-700">50% Discount</h1>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
