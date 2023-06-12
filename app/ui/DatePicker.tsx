"use client";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import {
  type DateRangeType,
  type DateType,
  type DateValueType,
} from "react-tailwindcss-datepicker/dist/types";
import { twMerge } from "tailwind-merge";
import { fadeInStyles } from "../styles/fadeIn";

interface Props {
  disabledDates?: DateType[];
  name?: string;
  onChange?: (date: DateType) => void;
}
export const AppDatePicker = ({
  disabledDates,
  name = "date",
  onChange,
}: Props) => {
  const [date, setDate] = useState<DateType | null>(null);

  return (
    <Datepicker
      value={{
        startDate: date,
        endDate: date,
      }}
      onChange={(newDate: DateValueType) => {
        const { startDate } = newDate as DateRangeType;
        setDate(startDate);
        onChange?.(startDate);
      }}
      disabledDates={disabledDates?.map((date) => ({
        startDate: date,
        endDate: date,
      }))}
      asSingle
      inputName={name}
      useRange={false}
      placeholder="Book a date"
      separator="/"
      displayFormat={"DD/MM/YYYY"}
      inputClassName={twMerge(
        fadeInStyles,
        "text-xl w-full bg-slate-900 rounded-lg"
      )}
      containerClassName=" max-w-[297px] mx-auto rounded-lg relative animate-in fade-in duration-1000 child-div-full"
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
