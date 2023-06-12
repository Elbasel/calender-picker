import { AppDatePicker } from "./ui/DatePicker/DatePicker";
import { inputStyles } from "./ui/styles/input";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8">
      <AppDatePicker />
      <input
        type="text"
        name="Name"
        aria-label="Enter your name"
        className={inputStyles}
      />
    </div>
  );
}
