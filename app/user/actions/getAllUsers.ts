"use server";

import { getPrismaClient } from "@/app/actions";

export const getAllUsers = async () => {
  const prismaClient = getPrismaClient();
  return await prismaClient.user.findMany();
};
