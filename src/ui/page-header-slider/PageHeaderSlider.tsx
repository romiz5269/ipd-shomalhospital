"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
import { Page_header_slider } from "@/constants";
import { languages_types } from "@/types";

export default function PageHeaderSlider({
  pageTitle,
  imageSrc,
  lang,
}: {
  pageTitle: string;
  imageSrc: string;
  lang: string;
}) {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Pagination, Navigation, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="lg:h-[50vh] h-[460px]"
    >
      <div
        className={`container absolute z-10 top-0 w-full h-full  flex items-end ${
          lang === "en" ? "bg-linear-to-r" : "bg-linear-to-l"
        } from-white/70 to-transparent`}
      >
        <div className="py-20 space-y-2">
          <h1 className="text-[40px] text-blue-primary font-semibold">
            {pageTitle}
          </h1>
          <p className="text-blue-primary lg:text-3xl text-lg  font-medium">
           {Page_header_slider.hospital_name[lang as languages_types]}
          </p>
          <p className="text-blue-primary lg:text-xl  text-md font-medium">
            {Page_header_slider.n1_authority_validation[lang as languages_types]}
          </p>
        </div>
      </div>
      <SwiperSlide className="h-full w-full relative">
        <Image
          loading="lazy"
          src={imageSrc}
          fill
          style={{
            color: "transparent",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt=""
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Image
          loading="lazy"
          src={"/header-slider-1.webp"}
          fill
          style={{color: "transparent", objectFit: "cover"}}
          alt=""
        />
      </SwiperSlide> */}
    </Swiper>
  );
}
