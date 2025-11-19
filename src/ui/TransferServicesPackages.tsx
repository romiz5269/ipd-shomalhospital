"use client";
import React, {useState} from "react";
import ChevronLeftSvg from "./components/icons/ChevronLeftSvg";
import Image from "next/image";
interface AccordionProps {
  defaultOpen?: number;
  package_price: string;
  transfer_service_page?: {
    page_title: string;
    introduction: {
      title: string;
      head_text: string;
      mojgan_yaghoubi: {
        fullname: string;
        position: string;
        phone_number: string;
        email: string;
      };
      hassan_mozaffarzadeh: {
        fullname: string;
        position: string;
        phone_number: string;
        email: string;
      };
      packages_list: string;
      our_serives_ipd: string;
      packages: {
        name: string;
        dsc: string;
        price: string;
      }[];
      image_headTitle: string;
      amol_museum: string;
      grand_mosque: string;
      fire_temple: string;
    };
    jobs: string;
    services: string;
  };
  oxin_hotel_location: string;
  olympic_hotel_location: string;
}
export default function TransferServicesPackages({
  defaultOpen,
  package_price,
  transfer_service_page,
  oxin_hotel_location,
  olympic_hotel_location,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ?? null
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full  space-y-4 overflow-hidden">
      <div key={1} className="p-4 bg-secondary rounded-2xl ">
        <button
          className="flex w-full items-center justify-between text-right h-full cursor-pointer"
          onClick={() => toggle(1)}
        >
          <span className="text-lg font-semibold text-white">
            {transfer_service_page?.introduction.packages[0].name}
          </span>
          <span
            className={` text-white transition-all duration-300  ${
              openIndex === 1 ? "rotate-90" : "-rotate-90"
            }`}
          >
            <ChevronLeftSvg size="20" />
          </span>
        </button>

        <div>
          {openIndex === 1 && (
            <div className="bg-white p-10 mt-10 space-y-10">
              <div
                className="overflow-hidden text-gray-600 mt-2 leading-relaxed text-base introduction_description_subText"
                dangerouslySetInnerHTML={{
                  __html:
                    transfer_service_page?.introduction.packages[0].dsc || "",
                }}
              />
              <div className="grid grid-cols-2 h-[300px]">
                <div className="col-span-1 h-full">
                  <div className="h-full w-[100%] relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                    <Image
                      src={`/transfer-packages/Picture1.jpg`}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-1 h-full">
                  <div className="h-full w-[100%] relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                    <Image
                      src={`/transfer-packages/Picture2.jpg`}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mb-20 space-y-6">
                <h4 className="font-bold text-lg">
                  {transfer_service_page?.introduction.image_headTitle}
                </h4>
                <div className="grid grid-cols-3 h-[300px]">
                  <div className="col-span-1 h-full space-y-2">
                    <div className="h-full w-[100%] relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                      <Image
                        src={`/transfer-packages/Picture3.jpg`}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-center w-full">
                      {transfer_service_page?.introduction.amol_museum}
                    </div>
                  </div>
                  <div className="col-span-1 h-full space-y-2">
                    <div className="h-full w-[100%] relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                      <Image
                        src={`/transfer-packages/Picture4.jpg`}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-center w-full">
                      {transfer_service_page?.introduction.grand_mosque}
                    </div>
                  </div>
                  <div className="col-span-1 h-full space-y-2">
                    <div className="h-full w-[100%] relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                      <Image
                        src={`/transfer-packages/Picture5.jpg`}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-center w-full">
                      {transfer_service_page?.introduction.fire_temple}
                    </div>
                  </div>
                </div>
              </div>

              <>
                <h4 className="font-bold text-lg">{package_price}</h4>
                <div className="overflow-hidden text-gray-600  leading-relaxed text-base packages_subpackages_list">
                  {transfer_service_page?.introduction.packages[0].price}
                </div>
              </>

              <>
                <h4 className="font-bold text-lg">{oxin_hotel_location}</h4>
                <div className="overflow-hidden text-gray-600  leading-relaxed text-base w-full h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.9190090955594!2d52.34268797608069!3d36.41115477236057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8fbdddbc457a2f%3A0xd1386b78426bdbbe!2z2YfYqtmEINin2qnYs9uM2YYg2KLZhdmE!5e0!3m2!1sen!2s!4v1763448385341!5m2!1sen!2s"
                    className="h-full w-full"
                    style={{border: "0"}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
      <div key={2} className="p-4 bg-secondary rounded-2xl ">
        <button
          className="flex w-full items-center justify-between text-right h-full cursor-pointer"
          onClick={() => toggle(2)}
        >
          <span className="text-lg font-semibold text-white">
            {transfer_service_page?.introduction.packages[1].name}
          </span>
          <span
            className={` text-white transition-all duration-300  ${
              openIndex === 2 ? "rotate-90" : "-rotate-90"
            }`}
          >
            <ChevronLeftSvg size="20" />
          </span>
        </button>

        <div>
          {openIndex === 2 && (
            <div className="bg-white p-10 mt-10 space-y-10">
              <div
                className="overflow-hidden text-gray-600 mt-2 leading-relaxed text-base introduction_description_subText"
                dangerouslySetInnerHTML={{
                  __html:
                    transfer_service_page?.introduction.packages[1].dsc || "",
                }}
              />

              <div className="mb-20 space-y-6">
                <h4 className="font-bold text-lg">
                  {transfer_service_page?.introduction.image_headTitle}
                </h4>
                <div className="grid grid-cols-3 h-[300px]">
                  <div className="col-span-1 h-full space-y-2">
                    <div className="h-full w-[100%] relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                      <Image
                        src={`/transfer-packages/Picture3.jpg`}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-center w-full">
                      {transfer_service_page?.introduction.amol_museum}
                    </div>
                  </div>
                  <div className="col-span-1 h-full space-y-2">
                    <div className="h-full w-[100%] relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                      <Image
                        src={`/transfer-packages/Picture4.jpg`}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-center w-full">
                      {transfer_service_page?.introduction.grand_mosque}
                    </div>
                  </div>
                  <div className="col-span-1 h-full space-y-2">
                    <div className="h-full w-[100%] relative border-[1px] border-neutral-200 rounded-2xl overflow-hidden">
                      <Image
                        src={`/transfer-packages/Picture5.jpg`}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-center w-full">
                      {transfer_service_page?.introduction.fire_temple}
                    </div>
                  </div>
                </div>
              </div>

              <>
                <h4 className="font-bold text-lg">{package_price}:</h4>
                <div className="overflow-hidden text-gray-600  leading-relaxed text-base packages_subpackages_list">
                  {transfer_service_page?.introduction.packages[1].price}
                </div>
              </>

              <>
                <h4 className="font-bold text-lg">{oxin_hotel_location}</h4>
                <div className="overflow-hidden text-gray-600  leading-relaxed text-base w-full h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.9190090955594!2d52.34268797608069!3d36.41115477236057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8fbdddbc457a2f%3A0xd1386b78426bdbbe!2z2YfYqtmEINin2qnYs9uM2YYg2KLZhdmE!5e0!3m2!1sen!2s!4v1763448385341!5m2!1sen!2s"
                    className="h-full w-full"
                    style={{border: "0"}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
      <div key={3} className="p-4 bg-secondary rounded-2xl ">
        <button
          className="flex w-full items-center justify-between text-right h-full cursor-pointer"
          onClick={() => toggle(3)}
        >
          <span className="text-lg font-semibold text-white">
            {transfer_service_page?.introduction.packages[2].name}
          </span>
          <span
            className={` text-white transition-all duration-300  ${
              openIndex === 3 ? "rotate-90" : "-rotate-90"
            }`}
          >
            <ChevronLeftSvg size="20" />
          </span>
        </button>

        <div>
          {openIndex === 3 && (
            <div className="bg-white p-10 mt-10 space-y-10">
              <div
                className="overflow-hidden text-gray-600 mt-2 leading-relaxed text-base introduction_description_subText"
                dangerouslySetInnerHTML={{
                  __html:
                    transfer_service_page?.introduction.packages[2].dsc || "",
                }}
              />

              <div className="mb-20 space-y-6"></div>

              <>
                <h4 className="font-bold text-lg">{package_price}:</h4>
                <div className="overflow-hidden text-gray-600  leading-relaxed text-base packages_subpackages_list">
                  {transfer_service_page?.introduction.packages[2].price}
                </div>
              </>

              <>
                <h4 className="font-bold text-lg">{olympic_hotel_location}</h4>
                <div className="overflow-hidden text-gray-600  leading-relaxed text-base w-full h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.2022474270625!2d52.34143227608035!3d36.40430177236265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8fbd94218aabf9%3A0xe65c01eb776496b3!2sShomal%20Olympic%20Hotel!5e0!3m2!1sen!2s!4v1763448766682!5m2!1sen!2s"
                    className="h-full w-full"
                    style={{border: "0"}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
