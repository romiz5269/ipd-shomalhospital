import {languages_types} from "@/types";
import TelephoneSvg from "@/ui/components/icons/TelephoneSvg";
import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import Image from "next/image";
import React from "react";
import {getDictionary} from "../dictionaries";
import PatientAcceptForm from "@/ui/forms/PatientAcceptForm";
import {default_info, pages_titles, PHONE_NUMBERS} from "@/constants";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: pages_titles.contact_us["fa"] + " | " + "بیمارستان شمال",
  description: "Shomal Hospital IPD contact us page",
};
export default async function ContactUs({
  params,
}: {
  params: Promise<{lang: languages_types}>;
}) {
  const {lang} = await params;
  const {contact_us_page, about_page, footer, accept_request_form} =
    await getDictionary(lang);
  return (
    <>
      <PageHeaderSlider
        lang={lang}
        pageTitle={contact_us_page?.page_title}
        imageSrc="/header-slider-1.webp"
      />
      <section className="mt-16 container">
        <div className="bg-[#F8F9FA] rounded-4xl md:px-20 px-4 md:py-16 py-4">
          <div className="grid grid-cols-12 items-center">
            <div className="md:col-span-8 col-span-12 grid grid-cols-12 md:gap-x-20">
              <div className="md:col-span-3 col-span-12  bg-amber-50">
                <div className="relative md:h-[200px] h-[250px] md:w-[200px] w-full  rounded-xl overflow-hidden ">
                  <Image
                    fill
                    src={"/heidarnejad.jpg"}
                    alt="doctor"
                    className="object-fill"
                  />
                </div>
              </div>
              <div className="md:col-span-9 col-span-12  items-center md:my-0 my-4">
                <div className="flex flex-col items-start justify-center gap-y-4">
                  <h3 className="text-3xl font-black text-blue-primary">
                    {about_page?.heidarnejad?.name}
                  </h3>
                  <span className="text-secondary text-xl font-semibold">
                    {about_page?.heidarnejad?.expertise}
                  </span>
                  <span className="text-black text-lg">
                    {about_page?.heidarnejad?.position}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 h-full">
              <div className="bg-secondary p-8 rounded-xl h-full grid grid-cols-2 items-center">
                <div className="md:col-span-1 col-span-12 flex flex-col justify-start items-center gap-y-4">
                  <span className="text-white">
                    <TelephoneSvg size="60" />
                  </span>
                  <span className="text-lg text-white font-semibold">
                    <a
                      dir="ltr"
                      href={`tel:${PHONE_NUMBERS.ipd_technician.href}`}
                    >
                      {PHONE_NUMBERS.ipd_technician.href}
                    </a>
                  </span>
                </div>
                <div className="md:col-span-1 col-span-12 flex flex-col justify-start items-center gap-y-4">
                  <span className="text-white">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-lg text-white font-semibold">
                    <a
                      href={`mailto:${default_info.email}`}
                    >
                      {default_info.email}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 container">
        <div className="bg-[#F8F9FA] rounded-4xl md:px-20 px-4 md:py-16 py-4">
          <h3 className="md:text-[3em] text-2xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {contact_us_page?.info_box_title}
          </h3>
          <div className="mt-16">
            <div className="grid grid-cols-12 gap-x-4">
              <div className="md:col-span-6 col-span-12 space-y-8">
                <div className="flex items-center gap-x-4">
                  <div className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-secondary">
                    <span>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9999 13.4304C13.723 13.4304 15.1199 12.0336 15.1199 10.3104C15.1199 8.5873 13.723 7.19043 11.9999 7.19043C10.2768 7.19043 8.87988 8.5873 8.87988 10.3104C8.87988 12.0336 10.2768 13.4304 11.9999 13.4304Z"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xl">{footer?.contact_us?.address}</p>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-secondary">
                    <span>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                  <a href={`mailto:${default_info.email}`} className="text-xl">
                    {default_info.email}
                  </a>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-secondary">
                    <span className="text-white">
                      <TelephoneSvg size="40" />
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <a
                      dir="ltr"
                      href={`tel:${PHONE_NUMBERS.ipd_technician.href}`}
                      className="text-xl"
                    >
                      {PHONE_NUMBERS.ipd_technician.href}
                    </a>
                    <span>|</span>
                    <a
                      dir="ltr"
                      href={`tel:${PHONE_NUMBERS.hospital.href}`}
                      className="text-xl"
                    >
                      {PHONE_NUMBERS.hospital.label}
                    </a>
                  </div>
                </div>
                <span className="w-full inline-block h-[2px] bg-secondary/20"></span>
                <div className="flex items-center gap-x-3">
                  <a
                    href="https://instagram.com/shomalhospital"
                    className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-secondary"
                  >
                    <span className="text-white">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.12467 2.08337H16.8747C20.208 2.08337 22.9163 4.79171 22.9163 8.12504V16.875C22.9163 18.4774 22.2798 20.0141 21.1468 21.1471C20.0137 22.2802 18.477 22.9167 16.8747 22.9167H8.12467C4.79134 22.9167 2.08301 20.2084 2.08301 16.875V8.12504C2.08301 6.52269 2.71954 4.98597 3.85257 3.85294C4.9856 2.71991 6.52232 2.08337 8.12467 2.08337ZM7.91634 4.16671C6.92178 4.16671 5.96795 4.5618 5.26469 5.26506C4.56143 5.96832 4.16634 6.92215 4.16634 7.91671V17.0834C4.16634 19.1563 5.84342 20.8334 7.91634 20.8334H17.083C18.0776 20.8334 19.0314 20.4383 19.7347 19.735C20.4379 19.0318 20.833 18.0779 20.833 17.0834V7.91671C20.833 5.84379 19.1559 4.16671 17.083 4.16671H7.91634ZM17.9684 5.72921C18.3138 5.72921 18.6449 5.86639 18.8891 6.11058C19.1333 6.35477 19.2705 6.68596 19.2705 7.03129C19.2705 7.37662 19.1333 7.70781 18.8891 7.952C18.6449 8.19619 18.3138 8.33337 17.9684 8.33337C17.6231 8.33337 17.2919 8.19619 17.0477 7.952C16.8035 7.70781 16.6663 7.37662 16.6663 7.03129C16.6663 6.68596 16.8035 6.35477 17.0477 6.11058C17.2919 5.86639 17.6231 5.72921 17.9684 5.72921ZM12.4997 7.29171C13.881 7.29171 15.2058 7.84044 16.1825 8.81719C17.1593 9.79394 17.708 11.1187 17.708 12.5C17.708 13.8814 17.1593 15.2061 16.1825 16.1829C15.2058 17.1596 13.881 17.7084 12.4997 17.7084C11.1183 17.7084 9.79358 17.1596 8.81683 16.1829C7.84007 15.2061 7.29134 13.8814 7.29134 12.5C7.29134 11.1187 7.84007 9.79394 8.81683 8.81719C9.79358 7.84044 11.1183 7.29171 12.4997 7.29171ZM12.4997 9.37504C11.6709 9.37504 10.876 9.70428 10.29 10.2903C9.70391 10.8764 9.37467 11.6712 9.37467 12.5C9.37467 13.3288 9.70391 14.1237 10.29 14.7097C10.876 15.2958 11.6709 15.625 12.4997 15.625C13.3285 15.625 14.1233 15.2958 14.7094 14.7097C15.2954 14.1237 15.6247 13.3288 15.6247 12.5C15.6247 11.6712 15.2954 10.8764 14.7094 10.2903C14.1233 9.70428 13.3285 9.37504 12.4997 9.37504Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com/shomalhospital"
                    className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-secondary"
                  >
                    <span className="text-white">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.88333 5.09347C7.88308 5.61528 7.68707 6.11561 7.33843 6.4844C6.98978 6.85319 6.51705 7.06023 6.02423 7.05997C5.53141 7.05971 5.05888 6.85217 4.71058 6.48301C4.36228 6.11385 4.16675 5.61331 4.16699 5.0915C4.16724 4.56969 4.36325 4.06936 4.71189 3.70057C5.06054 3.33178 5.53327 3.12474 6.02609 3.125C6.51891 3.12526 6.99144 3.3328 7.33974 3.70196C7.68804 4.07112 7.88357 4.57166 7.88333 5.09347ZM7.93907 8.51689H4.22274V20.8333H7.93907V8.51689ZM13.8109 8.51689H10.1131V20.8333H13.7737V14.3702C13.7737 10.7697 18.2054 10.4352 18.2054 14.3702V20.8333H21.8753V13.0323C21.8753 6.96258 15.316 7.18884 13.7737 10.1696L13.8109 8.51689Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 md:mt-0 mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6419.524849772638!2d52.347594!3d36.439127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8fbd6849bf386b%3A0x26cbc9441b00f373!2sShomal%20Hospital!5e0!3m2!1sen!2sus!4v1762836982418!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{border: "0"}}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="request_accept"
        className="lg:mb-24 mb-10 lg:mt-10 mt-4 container "
      >
        <div className="bg-[#F8F9FA] rounded-4xl lg:px-40 lg:py-16 p-2">
          <h3 className="mb-10 lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {accept_request_form?.head_text}
          </h3>
          <p className="text-center lg:text-[1.2rem] leading-8 text-[#454547] ">
            {about_page?.form?.sub_text}
          </p>
          <PatientAcceptForm lang={lang} dict={about_page} />
        </div>
      </section>
    </>
  );
}
