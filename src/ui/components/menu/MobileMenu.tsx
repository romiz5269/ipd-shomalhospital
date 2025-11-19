"use client";
import {DefaultMenuLinks} from "@/constants/menu/menu.const";
import React, {useState} from "react";
import CustomLink from "../global/CustomLink";
import {languages_types} from "@/types";
import ChevronLeftSvg from "../icons/ChevronLeftSvg";
import {getHref} from "@/utils/functions";

export default function MobileMenu({lang}: {lang: languages_types}) {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <button
        type="button"
        className="lg:hidden block text-blue-primary"
        onClick={() => setOpen(!open)}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 15 15"
          height="35"
          width="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      {open && (
        <div
          className="lg:hidden fixed top-0 right-0 z-50 bg-black/30 backdrop-blur-sm w-full h-screen"
          onClick={(e) => {
            
            setOpen(!open);
          }}
        >
          <div
            className={`absolute top-0 right-0 h-full ${
              open ? "w-[80%]" : "w-0"
            } bg-white transition-all duration-300`}
            onClick={(e)=>e.stopPropagation()}
          >
            <div className="p-4">
              <div className="w-full flex items-center justify-end">
                <button className="" onClick={() => setOpen(!open)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                      fill="#0F1729"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-5">
                {DefaultMenuLinks.map((link) => (
                  <div key={link.id} className="w-full h-fit">
                    {link.sub.length > 0 ? (
                      <div className="flex items-center justify-between">
                        <div className="w-full  space-y-4 overflow-hidden">
                          <div
                            key={link.id}
                            className="rounded-2xl py-4"
                          >
                            <button
                              className="flex w-full items-center justify-between text-right h-full cursor-pointer"
                              onClick={() => toggle(link.id)}
                            >
                              <span >
                                {link.label[lang]}
                              </span>
                              <span
                                className={`transition-all duration-300  ${
                                  openIndex === link.id
                                    ? "rotate-90"
                                    : "-rotate-90"
                                }`}
                              >
                                <ChevronLeftSvg size="14" />
                              </span>
                            </button>

                            <div>
                              {openIndex === link.id && (
                                <div className="bg-neutral-200 p-4 mt-4 space-y-10 rounded-2xl">
                                  <div className="overflow-hidden text-gray-600 mt-2 leading-relaxed text-base">
                                    {link.sub.map((submenu) => (
                                      <div
                                        key={submenu.id}
                                        className="w-full text-blue-primary hover:font-medium  p-1 px-3"
                                      >
                                        <CustomLink
                                          href={getHref(submenu.href, lang)}
                                          label={submenu.label[lang]}
                                          className="text-sm font-medium text-black hover:text-secondary transition-all"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex">
                        <CustomLink
                          href={getHref(link.href, lang)}
                          label={link.label[lang]}
                          className="w-full py-4"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
