import React from "react";
import MainOfferZone from "../../components/MainOfferZone.jsx";
import OfferZone from "../../components/OfferZone.jsx";
export default function page() {
  return (
    <div>
      <div className="lg:block md:block hidden">
        <MainOfferZone />
      </div>
      <div className=" md:hidden block">
        <OfferZone />
      </div>
    </div>
  );
}
