"use client";

import { UseAutoFocus } from "@/app/hooks/useAutoFocus";

const inputClassName =
  "bg-slate-900 rounded-lg transition-all duration-300 ease-in font-normal text-white py-2 px-4 w-full";

const TestAutoFocusPage = () => {
  const lastInputElementFocused = UseAutoFocus();
  console.log({ lastInputElementFocused });

  return (
    <>
      <input type="text" placeholder="1" className={inputClassName} />
      <input type="text" placeholder="2" className={inputClassName} />
      <input type="text" placeholder="3" className={inputClassName} />
    </>
  );
};

export default TestAutoFocusPage;
