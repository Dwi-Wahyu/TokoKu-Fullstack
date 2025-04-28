import { TSearchParamsSchema } from "@/schema/SearchParamsSchema";
import { TTambahPenggunaSchema } from "@/schema/pengguna/TambahPenggunaSchema";
import { prisma } from "@/lib/prisma";
import { log } from "console";
import { revalidatePath } from "next/cache";
import "server-only";
import { TPenggunaSearchParams } from "../validations/penggunaSearchParams";
import { PeranPengguna, Prisma } from "@/generated/prisma";

const PERAN_MAPPING = {
  [PeranPengguna.praktikan]: "praktikan",
  [PeranPengguna.asisten]: "asisten",
  [PeranPengguna.admin]: "admin",
};

export async function getPengguna(input: TPenggunaSearchParams) {
  type WhereClause = Prisma.penggunaWhereInput;
  let whereClause: WhereClause = {
    nama: {
      contains: input.nama,
    },
  };

  if (input.peran) {
    whereClause = {
      nama: {
        contains: input.nama,
      },
      peran: input.peran,
    };
  }

  const filtered = await prisma.pengguna.count({
    where: whereClause,
  });
  const data = await prisma.pengguna.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: whereClause,
    select: {
      id: true,
      nama: true,
      username: true,
      peran: true,
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}
