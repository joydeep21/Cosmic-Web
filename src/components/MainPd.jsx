"use client";
import { IoMdStar, IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import { useState, useEffect } from "react";
import data from "../Data/data";

import Link from "next/link.js";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Product_details() {
  const [activeTab, setActiveTab] = useState("html");
  const [count, setCount] = useState(1);
  const [prodId, setProdId] = useState(null);
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const [imageId, setImageId] = useState(10);
  const [sizeFilter, setSizeFilter] = useState("S");
  const handleFilterClick = (filter) => {
    setSizeFilter(filter);
  };

  useEffect(() => {
    const productId = window.location.href.split("?")[1].split("=")[1];
    setProdId(productId);
  }, []);

  useEffect(() => {
    if (prodId !== null) {
      const prod = data.filter((item) => item.id === parseInt(prodId));
      setProduct(prod[0]);
      console.log(prod.images);
      setImage(prod[0].mainImage);
    }
  }, [prodId]);

  return (
    <div className="bg-white text-black lg:px-12">
      <div className="flex flex-col gap-4 lg:pt-10 lg:pb-10 w-full">
        <div className="lg:grid lg:grid-cols-2  justify-between ">
          <div className="lg:flex lg:flex-row lg:gap-10 lg:px-5 ">
            <div className="lg:flex lg:flex-col lg:gap-5 border-black">
              <button
                className={`w-24 h-24 border-2 rounded cursor-pointer transition duration-200 ${
                  imageId === 10 ? "border-black" : "border-white"
                }`}
                onClick={() => {
                  setImage(product.mainImage);
                  setImageId(10);
                }}
              >
                <Image
                  height={500}
                  width={500}
                  alt="ecommerce"
                  className="h-full w-full rounded"
                  src={product.mainImage}
                />
              </button>
              {product?.images?.length > 0 &&
                product.images.map((img, i) => {
                  return (
                    <button
                      key={i}
                      className={`w-24 h-24 border-2 rounded  cursor-pointer transition duration-200 ${
                        imageId === i ? "border-black" : "border-white"
                      }`}
                      onClick={() => {
                        setImage(img);
                        setImageId(i);
                      }}
                    >
                      <Image
                        height={500}
                        width={500}
                        alt="ecommerce"
                        className="h-full w-full rounded"
                        src={img}
                      />
                    </button>
                  );
                })}
            </div>
            <div className="w-[110%] h-[90%]  text-black">
              <div className="w-[100%] h-[500px] ">
                <Image
                  height={900}
                  width={900}
                  alt="ecommerce"
                  className="h-[520px]"
                  src={image}
                />
              </div>
            </div>
          </div>
          <div className="ml-5 w-3/4">
            <div className="">
              <h3 className="text-xl">{product.title}</h3>
              <div className="text-gray-700 text-base ">
                <h1 className="whitespace-normal break-normal">
                  {product.info}
                </h1>
              </div>
              <div className="font-normal text-sm flex gap-2">
                <div className="flex">
                  {new Array(5).fill(0).map((i, j) => {
                    return (
                      <IoMdStar key={j} className="mt-1 text-yellow-700" />
                    );
                  })}
                </div>
                <div>| </div>
                <div className="text-sm">{product.ratings} Ratings</div>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className=" pt-3">
                <h2 className=" flex gap-4">
                  <span className="text-2xl">₹{product.StartingPrice}</span>
                  <span className="s  text-[#008000]">₹{product.EndPrice}</span>

                  <span className="text-base text-[#008000] mt-1">
                    You save: ₹{product.EndPrice - product.StartingPrice} (55%)
                  </span>
                  <div className="flex mt-1">
                    <span className=" text-base">(Inclusive of all taxes)</span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="">
              <h3 className="text-lg pt-1 pb-1">Qualtiy Assure</h3>
              <div className="flex gap-2">
                <Chip
                  className="bg-white text-black border border-gray-700 flex justify-center items-center text-xs  px-1 rounded-md font-normal"
                  value="Poor"
                />
                <Chip
                  className="bg-green-700 text-white flex justify-center border items-center px-2 rounded-md font-normal text-xs"
                  value="Good"
                />
                <Chip
                  className="bg-white text-black flex justify-center border border-gray-700 items-center px-2 rounded-md font-normal text-xs"
                  value="Very Good"
                />
                <Chip
                  className="bg-white text-black flex justify-center border border-gray-700 items-center  px-2 rounded-md font-normal text-xs"
                  value="Excellent"
                />
              </div>
            </div>

            <div className="flex">
              <div>
                <h3 className="text-lg pt-1 pb-1">Size</h3>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleFilterClick("S")}
                    className={`justify-center border items-center py-2 px-3 rounded-md font-normal ${
                      sizeFilter === "S"
                        ? "bg-green-700  text-white"
                        : " text-black bg-white "
                    }`}
                  >
                    S
                  </Button>

                  <Button
                    onClick={() => handleFilterClick("M")}
                    className={`justify-center border items-center py-2 px-3 rounded-md font-normal ${
                      sizeFilter === "M"
                        ? "bg-green-700  text-white"
                        : " text-black bg-white "
                    }`}
                  >
                    M
                  </Button>

                  <Button
                    onClick={() => handleFilterClick("L")}
                    className={`justify-center border items-center py-2 px-4 rounded-md font-normal ${
                      sizeFilter === "L"
                        ? "bg-green-700  text-white"
                        : " text-black bg-white "
                    }`}
                  >
                    L
                  </Button>

                  <Button
                    onClick={() => handleFilterClick("XL")}
                    className={`justify-center border items-center py-2 px-3 rounded-md font-normal ${
                      sizeFilter === "XL"
                        ? "bg-green-700  text-white"
                        : " text-black bg-white "
                    }`}
                  >
                    Xl
                  </Button>
                </div>
              </div>
            </div>

            <div className=" flex gap-16">
              <div>
                <h3 className=" text-lg pt-2 pb-1">Colour</h3>
                <div className="flex gap-2">
                  <button className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-red-700 h-5 w-5 hover:ring-blue-700 hover:ring-2 hover:ring-offset-2"></button>
                  <button className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-black h-5 w-5 hover:ring-blue-700 hover:ring-2 hover:ring-offset-2"></button>
                  <button className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-green-700 h-5 w-5 hover:ring-blue-700 hover:ring-2 hover:ring-offset-2"></button>
                  <button className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-yellow-700 h-5 w-5 hover:ring-blue-700 hover:ring-2 hover:ring-offset-2"></button>
                </div>
              </div>
              <div className="mt-auto ">
                <Chip
                  className="bg-green-700 text-white flex justify-center items-center px-3 rounded-md font-normal text-sm"
                  icon={<IoMdCheckmark className="text-sm mt-1" />}
                  value="In Stock"
                ></Chip>
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <h3 className="text-lg pb-1">Offers and Discounts</h3>
                <div className="flex gap-2 whitespace-normal break-normal">
                  <Chip
                    className="bg-white text-black border whitespace-normal break-normal border-gray-700 items-center rounded-md font-medium text-xs"
                    value="No Cost EMI"
                  />
                  <Chip
                    className="bg-white text-black border whitespace-normal break-normal border-gray-700 items-center px-2 rounded-md font-medium text-xs"
                    value="Pay Later"
                  />
                </div>
              </div>

              <div className="w-20 pt-5">
                <Input
                  variant="standard"
                  label="Pincode"
                  placeholder="Pincode"
                  className="w-36"
                />
              </div>
            </div>

            <div className=" flex gap-2 pt-4">
              <div className="flex gap-2">
                <div className="flex gap-2 my-auto">
                  <Button
                    className="lg:px-2 lg:py-2  bg-[#ff9f00] border font-semibold text-white rounded "
                    onClick={() => {
                      setCount(count - 1);
                    }}
                    disabled={count === 1}
                  >
                    <FaMinus />
                  </Button>
                  <input
                    className="py-auto px-auto text-center bg-white font-sans w-8"
                    value={count}
                    disabled
                  ></input>
                  <Button
                    className="lg:px-2 lg:py-2 bg-[#ff9f00] border font-semibold text-white rounded "
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <FaPlus />
                  </Button>
                </div>
              </div>
              <Link href="/">
                <Button className=" lg:py-3 bg-[#ff9f00] border font-semibold text-white rounded ">
                  Add To Cart
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <Link href="/">
                <Button className=" lg:w-full lg:py-4 bg-[#fb641b] border text-white rounded font-semibold">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-gray-150 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              <Tab
                value="Description"
                onClick={() => setActiveTab("Product Description")}
                className={
                  activeTab === "Product Description" ? "text-gray-900" : ""
                }
              >
                Description
              </Tab>
              <Tab
                value="Specification"
                onClick={() => setActiveTab("Specification")}
                className={activeTab === "Specification" ? "text-gray-900" : ""}
              >
                Specification
              </Tab>
              <Tab
                value="Reviews"
                onClick={() => setActiveTab("Reviews")}
                className={activeTab === "Reviews" ? "text-gray-900" : ""}
              >
                Reviews
              </Tab>
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>{" "}
        </div>
      </div>
    </div>
  );
}
