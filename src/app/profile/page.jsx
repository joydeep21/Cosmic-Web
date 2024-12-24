import React from "react";
import MobileProfile from "../../components/MobileScreen/MobileProfile.jsx";
import OfferZone from "../../components/OfferZone.jsx";
export default function page() {
  return (
    <div>
      {/* <div className="lg:block md:block hidden">
        <MainOfferZone />
      </div> */}
      <div className=" md:hidden block">
        <MobileProfile />
      </div>
    </div>
  );
}
