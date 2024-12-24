"use client";
import React from "react";
import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaCreditCardSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import Login from "../Login.jsx";
import useAuthContext from "@/hooks/use-hooks";
import Register from "../Register.jsx";

export default function MobileProfile() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    showLogin,
    setShowLogin,
    showSignUp,
    setShowSignUp,
  } = useAuthContext();

  const handleLogin = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };
  return (
    <div className="w-full bg-white text-black pt-4 pb-20">
      <div className="flex flex-col gap-4 ">
        <div className="border-b-1 shadow-sm">
          <div className="flex justify-between px-4">
            <div className="flex gap-4 pb-3 ">
              <Link href="/">
                <IoArrowBackSharp className=" text-xl mt-1" />
              </Link>
              <h1 className="font-sans text-lg italic">Hello User!</h1>
            </div>
            <div className="flex gap-2 px-3 mb-3 border-1 rounded-lg ">
              <IoMdShare className="text-yellow-700 mt-1 text-sm" />
              <h1 className="font-sans mt-1 text-sm">0</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 pb-4 border-b-1 ">
          <div className=" border-1 border-gray-200 rounded-sm ">
            <div className="flex gap-3 pl-2 py-2 shadow-md">
              <BsBoxSeam className="text-blue-800 text-lg mt-1" />
              <h1 className="text-base font-sans italic">Orders</h1>
            </div>
          </div>
          <div className=" border-1 border-gray-200 rounded-sm shadow-md ">
            <div className="flex gap-3 pl-2 py-2">
              <CiHeart className="text-blue-800 text-xl mt-1" />
              <h1 className="text-base font-sans italic">Wishlist</h1>
            </div>
          </div>
          <div className=" border-1 border-gray-200 rounded-sm shadow-md ">
            <div className="flex gap-3 pl-2 py-2">
              <BiSolidOffer className="text-blue-800 text-lg mt-1" />
              <h1 className="text-base font-sans italic">Offers</h1>
            </div>
          </div>
          <div className=" border-1 border-gray-200 rounded-sm shadow-md ">
            <div className="flex gap-3 pl-2 py-2">
              <BsTelephone className="text-blue-800 text-lg mt-1" />

              <h1 className="text-base font-sans italic">Contact us</h1>
            </div>
          </div>
        </div>
        <div className="shadow-lg pb-4">
          <div className="flex flex-col gap-3 px-4">
            <h1 className="text-lg font-semibold">Account Setting </h1>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <RxPerson className="text-blue-800 text-lg" />
                <h1 className="font-sans text-sm font-light">Edit Profile</h1>
              </div>
              <div className="">
                <RiArrowRightSLine className="text-gray-500 text-base" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <LiaCreditCardSolid className="text-blue-800 text-lg" />
                <h1 className="font-sans text-sm font-light">Saved Cards</h1>
              </div>
              <div className="">
                <RiArrowRightSLine className="text-gray-500 text-base" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <SlLocationPin className="text-blue-800 text-lg" />

                <h1 className="font-sans text-sm font-light">Saved Address</h1>
              </div>
              <div className="">
                <RiArrowRightSLine className="text-gray-500 text-base" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <FaRegEdit className="text-blue-800 text-base" />
                <h1 className="font-sans text-sm font-light">Reviews</h1>
              </div>
              <RiArrowRightSLine className="text-gray-500 text-base" />
            </div>
          </div>
        </div>
        <div className="shadow-lg pt-2 border-t-1 pb-4">
          <div className="flex flex-col gap-3 px-4">
            <h1 className="text-lg font-semibold">Join US</h1>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <CiShop className="text-blue-800 text-lg" />
                <h1 className="font-sans text-sm font-light">Be A Seller</h1>
              </div>
              <RiArrowRightSLine className="text-gray-500 text-base" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <CiStar className="text-blue-800 text-lg" />
                <h1 className="font-sans text-sm font-light">Brand Promoter</h1>
              </div>
              <RiArrowRightSLine className="text-gray-500 text-base" />
            </div>
          </div>
        </div>
        <div className="shadow-lg pt-2 border-t-1 pb-4">
          <div className="flex flex-col gap-3 px-4">
            <h1 className="text-lg font-semibold">Information</h1>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <MdOutlineLibraryBooks className="text-blue-800 text-lg font-extralight" />
                <h1 className="font-sans text-sm font-light">
                  Terms & Condition
                </h1>
              </div>
              <RiArrowRightSLine className="text-gray-500 text-base" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <CiCircleQuestion className="text-blue-800 text-lg" />
                <h1 className="font-sans text-sm font-light">FAQs</h1>
              </div>
              <RiArrowRightSLine className="text-gray-500 text-base" />
            </div>
          </div>
        </div>
        <div className="px-4">
          <button
            className="w-full py-1 rounded-sm shadow-sm flex justify-center items-center text-blue-800 border-1 login-button"
            onClick={handleLogin}
          >
            Log In
          </button>
          {showLogin && <Login />}
          {showSignUp && <Register />}
        </div>
      </div>
    </div>
  );
}
