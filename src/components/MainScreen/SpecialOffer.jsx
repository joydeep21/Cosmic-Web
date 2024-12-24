import React from "react";
import Image from "next/image";

export default function SpecialOffer() {
  return (
    <div className="w-full md:block hidden bg-white lg:px-20 md:px-12 px-6">
      <div className="flex">
        <Image
          src="/shop_banner_img11.png"
          alt="logo Image"
          height={5000}
          width={5000}
          className="lg:h-[310px] md:h-[200px] w-full rounded-md"
        />
      </div>
    </div>
  );
}
