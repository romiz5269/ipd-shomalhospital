"use client";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useState} from "react";
import CustomSelect from "../components/global/CustomSelect";
import {Expertises} from "@/constants";
import {languages_types} from "@/types";

export default function DoctorsFilterBox({
  lang,
  defaultName,
  defaultExpertise,
  dict,
}: {
  lang: languages_types;
  defaultName: string;
  defaultExpertise: string;
  dict: {
    search: string;
    search_by_name: string;
    select_this: string;
  };
}) {
  const [name, setName] = useState(defaultName);
  const [expertise, setExpertise] = useState(defaultExpertise);

  const router = useRouter();
  const params = useSearchParams();

  const applyFilters = () => {
    const p = new URLSearchParams(params);

    if (name) p.set("name", name);
    else p.delete("name");

    if (expertise) p.set("expertise", expertise);
    else p.delete("expertise");

    router.replace(`?${p.toString()}`);
  };

  const options = Expertises.map((item) => ({
    label: item.name[lang],
    value: item.id.toString(),
  }));

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-16">
        <div className="md:col-span-4 col-span-12">
         
          <CustomSelect
            value={expertise} // must be string
            onChange={setExpertise} // returns string
            options={options}
            className="bg-white mt-2"
            isClearable
            placeholder={dict.select_this}
            
          />
        </div>
        <div className="col-span-5">
          {/* <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={dict.search_by_name}
            className="bg-white py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          /> */}
        </div>

        <div className="md:col-span-3 col-span-12">
          <button
            type="button"
            onClick={applyFilters}
            className="bg-blue-primary text-white font-medium w-full h-full rounded-2xl cursor-pointer md:py-0 py-4"
          >
            {dict.search}
          </button>
        </div>
      </div>
    </>
  );
}
