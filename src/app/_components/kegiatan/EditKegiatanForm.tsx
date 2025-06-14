"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  editKegiatan,
  getOneKegiatan,
} from "@/app/_lib/actions/kegiatanActions";
import { toast } from "sonner";
import { DatePickerWithRange } from "../DatePickerWithRange";
import { getAllMataKuliah } from "@/app/_lib/queries/kegiatanQueries";
import { CustomToast } from "@/components/toast";
import {
  editKegiatanSchema,
  TEditKegiatan,
} from "@/schema/kegiatan/EditKegiatanSchema";

type MataKuliahProps = Awaited<ReturnType<typeof getAllMataKuliah>>;

type KegiatanDataProps = Awaited<ReturnType<typeof getOneKegiatan>>;

export default function EditKegiatanForm({
  allMataKuliah,
  pengajuId,
  kegiatanData,
}: {
  allMataKuliah: MataKuliahProps;
  pengajuId: string;
  kegiatanData: KegiatanDataProps;
}) {
  const [loading, setLoading] = useState(false);

  const form = useForm<TEditKegiatan>({
    resolver: zodResolver(editKegiatanSchema),
    defaultValues: {
      judul: kegiatanData?.judul,
      lampiran: [],
      lokasi: kegiatanData?.lokasi ?? "",
      mata_kuliahId: kegiatanData?.mata_kuliah?.id.toString(),
      status: kegiatanData?.status,
      tanggal:
        kegiatanData?.tanggalMulai && kegiatanData?.tanggalSelesai
          ? {
              from: new Date(kegiatanData.tanggalMulai),
              to: new Date(kegiatanData.tanggalSelesai),
            }
          : undefined,
      pengajuId,
    },
  });

  async function onSubmit(values: TEditKegiatan) {
    setLoading(true);

    const action = await editKegiatan(kegiatanData?.id ?? 0, values);

    if (action.success) {
      toast.custom(() => (
        <CustomToast
          title="Kegiatan Diperbarui"
          description="Perubahan data kegiatan telah berhasil disimpan"
          variant="success"
        />
      ));
    }

    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Form Input Kegiatan</CardTitle>
            <CardDescription>Tolong Masukkan Data Kegiatan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {form.formState.errors.root && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.root.message}
              </p>
            )}

            <FormField
              control={form.control}
              name="judul"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul Kegiatan</FormLabel>
                  <FormControl>
                    <Input placeholder="Tolong Ketik Nama Lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lokasi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokasi</FormLabel>
                  <FormControl>
                    <Input placeholder="Lokasi Kegiatan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Kegiatan</FormLabel>
                  <FormControl>
                    <DatePickerWithRange
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mata_kuliahId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mata Kuliah</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Jenis Kegiatan" />
                      </SelectTrigger>
                      <SelectContent>
                        {allMataKuliah.map((value) => (
                          <SelectItem
                            key={value.id}
                            value={value.id.toString()}
                          >
                            {value.judul}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Button type="button" asChild variant={"outline"}>
              <Link href="/admin/kegiatan?semester=1">Kembali</Link>
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader className="animate-spin" /> Loading . . .
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
