"use client";
import React, {useState} from "react";


interface UploadDocumentsValues {
  code: string;
  files: [{src: string}] | [];
  message: string;
}
interface UploadDocumentsProps {
  lang: string;
  dict: {
    head_text: string;
    input_code_placeholder: string;
    input_files_label: string;
    input_dsc: string;
    sendbutton: string;
  };
}
function UploadDocuments({lang, dict}: UploadDocumentsProps) {
  const [formData, setFormData] = useState<UploadDocumentsValues>({
    code: "",
    files: [],
    message: "",
  });

  const sendToEmail = (formData: UploadDocumentsValues) => {};
  return (
    <>
      <div className="grid grid-cols-2 gap-5 w-full mt-10">
        <div className="lg:col-span-2 col-span-2">
          <input
            type="text"
            value={formData.code}
            onChange={(e) =>
              setFormData((prev) => ({...prev, first_name: e.target.value}))
            }
            placeholder={dict.input_code_placeholder}
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          />
        </div>

        <div className="lg:col-span-2 col-span-2 space-y-2 flex flex-col">
          <label htmlFor="">{dict.input_files_label}</label>
          <input
            type="file"
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px] h-[300px] flex items-center justify-center"
          />
        </div>
        <div className="col-span-2">
          <textarea
            rows={8}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({...prev, message: e.target.value}))
            }
            placeholder={dict.input_dsc}
            className="py-4 px-6 rounded-2xl border-[1px] border-neutral-200 w-full focus:outline-secondary focus:outline-[1px]"
          ></textarea>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3">
          <button
            onClick={() => sendToEmail(formData)}
            className="cursor-pointer lg:col-span-2 col-span-2 bg-secondary text-white rounded-full py-4 lg:px-10 px-3 font-semibold shadow-lg shadow-neutral-300 hover:shadow-none transition-all duration-200 flex flex-1 justify-center lg:text-base text-sm"
          >
            {dict.sendbutton}
          </button>
        </div>
      </div>
    </>
  );
}

export default UploadDocuments;
