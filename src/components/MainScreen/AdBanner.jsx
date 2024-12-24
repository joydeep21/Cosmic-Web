import React from "react";
import Image from "next/image";

export default function AdBanner() {
  return (
    <div className="w-full md:block hidden bg-white lg:px-20 md:px-12 px-6">
      <div className="grid grid-cols-2 lg:gap-10 md:gap-4 justify-between">
        <Image
          src="/speaker.png"
          alt="logo Image"
          height={700}
          width={700}
          className="lg:h-[200px] lg:w-[700px] md:h-[150px] md:w-[330px] rounded-md"
        />
        <Image
          src="/shampoo.png"
          alt="logo Image"
          height={700}
          width={700}
          className="lg:h-[200px] lg:w-[700px] md:h-[150px] md:w-[330px] rounded-md"
        />
      </div>
    </div>
  );
}
