import Accordion from "@/ui/components/global/Accordion";
import PageHeaderSlider from "@/ui/page-header-slider/PageHeaderSlider";
import {notFound} from "next/navigation";
import React from "react";
import {getDictionary} from "../../dictionaries";

export default async function SingleMedicalService({
  params,
}: {
  params: Promise<{slug: string; lang: "fa" | "en"}>;
}) {
  const {slug, lang} = await params;
  const {medical_packages_data} = await getDictionary(lang);

  const data = medical_packages_data.find((p) => p.slug.toString() === slug);

  if (!data) {
    return notFound();
  }

  return (
    <>
      <PageHeaderSlider
        lang={lang}
        pageTitle={data.title.toString()}
        imageSrc="/header-slider-1.webp"
      />
      <section className="mt-16 container">
        <div className="bg-[#F8F9FA] rounded-4xl md:px-20 px-4 md:py-16 py-4">
          <h3 className="md:text-[3em] text-xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            انواع خدمات پزشکی {data?.title.toString()}
          </h3>
          <div className="mt-10 space-y-6">
            {data.sub_packages.map((item, index: number) =>
              item?.description?.toString() ? (
                <Accordion
                  key={item.id}
                  title={item.title.toString()}
                  index={index}
                  description={item?.description?.toString() ?? ""}
                  services={item?.services?.toString() ?? ""}
                  price={item?.price?.toString() ?? ""}
                  thumbnail={item?.thumbnail ?? ""}
                  notes={item?.notes?.toString() || ""}
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
