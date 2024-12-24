"use client";
import Image from "next/image";
import HeroSlider from "../components/MainScreen/HeroSlider";
import Ad from "../components/MainScreen/Ad";
import AdBanner from "../components/MainScreen/AdBanner";
import BestDeals from "../components/MainScreen/BestDeals";
import TopDeals from "../components/MainScreen/TopDeals";
import PreferedSearch from "../components/MainScreen/PreferedSearch";
import ExclusiveSearch from "../components/MainScreen/ExclusiveSearch";
import SpecialOffer from "../components/MainScreen/SpecialOffer";
import QualityProduct from "@/components/MainScreen/QualityProduct";
import MostSerach from "@/components/MainScreen/MostSeacrch";
import Deals from "@/components/MainScreen/Deals";
import MobileCategory from "@/components/MobileScreen/MobileCategory";
import MobileAd from "@/components/MobileScreen/MobileAd";
import MobileDeals from "@/components/MobileScreen/MobileDeals";
import MobileSponsored from "@/components/MobileScreen/MobileSponsored";
import MainAd from "@/components/MobileScreen/MainAd";
import Sponsered from "@/components/MobileScreen/Sponsered";
import MobileHeroSlider from "@/components/MobileScreen/MobileHeroSlider";
import detail from "@/Detail/detail";
import DealAd from "@/components/MainScreen/DealAd";
import ThreeAd from "@/components/MainScreen/ThreeAd";
export default function Home() {
  return (
    <div className="bg-white text-black w-full">
      <div className="lg:hidden md:hidden block">
        <MobileCategory />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileHeroSlider />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileAd />
      </div>
      <div className="lg:hidden md:hidden block">
        <Sponsered detail={detail[0].tag} />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileSponsored detail={detail[1].tag} />
      </div>

      <div className="lg:hidden md:hidden block">
        <MobileDeals detail={detail[2].tag} />
      </div>
      <div className="lg:hidden md:hidden block pt-2">
        <MainAd />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileAd />
      </div>
      <div className="lg:hidden md:hidden block">
        <Sponsered detail={detail[3].tag} />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileSponsored detail={detail[4].tag} />
      </div>

      <div className="lg:hidden md:hidden block ">
        <MobileDeals detail={detail[5].tag} />
      </div>
      <div className="lg:hidden md:hidden block pt-2">
        <MainAd />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileAd />
      </div>
      <div className="lg:hidden md:hidden block">
        <Sponsered detail={detail[6].tag} />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileSponsored detail={detail[7].tag} />
      </div>
      <div className="lg:hidden md:hidden block">
        <BestDeals detail={detail[8].tag} />
      </div>
      <div className="lg:hidden md:hidden block pt-2">
        <MainAd />
      </div>
      <div className="lg:hidden md:hidden block">
        <Sponsered detail={detail[9].tag} />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileSponsored detail={detail[7].tag} />
      </div>

      <div className="lg:pb-10">
        <HeroSlider className="lg:mb-10 md:mb-5" />
      </div>
      <div className="lg:mb-8 md:mb-2">
        <Ad />
      </div>
      <div className=" hidden md:block ">
        <BestDeals details={detail[5].tag} />
      </div>
      <div className=" hidden md:block ">
        <ThreeAd detail={detail[3].tag} />
      </div>
      <div className="lg:mb-8 md:mb-5">
        <TopDeals detail={detail[9].tag} />
      </div>
      <div className="lg:hidden md:hidden block pt-2">
        <MainAd />
      </div>
      <div className="lg:mb-8 md:mb-5">
        <AdBanner />
      </div>
      <div className="lg:hidden md:hidden block">
        <Sponsered detail={detail[10].tag} />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileSponsored detail={detail[11].tag} />
      </div>
      <div className="lg:mb-8 md:mb-5">
        <PreferedSearch />
      </div>
      <div className="lg:hidden md:hidden block pt-2">
        <MainAd />
      </div>
      <div className="lg:hidden md:hidden block">
        <Sponsered detail={detail[12].tag} />
      </div>
      <div className="lg:hidden md:hidden block">
        <MobileSponsored detail={detail[13].tag} />
      </div>
      <div className="lg:mb-8 md:mb-5">
        <ExclusiveSearch />
      </div>
      <div className="lg:hidden md:hidden block pt-2 pb-20">
        <MainAd />
      </div>
      <div className="lg:mb-8 md:mb-5">
        <SpecialOffer />
      </div>
      {/* <div className="lg:mb-8 md:mb-5">
        <QualityProduct />
      </div>
      <div className="lg:mb-8 md:mb-5">
        <MostSerach />
      </div> */}
      <div className="md:block hidden lg:mb-8 md:mb-5">
        <DealAd />
      </div>

      <div className=" hidden md:block ">
        <BestDeals details={detail[2].tag} />
      </div>
      <div className=" hidden md:block ">
        <BestDeals details={detail[3].tag} />
      </div>
      <div className=" hidden md:block ">
        <MostSerach details={detail[1].tag} />
      </div>

      <div className=" hidden md:block ">
        <BestDeals details={detail[4].tag} />
      </div>
      <div className=" hidden md:block ">
        <ThreeAd detail={detail[3].tag} />
      </div>
      <div className=" hidden md:block ">
        <BestDeals details={detail[6].tag} />
      </div>
      <div className="lg:pb-8 md:pb-20">
        <Deals />
      </div>
    </div>
  );
}
