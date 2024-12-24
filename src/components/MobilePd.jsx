"use client";
import { IoMdStar, IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import { useState, useEffect } from "react";
import data from "../Data/data.js";
import Link from "next/link.js";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function Product_details() {
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
    <div className="w-full text-black bg-white pb-20">
      <div className="flex flex-col gap-2">
        <div className="w-full h-[400px]  text-black">
          <Image
            height={2200}
            width={2200}
            alt="ecommerce"
            className="h-full w-full"
            src={image}
          />
        </div>
        <div className="flex gap-2 border-black px-4">
          <button
            className={`w-24 h-24 border-2 rounded transition duration-200 ${
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
              className="h-full w-full"
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
                    className="h-full w-full"
                    src={img}
                  />
                </button>
              );
            })}
        </div>
        <div className="flex flex-col px-4">
          <div className=" pb-2">
            <h3 className="text-3xl mb-2">{product.title}</h3>
            <div className="text-base ">
              <h1 className="whitespace-normal break-normal">{product.info}</h1>
              <br />
            </div>
            <div className="font-normal text-base flex gap-2">
              <div className="flex">
                {new Array(5).fill(0).map((i, j) => {
                  return <IoMdStar key={j} className="mt-1 text-yellow-800" />;
                })}
              </div>
              <div>| </div>
              <div>{product.ratings} Ratings</div>
            </div>
          </div>
          <div className=" flex justify-between">
            <div className="">
              <h2 className=" flex gap-4">
                <span className="text-3xl text-[#008000] font-bold">
                  ₹{product.StartingPrice}
                </span>
                <span className="s">₹{product.EndPrice}</span>

                <span className="font-medium text-base text-[#008000] mt-1">
                  You save: ₹{product.EndPrice - product.StartingPrice} (55%)
                </span>
                <div className="flex mt-1">
                  <span className="font-normal text-base">
                    (Inclusive of all taxes)
                  </span>
                </div>
              </h2>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-base   pt-2 pb-2">
              Qualtiy Assure
            </h3>
            <div className="flex gap-1 text-sm">
              <Chip
                className="bg-white text-black border border-gray-700 flex justify-center items-center py-2 px-2 rounded-md font-semibold"
                value="Poor"
              />
              <Chip
                className="bg-[#00897b] text-white flex justify-center border items-center py-2 px-2 rounded-md font-semibold"
                value="Good"
              />
              <Chip
                className="bg-white text-black flex justify-center border border-gray-700 items-center py-2 px-2 rounded-md font-semibold"
                value="Very Good"
              />
              <Chip
                className="bg-white text-black flex justify-center border border-gray-700 items-center py-2 px-2 rounded-md font-semibold"
                value="Excellent"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <h3 className="font-semibold text-base pt-2 pb-2">Size</h3>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleFilterClick("S")}
                  className={`justify-center border items-center py-2 px-4 rounded-md font-semibold ${
                    sizeFilter === "S"
                      ? "bg-[#00897b]  text-white"
                      : " text-black bg-white "
                  }`}
                >
                  S
                </Button>

                <Button
                  onClick={() => handleFilterClick("M")}
                  className={`justify-center border items-center py-2 px-4 rounded-md font-semibold ${
                    sizeFilter === "M"
                      ? "bg-[#00897b]  text-white"
                      : " text-black bg-white "
                  }`}
                >
                  M
                </Button>

                <Button
                  onClick={() => handleFilterClick("L")}
                  className={`justify-center border items-center py-2 px-4 rounded-md font-semibold ${
                    sizeFilter === "L"
                      ? "bg-[#00897b]  text-white"
                      : " text-black bg-white "
                  }`}
                >
                  L
                </Button>

                <Button
                  onClick={() => handleFilterClick("XL")}
                  className={`justify-center border items-center py-2 px-4 rounded-md font-semibold ${
                    sizeFilter === "XL"
                      ? "bg-[#00897b]  text-white"
                      : " text-black bg-white "
                  }`}
                >
                  Xl
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-2 flex gap-2">
            <div>
              <h3 className="font-semibold text-lg pt-2">Colour</h3>
              <div className="flex gap-2">
                <button className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-red-700 h-6 w-6 hover:ring-blue-700 hover:ring-2 hover:ring-offset-2"></button>
                <button className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-black h-6 w-6 hover:ring-blue-700 hover:ring-2 hover:ring-offset-2"></button>
                <button className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-green-700 h-6 w-6 hover:ring-blue-700 hover:ring-2 hover:ring-offset-2"></button>
                <button className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-yellow-700 h-6 w-6 hover:ring-blue-700 hover:ring-2 hover:ring-offset-2"></button>
              </div>
            </div>
            <div className="mt-auto ">
              <Chip
                className="bg-[#00897b] text-white flex justify-center items-center py-2 px-4 rounded-md font-semibold"
                icon={<IoMdCheckmark className="text-xl" />}
                value="In Stock"
              ></Chip>
            </div>
          </div>

          <div className="pt-2 flex">
            <div>
              <h3 className="font-semibold text-base pb-2">
                Offers and Discounts
              </h3>
            </div>

            <div className="mx-auto">
              <Input
                variant="standard"
                label="Pincode"
                placeholder="Pincode"
                className=""
              />
            </div>
          </div>
          <div className="flex gap-2 whitespace-normal break-normal">
            <Chip
              className="bg-white text-black border whitespace-normal break-normal border-gray-700 items-center py-2  rounded-md font-semibold"
              value="No Cost EMI"
            />
            <Chip
              className="bg-white text-black border whitespace-normal break-normal border-gray-700 items-center py-2 px-4 rounded-md font-semibold"
              value="Pay Later"
            />
          </div>

          <div className=" flex gap-4 pt-4">
            <div className="flex gap-4">
              <div className="flex gap-2 my-auto">
                <Button
                  className="lg:px-4 lg:py-3  bg-[#ff9f00] border font-semibold text-white rounded "
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
                  className="lg:px-4 lg:py-2 bg-[#ff9f00] border font-semibold text-white rounded "
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <FaPlus />
                </Button>
              </div>
            </div>
            <Link href="/">
              <Button className="lg:px-12 lg:py-4 bg-[#ff9f00] border font-semibold text-white rounded ">
                Add To Cart
              </Button>
            </Link>
          </div>
          <div className="pt-4">
            <Link href="/">
              <Button className=" w-full lg:py-4 bg-[#fb641b] border text-white rounded font-semibold">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
