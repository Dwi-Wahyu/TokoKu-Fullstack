import "server-only";

import { prisma } from "@/lib/prisma";
import { TPermohonanBimbinganSearchParams } from "../validations/permohonanBimbinganSearchParams";
import { auth } from "@/config/auth";

// TODO: Fix where clause, pilih mahasiswa bimbingan (promotor/kopromotor) berdasarkan id session
export async function getMahasiswaBimbingan(
  input: TPermohonanBimbinganSearchParams
) {
  const session = await auth();

  const filtered = await prisma.pengguna.count({});
  const data = await prisma.pengguna.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: {
      promotorId: session?.user.id,
    },
    include: {
      profil: {
        select: {
          angkatan: true,
        },
      },
    },
  });

  console.log(data);

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getPermohonanBimbingan(
  input: TPermohonanBimbinganSearchParams
) {
  const session = await auth();

  const filtered = await prisma.permohonan_bimbingan.count({
    where: {
      mahasiswa: {
        nama: {
          contains: input.nama,
        },
      },
      dosenId: session?.user.id,
    },
  });
  const data = await prisma.permohonan_bimbingan.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: {
      mahasiswa: {
        nama: {
          contains: input.nama,
        },
      },
      dosenId: session?.user.id,
    },
    include: {
      dosen: {
        select: {
          nama: true,
        },
      },
      mahasiswa: {
        select: {
          nama: true,
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
      },
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getSejarahPengajuan(id: string) {
  const sejarahPengajuan = await prisma.permohonan_bimbingan.findMany({
    where: {
      mahasiswaId: id,
    },
    include: {
      dosen: {
        select: {
          nama: true,
        },
      },
    },
  });

  return sejarahPengajuan;
}

export async function getDataPembimbing(id: string) {
  const dataPembimbing = await prisma.pengguna.findUnique({
    where: {
      id,
    },
    select: {
      pembimbing: {
        select: {
          username: true,
          id: true,
          nama: true,
          avatar: true,
          profil: {
            select: {
              email: true,
              nomorTelpon: true,
              alamat: true,
            },
          },
        },
      },
      promotor: {
        select: {
          username: true,
          id: true,
          nama: true,
          avatar: true,
          profil: {
            select: {
              email: true,
              nomorTelpon: true,
              alamat: true,
            },
          },
        },
      },
      koPromotor: {
        select: {
          username: true,
          id: true,
          nama: true,
          avatar: true,
          profil: {
            select: {
              email: true,
              nomorTelpon: true,
              alamat: true,
            },
          },
        },
      },
    },
  });

  return dataPembimbing;
}
