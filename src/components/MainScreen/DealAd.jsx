import React from "react";
import QualityProduct from "./QualityProduct";
import MostSearch from "./MostSeacrch";
import BestDeals from "./BestDeals";
import detail from "@/Detail/detail";
import MainAd from "../MobileScreen/MainAd";
import Image from "next/image";
export default function DealAd() {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div>
          <QualityProduct />
        </div>
        <Image
          src="/shop_banner_img7.jpg"
          alt="logo Image"
          height={600}
          width={600}
          className="lg:h-[300px] lg:w-[743px] md:h-[110px] md:w-[220px] mt-11 -ml-16 rounded-md"
        />
      </div>
    </div>
  );
}
