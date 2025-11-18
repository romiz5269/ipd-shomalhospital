import {languages_types} from "@/types";
import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import React from "react";
import {getDictionary} from "../dictionaries";
import { pages_titles } from "@/constants";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: pages_titles.patient_rights_charter['fa'] + ' | ' +'بیمارستان شمال',
  description: "Shomal Hospital IPD patient rights charter page",
};
export default async function PatientRights({
  params,
}: {
  params: Promise<{lang: languages_types}>;
}) {
  const {lang} = await params;
  const {patient_rights_charter} = await getDictionary(lang);
  return (
    <>
      <PageHeaderSlider
        lang={lang}
        pageTitle={patient_rights_charter?.page_title}
        imageSrc="/header-slider-1.webp"
      />
      <section className="my-16 container">
        <div className="bg-[#F8F9FA] rounded-4xl px-20 py-16">
          <h3 className="text-[3em] font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {patient_rights_charter?.page_title}
          </h3>
          <div className="mt-16">
            <h4 className="text-justify text-[1.2rem] leading-relaxed text-secondary font-medium">
              {patient_rights_charter?.section_one?.title}
            </h4>
            <br />
            <br />
            <div
              className="introduction_description_subText "
              dangerouslySetInnerHTML={{
                __html: patient_rights_charter?.section_one?.content,
              }}
            />

            <h4 className="text-justify text-[1.2rem] leading-relaxed text-secondary font-medium my-10">
              {patient_rights_charter?.section_two?.title}
            </h4>
            <div
              className="introduction_description_subText"
              dangerouslySetInnerHTML={{
                __html: patient_rights_charter?.section_two?.content,
              }}
            />
            <h4 className="text-justify text-[1.2rem] leading-relaxed text-secondary font-medium my-10">
              {patient_rights_charter?.section_three?.title}
            </h4>
            <div
              className="introduction_description_subText"
              dangerouslySetInnerHTML={{
                __html: patient_rights_charter?.section_three?.content,
              }}
            />
            <h4 className="text-justify text-[1.2rem] leading-relaxed text-secondary font-medium my-10">
              {patient_rights_charter?.section_four?.title}
            </h4>

            <div
              className="introduction_description_subText"
              dangerouslySetInnerHTML={{
                __html: patient_rights_charter?.section_four?.content,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
