"use server";

import { auth } from "@/config/auth";
import { prisma } from "@/lib/prisma";
import { TPengajuanBimbinganForm } from "@/schema/BimbinganSchema";
import { revalidatePath } from "next/cache";
import { createNotifikasi } from "./notifikasiAction";

export async function buatPengajuanBimbingan(payload: TPengajuanBimbinganForm) {
  try {
    const createPermohonan = await prisma.permohonan_bimbingan.create({
      data: {
        mahasiswaId: payload.idPengaju,
        dosenId: payload.idPembimbing,
        kalimatPermohonan: payload.kalimatPermohonan,
      },
    });

    console.log(createPermohonan);

    createNotifikasi({
      judul: "Pengajuan Bimbingan Baru",
      penggunaId: payload.idPembimbing,
      pesan: `Anda menerima permohonan bimbingan dari ${
        payload?.namaPengaju || "mahasiswa"
      }. Silakan tinjau permohonan ini segera.`,
    });

    revalidatePath("/admin/pengajuan-bimbingan");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
}

export async function tanggapiPermohonan(
  id: number,
  statusPermohonan: "DITOLAK" | "DISETUJUI" | "TERKIRIM",
  alasanDitolak: string
) {
  try {
    const query = await prisma.permohonan_bimbingan.update({
      where: {
        id,
      },
      data: {
        statusPermohonan,
        alasanDitolak,
      },
      include: {
        dosen: {
          select: {
            nama: true,
          },
        },
      },
    });

    if (statusPermohonan === "DISETUJUI") {
      const updatePengguna = await prisma.pengguna.update({
        where: {
          id: query.mahasiswaId ?? "",
        },
        data: {
          pembimbingId: query.dosenId,
        },
      });

      createNotifikasi({
        judul: `Persetujuan Permohonan Bimbingan`,
        penggunaId: query.mahasiswaId ?? "",
        pesan: `Permohonan bimbingan Anda dengan ${query.dosen?.nama} telah disetujui. Silakan koordinasikan jadwal bimbingan lebih lanjut.`,
      });

      console.log(updatePengguna);
    } else {
      createNotifikasi({
        judul: "Status Permohonan Bimbingan",
        penggunaId: query.mahasiswaId ?? "",
        pesan: `Mohon maaf, permohonan bimbingan Anda dengan ${query.dosen?.nama} tidak dapat disetujui. Alasan: ${alasanDitolak}. Silakan ajukan permohonan baru atau konsultasikan dengan bagian akademik.`,
      });
    }

    console.log(query);

    revalidatePath("/admin/permohonan-bimbingan");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
}

export async function hapusPenggunaDariBimbingan(mahasiswaId: string) {
  const session = await auth();

  try {
    const updateQuery = await prisma.pengguna.update({
      where: {
        id: session?.user.id,
      },
      data: {
        bimbingan: {
          disconnect: {
            id: mahasiswaId,
          },
        },
      },
    });

    createNotifikasi({
      judul: "Perubahan Status Bimbingan",
      penggunaId: mahasiswaId,
      pesan: `Anda telah dikeluarkan dari daftar bimbingan ${updateQuery.nama}. Silakan menghubungi ${updateQuery.nama} untuk informasi lebih lanjut mengenai keputusan ini.`,
    });

    console.log(updateQuery);

    revalidatePath("/admin/pengguna/mahasiswa-bimbingan");

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      success: true,
      error,
    };
  }
}
