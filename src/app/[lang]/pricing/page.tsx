import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import React from "react";
import {getDictionary} from "../dictionaries";
import {languages_types} from "@/types";
import {Metadata} from "next";
import {pages_titles} from "@/constants";
export const metadata: Metadata = {
  title: pages_titles.pricing["fa"] + " | " + "بیمارستان شمال",
  description: "Shomal Hospital IPD Pricing page",
};
export default async function PricingPage({
  params,
}: {
  params: Promise<{lang: languages_types}>;
}) {
  const {lang} = await params;
  const {pricing_page, medical_packages} = await getDictionary(lang);
  return (
    <>
      <PageHeaderSlider
        lang={lang}
        pageTitle={pricing_page?.page_title}
        imageSrc="/header-slider-1.webp"
      />
      <div className="my-16 container">
        <div className="bg-[#F8F9FA] rounded-4xl lg:px-20 py-16">
          <h3 className="lg:text-[3em] text-2xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {pricing_page?.page_title}
          </h3>
          <div className="overflow-x-auto mt-10">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 text-center font-semibold">
                    {pricing_page.table.head[0].name}
                  </th>
                  <th className="px-4 py-2 text-center font-semibold">
                    {pricing_page.table.head[1].name}
                  </th>
                  <th className="px-4 py-2 text-center font-semibold">
                    {pricing_page.table.head[2].name}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td rowSpan={3} className="px-4 py-2 font-medium text-center">
                    {medical_packages[0].package_name}
                  </td>
                  <td className="px-4 py-2">
                    {medical_packages[0].services[0].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">350 – 600</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 ">
                    {medical_packages[0].services[1].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">450 – 800</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 ">
                    {medical_packages[0].services[2].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">750 – 1,200</td>
                </tr>

                <tr>
                  <td rowSpan={2} className="px-4 py-2 font-medium text-center">
                    {medical_packages[1].package_name}
                  </td>
                  <td className="px-4 py-2">
                    {medical_packages[1].services[0].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">3,800 – 6,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[1].services[1].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">4,500 – 7,000</td>
                </tr>

                <tr>
                  <td rowSpan={8} className="px-4 py-2 font-medium text-center">
                    {medical_packages[2].package_name}
                  </td>
                  <td className="px-4 py-2">
                    {medical_packages[2].services[0].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">900 – 1,300</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[2].services[1].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">3,200 – 4,200</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[2].services[2].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">1,500 – 2,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[2].services[3].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">3,000 – 6,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[2].services[4].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">9,000 – 12,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[2].services[5].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">7,000 – 10,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[2].services[6].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">550 – 4,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[2].services[7].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">5,500-9,000</td>
                </tr>

                <tr>
                  <td rowSpan={9} className="px-4 py-2 font-medium text-center">
                    {medical_packages[3].package_name}
                  </td>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[0].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">1,800 – 2,800</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[1].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">2,500 – 3,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[2].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">1,000 – 1,600</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[3].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">3,500 – 5,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[4].service_name}
                  </td>

                  <td className="px-4 py-2 text-center">2,800 – 3,800</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[5].service_name}
                  </td>

                  <td className="px-4 py-2 text-center">2,500 – 3,200</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[6].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">1,000 – 1,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[7].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">4,500 - 7,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[3].services[8].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">800 – 1,200</td>
                </tr>

                <tr>
                  <td
                    rowSpan={2}
                    className="px-4 py-2 font-medium  text-center"
                  >
                    {medical_packages[4].package_name}
                  </td>
                  <td className="px-4 py-2">
                    {medical_packages[4].services[0].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">6,600 - 11,700</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[4].services[1].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">5,100 - 9,000</td>
                </tr>

                <tr>
                  <td rowSpan={6} className="px-4 py-2 font-medium text-center">
                    {medical_packages[5].package_name}
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[5].services[2].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">4,500 - 9,000</td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[5].services[5].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">10,000 - 35,000</td>
                </tr>

                <tr>
                  <td rowSpan={4} className="px-4 py-2 font-medium text-center">
                    {medical_packages[6].package_name}
                  </td>
                  <td className="px-4 py-2">
                    {medical_packages[6].services[0].service_name}
                  </td>

                  <td className="px-4 py-2 text-center">1,200 – 1,800</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[6].services[1].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">1,000 – 1,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[6].services[2].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">1,000 – 1,400</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {medical_packages[6].services[3].service_name}
                  </td>
                  <td className="px-4 py-2 text-center">1,500 – 2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
