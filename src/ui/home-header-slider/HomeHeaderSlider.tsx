"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";

export default function HomeHeaderSlider() {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Pagination, Navigation, Autoplay]}
   
      className="lg:h-[75vh] h-[460px]"
    >
      {/* <div className="container absolute z-10 bottom-0">
        <div className="p-20">
          <CustomLink
            label="دریافت نوبت آنلاین"
            href="/reservation"
            className="bg-blue-secondary text-white flex items-center font-medium w-fit px-20 py-4 rounded-xl"
          />
        </div>
      </div> */}
      <SwiperSlide className="h-full w-full relative">
        <Image
          loading="lazy"
          src={"/header-slider-1.webp"}
          fill
          style={{color: "transparent", objectFit: "cover",objectPosition:"center"}}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          loading="lazy"
          src={"/header-slider-1.webp"}
          fill
          style={{color: "transparent", objectFit: "cover"}}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          loading="lazy"
          src={"/header-slider-1.webp"}
          fill
          style={{color: "transparent", objectFit: "cover"}}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          loading="lazy"
          src={"/header-slider-1.webp"}
          fill
          style={{color: "transparent", objectFit: "cover"}}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
