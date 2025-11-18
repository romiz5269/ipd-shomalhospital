export interface packages_types {
  id: number;
  slug: string;
  svg: string;
  title: {
    [a: string]: string;
  };
  content: {
    [a: string]: string;
  };
  sub_packages: packages_types[];
}
export type languages_types = "fa" | "en" | "ar";

export interface contact_us_form_types {
  [a: string]: {
    [b: string]: {
      type: "text" | "select" | "number";
      as: "input" | "select" | "textarea";
    };
  };
}

export interface DoctorDataType {
  id: number;
  image: string;
  fullname: string;
  specialties: {
    id: number;
    name: string;
  }[];
  category: {
    id: number;
    name: string;
  };
  doctor_identify_number: number;
}
export interface sub_packages_data_type {
  id: number;
  slug: string;
  svg: string;
  title: {
    fa: string;
    en: string;
    ar: string;
  };
  thumbnail: string;
  description?: {
    fa: string;
    en: string;
    ar: string;
  };
  services?: {
    fa: string;
    en: string;
    ar: string;
  };
  price?: {
    fa: string;
    en: string;
    ar: string;
  };
  notes?: {
    fa: string;
    en: string;
    ar: string;
  };
}
