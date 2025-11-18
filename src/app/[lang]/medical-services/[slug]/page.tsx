import { sub_packages_data_type } from "@/types";
import Accordion from "@/ui/components/global/Accordion";
import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import {notFound} from "next/navigation";
import React from "react";

async function getData(slug: string) {
  const res = await fetch(
    `http://localhost:4000/medical_packages?slug=${slug}`
  );
  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data;
}

export default async function SingleMedicalService({
  params,
}: {
  params: Promise<{slug: string; lang: "fa" | "en"}>;
}) {
  const {slug, lang} = await params;
  const data = (await getData(slug)) || [];

  if (!data || !data.length) {
    return notFound();
  }

  return (
    <>
      <PageHeaderSlider
        lang={lang}
        pageTitle={data[0].title[lang]}
        imageSrc="/header-slider-1.webp"
      />
      <section className="mt-16 container">
        <div className="bg-[#F8F9FA] rounded-4xl px-20 py-16">
          <h3 className="text-[3em] font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            انواع خدمات پزشکی {data[0]?.title[lang]}
          </h3>
          <div className="mt-10 space-y-6">
            {data[0].sub_packages.map((item:sub_packages_data_type, index: number) =>
              item?.description?.[lang] ? (
                <Accordion
                  key={item.id}
                  title={item.title[lang]}
                  index={index}
                  description={item?.description?.[lang] ?? ""}
                  services={item?.services?.[lang] ?? ""}
                  price={item?.price?.[lang] ?? ""}
                  thumbnail={item?.thumbnail ?? ""}
                  notes={item?.notes?.[lang] ?? ""}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
