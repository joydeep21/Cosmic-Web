import React from "react";
import Image from "next/image";

export default function MobileAd() {
  return (
    <div className="w-full bg-white px-4 py-2">
      <div className="flex gap-2 justify-between">
        <Image
          src="/shop_banner_img7.jpg"
          alt="logo Image"
          height={600}
          width={600}
          className="h-20 w-24 rounded-lg"
        />

        <Image
          src="/shop_banner_img8.jpg"
          alt="logo Image"
          height={600}
          width={600}
          className="h-20 w-24 rounded-lg"
        />

        <Image
          src="/shop_banner_img9.jpg"
          alt="logo Image"
          height={600}
          width={600}
          className="h-20 w-24 rounded-lg"
        />
      </div>
    </div>
  );
}
