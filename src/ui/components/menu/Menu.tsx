import React from "react";
import CustomLink from "../global/CustomLink";
import ChevronLeftSvg from "../icons/ChevronLeftSvg";
import { getHref } from "@/utils/functions";
import { MenuItemsTypes } from "@/types/global/menu.type";

interface MenuProps {
  lang: string;
  direction?: "horizontal" | "vertical";
  items: MenuItemsTypes[];
}
export default function Menu({
  lang,
  direction = "horizontal",
  items,
}: MenuProps) {
  
  return (
    <nav className="flex items-center h-full">
      <ul
        className={`h-full text-primary  flex lg:text-base  relative items-center text-blue-primary ${
          direction === "horizontal" ? "flex-row gap-x-6" : "flex-col gap-y-4"
        }`}
      >
        {items.map((link) => (
          <li
            key={link.id}
            className="group cursor-pointer hover:text-secondary flex items-center  text-menu-colors relative !h-full after:hidden  hover:after:inline-block after:w-full after:h-1 after:bg-secondary after:absolute after:bottom-0 after:left-0 after:rounded-t-xl"
          >
            <span className="flex items-center gap-x-2 !h-full ">
              <CustomLink
                href={getHref(link.href,lang)}
                label={link.label[lang]}
                className={`font-medium  transition-all  `}
              />

              {link.sub.length > 0 ? (
                <span className="-rotate-90 group-hover:rotate-90 transition-all duration-300">
                  <ChevronLeftSvg size="10" />
                </span>
              ) : (
                ""
              )}
            </span>
            {link.sub.length > 0 && (
              <ul className="hidden group-hover:block absolute top-full z-20 bg-white w-64 shadow-inner space-y-5 p-3 rounded-b-xl">
                {link.sub.map((submenu) => (
                  <li
                    key={submenu.id}
                    className="w-full text-blue-primary hover:font-medium  p-1 px-3"
                  >
                    <CustomLink
                      href={getHref(submenu.href,lang)}
                      label={submenu.label[lang]}
                      className="text-sm font-medium text-black hover:text-secondary transition-all"
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
