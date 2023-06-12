"use client";

import React, { useMemo, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import {
  DateType,
  type DateValueType,
} from "react-tailwindcss-datepicker/dist/types";
import { twMerge } from "tailwind-merge";
import { fadeInStyles } from "../styles/fadeIn";

interface Props {
  disabledDates?: Date[];
}
export const AppDatePicker = ({ disabledDates }: Props) => {
  const [value, setValue] = useState<DateValueType>(null);

  const handleValueChange = (value: DateValueType) => {
    const startDate: DateType | undefined = value?.startDate;
    const endDate: DateType | undefined = value?.endDate;

    // ! Always expects a startDate
    if (!startDate) return;
    // ! `starDate` is always going to be equal to `endDate`
    // ! since the `asSingle` prop is set to true below
    if (startDate !== endDate)
      throw new Error("startDate and endDate are not equal!");

    setValue(value);
    if (process.env.NODE_ENV === "development") console.log("value", value);
  };

  // Convert from `Date[]` to `DateType[] as required by `react-tailwindcss-datepicker`
  const internalDisabledDates = useMemo(() => {
    if (!disabledDates) return undefined;
    return disabledDates.map((date) => ({
      startDate: date,
      endDate: date,
    }));
  }, [disabledDates]);

  return (
    <Datepicker
      useRange={false}
      value={value}
      asSingle
      onChange={handleValueChange}
      placeholder="Book a date"
      separator="/"
      displayFormat={"DD/MM/YYYY"}
      inputClassName={twMerge(fadeInStyles, "w-full bg-slate-900 rounded-lg")}
      containerClassName="rounded-lg relative animate-in fade-in duration-1000"
      disabledDates={internalDisabledDates}
    />
  );
};

// * Other useful props:
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
//   endDate: "2023-02-11",
//   },
//   ]}
