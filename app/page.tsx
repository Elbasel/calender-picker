// "use client";

import { AppDatePicker } from "./ui/DatePicker";
import { inputStyles } from "./styles/input";

const HomePage = async () => {
  return (
    <form className="flex flex-col gap-8 px-80">
      <AppDatePicker name="date" />
      <input
        type="text"
        name="name"
        placeholder="What should I call you?"
        className={inputStyles}
      />
    </form>
  );
};
export default HomePage;
