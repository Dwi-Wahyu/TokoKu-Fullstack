import { Suspense } from "react";
import { SearchParams } from "nuqs/server";
import { DatatableSkeleton } from "@/components/datatable/datatable-skeleton";
import { auth } from "@/config/auth";
import { defaultTableSearchParams } from "@/app/_lib/validations/defaultTableSearchParams";
import { MataKuliahTable } from "@/app/_components/mata-kuliah/MataKuliahTable";
import TambahMataKuliahDialog from "@/app/_components/mata-kuliah/TambahMataKuliahDialog";
import { getMataKuliah } from "@/app/_lib/queries/kegiatanQueries";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function MataKuliah(props: IndexPageProps) {
  const session = await auth();

  const searchParams = await props.searchParams;
  const search = defaultTableSearchParams.parse(searchParams);

  const promises = Promise.all([getMataKuliah(search)]);

  const isAdmin = session?.user.peran === "ADMIN";

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg ">Daftar Mata Kuliah</h1>

          {isAdmin && <TambahMataKuliahDialog />}
        </div>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<DatatableSkeleton />}>
          <MataKuliahTable promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
