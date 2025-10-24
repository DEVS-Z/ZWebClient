"use client";
import { CustomSelectProps } from "@/models/common/select/ISelect";
import React from "react";

export default function Select2DynamicView({ select2 } : {select2 : CustomSelectProps}) {
  return (
    <select
    name={select2.name}
      value={select2.value ?? ""}
      onChange={(e) => select2.onChange(e.target.value)}
      className={`border border-gray-300 ${select2.className}`}
    >
      <option value="">{select2.placeholder}</option>
      {select2.select.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
