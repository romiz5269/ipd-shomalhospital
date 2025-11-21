"use client";
import React, {useState} from "react";
import CustomSelect from "../components/global/CustomSelect";
import {all_countries, default_info, PHONE_NUMBERS} from "@/constants";
import { generateIPDReceptionCode } from "@/utils/functions";

interface PatientAcceptFormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  age: string;
  country: string;
  country_code: string;
  service: string;
  message: string;
}
interface PatientAcceptFormProps {
  lang: string;
  dict: {
    form: {
      fields: {
        first_name: string;
        last_name: string;
        phone_number: string;
        email: string;
        age: string;
        country: string;
        services: string;
        message: string;
      };
      buttons: {
        send_whatsapp: string;
        send_email: string;
      };
    };
  };
}
function PatientAcceptForm({lang, dict}: PatientAcceptFormProps) {
  const [formData, setFormData] = useState<PatientAcceptFormValues>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    age: "",
    country: "",
    country_code: "",
    service: "",
    message: "",
  });

  const sendToWhatsApp = (formData: PatientAcceptFormValues) => {
    const phone = PHONE_NUMBERS.ipd_technician.href; // بدون + و با کد کشور
    const message =
      `درخواست پذیرش جدید ثبت شد:\n` +
      `شناسه تولید شده: ${generateIPDReceptionCode()}\n` +
      `نام: ${formData.first_name}\n` +
      `نام خانوادگی: ${formData.last_name}\n` +
      `سن: ${formData.age ?? "وارد نشده است"}\n` +
      `ایمیل: ${formData.email ?? "وارد نشده است"}\n` +
      `شماره تماس: ${formData.phone_number ?? "وارد نشده است"}\n` +
      `کشور: ${formData.country ?? "وارد نشده است"}\n` +
      `کد کشور: ${formData.country_code ?? "وارد نشده است"}\n` +
      // `سرویس: ${formData.service}\n` +
      `توضیحات: ${formData.message ?? "وارد نشده است"}\n`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };
  const sendToEmail = (formData: PatientAcceptFormValues) => {
    const email = default_info.email;
    const subject = "درخواست پذیرش جدید";

    const message =
      `درخواست پذیرش جدید ثبت شد:\n` +
      `شناسه تولید شده: ${generateIPDReceptionCode()}\n` +
      `نام: ${formData.first_name}\n` +
      `نام خانوادگی: ${formData.last_name}\n` +
      `سن: ${formData.age ?? "وارد نشده است"}\n` +
      `ایمیل: ${formData.email ?? "وارد نشده است"}\n` +
      `شماره تماس: ${formData.phone_number ?? "وارد نشده است"}\n` +
      `کشور: ${formData.country ?? "وارد نشده است"}\n` +
      `کد کشور: ${formData.country_code ?? "وارد نشده است"}\n` +
      // `سرویس: ${formData.service}\n` +
      `توضیحات: ${formData.message ?? "وارد نشده است"}\n`;

    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailto;
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-5 w-full mt-10">
        <div className="lg:col-span-1 col-span-2">
          <input
            type="text"
            value={formData.first_name}
            onChange={(e) =>
              setFormData((prev) => ({...prev, first_name: e.target.value}))
            }
            placeholder={dict?.form?.fields?.first_name}
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          />
        </div>
        <div className="lg:col-span-1 col-span-2">
          <input
            type="text"
            value={formData.last_name}
            onChange={(e) =>
              setFormData((prev) => ({...prev, last_name: e.target.value}))
            }
            placeholder={dict?.form?.fields?.last_name}
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          />
        </div>
        <div className="lg:col-span-1 col-span-2">
          <input
            type="text"
            value={formData.phone_number}
            onChange={(e) =>
              setFormData((prev) => ({...prev, phone_number: e.target.value}))
            }
            placeholder={dict?.form?.fields?.phone_number}
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          />
        </div>
        <div className="lg:col-span-1 col-span-2">
          <input
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({...prev, email: e.target.value}))
            }
            placeholder={dict?.form?.fields?.email}
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          />
        </div>
        <div className="lg:col-span-1 col-span-2">
          <input
            type="text"
            value={formData.age}
            onChange={(e) =>
              setFormData((prev) => ({...prev, age: e.target.value}))
            }
            placeholder={dict?.form?.fields?.age}
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          />
        </div>
        <div className="lg:col-span-1 col-span-2">
          <CustomSelect
            options={all_countries}
            value={formData.country}
            onChange={(value: string) =>
              setFormData((prev) => ({
                ...prev,
                country: value,
                country_code: all_countries.find(
                  (c) => c.value === value
                )?.code || "",
              }))
            }
            placeholder={dict.form.fields.country}
            isClearable
            className="w-full"
            rtl
          />
        </div>
        <div className="lg:col-span-2 col-span-2">
          {/* <input
                type="text"
                placeholder={dict?.form?.fields?.services}
                className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
              /> */}
          {/* <CustomSelect
            options={[
              {value: "a", label: "گزینه A"},
              {value: "b", label: "گزینه B"},
            ]}
            value={formData.service}
            onChange={(value: string) =>
              setFormData((prev) => ({...prev, service: value}))
            }
            placeholder={dict.form.fields.services}
            isClearable
            className="w-full"
            rtl
          /> */}
        </div>
        <div className="col-span-2">
          <textarea
            rows={8}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({...prev, message: e.target.value}))
            }
            placeholder={dict?.form?.fields?.message}
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          ></textarea>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => sendToWhatsApp(formData)}
            className="lg:col-span-1 col-span-2 bg-secondary text-white rounded-full py-4 lg:px-10 px-3 font-semibold shadow-lg shadow-neutral-300 hover:shadow-none transition-all duration-200 flex flex-1 justify-center lg:text-base text-sm"
          >
            {dict?.form?.buttons?.send_whatsapp}
          </button>
          <button
            onClick={() => sendToEmail(formData)}
            className="lg:col-span-1 col-span-2 bg-secondary text-white rounded-full py-4 lg:px-10 px-3 font-semibold shadow-lg shadow-neutral-300 hover:shadow-none transition-all duration-200 flex flex-1 justify-center lg:text-base text-sm"
          >
            {dict?.form?.buttons?.send_email}
          </button>
        </div>
      </div>
    </>
  );
}

export default PatientAcceptForm;
