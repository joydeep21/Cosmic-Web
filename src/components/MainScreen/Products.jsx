import React from "react";
import { useState } from "react";
import Image from "next/image.js";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import Link from "next/link";

export default function ProductItem({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" lg:w-[300px] flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="lg:h-56 hover:cursor-pointer">
        <Image
          src={isHovered ? data.mainImage : data.images[0]}
          alt="logo Image"
          height={600}
          width={600}
          className="lg:w-[200px]"
        />
      </div>
      <div className="lg:flex lg:flex-col">
        <div className="flex justify-center items-center ">
          <h1 className="font-sans lg:text-base md:text-sm">{data.tagline}</h1>
        </div>
        <div className="lg:flex md:flex md:flex-col justify-center items-center">
          <div className="flex">
            <IoMdStar className="text-yellow-500" />
            <IoMdStar className="text-yellow-500" />
            <IoMdStar className="text-yellow-500" />
            <IoMdStarHalf className="text-yellow-500" />
            <IoMdStarOutline className="text-yellow-500" />
          </div>
          <h1 className="font-normal text-gray-500 text-xs">
            ({data.rating} Ratings)
          </h1>
          <h1 className="font-normal text-gray-700 text-sm">
            ₹{data.StartingPrice}
          </h1>
        </div>
      </div>
    </div>
  );
}
