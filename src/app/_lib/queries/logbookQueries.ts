import "server-only";

import { prisma } from "@/lib/prisma";

export async function getDataLogbookPengguna(id: string) {
  const dataPengguna = await prisma.pengguna.findFirst({
    where: {
      id,
    },
    select: {
      nama: true,
      username: true,
      kegiatan: true,
      profil: true,
      promotor: {
        select: {
          nama: true,
        },
      },
      koPromotor: {
        select: {
          nama: true,
        },
      },
    },
  });

  return dataPengguna;
}

export async function getLogbookPengguna(id: string) {
  return await prisma.logbook.findFirst({
    where: {
      penggunaId: id,
    },
  });
}

export async function getLogbookFile(id: string) {}
