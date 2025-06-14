import {
  getAllDosen,
  getDetailPengguna,
} from "@/app/_lib/actions/penggunaActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNameInitials } from "@/service/getNameInitials";
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import GantiPembimbingDialog from "../bimbingan/GantiPembimbingDialog";
import PembimbingHero from "../PembimbingHero";

type Props = {
  dataPengguna: Awaited<ReturnType<typeof getDetailPengguna>>;
};

export default async function PembimbingCard({ dataPengguna }: Props) {
  const allDosen = await getAllDosen();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pembimbing Mahasiswa</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="w-full gap-5 grid md:grid-cols-3 grid-cols-1">
          <PembimbingHero
            avatar={dataPengguna?.koPromotor?.avatar ?? ""}
            nama={dataPengguna?.koPromotor?.nama ?? ""}
            username={dataPengguna?.koPromotor?.username ?? ""}
            pembimbingType="PEMBIMBING"
          />
          <PembimbingHero
            avatar={dataPengguna?.promotor?.avatar ?? ""}
            nama={dataPengguna?.promotor?.nama ?? ""}
            username={dataPengguna?.promotor?.username ?? ""}
            pembimbingType="PROMOTOR"
          />
          <PembimbingHero
            avatar={dataPengguna?.koPromotor?.avatar ?? ""}
            nama={dataPengguna?.koPromotor?.nama ?? ""}
            username={dataPengguna?.koPromotor?.username ?? ""}
            pembimbingType="KO-PROMOTOR"
          />
        </div>

        <GantiPembimbingDialog
          id={dataPengguna?.id ?? ""}
          namaMahasiswa={dataPengguna?.nama ?? ""}
          pembimbingId={dataPengguna?.pembimbingId ?? ""}
          promotorId={dataPengguna?.promotorId ?? ""}
          koPromotorId={dataPengguna?.koPromotorId ?? ""}
          allDosen={allDosen}
        />
      </CardContent>
    </Card>
  );
}
