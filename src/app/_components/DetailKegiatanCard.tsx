"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import {
  ChevronLeft,
  Signature,
  X,
  Loader,
  Loader2,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  getOneKegiatan,
  hapusSemuaLampiran,
  tanggapiKegiatan,
} from "../_lib/actions/kegiatanActions";
import { useSession } from "next-auth/react";
import UnauthorizedPage from "./UnauthorizedPage";
import { Fragment, useCallback, useState } from "react";

import { toast } from "sonner";
import { TambahLampiranDrawer } from "./TambahLampiranDrawer";
import { lampiranImageExtensions } from "@/schema/kegiatan/TambahKegiatanSchema";
import FileBadge from "./FileBadge";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { kegiatan_status } from "@/generated/prisma";
import { Badge } from "@/components/ui/badge";
import { CustomToast } from "@/components/toast";

type KegiatanDataProps = Awaited<ReturnType<typeof getOneKegiatan>>;

export function DetailKegiatanCard({
  kegiatan,
}: {
  kegiatan: KegiatanDataProps;
}) {
  if (!kegiatan) {
    return <h1>Kegiatan Tidak Ditemukan</h1>;
  }

  const session = useSession();

  if (session.status == "unauthenticated") {
    return <UnauthorizedPage />;
  }

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openTolakDialog, setOpenTolakDialog] = useState(false);
  const [openSetujuiDialog, setOpenSetujuiDialog] = useState(false);
  const [errorAlasanKosong, setErrorAlasanKosong] = useState(false);
  const [alasanPenolakan, setAlasanPenolakan] = useState("");

  const { tanggalMulai, tanggalSelesai } = kegiatan;

  const formattedMulai = useCallback(() => {
    if (tanggalMulai) {
      return format(new Date(tanggalMulai), "dd/MM/yyyy");
    }
    return "-";
  }, [tanggalMulai]);
  const formattedSelesai = useCallback(() => {
    if (tanggalSelesai) {
      return format(new Date(tanggalSelesai), "dd/MM/yyyy");
    }
    return "-";
  }, [tanggalSelesai]);

  function toggleOpenDialog(aksi: string) {
    switch (aksi) {
      case "setujui":
        setOpenSetujuiDialog((value) => !value);
        break;
      case "tolak":
        setOpenTolakDialog((value) => !value);
        break;
    }
  }

  async function handleHapus() {
    setLoading(true);

    const actions = await hapusSemuaLampiran(kegiatan?.id as number);

    if (actions.success) {
      setOpen(false);

      toast.custom(() => (
        <CustomToast
          title="Lampiran Dihapus"
          description={`${actions.deletedCount} berkas lampiran berhasil dihapus dari sistem.`}
          variant="info"
        />
      ));
    }

    setLoading(false);
  }

  async function handleTolak() {
    setLoading(true);
    setErrorAlasanKosong(false);

    if (alasanPenolakan === "") {
      setErrorAlasanKosong(true);
      setLoading(false);

      return;
    }

    const tolakAction = await tanggapiKegiatan(
      kegiatan?.id ?? 0,
      alasanPenolakan,
      kegiatan_status.DITOLAK
    );

    if (tolakAction.success) {
      toast.custom(() => (
        <CustomToast
          title="Status Ditolak"
          description={`Kegiatan ditolak dengan alasan: "${alasanPenolakan}"`}
          variant="warning"
        />
      ));
      setOpenTolakDialog(false);
    }

    setLoading(false);
  }

  const statusBadgeVariant = useCallback(() => {
    switch (kegiatan.status) {
      case "DIAJUKAN":
        return "secondary";
      case "DISETUJUI":
        return "default";
      case "DITOLAK":
        return "destructive";
    }
  }, [kegiatan.status]);

  async function handleSetujui() {
    setLoading(true);

    const setujuiAction = await tanggapiKegiatan(
      kegiatan?.id ?? 0,
      "",
      kegiatan_status.DISETUJUI
    );

    if (setujuiAction.success) {
      toast.custom(() => (
        <CustomToast
          title="Persetujuan Berhasil"
          description="Kegiatan telah berhasil disetujui dan akan diproses lebih lanjut."
          variant="success"
        />
      ));
      setOpenSetujuiDialog(false);
    }

    setLoading(false);
  }

  return (
    <Card>
      <AlertDialog open={openSetujuiDialog} onOpenChange={setOpenSetujuiDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Anda Yakin Menyetujui Permohonan Kegiatan?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Kegiatan ini akan disetujui dan statusnya akan berubah. Pastikan
              semua persyaratan sudah terpenuhi sebelum menyetujui.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Batalkan</AlertDialogCancel>
            <Button disabled={loading} onClick={handleSetujui}>
              {loading ? <Loader2 className="animate-spin" /> : null}
              Yakin
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={openTolakDialog} onOpenChange={setOpenTolakDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Anda Yakin Menolak Permohonan Kegiatan?
            </AlertDialogTitle>

            <div className="flex flex-col gap-3 mt-3">
              <Label className={errorAlasanKosong ? "text-red-500" : ""}>
                Tolong berikan alasan penolakan.
              </Label>
              <Input
                className={errorAlasanKosong ? "border-red-500" : ""}
                placeholder="Alasan penolakan harus spesifik"
                value={alasanPenolakan}
                onChange={(e) => setAlasanPenolakan(e.target.value)}
              />
            </div>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Batalkan</AlertDialogCancel>
            <Button disabled={loading} onClick={handleTolak}>
              {loading ? <Loader2 className="animate-spin" /> : null}
              Yakin
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <CardHeader>
        <CardTitle>Detail Permohonan Kegiatan</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div>
          <h1>Judul Kegiatan</h1>
          <h1 className="text-muted-foreground">{kegiatan.judul}</h1>
        </div>

        <div>
          <h1>Lokasi</h1>
          <h1 className="text-muted-foreground">{kegiatan.lokasi}</h1>
        </div>

        <div>
          <h1>Pihak Pengaju</h1>
          <h1 className="text-muted-foreground">{kegiatan.pengaju?.nama}</h1>
        </div>

        <div>
          <h1>Lokasi</h1>
          <h1 className="text-muted-foreground">{kegiatan.lokasi}</h1>
        </div>

        <div>
          <h1>Jenis Kegiatan</h1>
          <h1 className="text-muted-foreground">
            {kegiatan.mata_kuliah?.judul} - Semester{" "}
            {kegiatan.mata_kuliah?.semester}
          </h1>
        </div>

        <div>
          <h1>Tanggal</h1>
          {formattedMulai() === formattedSelesai() ? (
            <h1 className="text-muted-foreground">{formattedMulai()}</h1>
          ) : (
            <div className="flex gap-1 text-muted-foreground">
              <h1>{formattedMulai()}</h1>-<h1>{formattedSelesai()}</h1>
            </div>
          )}
        </div>

        <div>
          <h1 className="mt-1 mb-1">Status</h1>
          <Badge variant={statusBadgeVariant()}>{kegiatan.status}</Badge>
        </div>

        {kegiatan.lampiran.length ? (
          <div className="">
            <h1>Lampiran</h1>
            <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {kegiatan.lampiran.map((each, idx: number) => (
                <div key={idx}>
                  {lampiranImageExtensions.includes(
                    each.ext.replace(".", "")
                  ) ? (
                    <Image
                      src={`/lampiran/${each.path}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      alt="lampiran"
                    />
                  ) : (
                    <FileBadge
                      fileName={each.path}
                      fileUrl={`/lampiran/${each.path}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="flex gap-2 flex-col sm:flex-row justify-between">
        <Link
          href={`/admin/kegiatan?semester=` + kegiatan.mata_kuliah?.semester}
        >
          <Button className="w-full" variant={"outline"}>
            <ChevronLeft />
            Kembali
          </Button>
        </Link>
        <div className="flex items-center gap-2 flex-col sm:flex-row">
          {session.data?.user.peran === "MAHASISWA" && (
            <Fragment>
              {kegiatan.lampiran.length ? (
                <AlertDialog open={open} onOpenChange={setOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant={"destructive"}>Hapus Lampiran</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Anda Yakin?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Tindakan ini akan menghapus semua lampiran pengajuan.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Batalkan</AlertDialogCancel>
                      <Button onClick={handleHapus}>
                        {loading ? <Loader2 className="animate-spin" /> : null}
                        Yakin
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : null}

              <TambahLampiranDrawer id={kegiatan.id} />
            </Fragment>
          )}

          {session.data?.user.peran === "DOSEN" && (
            <Fragment>
              <Button
                className="mr-2"
                onClick={() => toggleOpenDialog("setujui")}
                disabled={kegiatan.status === "DISETUJUI"}
              >
                <Signature />
                Setujui
              </Button>
              <Button
                onClick={() => toggleOpenDialog("tolak")}
                variant={"destructive"}
                disabled={kegiatan.status === "DITOLAK"}
              >
                <X />
                Tolak
              </Button>
            </Fragment>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
