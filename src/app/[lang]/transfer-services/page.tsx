import {languages_types} from "@/types";
import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import React from "react";
import {getDictionary} from "../dictionaries";
import Image from "next/image";
import TransferServicesPackages from "@/ui/TransferServicesPackages";
import {toPersianNumber} from "@/utils/functions";
import {Metadata} from "next";
import {pages_titles} from "@/constants";
export const metadata: Metadata = {
  title: pages_titles.transfer_services["fa"] + " | " + "بیمارستان شمال",
  description: "Shomal Hospital IPD transfer services page",
};
export default async function TransferServicePage({
  params,
}: {
  params: Promise<{lang: languages_types}>;
}) {
  const {lang} = await params;
  const {
    transfer_service_page,
    package_price,
    phone_number,
    email,
    oxin_hotel_location,
    olympic_hotel_location,
  } = await getDictionary(lang);
  return (
    <>
      <PageHeaderSlider
        pageTitle={transfer_service_page.page_title}
        imageSrc="/header-slider-1.webp"
        lang={lang}
      />
      <section className="lg:mb-24 mb-10 lg:mt-10 mt-4 container ">
        <div className="bg-[#F8F9FA] rounded-4xl lg:px-40 lg:py-16 p-2">
          <h3 className="mb-10 lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {transfer_service_page.introduction?.title}
          </h3>
          <div
            className={`${
              lang === "en" ? "text-left" : "text-right"
            } lg:text-[1.2rem] leading-relaxed text-[#454547]`}
            dangerouslySetInnerHTML={{
              __html: transfer_service_page.introduction?.head_text,
            }}
          />
          <div className="grid grid-cols-2 gap-x-10 lg:gap-y-0 gap-y-4 mt-10 lg:h-[600px]">
            <div className="lg:col-span-1 col-span-3 rounded-2xl border-[1px] border-neutral-200 overflow-hidden relative">
              <div className="lg:h-[410px] h-[300px] relative before:absolute before:bottom-0 before:bg-gradient-to-t before:from-white before:to-transparent before:z-10 before:w-full before:h-full before:top-0 before:right-0">
                <Image src="/doctor.jpg" fill alt="" className="object-fill" />
              </div>
              <div className=" h-full px-6 py-10 space-y-2 ">
                <h3 className="lg:text-2xl text-lg font-black text-black">
                  {
                    transfer_service_page.introduction?.mojgan_yaghoubi
                      ?.fullname
                  }
                </h3>
                <div>
                  <span className="text-secondary lg:text-xl font-medium">
                    {
                      transfer_service_page.introduction?.mojgan_yaghoubi
                        ?.position
                    }
                  </span>
                </div>
                <div>
                  <span className="text-black lg:text-base text-sm font-medium">
                    {phone_number}:{" "}
                    {lang === "en"
                      ? transfer_service_page.introduction?.mojgan_yaghoubi
                          ?.phone_number
                      : toPersianNumber(
                          transfer_service_page.introduction?.mojgan_yaghoubi
                            ?.phone_number
                        )}
                    +
                  </span>
                </div>
                <div>
                  <span className="text-black lg:text-base text-sm font-medium">
                    {email} :{" "}
                    <a href="mailto:yaqoubi.mozhgan@gmail.com">
                      yaqoubi.mozhgan@gmail.com
                    </a>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-3 rounded-2xl border-[1px] border-neutral-200 overflow-hidden relative">
              <div className="lg:h-[410px] h-[300px] relative before:absolute before:bottom-0 before:bg-gradient-to-t before:from-white before:to-transparent before:z-10 before:w-full before:h-full before:top-0 before:right-0">
                <Image src="/doctor.jpg" fill alt="" className="object-fill" />
              </div>
              <div className=" h-full px-6 py-10 space-y-2 ">
                <h3 className="lg:text-2xl text-lg font-black text-black">
                  {
                    transfer_service_page.introduction?.hassan_mozaffarzadeh
                      ?.fullname
                  }
                </h3>
                <div>
                  <span className="text-secondary lg:text-xl font-medium">
                    {
                      transfer_service_page.introduction?.hassan_mozaffarzadeh
                        ?.position
                    }
                  </span>
                </div>
                <div>
                  <span className="text-black lg:text-base text-sm font-medium">
                    {phone_number}:{" "}
                    {lang === "en"
                      ? transfer_service_page.introduction?.hassan_mozaffarzadeh
                          ?.phone_number
                      : toPersianNumber(
                          transfer_service_page.introduction
                            ?.hassan_mozaffarzadeh?.phone_number
                        )}
                    +
                  </span>
                </div>
                <div>
                  <span className="text-black lg:text-base text-sm font-medium">
                    {email} : <a href="#"></a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mb-24 mb-10 lg:mt-10 mt-4 container ">
        <div className=" rounded-4xl lg:px-40 lg:py-16 p-2">
          <h3
            className={`lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] `}
          >
            {transfer_service_page.page_title}
          </h3>
          <div
            className="mt-20 introduction_description_subText"
            dangerouslySetInnerHTML={{__html: transfer_service_page.jobs}}
          />
        </div>
      </section>
      <section className="lg:mb-24 mb-10 lg:mt-10 mt-4 container ">
        <div className="bg-[#F8F9FA] rounded-4xl lg:px-40 lg:py-16 p-2">
          <h3 className="mb-10 lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {transfer_service_page.introduction.our_serives_ipd}
          </h3>
          <>
            <div
              className="mt-20 introduction_description_subText"
              dangerouslySetInnerHTML={{__html: transfer_service_page.services}}
            />
          </>
          <h3 className="my-10 lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {transfer_service_page.introduction.packages_list}
          </h3>
          <TransferServicesPackages
            oxin_hotel_location={oxin_hotel_location}
            olympic_hotel_location={olympic_hotel_location}
            transfer_service_page={transfer_service_page}
            package_price={package_price}
          />
        </div>
      </section>
    </>
  );
}
