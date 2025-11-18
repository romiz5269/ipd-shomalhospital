import {IconsProps} from "@/types/icons/icons.type";
import React from "react";

export default function ArrowLeftSvg({
  size,
  width = "17",
  height = "17",
  color = "currentColor",
}: IconsProps) {
  return (
    <>
      <svg
        width={size ?? width}
        height={size ?? height}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.325 9.5H16.5V7.5H4.325L9.925 1.9L8.5 0.5L0.5 8.5L8.5 16.5L9.925 15.1L4.325 9.5Z"
          fill={color}
        />
      </svg>
    </>
  );
}
