import { TSearchParamsSchema } from "@/common/schema/SearchParamsSchema";
import { TTambahPenggunaSchema } from "@/common/schema/pengguna/TambahPenggunaSchema";
import { prisma } from "@/lib/prisma";
import { log } from "console";
import { revalidatePath } from "next/cache";
import "server-only";

export async function getDataTabelPengguna() {
  const allPengguna = await prisma.pengguna.findMany({
    select: {
      id: true,
      nama: true,
      username: true,
      peran: true,
    },
  });

  return allPengguna;
}
