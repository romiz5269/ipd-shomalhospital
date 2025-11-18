import {IconsProps} from "@/types/icons/icons.type";
import React from "react";

export default function ChevronRightSvg({
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
          d="M1.95966 -1.73603e-06L1.67294e-06 1.86375L9.08068 10.5L1.62934e-07 19.1362L1.95966 21L13 10.5L1.95966 -1.73603e-06Z"
          fill={color}
        />
      </svg>
    </>
  );
}
