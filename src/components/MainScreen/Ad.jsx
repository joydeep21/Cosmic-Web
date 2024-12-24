import React from "react";
import Image from "next/image";

export default function Ad() {
  return (
    <div className="w-full md:block hidden bg-white lg:px-20 md:px-12 px-6">
      <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:flex md:gap-4 justify-between">
        <Image
          src="/shop_banner_img7.jpg"
          alt="logo Image"
          height={600}
          width={600}
          className="lg:h-[200px] lg:w-[450px] md:h-[110px] md:w-[220px]"
        />
        <Image
          src="/shop_banner_img8.jpg"
          alt="logo Image"
          height={600}
          width={600}
          className="lg:h-[200px] lg:w-[450px] md:h-[110px] md:w-[220px]"
        />
        <Image
          src="/shop_banner_img9.jpg"
          alt="logo Image"
          height={600}
          width={600}
          className="lg:h-[200px] lg:w-[450px] md:h-[110px] md:w-[220px]"
        />
      </div>
    </div>
  );
}
