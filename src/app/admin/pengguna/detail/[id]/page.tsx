import { Skeleton } from "@/components/ui/skeleton";
import { Fragment, Suspense } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNameInitials } from "@/service/getNameInitials";
import { Separator } from "@/components/ui/separator";
import { Contact, ContactRound, User } from "lucide-react";
import MahasiswaBimbinganCard from "@/app/_components/pengguna/MahasiswaBimbinganCard";
import { getDetailPengguna } from "@/app/_lib/actions/penggunaActions";
import { format } from "date-fns";
import PembimbingCard from "@/app/_components/pengguna/PembimbingCard";
import { auth } from "@/config/auth";

export default async function DetailPengguna({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();

  const dataPengguna = await getDetailPengguna(id);

  if (!dataPengguna) {
    return <h1>Pengguna tidak ditemukan</h1>;
  }

  const isDosen = dataPengguna.peran === "DOSEN";
  const isMahasiswa = dataPengguna.peran === "MAHASISWA";
  const isAdmin = session?.user.peran === "ADMIN";

  return (
    <Suspense fallback={<Skeleton className="w-full h-40" />}>
      <Card className="mb-5">
        <CardHeader className="flex items-center gap-5 w-full">
          <Avatar className="w-20 h-20 ">
            <AvatarImage
              src={`/image/profile-picture/${dataPengguna.avatar}`}
              alt="foto-profil"
            />
            <AvatarFallback>
              {getNameInitials(dataPengguna.nama)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <CardTitle>{dataPengguna?.nama}</CardTitle>
            <CardDescription>{dataPengguna?.username}</CardDescription>
            <Badge variant={"secondary"} className="mt-1">
              {dataPengguna?.peran == "DOSEN" ? <Contact /> : <ContactRound />}

              {dataPengguna?.peran}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Separator />
          <CardTitle>Informasi Pengguna</CardTitle>
          <div>
            {isDosen ? <h1>NIP</h1> : <h1>NIM</h1>}
            <h1 className="text-muted-foreground">
              {dataPengguna.username ?? "-"}
            </h1>
          </div>

          <div>
            <h1>Email</h1>
            <h1 className="text-muted-foreground">
              {dataPengguna.profil?.email ?? "-"}
            </h1>
          </div>

          <div>
            <h1>Nomor Telpon</h1>
            <h1 className="text-muted-foreground">
              {dataPengguna.profil?.nomorTelpon ?? "-"}
            </h1>
          </div>

          <div>
            <h1>Alamat</h1>
            <h1 className="text-muted-foreground">
              {dataPengguna.profil?.alamat ?? "-"}
            </h1>
          </div>

          <div>
            <h1>Tempat Tanggal Lahir</h1>
            <h1 className="text-muted-foreground">
              {dataPengguna.profil?.tempatTanggalLahir ?? "-"}
            </h1>
          </div>

          {isMahasiswa && (
            <Fragment>
              <div>
                <h1>Mulai Masuk Pendidikan</h1>
                <h1 className="text-muted-foreground">
                  {dataPengguna.profil?.mulaiMasukPendidikan
                    ? format(
                        new Date(dataPengguna.profil.mulaiMasukPendidikan),
                        "yyyy/MM/dd"
                      )
                    : "-"}
                </h1>
              </div>

              <div>
                <h1>Tahun Lulus</h1>
                <h1 className="text-muted-foreground">
                  {dataPengguna.profil?.tahunLulus ?? "-"}
                </h1>
              </div>
            </Fragment>
          )}
        </CardContent>
      </Card>

      {isDosen && <MahasiswaBimbinganCard dataPengguna={dataPengguna} />}

      {isAdmin && !isDosen && <PembimbingCard dataPengguna={dataPengguna} />}
    </Suspense>
  );
}
