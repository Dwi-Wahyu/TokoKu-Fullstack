"use server";

import {
  editPenggunaSchema,
  TEditPenggunaSchema,
} from "@/common/schema/pengguna/EditPenggunaSchema";
import {
  tambahPenggunaSchema,
  TTambahPenggunaSchema,
} from "@/common/schema/pengguna/TambahPenggunaSchema";
import { prisma } from "@/lib/prisma";
import {
  handlePrismaUniqueViolation,
  validateServerActionPayload,
} from "@/lib/validateServerActionPayload";
import { hashSync } from "bcryptjs";
import { log } from "console";
import { revalidatePath } from "next/cache";

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

  const { nama, password, peran, username } = data;

  try {
    const hashedPw = hashSync(password, 8);

    const tambahPenggunaQuery = await prisma.pengguna.create({
      data: {
        nama,
        username,
        peran,
        password: hashedPw,
      },
    });

    log(tambahPenggunaQuery);

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

  const { nama, peran, username } = data;

  try {
    const editPenggunaQuery = await prisma.pengguna.update({
      where: {
        id,
      },
      data: {
        nama,
        username,
        peran,
      },
    });

    log(editPenggunaQuery);

    return {
      success: true,
    };
  } catch (error) {
    return handlePrismaUniqueViolation(error);
  }
}
