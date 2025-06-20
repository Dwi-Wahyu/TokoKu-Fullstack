import "server-only";

import { prisma } from "@/lib/prisma";
import { TPenggunaSearchParams } from "../validations/penggunaSearchParams";
import { Prisma } from "@/generated/prisma";

export async function getPengguna(input: TPenggunaSearchParams) {
  type WhereClause = Prisma.penggunaWhereInput;
  let whereClause: WhereClause;

  if (input.peran === "DOSEN") {
    whereClause = {
      nama: {
        contains: input.nama,
      },
      username: {
        contains: input.username,
      },
    };
  } else {
    whereClause = {
      nama: {
        contains: input.nama,
      },
      profil: {
        angkatan: {
          contains: input.angkatan,
        },
      },
    };
  }

  const filtered = await prisma.pengguna.count({
    where: { ...whereClause, peran: input.peran },
  });
  const data = await prisma.pengguna.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: { ...whereClause, peran: input.peran },
    select: {
      id: true,
      nama: true,
      username: true,
      peran: true,
      profil: {
        select: {
          angkatan: true,
        },
      },
      bimbingan: {
        select: {
          nama: true,
        },
      },
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getProfilPengguna(id: string) {
  const profil = await prisma.pengguna.findUnique({
    where: {
      id,
    },
    select: {
      nama: true,
      username: true,
      peran: true,
      avatar: true,
      signature: true,
      pembimbing: {
        select: { nama: true, avatar: true },
      },
      promotor: {
        select: { nama: true, avatar: true },
      },
      koPromotor: {
        select: { nama: true, avatar: true },
      },
      profil: {
        select: {
          judulDisertasi: true,
          alamat: true,
          alamatKeluarga: true,
          angkatan: true,
          email: true,
          mulaiMasukPendidikan: true,
          nomorTelpon: true,
          pekerjaan: true,
          tahunLulus: true,
          tempatTanggalLahir: true,
        },
      },
    },
  });

  return profil;
}
