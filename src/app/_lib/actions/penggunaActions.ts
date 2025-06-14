"use server";

import {
  editPenggunaSchema,
  TEditPenggunaSchema,
} from "@/schema/pengguna/EditPenggunaSchema";
import {
  tambahPenggunaSchema,
  TTambahPenggunaSchema,
} from "@/schema/pengguna/TambahPenggunaSchema";
import { prisma } from "@/lib/prisma";
import {
  handlePrismaUniqueViolation,
  validateServerActionPayload,
} from "@/lib/validateServerActionPayload";
import { compareSync, hashSync } from "bcryptjs";
import { log } from "console";
import { revalidatePath } from "next/cache";
import { TGantiProfilSchema } from "@/schema/GantiProfilSchema";
import { join } from "path";
import { unlinkSync, writeFileSync } from "fs";
import { generateSafeFilename } from "@/hooks/use-safe-filename";
import { TEditProfilPengguna } from "@/schema/EditProfilSchema";
import { auth } from "@/config/auth";
import { TUpdatePasswordSchema } from "@/schema/pengguna/UpdatePasswordSchema";
import { TUpdatePembimbingSchema } from "@/app/_components/bimbingan/GantiPembimbingDialog";
import { createNotifikasi } from "./notifikasiAction";

export async function deletePengguna(id: string) {
  if (!id) throw new Error("ID tidak ditemukan.");

  await prisma.pengguna.delete({
    where: { id },
  });

  revalidatePath("/admin/pengguna");

  return {
    success: true,
  };
}

export async function tambahPengguna(payload: TTambahPenggunaSchema) {
  const { data, error } = await validateServerActionPayload(
    payload,
    tambahPenggunaSchema
  );

  if (error) {
    return error;
  }

  if (!data) {
    return {
      success: false,
    };
  }

  const { nama, password, peran, username, angkatan } = data;

  try {
    const hashedPw = hashSync(password, 8);

    // Data dasar yang akan disimpan
    const dataPengguna: any = {
      nama,
      username,
      peran,
      password: hashedPw,
    };

    const tambahPenggunaQuery = await prisma.pengguna.create({
      data: dataPengguna,
    });

    log(tambahPenggunaQuery);

    revalidatePath("/admin/pengguna");

    return {
      success: true,
    };
  } catch (error) {
    return handlePrismaUniqueViolation(error);
  }
}

export async function editPengguna(id: string, payload: TEditPenggunaSchema) {
  if (!id) throw new Error("ID tidak ditemukan.");

  const { data, error } = await validateServerActionPayload(
    payload,
    editPenggunaSchema
  );

  if (error) {
    return error;
  }

  if (!data) {
    return {
      success: false,
    };
  }

  const { nama, username } = data;

  try {
    const editPenggunaQuery = await prisma.pengguna.update({
      where: {
        id,
      },
      data: {
        nama,
        username,
      },
    });

    log(editPenggunaQuery);

    revalidatePath("/admin/pengguna");

    return {
      success: true,
    };
  } catch (error) {
    return handlePrismaUniqueViolation(error);
  }
}

export async function editProfilPengguna(
  id: string,
  payload: TEditProfilPengguna
) {
  if (payload.signature) {
    const previousData = await prisma.pengguna.findUnique({
      where: {
        id,
      },
    });

    if (previousData?.signature) {
      const previousSignaturePath = join(
        process.cwd(),
        "public/image/signature",
        previousData.signature
      );
      unlinkSync(previousSignaturePath);
    }

    const bytes = await payload.signature.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const newSignatureRelativePath = generateSafeFilename(
      payload.signature.name
    );
    const newSignatureAbsolutePath = join(
      process.cwd(),
      "public/image/signature",
      newSignatureRelativePath
    );
    writeFileSync(newSignatureAbsolutePath, buffer);

    const updateSignaturePath = await prisma.pengguna.update({
      where: {
        id,
      },
      data: {
        signature: newSignatureRelativePath,
      },
    });

    console.log(updateSignaturePath);
  }

  const updateQuery = await prisma.profil.update({
    where: {
      penggunaId: id,
    },
    data: {
      judulDisertasi: payload.judulDisertasi,
      email: payload.email,
      nomorTelpon: payload.nomorTelpon,
      angkatan: payload.angkatan,
      tahunLulus: payload.tahunLulus,
      mulaiMasukPendidikan: payload.mulaiMasukPendidikan,
      tempatTanggalLahir: payload.tempatTanggalLahir,
      alamat: payload.alamat,
      alamatKeluarga: payload.alamatKeluarga,
      pekerjaan: payload.pekerjaan,
    },
  });

  console.log(updateQuery);

  revalidatePath("/admin/pengaturan/profil");

  return { success: true, updatedData: updateQuery };
}

