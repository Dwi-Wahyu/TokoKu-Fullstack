import { SearchParams } from "nuqs";
import { createSearchParamsCache, parseAsString } from "nuqs/server";

import PengajuanBimbinganForm from "@/app/_components/bimbingan/PengajuanBimbinganForm";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/config/auth";
import {
  getDataPembimbing,
  getSejarahPengajuan,
} from "@/app/_lib/queries/bimbinganQueries";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

const pageSearchParams = createSearchParamsCache({
  dosenId: parseAsString.withDefault(""),
});

export default async function PengajuanBimbingan(props: IndexPageProps) {
  const session = await auth();
  const searchParams = await props.searchParams;
  let search = pageSearchParams.parse(searchParams);

  const dataTemp = await getDataPembimbing(session?.user.id as string);

  const daftarDosen = await prisma.pengguna.findMany({
    where: {
      peran: "DOSEN",
      id: {
        notIn: [dataTemp?.promotor?.id, dataTemp?.koPromotor?.id].filter(
          Boolean
        ) as string[],
      },
    },
    select: {
      id: true,
      nama: true,
    },
  });

  const sejarahPengajuan = await getSejarahPengajuan(
    session?.user.id as string
  );

  return (
    <Suspense fallback={<Skeleton className="w-full h-40" />}>
      <PengajuanBimbinganForm
        dataPembimbing={dataTemp}
        daftarDosen={daftarDosen}
        sejarahPengajuan={sejarahPengajuan}
        namaPengaju={session?.user.nama ?? ""}
        penggunaId={session?.user.id ?? ""}
        dosenId={search.dosenId}
      />
    </Suspense>
  );
}
