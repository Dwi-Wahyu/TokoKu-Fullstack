import { getDataTabelPengguna } from "@/app/_lib/queries/penggunaQueries";
import { Suspense } from "react";
import { PenggunaTable } from "@/app/_components/pengguna/PenggunaTable";
import { SearchParams } from "nuqs/server";
import { DatatableSkeleton } from "@/components/datatable/datatable-skeleton";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Link from "next/link";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function DaftarPengguna(props: IndexPageProps) {
  const promises = getDataTabelPengguna();

  return (
    <div className="">
      <div className="flex justify-between mb-6 items-center">
        <h1 className="font-semibold text-lg ">Daftar Pengguna</h1>

        <Link href="/admin/pengguna/tambah-pengguna">
          <Button>
            <UserPlus />
            Tambah Pengguna
          </Button>
        </Link>
      </div>

      <Suspense fallback={<DatatableSkeleton />}>
        <PenggunaTable promises={promises} />
      </Suspense>
    </div>
  );
}
