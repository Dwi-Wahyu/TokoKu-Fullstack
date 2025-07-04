"server-only";

import { prisma } from "@/lib/prisma";

export async function getUsers() {
  const users = await prisma.user.findMany();

  return users;
}
