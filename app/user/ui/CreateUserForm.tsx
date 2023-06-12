"use client";

import { useState, useTransition } from "react";
import { type User } from "@prisma/client";
import { buttonStyles } from "@/app/styles/button";
import { inputStyles } from "@/app/styles/input";
import { createUser } from "../actions";
import { twMerge } from "tailwind-merge";
import EmailInput from "./EmailInput";

interface Props {
  allUsers: User[];
}

export const CreateUserForm = ({ allUsers }: Props) => {
  const [isPending, startTransition] = useTransition();

  const startCreatingUser = (formData: FormData) => {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();

    if (!name || !email || isPending) return;

    startTransition(() => {
      createUser({ name, email });
    });
  };

  return (
    <form action={startCreatingUser} className="space-y-4">
      <input
        required
        type="text"
        name="name"
        className={inputStyles}
        placeholder="Enter your name"
      />
      <EmailInput />
      <button disabled={isPending} className={buttonStyles} type="submit">
        Create
      </button>
    </form>
  );
};
