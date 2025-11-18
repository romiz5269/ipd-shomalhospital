import {IconsProps} from "@/types/icons/icons.type";
import React from "react";

export default function ChevronLeftSvg({
  size,
  width = "13",
  height = "21",
  color = "currentColor",
}: IconsProps) {
  return (
    <>
      <svg
        width={size ?? width}
        height={size ?? height}
        viewBox="0 0 13 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0403 21L13 19.1363L3.91932 10.5L13 1.86375L11.0403 1.71319e-07L2.82529e-06 10.5L11.0403 21Z"
          fill={color}
        />
      </svg>
    </>
  );
}
