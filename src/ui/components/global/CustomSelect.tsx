"use client";
import React, { useMemo } from "react";
import Select from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  rtl?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "انتخاب کنید...",
  className = "",
  isSearchable = true,
  isDisabled = false,
  isClearable = false,
  rtl = true
}) => {
  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value) ?? null,
    [value, options]
  );

  return (
    <Select
      instanceId="custom-select"
      options={options}
      value={selectedOption}
      onChange={(opt) => onChange?.((opt as Option)?.value ?? "")}
      placeholder={placeholder}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      isClearable={isClearable}
      className={className}
      classNamePrefix="cs"
      isRtl={rtl}
      styles={{
        control: (base, state) => ({
          ...base,
          padding: "6px 4px",
          borderRadius: "0.75rem",
          borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
          boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
          "&:hover": { borderColor: "#3b82f6" },
          backgroundColor: "transparent",
        }),
        menu: (base) => ({
          ...base,
          zIndex: 9999,
          borderRadius: "0.75rem",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "#3b82f6"
            : state.isFocused
            ? "#e5e7eb"
            : "white",
          color: state.isSelected ? "white" : "#111",
        })
      }}
    />
  );
};

export default CustomSelect;
