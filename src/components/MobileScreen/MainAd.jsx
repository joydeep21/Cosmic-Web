import React from "react";
import Image from "next/image";

export default function MainAd() {
  return (
    <div className="w-full bg-white px-4 pb-2">
      <div className="flex gap-2 justify-between">
        <Image
          src="/speaker.png"
          alt="logo Image"
          height={600}
          width={600}
          className="h-20 rounded-lg"
        />
      </div>
    </div>
  );
}
