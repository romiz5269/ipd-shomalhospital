"use client";

import {useState} from "react";
import ChevronLeftSvg from "../icons/ChevronLeftSvg";
import Image from "next/image";
import {default_info, PHONE_NUMBERS} from "@/constants";

interface AccordionProps {
  title: string;
  description: string;
  thumbnail: string;
  services: string;
  routine: string;
  notes?: string | undefined;
  price: string;
  package_price?: string;
  served_jobs?: string;
  email?: string;
  important_notes?: string;
  whatsapp?: string;
  routine_title?: string;
  defaultOpen?: number;
  index: number;
}

export default function Accordion({
  title,
  index,
  description,
  services,
  routine,
  notes = "",
  thumbnail,
  price,
  package_price,
  served_jobs,
  important_notes,
  email,
  whatsapp,
  routine_title,
  defaultOpen,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ?? null
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  space-y-4 overflow-hidden">
      <div key={index} className="md:p-4 py-4 px-1 bg-secondary rounded-2xl ">
        <button
          className="flex w-full items-center justify-between text-right h-full cursor-pointer"
          onClick={() => toggle(index)}
        >
          <span className="md:text-lg text-sm font-semibold text-white">
            {title}
          </span>
          <span
            className={` text-white transition-all duration-300  ${
              openIndex === index ? "rotate-90" : "-rotate-90"
            }`}
          >
            <ChevronLeftSvg size="16" />
          </span>
        </button>

        <div>
          {openIndex === index && (
            <div className="bg-white md:p-10 px-3 py-1 mt-10 space-y-10">
              {thumbnail && (
                <div className="md:h-[600px] h-[200px] w-[80%] mx-auto relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                  <Image
                    src={`/packages/${thumbnail}`}
                    fill
                    className="object-contain"
                    alt=""
                  />
                </div>
              )}
              {description && (
                <div
                  className="overflow-hidden text-gray-600 mt-2 leading-relaxed md:text-base text-sm"
                  dangerouslySetInnerHTML={{__html: description}}
                />
              )}
              {routine && (
                <>
                  <h4 className="font-bold text-lg">{routine_title} :</h4>
                  <div
                    className="overflow-hidden text-gray-600  leading-relaxed text-base "
                    dangerouslySetInnerHTML={{__html: routine}}
                  />
                </>
              )}
              {services && (
                <>
                  <h4 className="font-bold text-lg">
                    {served_jobs} : 
                  </h4>
                  <div
                    className="overflow-hidden text-gray-600  leading-relaxed text-base packages_subpackages_list"
                    dangerouslySetInnerHTML={{__html: services}}
                  />
                </>
              )}
              {price && (
                <>
                  <h4 className="font-bold text-lg">{package_price}:</h4>
                  <div
                    className="overflow-hidden text-gray-600  leading-relaxed text-base packages_subpackages_list"
                    dangerouslySetInnerHTML={{__html: price}}
                  />
                </>
              )}
              {notes && (
                <>
                  <h4 className="font-bold text-lg">{important_notes} :</h4>
                  <div
                    className="overflow-hidden text-gray-600  leading-relaxed text-base "
                    dangerouslySetInnerHTML={{__html: notes}}
                  />
                </>
              )}
              <>
                <h4 className="font-bold text-lg"></h4>
                <div className="overflow-hidden text-gray-600  leading-relaxed text-base ">
                  <div>
                    {email} :{" "}
                    <a href={`mailto:${default_info.email}`}>
                      {default_info.email}
                    </a>
                  </div>
                  <div>
                    {whatsapp} :{" "}
                    <a
                      dir="ltr"
                      href={`https://wa.me/${+PHONE_NUMBERS.ipd_technician
                        .href}`}
                    >
                      {PHONE_NUMBERS.ipd_technician.href}
                    </a>
                  </div>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
