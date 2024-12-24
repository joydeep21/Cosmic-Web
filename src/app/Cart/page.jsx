import MobileCart from "@/components/MobileScreen/MobileCart";
import React from "react";
import MainCart from "../../components/MainScreen/MainCart";

export default function page() {
  return (
    <div>
      <div className="md:hidden block">
        <MobileCart />
      </div>
      <div className="md:block hidden">
        <MainCart />
      </div>
    </div>
  );
}
