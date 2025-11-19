import Link from "next/link";
import React from "react";
interface CustomLinkProps {
  href: string;
  label: string;
  className?: string;
}
export default function CustomLink({href, label, className}: CustomLinkProps) {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
