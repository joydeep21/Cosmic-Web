import React from "react";
import Image from "next/image";

export default function Deals() {
  return (
    <div className="w-full md:block hidden bg-white lg:px-20 md:px-12 px-6">
      <div className="flex">
        <Image
          src="/ad_banner.png"
          alt="logo Image"
          height={5000}
          width={5000}
          className="lg:h-[200px] md:h-[150px] w-full rounded-md"
        />
      </div>
    </div>
  );
}
