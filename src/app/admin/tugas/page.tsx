import { TugasTable } from "@/app/_components/pengguna/TugasTable";
import { getTugas } from "@/app/_lib/queries/tugasQueries";
import {
  TTugasSearchParams,
  tugasSearchParamsCache,
} from "@/app/_lib/validations/tugasSearchParams";
import { DatatableSkeleton } from "@/components/datatable/datatable-skeleton";
import { SearchParams } from "nuqs";
import { Suspense } from "react";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function DaftarTugas(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = tugasSearchParamsCache.parse(searchParams);

  const data = await getTugas(search);

  return (
    <div>
      <Suspense fallback={<DatatableSkeleton />}>
        <TugasTable data={data} searchParams={search} />
      </Suspense>
    </div>
  );
}
