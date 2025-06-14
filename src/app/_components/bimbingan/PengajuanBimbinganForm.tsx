"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { parseAsString, useQueryState } from "nuqs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  pengajuanBimbinganSchema,
  TPengajuanBimbinganForm,
} from "@/schema/BimbinganSchema";
import {
  getDataPembimbing,
  getSejarahPengajuan,
} from "../../_lib/queries/bimbinganQueries";
import DataPembimbingAnda from "./DataPembimbingAnda";
import { Fragment, useMemo, useState } from "react";
import { CircleAlert, Loader } from "lucide-react";
import { buatPengajuanBimbingan } from "../../_lib/actions/bimbinganActions";
import { useMediaQuery } from "@/hooks/use-media-query";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomToast } from "@/components/toast";

export type TDataPembimbing = Awaited<ReturnType<typeof getDataPembimbing>>;
export type TSejarahPengajuan = Awaited<ReturnType<typeof getSejarahPengajuan>>;

export default function PengajuanBimbinganForm({
  penggunaId,
  namaPengaju,
  dosenId,
  dataPembimbing,
  sejarahPengajuan,
  daftarDosen,
}: {
  namaPengaju: string;
  penggunaId: string;
  dosenId: string | null;
  dataPembimbing: TDataPembimbing;
  sejarahPengajuan: TSejarahPengajuan;
  daftarDosen: { id: string; nama: string }[];
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [idPembimbing, setIdPembimbing] = useQueryState(
    "dosenId",
    parseAsString.withDefault(dosenId ?? "")
  );

  const canCreatePengajuan = useMemo(() => {
    if (dataPembimbing?.pembimbing) {
      return false;
    }

    return true;
  }, [dataPembimbing]);

  const form = useForm<TPengajuanBimbinganForm>({
    resolver: zodResolver(pengajuanBimbinganSchema),
    defaultValues: {
      idPembimbing,
      namaPengaju,
      idPengaju: penggunaId,
      kalimatPermohonan: "",
    },
  });

  async function onSubmit(data: TPengajuanBimbinganForm) {
    try {
      setLoading(true);

      const query = await buatPengajuanBimbingan(data);

      if (query.success) {
        toast.custom(() => (
          <CustomToast
            title="Pengajuan Terkirim"
            description="Permohonan Anda telah berhasil dikirim dan sedang diproses."
            variant="success"
          />
        ));
      }

      setLoading(false);
    } catch (error) {
      toast.error("Gagal mengirim pengajuan");
    }
  }

  function handleChangePembimbing(id: string) {
    setIdPembimbing(id);
    form.setValue("idPembimbing", id);
  }

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Form Pengajuan Bimbingan</CardTitle>
        </CardHeader>

        <CardContent>
          {!canCreatePengajuan && (
            <Alert variant={"destructive"} className="mb-4">
              <CircleAlert className="h-4 w-4" />
              <AlertTitle>Perhatian!</AlertTitle>
              <AlertDescription>
                Anda Tidak Dapat Membuat Pengajuan Lagi.
              </AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-6 "
            >
              <FormField
                control={form.control}
                name="idPembimbing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pilih Dosen Pembimbing</FormLabel>
                    <Select
                      disabled={!canCreatePengajuan}
                      onValueChange={(id) => handleChangePembimbing(id)}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih dosen pembimbing" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {daftarDosen.map((dosen) => (
                          <SelectItem key={dosen.id} value={dosen.id}>
                            {dosen.nama}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="kalimatPermohonan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kalimat Permohonan</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={!canCreatePengajuan}
                        placeholder="Tuliskan permohonan bimbingan Anda..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-2">
                {sejarahPengajuan.length ? (
                  <Fragment>
                    {isDesktop ? (
                      <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline">Sejarah Pengajuan</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle>Sejarah Pengajuan</DialogTitle>
                          </DialogHeader>
                          <div className="flex flex-col gap-2">
                            <Separator orientation="horizontal" />

                            {sejarahPengajuan.map((sejarah) => (
                              <div
                                key={sejarah.id}
                                className="flex justify-between items-center"
                              >
                                <div>
                                  <h1 className="text-sm font-semibold">
                                    {sejarah.dosen?.nama} -{" "}
                                  </h1>
                                  <h1 className="text-sm ">
                                    {sejarah.alasanDitolak}
                                  </h1>
                                  <h1 className="text-sm text-muted-foreground">
                                    {format(
                                      new Date(sejarah.createdAt),
                                      "yyyy/MM/dd"
                                    )}
                                  </h1>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                  {sejarah.statusPermohonan === "DITOLAK" && (
                                    <Badge variant={"destructive"}>
                                      {sejarah.statusPermohonan}
                                    </Badge>
                                  )}
                                  {sejarah.statusPermohonan === "DISETUJUI" && (
                                    <Badge variant={"outline"}>
                                      {sejarah.statusPermohonan}
                                    </Badge>
                                  )}
                                  {sejarah.statusPermohonan === "TERKIRIM" && (
                                    <Badge variant={"secondary"}>
                                      {sejarah.statusPermohonan}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Drawer open={open} onOpenChange={setOpen}>
                        <DrawerTrigger asChild>
                          <Button variant="outline">Sejarah Pengajuan</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader className="text-left">
                            <DrawerTitle>Edit profile</DrawerTitle>
                            <DrawerDescription>
                              Make changes to your profile here. Click save when
                              you're done.
                            </DrawerDescription>
                          </DrawerHeader>
                          <div className="p-4 pt-0">
                            <h1>halo</h1>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    )}
                  </Fragment>
                ) : null}

                {canCreatePengajuan && (
                  <Button disabled={loading} type="submit">
                    {loading ? (
                      <>
                        <Loader className="animate-spin" />
                        Mengirim Pengajuan
                      </>
                    ) : (
                      "Ajukan Bimbingan"
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="flex md:flex-row flex-col">
        <DataPembimbingAnda dataPembimbing={dataPembimbing} />
      </div>
    </div>
  );
}
