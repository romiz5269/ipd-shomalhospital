import {languages_types} from "@/types";

export function toPersianNumber(num: string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num
    .toString()
    .split("")
    .map((d) => persianDigits[+d] || d)
    .join("");
}
export function removeLangFromPathname(
  pathname: string,
  lang: languages_types
) {
  // بررسی می‌کنیم که pathname با /lang شروع می‌شود
  const prefix = `/${lang}`;
  if (pathname.startsWith(prefix)) {
    return pathname.slice(prefix.length) || "/"; // اگر مسیر خالی شد "/" برگردان
  }
  return pathname; // اگر prefix نبود، مسیر اصلی را برگردان
}

export const getHref = (href: string, lang: string) => {
  const cleanPath = href.replace(/^\/(fa|en|ar)(\/|$)/, "/");
  return `/${lang}${cleanPath}`;
};
export function generateIPDReceptionCode() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // عدد 6 رقمی
    return `ipd-r-${randomNumber}`;
}export function generateIPDConsultantCode() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // عدد 6 رقمی
    return `ipd-c-${randomNumber}`;
}