import { languages_types } from "@/types";
import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fa: () => import("./dictionaries/fa.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale: languages_types) =>
  dictionaries[locale]();
