import React from "react";
import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import Image from "next/image";
import PatientConsultantForm from "@/ui/forms/PatientConsultantForm";
import {getDictionary} from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{lang: "en" | "fa" | "ar"}>;
}) {
  const {lang} = await params;
  const {about_page} = await getDictionary(lang);

  return (
    <>
      {/* <Dropdown options={site_languages} /> */}
      <PageHeaderSlider
        lang={lang}
        pageTitle={about_page?.page_title}
        imageSrc="/header-slider-1.webp"
      />

      <section className="lg:mb-24 mb-10 lg:mt-10 mt-4 container ">
        <div className="bg-[#F8F9FA] rounded-4xl lg:px-40 lg:py-16 p-2">
          {/* <div className="mb-5 flex items-center justify-center">
            <div className="rounded-xl overflow-hidden relative w-[140px] h-[140px]">
              <Image
                src={"/shomalhospital-ipd-logo.jpg"}
                alt="shomalhospital ipd logo"
                className="object-cover"
                fill
              />
            </div>
          </div> */}
          <h3 className="lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {about_page?.introduction}
          </h3>
          <div className="mt-16">
            <p
              className={`${
                lang === "en" ? "text-left" : "text-right"
              } lg:text-[1.2rem] leading-relaxed text-[#454547]`}
            >
              {about_page?.introduction_description_headText}
            </p>
            <br />
            <br />
            <ul className=" space-y-2 lg:text-[1.2rem]  text-[#454547]">
              <div
                className="introduction_description_subText"
                dangerouslySetInnerHTML={{
                  __html: about_page?.introduction_description_subText,
                }}
              />
            </ul>
          </div>
        </div>

        {/* <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-5">
            <div className="custom-shadow p-10 rounded-lg">
              <form action="" className="space-y-4">
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="">نام شما</label>
                  <input
                    type="text"
                    placeholder=""
                    className="border-[1px] border-neutral-400 rounded-lg py-2 px-4"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="">ایمیل شما</label>
                  <input
                    type="text"
                    placeholder=""
                    className="border-[1px] border-neutral-400 rounded-lg py-2 px-4"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="">پیام شما</label>
                  <textarea
                    rows={4}
                    placeholder=""
                    className="border-[1px] border-neutral-400 rounded-lg py-2 px-4"
                  ></textarea>
                </div>
                <div className="space-y-2 flex flex-col">
                  <button className="flex items-center justify-center py-4 rounded-lg text-center text-sm font-semibold bg-blue-primary text-white">
                    ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-7">
            <div className="custom-shadow p-10 rounded-lg"></div>
          </div>
        </div> */}
      </section>
      <section className="lg:mb-24 mb-10 lg:mt-10 mt-4 container ">
        <div className="rounded-4xl  py-16">
          <h3
            className={`lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] `}
          >
            {about_page?.department_introduction}
          </h3>
          <div className="mt-10">
            {/* <p className="text-justify text-[1.2rem] leading-8 text-[#454547]">
              تیم بیماران بین‌الملل در بیمارستان ما متشکل از گروهی حرفه‌ای از متخصصین مراقبت سلامت، مترجمین پزشکی، و مشاوران سفر درمانی است که به صورت ۲۴ ساعته و چندزبانه در خدمت بیماران خارجی هستند.
            </p> */}
            <p className="text-center lg:text-[1.2rem] leading-8 text-[#454547]">
              {about_page?.department_introduction_subtitle}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-10 lg:gap-y-0 gap-y-4 mt-10 lg:h-[600px]">
            <div className="lg:col-span-1 col-span-3 rounded-2xl border-[1px] border-neutral-200 overflow-hidden relative">
              <div className="lg:h-[410px] h-[300px] relative before:absolute before:bottom-0 before:bg-gradient-to-t before:from-white before:to-transparent before:z-10 before:w-full before:h-full before:top-0 before:right-0">
                <Image src="/doctor.jpg" fill alt="" className="object-fill" />
              </div>
              <div className=" h-full px-6 py-10 space-y-2 ">
                <h3 className="lg:text-2xl text-lg font-black text-black">
                  {about_page?.dr_jafarian?.name}
                </h3>
                <div>
                  <span className="text-secondary lg:text-xl font-medium">
                    {about_page?.dr_jafarian?.expertise}
                  </span>
                </div>
                <div>
                  <span className="text-black lg:text-base text-sm font-medium">
                    {about_page?.dr_jafarian?.position}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-3 rounded-2xl border-[1px] border-neutral-200 overflow-hidden relative">
              <div className="lg:h-[410px] h-[200px] relative before:absolute before:bottom-0 before:bg-gradient-to-t before:from-white before:to-transparent before:z-10 before:w-full before:h-full before:top-0 before:right-0">
                <Image
                  src="/motamedi.jpg"
                  fill
                  alt=""
                  className="object-fill "
                />
              </div>
              <div className=" h-full px-6 py-10 space-y-2 ">
                <h3 className="text-2xl font-black   text-black">
                  {about_page?.dr_motamedi?.name}
                </h3>
                <div>
                  <span className="text-secondary text-xl font-medium">
                    {about_page?.dr_motamedi?.expertise}
                  </span>
                </div>
                <div>
                  <span className="text-black  font-medium">
                    {about_page?.dr_motamedi?.position}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 col-span-3 rounded-2xl border-[1px] border-neutral-200 overflow-hidden relative">
              <div className="lg:h-[410px] h-[200px] relative before:absolute before:bottom-0 before:bg-gradient-to-t before:from-white before:to-transparent before:z-10 before:w-full before:h-full before:top-0 before:right-0">
                <Image
                  src="/heidarnejad.jpg"
                  fill
                  alt=""
                  className="object-cover "
                />
              </div>
              <div className=" h-full px-6 py-10 space-y-2 ">
                <h3 className="text-2xl font-black   text-black">
                  {about_page?.heidarnejad?.name}
                </h3>
                <div>
                  <span className="text-secondary text-xl font-medium">
                    {about_page?.heidarnejad?.expertise}
                  </span>
                </div>
                <div>
                  <span className="text-black  font-medium">
                    {about_page?.heidarnejad?.position}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mb-24 mb-10 lg:mt-10 mt-4 container ">
        <div className="bg-[#F8F9FA] rounded-4xl lg:px-40 lg:py-16 p-2">
          <h3 className="lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {about_page?.form?.head_text}
          </h3>
          <p className="text-center lg:text-[1.2rem] leading-8 text-[#454547] mt-10">
            {about_page?.form?.sub_text}
          </p>
          <PatientConsultantForm lang={lang} dict={about_page} />
        </div>
      </section>
    </>
  );
}
