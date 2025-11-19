"use client";
import React, {useEffect, useState} from "react";
import Menu from "../menu/Menu";
import {DefaultMenuLinks, Menu_buttons} from "@/constants/menu/menu.const";
import Link from "next/link";
import Image from "next/image";
import CustomLink from "../global/CustomLink";
import {languages_types} from "@/types";
import MobileMenu from "../menu/MobileMenu";
import {getHref} from "@/utils/functions";

export default function TopMenu({lang}: {lang: languages_types}) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`w-full z-30 transition-all duration-300 container flex lg:justify-around justify-between items-center 
      ${
        isSticky
          ? "h-[80px] lg:fixed top-0 custom-shadow backdrop-blur-3xl bg-white/80"
          : "lg:h-[120px] h-[60px] bg-white relative"
      }`}
        // className="bg-white container   sticky top-0 z-30"
      >
        {/* <div className="top-0 absolute h-[40px] bg-radial bg-secondary/30 backdrop-blur-2xl w-full">

      </div> */}
        <div className="lg:w-[210px] flex gap-x-10 transition-all duration-300 items-center ">
          <Link href={"/"} className="flex items-center gap-x-2">
            <div
              className={`relative ${
                isSticky
                  ? " h-[70px] w-[70px]"
                  : "lg:h-[90px] h-[50px] lg:w-[97px] w-[40px]"
              }`}
            >
              <Image
                loading="lazy"
                src="/shomalhospital-ipd-logo.png"
                fill
                alt="shomal hospital"
                style={{color: "transparent", fill: "red", objectFit: "fill"}}
              />
            </div>
          </Link>
        </div>

        <MobileMenu lang={lang} />
        <div className="lg:grid hidden grid-cols-12  gap-x-1 w-full h-full items-center">
          <div className="col-span-8 flex items-center justify-center w-full h-full">
            <Menu lang={lang} direction="horizontal" items={DefaultMenuLinks} />
          </div>
          <div className="col-span-4 flex items-center justify-center gap-x-5">
            {/* <a
            href="tel:0114492"
            className="text-white relative group  flex items-end hover:bg-blue-primary p-3 hover:text-white transition-all rounded-xl"
          >
            <span className="hidden group-hover:block absolute left-3 h-[24px] w-[24px] animate-ping rounded-xl bg-white opacity-35"></span>

            <span className="font-bold text-xl">
              {toPersianNumber("011-4492")}
            </span>
            <span className="group-hover:animate-pulse">
              <TelephoneSvg size="28" />
            </span>
          </a> */}
            {/* <Dropdown options={site_languages} /> */}

            <CustomLink
              href={getHref("/contact-us#request_accept", lang)}
              label={
                Menu_buttons.request_to_accept[lang as languages_types] || ""
              }
              className={`bg-blue-primary text-white rounded-full ${
                isSticky ? "py-4 px-4" : "py-4 px-6"
              } text-sm font-semibold shadow-lg flex items-center whitespace-nowrap  shadow-neutral-300 hover:shadow-none transition-all duration-200`}
            />
            <CustomLink
              href={getHref("/upload-documents", lang)}
              label={
                Menu_buttons.upload_document[lang as languages_types] || ""
              }
              className={`bg-secondary text-white rounded-full ${
                isSticky ? "py-4 px-4" : "py-4 px-6"
              } text-sm font-semibold shadow-lg flex items-center whitespace-nowrap shadow-neutral-300 hover:shadow-none transition-all duration-200`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
