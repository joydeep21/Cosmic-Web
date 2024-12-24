"use client";
import Image from "next/image";
import { PiPhoneCallFill } from "react-icons/pi";
import React, { useState, useEffect, useRef } from "react";
import Electronics from "./Electronics.jsx";
import Mobile from "./Mobile.jsx";
import dataItem from "../../Category/category.js";
import Accessory from "./Accessory.jsx";
import Kids from "./Kids.jsx";
import Adult from "./Adult.jsx";
import Jwellery from "./Jwellery.jsx";
import Grocery from "./Grocery.jsx";
import Kitchen from "./Kitchen.jsx";
import Medicine from "./Medicine.jsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Categories() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = (d) => {
    setActiveDropdown(d);
  };

  const handleMouseLeave = (e) => {
    setActiveDropdown(null);
  };
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="w-full md:block hidden bg-gray-100 lg:h-24 md:h-24 text-black lg:px-28 md:px-8">
        <div className="lg:flex " onMouseLeave={handleMouseLeave}>
          <div className="lg:pt-2 lg:flex lg:flex-row lg:gap-12 md:flex md:flex-row md:gap-4 justify-center items-center">
            {dataItem.map((d) => {
              return (
                <div
                  key={d.id}
                  onMouseEnter={() => {
                    handleMouseEnter(d.id);
                  }}
                >
                  <div className="relative lg:flex lg:flex-col md:flex md:flex-col items-center justify-center">
                    <Image
                      src={d.mainImage}
                      alt="logo Image"
                      height={300}
                      width={300}
                      className="lg:h-16 lg:w-20 md:h-10 md:w-12 hover:cursor-pointer"
                    />
                    <div className="flex">
                      <h1 className="lg:text-base hover:cursor-pointer">
                        {d.name}
                      </h1>
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform mt-1  
                         `}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {activeDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-auto left-0 right-0 w-full bg-white z-[9999] shadow-md"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            {activeDropdown === 1 && (
              <Electronics setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 2 && (
              <Mobile setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 3 && (
              <Accessory setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 4 && (
              <Kids setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 5 && (
              <Adult setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 6 && (
              <Jwellery setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 7 && (
              <Grocery setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 8 && (
              <Kitchen setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 9 && (
              <Medicine setDropdownVisible={setActiveDropdown} />
            )}
            {activeDropdown === 10 && (
              <Medicine setDropdownVisible={setActiveDropdown} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
