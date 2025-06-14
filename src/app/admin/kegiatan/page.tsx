import { KegiatanTable } from "@/app/_components/kegiatan/KegiatanTable";
import { getKegiatan } from "@/app/_lib/queries/kegiatanQueries";
import { kegiatanSearchParams } from "@/app/_lib/validations/kegiatanSearchParams";
import { DatatableSkeleton } from "@/components/datatable/datatable-skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { auth } from "@/config/auth";
import { SquarePlus } from "lucide-react";
import Link from "next/link";
import { SearchParams } from "nuqs";
import { Suspense } from "react";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function DaftarKegiatan(props: IndexPageProps) {
  const session = await auth();

  const searchParams = await props.searchParams;
  const search = kegiatanSearchParams.parse(searchParams);

  const updatedSearch = {
    ...search,
    semester: search.semester,
  };

  const promises = Promise.all([getKegiatan(updatedSearch)]);

  const isMahasiswa = session?.user.peran === "MAHASISWA";

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-lg ">Daftar Permohonan Kegiatan</h1>
          {isMahasiswa && (
            <h1 className="text-sm mt-1">Semester {search.semester}</h1>
          )}
        </div>

        {isMahasiswa && (
          <Button asChild>
            <Link href="/admin/kegiatan/tambah-kegiatan">
              <SquarePlus />
              Tambah Kegiatan
            </Link>
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <Suspense fallback={<DatatableSkeleton />}>
          <KegiatanTable promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
