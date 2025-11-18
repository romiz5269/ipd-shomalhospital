"use client";
import React, { useState} from "react";
import ChevronLeftSvg from "../icons/ChevronLeftSvg";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {site_languages} from "@/constants";

interface DropdownProps {
  defaultValue?: {label: string; value: string};
  options: {label: string; value: string}[];
}

export default function Dropdown({
  defaultValue,
  options,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<{label: string; value: string}>(
    defaultValue ?? options[0]
  );
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (entry: string) => {
    const target = options.find((option) => option.label === entry) || {
      label: "",
      value: "",
    };
    setSelected(target);

    const segments = pathname.split("/").filter(Boolean);
    if (
      segments.length > 0 &&
      site_languages.map((language) => language.label).includes(segments[0])
    ) {
      segments.shift();
    }

    const newPath = `/${target.value}/${segments.join("/")}`;
    const search = searchParams.toString();
    router.push(newPath + (search ? `?${search}` : ""));
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((t) => !t);
      }}
      className={` ${
        isOpen ? "rounded-t-xl" : "rounded-xl"
      } flex items-center gap-x-3 p-3 relative font-medium`}
    >
      <span className="text-white">{selected.label}</span>
      <span
        className={`transition-all text-white ${
          isOpen ? "rotate-90" : "-rotate-90"
        }`}
      >
        <ChevronLeftSvg size="10" />
      </span>
      <div
        className={`absolute top-full bg-blue-primary rounded-b-xl text-[#e6e6e6] p-3 z-20  w-full right-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-4">
          {options?.map((option) => (
            <li
              key={option.value}
              onClick={(e) => handleChange(e.currentTarget.innerHTML)}
              className="hover:text-white hover:cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
