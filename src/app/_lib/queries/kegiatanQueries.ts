import "server-only";

import { prisma } from "@/lib/prisma";
import { TDefaultTableSearchParams } from "../validations/defaultTableSearchParams";
import { TKegiatanSearchParams } from "../validations/kegiatanSearchParams";
import { Prisma } from "@/generated/prisma";
import { auth } from "@/config/auth";

export async function getAllMataKuliah() {
  const allMataKuliah = await prisma.mata_kuliah.findMany();

  return allMataKuliah;
}

export async function getMataKuliah(input: TDefaultTableSearchParams) {
  const filtered = await prisma.mata_kuliah.count({
    where: {
      judul: {
        contains: input.search,
      },
    },
  });
  const data = await prisma.mata_kuliah.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: {
      judul: {
        contains: input.search,
      },
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getKegiatan(input: TKegiatanSearchParams) {
  const session = await auth();

  // Base where clause for kegiatan
  let whereClause: Prisma.kegiatanWhereInput = {};
  let mataKuliahWehereClause: Prisma.mata_kuliahWhereInput = {};

  if (input.semester) {
    mataKuliahWehereClause = {
      semester: input.semester,
    };
  }

  if (session?.user.peran === "DOSEN") {
    // Untuk dosen, cari kegiatan mahasiswa bimbingannya
    whereClause = {
      pengaju: {
        pembimbingId: session.user.id,
      },

      ...(input.semester !== 0 && {
        mata_kuliah: {
          semester: input.semester,
        },
      }),
      ...(input.id_mata_kuliah && {
        mata_kuliahId: input.id_mata_kuliah,
      }),
      ...(input.nama_mahasiswa && {
        pengaju: {
          nama: {
            contains: input.nama_mahasiswa,
          },
        },
      }),
      ...(input.status && {
        status: input.status,
      }),
    };
  } else {
    whereClause = {
      pengajuId: session?.user.id,
      ...(input.semester !== 0 && {
        mata_kuliah: {
          semester: input.semester,
        },
      }),
      ...(input.id_mata_kuliah && {
        mata_kuliahId: input.id_mata_kuliah,
      }),
      ...(input.status && {
        status: input.status,
      }),
    };
  }

  // Hitung total data untuk pagination
  const filtered = await prisma.kegiatan.count({
    where: whereClause,
  });

  const allMataKuliah = await prisma.mata_kuliah.findMany({
    where: mataKuliahWehereClause,
  });

  // Ambil data kegiatan
  const data = await prisma.kegiatan.findMany({
    where: whereClause,
    select: {
      id: true,
      judul: true,
      status: true,
      tanggalMulai: true,
      tanggalSelesai: true,
      lokasi: true,
      createdAt: true,
      lampiran: {
        select: {
          path: true,
          ext: true,
        },
      },
      pengaju: {
        select: {
          id: true,
          nama: true,
          username: true,
          promotorId: true,
          koPromotorId: true,
        },
      },
      mata_kuliah: {
        select: {
          id: true,
          semester: true,
          judul: true,
        },
      },
    },
    skip: (input.page - 1) * input.perPage,
    take: input.perPage,
    orderBy: {
      createdAt: "desc",
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return {
    data,
    allMataKuliah,
    pageCount,
    filtered,
  };
}
