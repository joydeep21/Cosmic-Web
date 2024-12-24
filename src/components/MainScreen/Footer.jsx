import React from "react";
import { FaBook } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
export default function Footer() {
  return (
    <div className="w-full h-fit text-gray-200 bg-black px-24 ">
      <div className="flex flex-cols gap-8">
        <div className="flex gap-24 border-b-1 py-10 ">
          <div className="flex flex-col gap-2 w-60">
            <h1 className="text-2xl font-serif">ADDRESS</h1>
            <h1 className="text-base">Corporate Office:</h1>
            <div className="flex gap-1">
              <FaBook className="text-xl" />
              <h1 className="text-sm">
                #528, Gate No 2, 5<sup>th</sup> Floor, Poddarcourt, 18 Rabindra
                Sarani, Kolkata-700001
              </h1>
            </div>
            <h1 className="text-base">Branch Office:</h1>
            <div className="flex gap-1">
              <FaBook className="text-lg  " />
              <h1 className="text-sm">
                21/1F, Fern Road, 1<sup>st</sup> Floor Lalvilla, Ballygunge
                Kolkata 700019
              </h1>
            </div>
            <div className="flex gap-1 mt-1">
              <MdWatchLater className="text-lg mt-1" />
              <h1 className="text-base">Office timings : 10 a.m to 7 p.m</h1>
            </div>
            <div className="flex hover:text-[#007275] hover:cursor-pointer gap-1">
              <MdAddIcCall className="text-lg mt-1" />
              <h1 className="text-base ">+91 91106 42507</h1>
            </div>
            <div className="flex hover:text-[#007275] hover:cursor-pointer gap-1">
              <IoIosMail className="text-lg mt-1" />
              <h1 className="text-base ">support@chosmic.in</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-60">
            <h1 className="text-2xl font-serif">USEFUL LINKS</h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Home
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              About Us
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Stories
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Career
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Blog
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Contact Us
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer ">
              Seller Dashboard
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Seller Dashboard
            </h1>
          </div>
          <div className="flex flex-col gap-2 w-60">
            <h1 className="text-2xl font-serif">My ACCOUNT</h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Track My Order
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              View Cart
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Sign In
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Help
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              My Wishlist
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Privacy Policy
            </h1>
          </div>
          <div className="flex flex-col gap-2 w-60">
            <h1 className="text-2xl font-serif">Customer Service</h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Payment Methods
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Money-back guarantee!
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Product Returns
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Support Center
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Shipping
            </h1>
            <h1 className="text-base hover:text-[#007275] hover:cursor-pointer">
              Term and Conditions
            </h1>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
