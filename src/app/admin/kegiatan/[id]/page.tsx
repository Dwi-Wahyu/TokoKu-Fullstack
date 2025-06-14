import EditKegiatanForm from "@/app/_components/kegiatan/EditKegiatanForm";
import UnauthorizedPage from "@/app/_components/UnauthorizedPage";
import { getOneKegiatan } from "@/app/_lib/actions/kegiatanActions";
import { getAllMataKuliah } from "@/app/_lib/queries/kegiatanQueries";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/config/auth";
import { Suspense } from "react";

// Define the params type
export default async function EditKegiatan({
  params,
}: {
  params: Promise<{ id: string }>; // Use Promise for params
}) {
  const session = await auth();

  if (!session) {
    return <UnauthorizedPage />;
  }

  // Await the params to get the actual id
  const { id } = await params;

  // Validate params.id to ensure it's a valid number
  if (!id || isNaN(parseInt(id))) {
    return <h1>Invalid Kegiatan ID</h1>;
  }

  const allMataKuliah = await getAllMataKuliah();
  const kegiatanData = await getOneKegiatan(parseInt(id));

  if (!kegiatanData) {
    return <h1>Kegiatan Tidak Ditemukan</h1>;
  }

  return (
    <Suspense fallback={<Skeleton className="w-full h-40" />}>
      <EditKegiatanForm
        allMataKuliah={allMataKuliah}
        pengajuId={session.user.id}
        kegiatanData={kegiatanData}
      />
    </Suspense>
  );
}
