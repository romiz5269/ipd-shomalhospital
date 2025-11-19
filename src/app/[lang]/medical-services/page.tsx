import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import Link from "next/link";
import React, {lazy, Suspense} from "react";
import {packages_types} from "@/types";
import { getDictionary } from "../dictionaries";
import { Metadata } from "next";
import { pages_titles } from "@/constants";
export const metadata: Metadata = {
  title: pages_titles.medical_services['fa'] + ' | ' +'بیمارستان شمال',
  description: "Shomal Hospital IPD medical services page",
};


export default async function MedicalServices({
  params,
}: {
  params: Promise<{lang: "fa" | "en"}>;
}) {
  const {lang} = await params;
  const {medical_packages_headTitle,our_medical_packages,medical_packages_data} =await getDictionary(lang)

  return (
    <>
      <PageHeaderSlider
        pageTitle={medical_packages_headTitle}
        lang={lang}
        imageSrc="/header-slider-1.webp"
      />
      <section className="mb-24 mt-10 container ">
        <div className="bg-[#F8F9FA] rounded-4xl md:px-40 px-4 md:py-16 py-4">
          <h3 className="md:text-[3em] text-2xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {medical_packages_headTitle}
          </h3>
          <div className="mt-16">
            {/* <p className="text-justify text-[1.2rem] leading-relaxed text-[#454547]">
            </p>
            <br />
            <br /> */}
            <div className="introduction_description_subText " dangerouslySetInnerHTML={{__html:our_medical_packages}}/>
            <div className="w-full mt-20 grid grid-cols-12 gap-6">
              {medical_packages_data.map((item) => {
                const LazyComponent = lazy(
                  () => import(`@/ui/components/icons/${item.svg}.tsx`)
                );
                return (
                  <div className="md:col-span-4 col-span-12" key={item.id}>
                    <Link
                      href={`/medical-services/${item.slug}`}
                      className="flex flex-col items-center justify-center py-10 w-full h-full  rounded-xl border-[1px] border-neutral-200 bg-white  hover:border-secondary"
                    >
                      <span>
                        <Suspense
                          fallback={<div>در حال بارگذاری...</div>}
                          key={item.id}
                        >
                          <LazyComponent />
                        </Suspense>
                      </span>
                      <span className="text-xl font-medium mt-4">
                        {item.title.toString()}
                      </span>
                    </Link>
                  </div>
                );
              })}

              {/* <div className="col-span-4 rounded-xl border-[1px] border-neutral-200 bg-white flex flex-col items-center justify-center py-10">
                <span>
                  <HysterectomySvg />
                </span>
                <span className="text-xl font-medium mt-4">
                  پکیج هیسترکتومی
                </span>
              </div>
              <div className="col-span-4 rounded-xl border-[1px] border-neutral-200 bg-white flex flex-col items-center justify-center py-10">
                <span>
                  <CardiacSvg />
                </span>
                <span className="text-xl font-medium mt-4">پکیج قلب</span>
              </div>
              <div className="col-span-4 rounded-xl border-[1px] border-neutral-200 bg-white flex flex-col items-center justify-center py-10">
                <span>
                  <BeautySvg />
                </span>
                <span className="text-xl font-medium mt-4">پکیج زیبایی</span>
              </div>
              <div className="col-span-4 rounded-xl border-[1px] border-neutral-200 bg-white flex flex-col items-center justify-center py-10">
                <span className="text-blue-primary">
                  <OrthopedicSvg />
                </span>
                <span className="text-xl font-medium mt-4">پکیج ارتوپدی</span>
              </div>
              <div className="col-span-4 rounded-xl border-[1px] border-neutral-200 bg-white flex flex-col items-center justify-center py-10">
                <span className="text-blue-primary">
                  <BrainSurgerySvg />
                </span>
                <span className="text-xl font-medium mt-4">پکیج جراحی مغز</span>
              </div>
              <div className="col-span-4 rounded-xl border-[1px] border-neutral-200 bg-white flex flex-col items-center justify-center py-10">
                <span className="text-blue-primary">
                  <EntSvg />
                </span>
                <span className="text-xl font-medium mt-4">
                  پکیج گوش و حلق و بینی
                </span>
              </div> */}
              {/* <Accordion items={PACKAGE_SERVICES} /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
