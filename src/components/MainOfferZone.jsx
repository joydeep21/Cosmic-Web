"use client";
import React from "react";
import dataItem from "../Data/data";
import { useState } from "react";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import Image from "next/image.js";
import { MdCurrencyRupee } from "react-icons/md";
import Link from "next/link.js";
export default function Products() {
  const [checkboxes, setCheckboxes] = useState(Array(8).fill(false));

  const toggleCheckbox = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };
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
    <div className="bg-white text-black w-full pt-10 lg:px-16 pb-20">
      <div className="flex gap-10 ">
        <div className="flex flex-col border-r-1 border-gray-400 lg:w-[250px] md:w-[200px] gap-4">
          <div className="mx-2 ">
            <div className="w-full flex flex-col border-b-1 lg:pb-0 md:pb-4 border-gray-300 ">
              <h1 className="font-sans  font-normal tracking-wide lg:text-base">
                BRANDS
              </h1>
              {checkboxes.map((isChecked, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox  h-3 w-3  text-indigo-600 transition duration-150 ease-in-out"
                    checked={isChecked}
                    onChange={() => toggleCheckbox(index)}
                  />
                  <span className="ml-2 text-gray-700 lg:text-lg font-sans">
                    Brand
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="mx-2">
            <div className="w-full flex flex-col border-b-1 lg:pb-0 md:pb-4 border-gray-300 ">
              <h1 className="font-sans font-normal tracking-wide lg:text-lg">
                PRICE
              </h1>
              {/* <div className="price-range-slider">
              <label>Price Range</label>
              <p className="range-value">
              <input type="text" id="amount" readonly />
              </p>
              <div id="slider-range" className="range-bar"></div>
            </div> */}
            </div>
          </div>
          <div className="mx-2">
            <div className="w-full lg:pb-0 md:pb-4 flex flex-col border-b-1 border-gray-300 mb-2 pb-2  ">
              <h1 className="font-sans font-normal  tracking-wide lg:text-base">
                CUSTOMER RATINGS
              </h1>
              <label className="flex flex-col">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox mt-2 h-3 w-3  text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <div className="flex gap-1">
                    <h1 className="ml-2  text-gray-700 text-base font-sans">
                      4
                    </h1>
                    <IoMdStar className="text-yellow-500 mt-1 text-base" />
                    <h1 className=" text-gray-700 text-base font-sans">
                      & above
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox mt-2 h-3 w-3  text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <div className="flex gap-1">
                    <h1 className="ml-2  text-gray-700 text-base font-sans">
                      3
                    </h1>
                    <IoMdStar className="text-yellow-500 mt-1 text-base" />
                    <h1 className=" text-gray-700 text-base font-sans">
                      & above
                    </h1>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="mx-2">
            <div className="w-full lg:pb-0 md:pb-4 flex flex-col border-b-1 border-gray-300 mb-2 pb-2  ">
              <h1 className="font-sans font-normal  tracking-wide lg:text-base">
                OFFERS
              </h1>
              <div className="flex flex-col">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox mt-1 h-3 w-3  text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <div className="flex gap-1">
                    <h1 className="ml-2  text-gray-700 lg:text-base font-sans">
                      Buy More , Save More
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox mt-1 h-3 w-3  text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <div className="flex gap-1">
                    <h1 className="ml-2  text-gray-700 lg:text-base font-sans">
                      No Cost EMI
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2">
            <div className="w-full lg:pb-0 md:pb-4 flex flex-col border-b-1 border-gray-300 mb-2 pb-2  ">
              <h1 className="font-sans font-normal  tracking-wide lg:text-base">
                DISCOUNT
              </h1>
              <div className="flex flex-col">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox mt-1 h-3 w-3  text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <div className="flex gap-1">
                    <h1 className="ml-2  text-gray-700 text-base font-sans">
                      50% or More
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox mt-1 h-3 w-3  text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <div className="flex gap-1">
                    <h1 className="ml-2  text-gray-700 text-base font-sans">
                      60% or More
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2 mb-10">
            <div className="w-full lg:pb-0 md:pb-4 flex flex-col  ">
              <h1 className="font-sans font-normal  tracking-wide lg:text-base">
                GST INVOICE AVAILABLE
              </h1>
              <div className="flex flex-col">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox mt-1 h-3 w-3  text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <div className="flex gap-1">
                    <h1 className="ml-2  text-gray-700 text-base font-sans">
                      GST Invoice Available
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-10  md:px-10 lg:grid lg:grid-cols-6 lg:gap-2 md:grid md:grid-cols-3 md:gap-4 lg:w-full md:full justify-start text-start ">
          {dataItem.slice(0, 16).map((d, i) => {
            return (
              <div className=" lg:h-[295px] md:h-[400px]" key={d.id}>
                <div className="bg-or lg:mb-4 md:mb-2">
                  <Link href={`/product-details?did=${d.id}`}>
                    <Image
                      height={200}
                      width={300}
                      alt="ecommerce"
                      className="max-h-66"
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={() => handleMouseLeave(i)}
                      src={hoverStates[i] ? d.mainImage : d.images[0]}
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-sans text-base">{d.tagline}</h1>
                  <div className="flex justify-center items-center">
                    <IoMdStar className="text-yellow-500" />
                    <IoMdStar className="text-yellow-500" />
                    <IoMdStar className="text-yellow-500" />
                    <IoMdStarHalf className="text-yellow-500" />
                    <IoMdStarOutline className="text-yellow-500" />
                  </div>
                  <h1 className="font-medium text-gray-400 text-sm">
                    ( {d.ratings} Ratings )
                  </h1>
                  <div className="flex">
                    <MdCurrencyRupee className="font-medium mt-1 text-gray-700 text-base" />
                    <h1 className="font-normal text-gray-700 text-base">
                      {d.StartingPrice}
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
