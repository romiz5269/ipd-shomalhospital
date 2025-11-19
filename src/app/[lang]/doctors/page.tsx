import {DoctorDataType, languages_types} from "@/types";
import DoctorsFilterBox from "@/ui/forms/DoctorsFilterBox";
import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import {toPersianNumber} from "@/utils/functions";
import Image from "next/image";
import React from "react";
import {getDictionary} from "../dictionaries";
import {Metadata} from "next";
import {pages_titles} from "@/constants";
export const metadata: Metadata = {
  title: pages_titles.doctors["fa"] + " | " + "بیمارستان شمال",
  description: "Shomal Hospital IPD Doctors page",
};

export default async function DoctorsPage({
  params,
  searchParams,
}: {
  params: Promise<{lang: languages_types}>;
  searchParams: Promise<{page: string; name: string; expertise: string}>;
}) {
  const {lang} = await params;
  const {name = "", expertise = ""} = await searchParams;
  const {
    our_doctors,
    license_number,
    search_by_name,
    search,
    select_expertise,
    doctors,
  } = await getDictionary(lang);
  const filteredData = doctors.filter((doctor) => {
    const nameMatch = name
      ? Object.values(doctor.fullname.toString())
          .join(" ")
          .toLowerCase()
          .includes(name.toLowerCase())
      : true;

    const expertiseMatch = expertise
      ? doctor.category.id.toString() === expertise
      : true;

    return nameMatch && expertiseMatch;
  });

  return (
    <>
      <PageHeaderSlider
        lang={lang}
        pageTitle={our_doctors}
        imageSrc="/header-slider-1.webp"
      />
      <div className="my-16 container">
        <div className="bg-[#F8F9FA] rounded-4xl lg:px-20 md:py-16 py-4">
          <h3 className="lg:text-[3em] text-2xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {our_doctors}
          </h3>
          <DoctorsFilterBox
            lang={lang}
            defaultName={name}
            defaultExpertise={expertise}
            dict={{search, search_by_name, select_this: select_expertise}}
          />
          <div className="grid grid-cols-4 gap-10 mt-10 ">
            {filteredData?.map((doctor) => (
              <div
                key={doctor.id}
                className="lg:col-span-1 col-span-4 rounded-2xl border-[1px] border-neutral-200 overflow-hidden relative"
              >
                <div className="lg:h-[250px] h-[250px] relative before:absolute before:bottom-0 before:bg-gradient-to-t before:from-white before:to-transparent before:z-10 before:w-full before:h-full before:top-0 before:right-0">
                  <Image
                    src={doctor.image !=="#" ? `/${doctor.image}` : "/doctor.jpg"}
                    fill
                    alt=""
                    className="object-fill"
                  />
                  <span className="absolute top-2 right-2 p-2 rounded-full text-center text-xs font-semibold bg-blue-primary text-white flex items-center whitespace-nowrap">
                    {doctor.category.name.toString()}
                  </span>
                </div>
                <div className=" h-full px-6 py-10 space-y-2 bg-white">
                  <h3 className="lg:text-xl text-lg font-black text-black">
                    {doctor.fullname.toString()}
                  </h3>

                  <div>
                    <div className="text-secondary">
                      <ul className="space-y-[2px]">
                        {doctor.specialties.map((item) => (
                          <li
                            key={item.id}
                            className="list-inside list-disc md:text-base text-sm font-medium"
                          >
                            {item.name.toString()}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <span className="text-black text-sm font-medium">
                      {license_number} :{" "}
                      {lang === "en"
                        ? doctor?.doctor_identify_number
                        : toPersianNumber(
                            String(doctor?.doctor_identify_number)
                          )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
