import "server-only";

import { getPrismaClient } from "./getPrismaClient";
import { createNewUser } from "./createNewUser";
import { getAllUsers } from "./getAllUsers";

export { getPrismaClient, createNewUser, getAllUsers };
