import { TSearchParamsSchema } from "@/schema/SearchParamsSchema";
import { TTambahPenggunaSchema } from "@/schema/pengguna/TambahPenggunaSchema";
import { prisma } from "@/lib/prisma";
import { count, log } from "console";
import { revalidatePath } from "next/cache";
import "server-only";
import { TTugasSearchParams } from "../validations/tugasSearchParams";

export async function getTugas(input: TTugasSearchParams) {
  console.log(input);

  const filtered = await prisma.tugas.count({
    where: {
      judul: {
        contains: input.judul,
      },
    },
  });
  const data = await prisma.tugas.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: {
      judul: {
        contains: input.judul,
      },
    },
    select: {
      id: true,
      judul: true,
      deskripsi: true,
      deadline: true,
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}
