import { DetailKegiatanCard } from "@/app/_components/DetailKegiatanCard";
import { getOneKegiatan } from "@/app/_lib/actions/kegiatanActions";

import { Skeleton } from "@/components/ui/skeleton";

import { Suspense } from "react";

export default async function DetailPermohonanKegiatan({
  params,
}: {
  params: Promise<{ id: string }>; // Use Promise for params
}) {
  const { id } = await params;

  const kegiatan = await getOneKegiatan(parseInt(id));

  return (
    <Suspense fallback={<Skeleton className="w-full h-40" />}>
      <DetailKegiatanCard kegiatan={kegiatan} />
    </Suspense>
  );
}
