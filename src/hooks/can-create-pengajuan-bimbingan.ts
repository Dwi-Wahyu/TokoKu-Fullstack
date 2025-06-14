import { auth } from "@/config/auth";
import { prisma } from "@/lib/prisma";

export async function checkCanCreatePengajuan() {
  const session = await auth();

  if (!session) {
    return false;
  }

  const dataPengguna = await prisma.pengguna.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      promotor: true,
      koPromotor: true,
    },
  });

  if (dataPengguna?.promotor && dataPengguna.koPromotor) {
    return false;
  }

  return true;
}
