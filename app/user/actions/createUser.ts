"use server";

import { getPrismaClient } from "@/app/actions";
import { revalidatePath } from "next/cache";

interface Args {
  name: string;
  email: string;
}

export const createUser = async ({ email, name }: Args) => {
  const prismaClient = getPrismaClient();
  await prismaClient.user.create({
    data: {
      name: name,
      email: email,
    },
  });

  revalidatePath("/test/database/user");
};
