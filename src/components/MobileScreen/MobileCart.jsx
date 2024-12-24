import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileCart() {
  return (
    <div className="w-full text-black px-4 pb-20 pt-4 bg-white ">
      <div className="bg-white">
        <div className="">
          <Image
            className=" mx-auto"
            alt="Cart Image"
            src="/empty-cart.jpg"
            width={300}
            height={300}
            priority={true}
          />
        </div>
        <h1 className="mt-2 mb-2 text-center text-black font-medium text-2xl text-semibold pb-4 ">
          No items in cart!
        </h1>
      </div>
      <div className=" pb-10 rounded-lg border bg-white p-5 shadow-md">
        <div className="flex justify-between font-medium text-base">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">870.00</p>
        </div>
        <div className="flex justify-between font-medium text-base">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$0.00</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between pb-4">
          <p className="text-xl font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-xl font-bold">870.00</p>
          </div>
        </div>
        <button
          className=" w-full rounded-md py-3  font-medium bg-orange-600 text-blue-50"
          //   onClick={handleOrderSubmit}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