async function hapusFotoProfil(id: string) {
  const user = await prisma.pengguna.findUnique({
    where: { id },
  });

  if (user?.avatar) {
    const deletePath = join(
      process.cwd(),
      "public/image/profile-picture",
      user.avatar
    );
    unlinkSync(deletePath);
  }
}

export async function gantiFotoProfil(formData: TGantiProfilSchema) {
  const file = formData.files[0];
  const { id } = formData;

  if (!file) {
    throw new Error("Tidak ada file yang diunggah.");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    hapusFotoProfil(id);

    const filename = generateSafeFilename(file.name);

    const uploadPath = join(
      process.cwd(),
      "public/image/profile-picture",
      filename
    );

    writeFileSync(uploadPath, buffer);

    const updateQuery = await prisma.pengguna.update({
      where: {
        id,
      },
      data: {
        avatar: filename,
      },
    });

    console.log(updateQuery);

    revalidatePath("/admin/pengaturan/profil");
    return { success: true, avatar: updateQuery.avatar };
  } catch (error) {
    return { success: true, error };
  }
}

export async function getDetailPengguna(id: string) {
  const dataPengguna = await prisma.pengguna.findUnique({
    where: {
      id,
    },
    include: {
      profil: true,
      bimbingan: true,
      pembimbing: {
        select: {
          id: true,
          avatar: true,
          nama: true,
          username: true,
        },
      },
      promotor: {
        select: {
          id: true,
          avatar: true,
          nama: true,
          username: true,
        },
      },
      koPromotor: {
        select: {
          id: true,
          avatar: true,
          nama: true,
          username: true,
        },
      },
    },
  });

  return dataPengguna;
}

export async function getAllDosen() {
  const allDosen = prisma.pengguna.findMany({
    where: {
      peran: "DOSEN",
    },
    select: {
      id: true,
      nama: true,
    },
  });

  return allDosen;
}

export async function cekPasswordBenar(id: string, password: string) {
  const dataPengguna = await prisma.pengguna.findUnique({
    where: { id },
    select: { password: true },
  });

  if (!dataPengguna) {
    return false;
  }

  const isPasswordMatch = compareSync(password, dataPengguna?.password);

  return isPasswordMatch;
}

export async function updatePassword(payload: TUpdatePasswordSchema) {
  const hashedPassword = hashSync(payload.newPassword, 10);

  const updatePengguna = await prisma.pengguna.update({
    where: {
      id: payload.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  console.log(updatePengguna);

  return { success: true };
}

export async function updatePembimbing(payload: TUpdatePembimbingSchema) {
  const { alasan, id, pembimbingId, promotorId, koPromotorId } = payload;
  try {
    const updateQuery = await prisma.pengguna.update({
      where: {
        id,
      },
      data: {
        pembimbingId,
        promotorId,
        koPromotorId,
      },
    });

    createNotifikasi({
      judul: "Perubahan Pembimbing Akademik",
      penggunaId: payload.id,
      pesan: `Pembimbing akademik Anda telah diperbarui oleh Administrator. ${
        alasan ? `Alasan: ${alasan}` : ""
      } Silakan periksa profil Anda untuk melihat detail perubahan.`,
    });

    if (pembimbingId) {
      createNotifikasi({
        judul: "Penugasan sebagai Dosen Pembimbing",
        penggunaId: pembimbingId,
        pesan: `Anda telah ditetapkan sebagai pembimbing akademik untuk mahasiswa ${updateQuery.nama}. Silakan periksa detail mahasiswa bimbingan Anda.`,
      });
    }

    if (promotorId) {
      createNotifikasi({
        judul: "Penugasan sebagai Promotor Akademik",
        penggunaId: promotorId,
        pesan: `Anda telah ditetapkan sebagai pembimbing akademik untuk mahasiswa ${updateQuery.nama}. Silakan periksa detail mahasiswa bimbingan Anda.`,
      });
    }

    if (koPromotorId) {
      createNotifikasi({
        judul: "Penugasan sebagai Ko-Promotor Akademik",
        penggunaId: koPromotorId,
        pesan: `Anda telah ditetapkan sebagai ko-pembimbing akademik untuk mahasiswa ${updateQuery.nama}. Silakan koordinasi dengan pembimbing utama.`,
      });
    }

    revalidatePath("/admin/pengguna/detail/" + payload.id);

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
