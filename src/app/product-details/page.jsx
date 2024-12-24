import React from "react";
import MainPd from "../../components/MainPd.jsx";
import MobilePd from "../../components/MobilePd.jsx";
export default function page() {
  return (
    <div>
      <div className="lg:block md:block hidden">
        <MainPd />
      </div>
      <div className=" md:hidden block">
        <MobilePd />
      </div>
    </div>
  );
}
