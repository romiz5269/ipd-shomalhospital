import React from "react";
interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({label,onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className="font-medium text-white bg-blue-primary rounded-xl flex items-center gap-x-4 px-2 py-1">{label}</button>
  );
}
