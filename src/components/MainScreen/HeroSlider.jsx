import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
  return (
    <div>
      <div className="lg:h-[360px] w-full md:block hidden">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            <div className="">
              <SwiperSlide>
                <div className="w-[100%]">
                  <Image
                    className="pt-5"
                    src="/banner1.png"
                    alt="Product"
                    width={2000}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-[100%] h-fit ">
                  <Image
                    className="pt-5"
                    src="/banner2.png"
                    alt="Product"
                    width={2000}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[100%] h-fit">
                  <Image
                    className=""
                    src="/banner3.png"
                    alt="Product"
                    width={2000}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-[100%] h-fit">
                  <Image
                    className=""
                    src="/banner4.png"
                    alt="Product"
                    width={2000}
                    height={100}
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </>
      </div>
      {/* <div className="lg:hidden md:hidden block">
        <MobileHeroSlider />
      </div> */}
    </div>
  );
}
