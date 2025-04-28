import { FeatureFlagsProvider } from "@/app/_components/FeatureFlagProvider";
import { TugasTable } from "@/app/_components/tugas/TugasTable";
import { getTugas } from "@/app/_lib/queries/tugasQueries";
import { tugasSearchParamsCache } from "@/app/_lib/validations/tugasSearchParams";
import { DatatableSkeleton } from "@/components/datatable/datatable-skeleton";
import { SearchParams } from "nuqs";
import { Suspense } from "react";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function DaftarTugas(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = tugasSearchParamsCache.parse(searchParams);

  const promises = Promise.all([
    getTugas({
      ...search,
    }),
  ]);

  return (
    <div>
      <Suspense fallback={<DatatableSkeleton />}>
        <TugasTable promises={promises} />
      </Suspense>
    </div>
  );
}
