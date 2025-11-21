import type {Metadata} from "next";
import "../globals.css";
import {FontVazir} from "@/config/font.config";
import TopMenu from "@/ui/components/top-menu/TopMenu";
import TopNavbar from "@/ui/top-navbar";
import Image from "next/image";
import {FooterMenuLinks1} from "@/constants/menu/menu.const";
import CustomLink from "@/ui/components/global/CustomLink";
import {getHref} from "@/utils/functions";
import {languages_types} from "@/types";
import {getDictionary} from "./dictionaries";
import { PHONE_NUMBERS } from "@/constants";

export const metadata: Metadata = {
  title: "بیماران بین الملل | بیمارستان شمال آمل",
  description: "صفحه ی بیماران بین الملل بیمارستان شمال آمل",
};
export async function generateStaticParams() {
  return [{lang: "en"}, {lang: "fa"}, {lang: "ar"}];
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}>) {
  const {lang} = await params;
  const dict = await getDictionary(lang as languages_types);
  const {footer} = dict || {};
  return (
    <html lang={(await params).lang} dir={`${lang === "en" ? "ltr" : "rtl"}`}>
      <body
        className={`${FontVazir.variable} antialiased`}
        style={{fontFamily: FontVazir.style.fontFamily}}
      >
        <TopNavbar lang={lang as languages_types} />
        <TopMenu lang={lang as languages_types} />
        {children}
        <div className="bg-blue-primary">
          <footer className=" rounded-t-2xl py-20 container ">
            <div className="grid lg:grid-cols-12 sm:grid-cols-2 grid-cols-1 w-full container lg:gap-x-10 gap-y-0 gap-y-10">
              <div className="lg:col-span-3 col-span-12 flex flex-col items-center justify-start gap-x-3">
                <div className="relative h-[140px] w-[140px]">
                  <Image
                    loading="lazy"
                    src="/main-logo.png"
                    fill
                    alt="shomal hospital"
                    style={{
                      color: "transparent",
                      fill: "red",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p
                  className={`text-white leading-relaxed mt-4 text-sm ${
                    lang === "en" ? "text-left" : "text-right"
                  }`}
                >
                  {footer?.under_logo_text}
                </p>
              </div>
              <div className="lg:col-span-5 col-span-12 flex justify-center">
                <div className="space-y-5">
                  <h4 className="text-white mb-10">{dict.related_links}</h4>
                  <ul className="space-y-4 text-neutral-300 transition-colors duration-300 mt-5">
                    {FooterMenuLinks1.map((link) => (
                      <li
                        key={link.id}
                        className="group cursor-pointer hover:text-secondary flex items-center  text-menu-colors relative !h-full "
                      >
                        <span className="flex items-center gap-x-2 !h-full ">
                          <CustomLink
                            href={getHref(link.href, lang)}
                            label={link.label[lang]}
                            className={`font-medium  transition-all  `}
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className=" p-4 bg-white rounded-xl">
                  <h4 className="font-semibold text-secondary mb-4">
                    {footer?.contact_us_text}
                  </h4>
                  <p className="text-sm">
                    <strong className=" text-blue-primary">
                      {footer?.our_address}
                    </strong>{" "}
                    :{footer?.contact_us?.address}
                  </p>
                  <p className="mt-4 rtl text-sm">
                    <strong className=" text-blue-primary">
                      {footer?.ipd_technician_number}
                    </strong>{" "}
                    : &nbsp;
                    <span style={{direction: "ltr"}}>
                      <a dir="ltr" style={{textAlign:"left"}} href={`tel:${PHONE_NUMBERS.ipd_technician.href}`}>{PHONE_NUMBERS.ipd_technician.label}</a>
                    </span>
                  </p>
                  <p className="my-4 rtl text-sm">
                    <strong className=" text-blue-primary">
                      {footer?.hospital_number}
                    </strong>{" "}
                    : &nbsp;
                    <span style={{direction: "ltr"}}>
                      <a dir="ltr" style={{textAlign:"left"}} href={`tel:${PHONE_NUMBERS.hospital.href}`}>{PHONE_NUMBERS.hospital.label}</a>
                    </span>
                  </p>
                  <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6419.524849772638!2d52.347594!3d36.439127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8fbd6849bf386b%3A0x26cbc9441b00f373!2sShomal%20Hospital!5e0!3m2!1sen!2sus!4v1762836982418!5m2!1sen!2sus"
                      // width="100%"
                      style={{border: "0"}}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute top-0 left-0 w-full h-full border-0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
// import type {Metadata} from "next";
// import "../globals.css";
// import { languages_types } from "@/types";

// export const metadata: Metadata = {
//   title: "Next.js App",
//   description: "Generated by Next.js",
// };

// export default async function InsideLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params:Promise<{lang:languages_types}>;
// }) {
//   const {lang}=(await params)
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
