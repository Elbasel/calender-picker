import { inputStyles } from "@/app/styles/input";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  alreadyRegisteredEmails?: string[];
  name?: string;
  placeholder?: string;
  customError?: string;
}

export const EmailInput = ({
  alreadyRegisteredEmails,
  name = "email",
  placeholder = "Enter your email",
  customError,
}: Props) => {
  const [error, setError] = useState<string | null>(null);

  const ValidateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email))
      return setError("Please enter a valid email address");

    if (alreadyRegisteredEmails?.includes(email))
      return setError("Email already exists");

    setError(null);
  };

  return (
    <>
      <input
        required
        onSubmit={ValidateEmail}
        type="email"
        name={name}
        placeholder={placeholder}
        className={twMerge(inputStyles, error && "border-red-500")}
      />
      {customError ||
        (error && (
          <p className="text-red-500 animate-in fade-in slide-in-from-top-1">
            {customError || error}
          </p>
        ))}
    </>
  );
};
