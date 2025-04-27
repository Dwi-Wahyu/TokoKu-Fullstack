import { TSearchParamsSchema } from "@/common/schema/SearchParamsSchema";
import { TTambahPenggunaSchema } from "@/common/schema/pengguna/TambahPenggunaSchema";
import { prisma } from "@/lib/prisma";
import { log } from "console";
import { revalidatePath } from "next/cache";
import "server-only";
import { TTugasSearchParams } from "../validations/tugasSearchParams";

export async function getTugas(input: TTugasSearchParams) {
  console.log(input);

  const allTugas = await prisma.tugas.findMany({
    where: {
      judul: {
        contains: input.judul,
      },
    },
    select: {
      id: true,
      judul: true,
      deskripsi: true,
    },
  });

  return allTugas;
}
