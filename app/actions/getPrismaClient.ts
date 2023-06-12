"use server";

import { PrismaClient } from "@prisma/client";

export const getPrismaClient = () => {
  const prismaClient = new PrismaClient();
  // This creates a colsure that returns the same instance of the PrismaClient
  // instead of creating a new instance every time.
  return (() => prismaClient)();
};
