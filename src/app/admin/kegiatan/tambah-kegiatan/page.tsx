import TambahKegiatanForm from "@/app/_components/kegiatan/TambahKegiatanForm";
import UnauthorizedPage from "@/app/_components/UnauthorizedPage";
import { getPenanggungJawabMahasiswa } from "@/app/_lib/actions/kegiatanActions";
import { getAllMataKuliah } from "@/app/_lib/queries/kegiatanQueries";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/config/auth";
import { prisma } from "@/lib/prisma";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function TambahKegiatan() {
  const session = await auth();

  if (!session) {
    return <UnauthorizedPage />;
  }

  const allMataKuliah = await getAllMataKuliah();

  const kegiatanBelumSelesaiBelumDisetujui = await prisma.kegiatan.findFirst({
    where: {
      pengajuId: session.user.id,
      tanggalSelesai: {
        gte: new Date(),
      },
      status: {
        not: "DISETUJUI",
      },
    },
  });

  if (kegiatanBelumSelesaiBelumDisetujui) {
    return (
      <div className="w-full md:w-[40rem] mx-auto bg-primary-foreground text-center flex items-center justify-center px-4 py-6 rounded-xl flex-col gap-4">
        <h1 className="font-semibold text-lg md:text-xl">
          Tidak Dapat Membuat Pengajuan
        </h1>
        <TriangleAlert width={100} height={100} />
        <div>
          <h1 className="text-sm md:text-base">
            Anda Tidak Dapat Membuat Kegiatan Baru Karena Kegiatan Sebelumnya
            Belum Disetujui
          </h1>

          <Link href="/admin/kegiatan?semester=1">
            <Button variant={"link"}>Kembali</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<Skeleton className="w-full h-40" />}>
      <TambahKegiatanForm
        allMataKuliah={allMataKuliah}
        pengajuId={session.user.id}
      />
    </Suspense>
  );
}
