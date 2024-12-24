"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuShare2 } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Link from "next/link";
import MobileHeader from "../MobileScreen/MobileHeader";

export default function Header({}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      console.log(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <div>
      <div
        className={` transition-all ease-in-out duration-300  w-full md:block hidden border-b-1 border-gray-200 bg-white  lg:pt-2 lg:pb-2 lg:px-16 md:px-12 md:pt-4 pt-3 px-6 md:pb-3${
          isScrolled ? "fixed top-0 z-[99999]" : "relative"
        }`}
      >
        <div className="flex gap-2 justify-between">
          <Link href="/">
            <div>
              <Image
                src="/logo.png"
                alt="logo Image"
                height={600}
                width={600}
                className="h-20 w-24"
                priority
              />
            </div>
          </Link>
          <div className="flex pt-4 lg:gap-10 md:gap-10 gap-5">
            <div className="flex">
              <div className="md:hidden lg:block">
                <select className=" relative border lg:h-[45px] md:h-[30px] border-gray-300  text-gray-400 lg:px-2 lg:py-2 lg:w-[90px] md:w-[50px] outline-none">
                  <option
                    value="Brands"
                    className="md:text-sm lg:text-lg lg:w-full md:p-1 md:w-[70px] md:h-[30px]"
                  >
                    Brands
                  </option>
                  <option
                    value="Price"
                    className="md:text-sm lg:text-lg md:p-1 lg:w-full md:w-[70px] md:h-[30px]"
                  >
                    Price
                  </option>
                  <option
                    value="Products"
                    className="md:text-sm lg:text-lg md:p-1 md:w-[70px] lg:w-full md:h-[30px]"
                  >
                    Products
                  </option>
                </select>
              </div>
              <input
                placeholder="Search Product.."
                type="text"
                className="block lg:w-[400px] lg:h-[45px]  md:w-[250px] md:h-[30px] lg:px-3 lg:py-1 md:px-2 text-base font-normal leading-normal text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:border-blue-500 focus:shadow-outline focus:outline-none"
              />
              <button
                type="submit"
                className=" bg-teal-600 lg:h-[45px] md:h-[30px] rounded-sm text-white border-0 lg:py-2 lg:px-8  md:px-6"
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex my-auto gap-5">
            <LuShare2 className=" text-bold text-2xl text-black" />
            <FaHeart className=" text-bold text-2xl text-black" />
            <Link href={"/Cart"}>
              <IoCartSharp className=" text-bold text-3xl -mt-1 text-black" />
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hiddin md:hidden block">
        <MobileHeader />
      </div>
    </div>
  );
}
