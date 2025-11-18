import { MenuItemsTypes } from "@/types/global/menu.type";

export const DefaultMenuLinks: MenuItemsTypes[] = [
  {
    id: 1,
    label: {
      fa: "درباره ما",
      en: "About Us",
      ar: "معلومات عنا",
    },
    href: "/",
    sub: [],
  },
  {
    id: 4,
    label: {
      fa: "پزشکان",
      en: "Doctors",
      ar: "الأطباء",
    },
    href: "/doctors",
    sub: [],
  },
  {
    id: 5,
    label: {
      fa: "لیست قیمت‌ها",
      en: "Pricing",
      ar: "الأسعار",
    },
    href: "/pricing",
    sub: [],
  },
  {
    id: 6,
    label: {
      fa: "خدمات ما",
      en: "Our Services",
      ar: "خدماتنا",
    },
    href: "#",
    sub: [
      {
        id: 1,
        label: {
          fa: "خدمات پزشکی",
          en: "Medical Services",
          ar: "الخدمات الطبية",
        },
        href: "/medical-services",
        sub: [],
      },
      {
        id: 2,
        label: {
          fa: "خدمات گردشگری",
          en: "Tourism & Transfer Services",
          ar: "خدمات النقل والسياحة",
        },
        href: "/transfer-services",
        sub: [],
      },
    ],
  },
  {
    id: 7,
    label: {
      fa: "منشور حقوق بیمار",
      en: "Patient Rights Charter",
      ar: "ميثاق حقوق المريض",
    },
    href: "/patient-rights-charter",
    sub: [],
  },
  {
    id: 8,
    label: {
      fa: "تماس با ما",
      en: "Contact Us",
      ar: "اتصل بنا",
    },
    href: "/contact-us",
    sub: [],
  },
];

export const FooterMenuLinks1: MenuItemsTypes[] = [
  {
    id: 1,
    label: {
      fa: "پزشکان",
      en: "Doctors",
      ar: "الأطباء",
    },
    href: "/doctors",
    sub: [],
  },
  {
    id: 2,
    label: {
      fa: "لیست قیمت‌ها",
      en: "Pricing",
      ar: "الأسعار",
    },
    href: "/pricing",
    sub: [],
  },
  {
    id: 3,
    label: {
      fa: "خدمات پزشکی ما",
      en: "Our Medical Services",
      ar: "الخدمات الطبية",
    },
    href: "/medical-services",
    sub: [],
  },
  {
    id: 4,
    label: {
      fa: "خدمات گردشگری",
      en: "Tourism & Transfer Services",
      ar: "خدمات النقل والسياحة",
    },
    href: "/transfer-services",
    sub: [],
  },
];
export const Menu_buttons = {
  upload_document: {
    fa: "آپلود مدارک پزشکی",
    en: "Upload Medical Documents",
    ar: "تحميل المستندات الطبية",
  },
  request_to_accept: {
    fa: "درخواست پذیرش بیمار",
    en: "Patient Admission Request",
    ar: "طلب قبول المريض",
  },
};
