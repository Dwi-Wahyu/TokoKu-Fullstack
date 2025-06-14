"use server";

import { TUpdateMataKuliah } from "@/app/_components/mata-kuliah/EditMataKuliahDialog";
import { TTambahMataKuliah } from "@/app/_components/mata-kuliah/TambahMataKuliahDialog";
import { generateSafeFilename } from "@/hooks/use-safe-filename";
import { prisma } from "@/lib/prisma";
import { TTambahKegiatan } from "@/schema/kegiatan/TambahKegiatanSchema";
import { TTambahLampiran } from "@/schema/TambahLampiranSchema";
import { unlinkSync, writeFileSync } from "fs";
import { revalidatePath } from "next/cache";
import { extname, join } from "path";
import { createNotifikasi } from "./notifikasiAction";
import { auth } from "@/config/auth";
import { kegiatan_status } from "@/generated/prisma";

export async function updateMataKuliah(payload: TUpdateMataKuliah) {
  try {
    const query = await prisma.mata_kuliah.update({
      where: {
        id: payload.id,
      },
      data: {
        judul: payload.judul,
        semester: payload.semester,
      },
    });

    console.log(query);

    revalidatePath("/admin/pengaturan/mata-kuliah");

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

export async function tambahMataKuliah(payload: TTambahMataKuliah) {
  try {
    const query = await prisma.mata_kuliah.create({
      data: {
        judul: payload.judul,
        semester: payload.semester,
      },
    });

    console.log(query);

    revalidatePath("/admin/pengaturan/mata-kuliah");

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

export async function hapusMataKuliah(id: number) {
  const hapusQuery = await prisma.mata_kuliah.delete({
    where: {
      id,
    },
  });

  console.log(hapusQuery);

  revalidatePath("/admin/pengaturan/mata-kuliah");

  return { success: true };
}

export async function getPenanggungJawabMahasiswa(id: string) {
  const data = await prisma.pengguna.findUnique({
    where: {
      id,
    },
    select: {
      promotorId: true,
      koPromotorId: true,
    },
  });

  return data;
}

export async function editKegiatan(id: number, payload: TTambahKegiatan) {
  console.log(payload);

  const { judul, mata_kuliahId, lokasi, tanggal } = payload;

  const query = await prisma.kegiatan.update({
    where: {
      id,
    },
    data: {
      judul,
      mata_kuliahId: parseInt(mata_kuliahId),
      lokasi,
      tanggalMulai: tanggal.from,
      tanggalSelesai: tanggal.to,
    },
  });

  console.log(query);

  // TODO: buat notifikasi bahwa mahasiswa telah mengubah pengajuan ke pembimbing

  return { success: true };
}

export async function tambahKegiatan(payload: TTambahKegiatan) {
  const { judul, status, mata_kuliahId, tanggal, lokasi, lampiran, pengajuId } =
    payload;

  const query = await prisma.kegiatan.create({
    data: {
      judul,
      status,
      lokasi,
      mata_kuliahId: parseInt(mata_kuliahId),
      tanggalMulai: tanggal.from,
      tanggalSelesai: tanggal.to,
      pengajuId,
    },
  });

  console.log(query);

  if (lampiran?.length) {
    const lampiranData = [];

    for (const eachFile of lampiran) {
      const relativeLampiranPath = generateSafeFilename(eachFile.name);
      const absoluteLampiranPath = join(
        process.cwd(),
        "public/lampiran",
        relativeLampiranPath
      );

      const ext = extname(eachFile.name);
      const bytes = await eachFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      writeFileSync(absoluteLampiranPath, buffer);

      lampiranData.push({
        path: relativeLampiranPath,
        kegiatanId: query.id,
        ext,
      });
    }

    const createManyLampiran = await prisma.lampiran_kegiatan.createMany({
      data: lampiranData.map((value) => ({
        path: value.path,
        kegiatanId: value.kegiatanId,
        ext: value.ext,
      })),
    });

    console.log(createManyLampiran);
  }

  const dataPengaju = await prisma.pengguna.findUnique({
    where: {
      id: pengajuId,
    },
    select: {
      nama: true,
      promotor: {
        select: {
          id: true,
          nama: true,
        },
      },
      koPromotor: {
        select: {
          id: true,
          nama: true,
        },
      },
    },
  });

  const notificationTitle = "Pengajuan Kegiatan Baru";
  const notificationMessage = `Mahasiswa bimbingan Anda, ${
    dataPengaju?.nama
  }, telah mengajukan kegiatan baru: 
"${judul}" 
dengan jadwal ${new Date(tanggal.from).toLocaleDateString()} hingga ${new Date(
    tanggal.to
  ).toLocaleDateString()}.
Silakan tinjau pengajuan ini segera.`;

  // Kirim notifikasi ke promotor jika ada
  if (dataPengaju?.promotor) {
    await createNotifikasi({
      judul: notificationTitle,
      penggunaId: dataPengaju.promotor.id,
      pesan: notificationMessage,
    });
  }

  // Kirim notifikasi ke ko-promotor jika ada
  if (dataPengaju?.koPromotor) {
    await createNotifikasi({
      judul: notificationTitle,
      penggunaId: dataPengaju.koPromotor.id,
      pesan: notificationMessage,
    });
  }

  return { success: true, newKegiatanId: query.id };
}

export async function getOneKegiatan(id: number) {
  const kegiatan = await prisma.kegiatan.findUnique({
    where: {
      id,
    },
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
  });

  return kegiatan;
}

export async function hapusKegiatan(id: number) {
  const query = await prisma.kegiatan.delete({
    where: {
      id,
    },
  });

  console.log(query);

  revalidatePath("/admin/kegiatan");

  return { success: true };
}

export async function tanggapiKegiatan(
  id: number,
  catatan: string,
  status: kegiatan_status
) {
  const session = await auth();

  if (!session) {
    return { success: false, errorCode: 401 };
  }

  const kegiatan = await prisma.kegiatan.findUnique({
    where: { id },
    select: {
      judul: true,
      pengajuId: true,
      pengaju: {
        select: {
          nama: true,
        },
      },
    },
  });

  const dataPembimbing = await prisma.pengguna.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      nama: true,
    },
  });

  if (!kegiatan) {
    return { success: false, errorCode: 404 };
  }

  const update = await prisma.kegiatan.update({
    where: {
      id,
    },
    data: {
      catatan,
      status,
    },
  });

  console.log(update);

  // Notifikasi untuk status DITERIMA
  if (status === "DISETUJUI") {
    const notificationTitle = "Pengajuan Kegiatan Disetujui";
    const notificationMessage = `Selamat! Pengajuan kegiatan Anda dengan judul "${
      kegiatan.judul
    }" telah 
    DISETUJUI oleh ${dataPembimbing?.nama || "pembimbing"}. ${
      catatan ? `Catatan: ${catatan}` : ""
    }`;

    await createNotifikasi({
      judul: notificationTitle,
      penggunaId: kegiatan.pengajuId ?? "",
      pesan: notificationMessage,
    });
  }

  // Notifikasi untuk status DITOLAK
  if (status === "DITOLAK") {
    const notificationTitle = "Pengajuan Kegiatan Ditolak";
    const notificationMessage = `Mohon maaf, pengajuan kegiatan Anda dengan judul "${
      kegiatan.judul
    }" telah
    DITOLAK oleh ${dataPembimbing?.nama || "pembimbing"}. Alasan penolakan: ${
      catatan || "Tidak dicantumkan"
    }
   Silakan perbaiki dan ajukan kembali.`;

    await createNotifikasi({
      judul: notificationTitle,
      penggunaId: kegiatan.pengajuId ?? "",
      pesan: notificationMessage,
    });
  }

  revalidatePath("/admin/kegiatan/" + id);

  return { success: true };
}

export async function hapusSemuaLampiran(id: number) {
  return await prisma.$transaction(async (prisma) => {
    const lampirans = await prisma.lampiran_kegiatan.findMany({
      where: { kegiatanId: id },
      select: { id: true, path: true },
    });

    const deleteResult = await prisma.lampiran_kegiatan.deleteMany({
      where: {
        id: { in: lampirans.map((l) => l.id) },
      },
    });

    try {
      for (const lampiran of lampirans) {
        const absolutePath = join(
          process.cwd(),
          "public/lampiran",
          lampiran.path
        );
        unlinkSync(absolutePath);
      }
    } catch (error) {
      console.error("Gagal menghapus file:", error);
      throw new Error("Gagal menghapus file fisik");
    }

    revalidatePath(`/admin/kegiatan/${id}`);

    return { success: true, deletedCount: deleteResult.count };
  });
}

export async function tambahLampiran(formData: TTambahLampiran) {
  const { id, lampiran } = formData;

  const lampiranData = [];

  try {
    for (const eachFile of lampiran) {
      const relativeLampiranPath = generateSafeFilename(eachFile.name);
      const absoluteLampiranPath = join(
        process.cwd(),
        "public/lampiran",
        relativeLampiranPath
      );

      const ext = extname(eachFile.name);
      const bytes = await eachFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      writeFileSync(absoluteLampiranPath, buffer);

      lampiranData.push({
        path: relativeLampiranPath,
        kegiatanId: id,
        ext,
      });
    }

    const createManyLampiran = await prisma.lampiran_kegiatan.createMany({
      data: lampiranData.map((value) => ({
        path: value.path,
        kegiatanId: value.kegiatanId,
        ext: value.ext,
      })),
    });

    console.log(createManyLampiran);

    revalidatePath(`/admin/permohonan-kegiatan/${id}`);

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
