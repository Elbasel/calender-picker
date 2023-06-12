"use server";

import { getPrismaClient } from "./getPrismaClient";

interface Args {
  name: string;
  email: string;
}

export const createNewUser = async ({ email, name }: Args) => {
  const prismaClient = getPrismaClient();
  return await prismaClient.user.create({
    data: {
      name: name,
      email: email,
    },
  });
};
