"use client";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export const DatePicker = () => {
  const [value, setValue] = useState<any>(null);

  const handleValueChange = (value: any) => {
    console.log(value);
    setValue(value);
  };

  return (
    <Datepicker
      useRange={false}
      value={value}
      asSingle
      onChange={handleValueChange}
      placeholder="Book a date"
      separator="/"
      displayFormat={"DD/MM/YYYY"}
      inputClassName="w-full rounded-lg ring-blue-600 focus:ring-2 font-normal bg-black text-white outline-none"
      containerClassName="rounded-lg relative"
      // showFooter={true}
      // startFrom="2023-01-01"
      // minDate={new Date("2023-01-05")}
      // maxDate={new Date("2023-01-30")}
      // disabledDates={[
      //   {
      //   startDate: "2023-02-02",
      //   endDate: "2023-02-05",
      //   },
      //   {
      //   startDate: "2023-02-11",
      //   endDate: "2023-02-12",
      //   },
      //   ]}
    />
  );
};
