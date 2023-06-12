"use client";

import React, { useMemo, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { type DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { twMerge } from "tailwind-merge";
import styles from "./styles";

interface Props {
  disabledDates?: Date[];
}
export const DatePicker = ({ disabledDates }: Props) => {
  const [value, setValue] = useState<DateValueType>(null);

  const handleValueChange = (value: DateValueType) => {
    const startDate = value?.startDate;
    const endDate = value?.endDate;

    // ensure valid date state
    if (startDate && endDate) setValue({ startDate, endDate });
  };

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
      inputClassName={twMerge(styles)}
      containerClassName="rounded-lg relative"
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
