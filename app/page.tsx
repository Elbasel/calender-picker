"use client";

import { AppDatePicker } from "./ui/DatePicker";
import { inputStyles } from "./styles/input";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8">
      <AppDatePicker />
      <input
        type="text"
        name="Name"
        placeholder="What should I call you?"
        className={inputStyles}
      />
    </div>
  );
}
