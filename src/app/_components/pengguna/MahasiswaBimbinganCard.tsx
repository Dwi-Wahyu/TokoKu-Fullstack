"use client";

import { getDetailPengguna } from "@/app/_lib/actions/penggunaActions";
import { getNameInitials } from "@/service/getNameInitials";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, Loader, Settings, Trash, UserXIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { hapusPenggunaDariBimbingan } from "@/app/_lib/actions/bimbinganActions";
import { toast } from "sonner";
import Link from "next/link";
import { useSession } from "next-auth/react";

type Props = {
  dataPengguna: Awaited<ReturnType<typeof getDetailPengguna>>;
};

export default function MahasiswaBimbinganCard({ dataPengguna }: Props) {
  if (!dataPengguna) {
    return <h1>Pengguna tidak ditemukan</h1>;
  }

  const session = useSession();

  const canHapusBimbingan =
    dataPengguna.id === session.data?.user.id ||
    session.data?.user.peran === "ADMIN";

  console.log(canHapusBimbingan);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  function toggleOpen(id: string) {
    setOpen((prev) => !prev);
    setSelectedId(id);
  }

  async function handleHapus() {
    setLoading(true);
    const updateAction = await hapusPenggunaDariBimbingan(selectedId);

    if (updateAction.success) {
      toast.warning("Bimbingan Diakhiri", {
        description:
          "Mahasiswa telah berhasil dilepaskan dari daftar bimbingan Anda.",
        icon: <UserXIcon className="text-red-500" />,
      });
    } else {
      toast.error(updateAction.error as string);
    }

    setLoading(false);
    setOpen(false);
  }

  return (
    <Card>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda Yakin?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Tindakan ini akan menghapus
              mahasiswa dari daftar bimbingan anda.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batalkan</AlertDialogCancel>
            <Button onClick={handleHapus} disabled={loading}>
              {loading && <Loader className="animate-spin" />}
              Yakin
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <CardHeader className="flex items-center gap-5 w-full">
        <CardTitle>Daftar Mahasiswa Bimbingan</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {dataPengguna.bimbingan.map((mahasiswa) => (
            <div
              key={mahasiswa.id}
              className=" justify-between flex gap-2 border-b items-center last:border-b-0 pb-2"
            >
              <div className="flex gap-2 items-center">
                <Avatar className="w-10 h-10 ">
                  <AvatarImage
                    src={`/image/profile-picture/${mahasiswa.avatar}`}
                    alt="foto-profil"
                  />
                  <AvatarFallback>
                    {getNameInitials(mahasiswa.nama)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="">{mahasiswa.nama}</h1>
                  <h1 className="text-muted-foreground">
                    {mahasiswa.username}
                  </h1>
                </div>
              </div>

              <div className="hidden md:block">
                <Button asChild variant={"secondary"}>
                  <Link href={`/admin/pengguna/detail/${mahasiswa.id}`}>
                    <Eye />
                    Detail
                  </Link>
                </Button>
                {canHapusBimbingan && (
                  <Button
                    variant={"destructive"}
                    className="ml-2"
                    onClick={() => toggleOpen(mahasiswa.id)}
                  >
                    <Trash />
                    Hapus
                  </Button>
                )}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden block" asChild>
                  <Button>
                    <Settings />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {canHapusBimbingan && (
                    <DropdownMenuItem onClick={() => toggleOpen(mahasiswa.id)}>
                      <Trash />
                      Hapus
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/pengguna/detail/${mahasiswa.id}`}>
                      <Eye />
                      Detail
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
