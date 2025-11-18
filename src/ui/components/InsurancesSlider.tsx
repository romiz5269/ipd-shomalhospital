"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
export default function InsurancesSlider() {
  return (
    <>
      <Swiper
        loop={true}
        rewind={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        slidesPerView={8}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        spaceBetween={40}
        modules={[Navigation, Autoplay]}
        className="h-[120px]"
      >
        <SwiperSlide className="h-full !w-[120px] rounded-xl overflow-hidden ">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image
                loading="lazy"
                src={"/bank-melat.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full !w-[120px] rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image
                loading="lazy"
                src={"/bimeh-ma.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full !w-[120px] rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image
                loading="lazy"
                src={"/bimeh-moallem.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full !w-[120px] rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image
                loading="lazy"
                src={"/bimeh-novin.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full !w-[120px] rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image
                loading="lazy"
                src={"/bimeh-pasargad.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full !w-[120px] rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image
                loading="lazy"
                src={"/bimeh-saman.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full !w-[120px] rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image
                loading="lazy"
                src={"/bimeh-tejarat-no.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        {/* <SwiperSlide className="h-full w-full rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image  loading="lazy"
                src={"/bank-melat.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image  loading="lazy"
                src={"/bank-melat.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image  loading="lazy"
                src={"/bank-melat.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image  loading="lazy"
                src={"/bank-melat.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full rounded-xl overflow-hidden">
          <Link href={"/"} className="h-full w-full ">
            <div className="relative h-full w-full">
              <Image  loading="lazy"
                src={"/bank-melat.png"}
                fill
                style={{color: "transparent", objectFit: "fill"}}
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
