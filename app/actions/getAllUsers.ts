"use server";

import { getPrismaClient } from "./getPrismaClient";

export const getAllUsers = async () => {
  const prismaClient = getPrismaClient();
  return await prismaClient.user.findMany();
};
