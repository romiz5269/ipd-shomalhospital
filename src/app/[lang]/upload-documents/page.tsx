import UploadDocuments from "@/ui/forms/UploadDocuments";
import React from "react";
import {getDictionary} from "../dictionaries";
import {languages_types} from "@/types";
import { Metadata } from "next";
import { pages_titles } from "@/constants";
export const metadata: Metadata = {
  title: pages_titles.upload_documents['fa'] + ' | ' +'بیمارستان شمال',
  description: "Shomal Hospital IPD upload documents page",
};
export default async function UploadDocumentsPage({
  params,
}: {
  params: Promise<{lang: languages_types}>;
}) {
  const {lang} = await params;
  const {upload_documents} = await getDictionary(lang);
  return (
    <>
      <section className="my-20 container">
        <div className="bg-[#F8F9FA] rounded-4xl lg:px-40 lg:py-16 p-2">
          <h3 className="mb-10 lg:text-[3em] text-3xl font-black text-blue-primary text-center relative before:absolute before:w-[100px] before:block before:bg-secondary before:-bottom-5 before:h-[2px] before:left-[50%] before:translate-x-[-50%] ">
            {upload_documents.head_text}
          </h3>
          <UploadDocuments lang={lang} dict={upload_documents} />
        </div>
      </section>
    </>
  );
}
