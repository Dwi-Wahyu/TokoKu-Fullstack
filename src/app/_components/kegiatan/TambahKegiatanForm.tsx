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
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  kegiatanStatusEnum,
  tambahKegiatanSchema,
  TTambahKegiatan,
  validLampiranExtensions,
} from "@/schema/kegiatan/TambahKegiatanSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CloudUpload, Loader, X } from "lucide-react";
import { useSession } from "next-auth/react";
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
  getPenanggungJawabMahasiswa,
  tambahKegiatan,
} from "@/app/_lib/actions/kegiatanActions";
import { toast } from "sonner";
import { DatePickerWithRange } from "../DatePickerWithRange";
import { getAllMataKuliah } from "@/app/_lib/queries/kegiatanQueries";
import { useRouter } from "next/navigation";
import { CustomToast } from "@/components/toast";

type MataKuliahProps = Awaited<ReturnType<typeof getAllMataKuliah>>;

export default function TambahKegiatanForm({
  allMataKuliah,
  pengajuId,
}: {
  allMataKuliah: MataKuliahProps;
  pengajuId: string;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<TTambahKegiatan>({
    resolver: zodResolver(tambahKegiatanSchema),
    defaultValues: {
      judul: "",
      lampiran: [],
      mata_kuliahId: "0",
      lokasi: "",
      status: "DIAJUKAN",
      tanggal: undefined,
      pengajuId,
    },
  });

  async function onSubmit(values: TTambahKegiatan) {
    setLoading(true);

    const action = await tambahKegiatan(values);

    if (action.success) {
      toast.custom(() => (
        <CustomToast
          title="Kegiatan Baru Tercatat"
          description="Kegiatan telah berhasil ditambahkan ke dalam sistem akademik."
          variant="success"
        />
      ));
      form.reset();
    }

    setLoading(false);
  }

  function handleKembali() {
    router.back();
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
                    <Input
                      placeholder="Tolong Ketik Judul Kegiatan"
                      {...field}
                    />
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
                  <FormLabel>Lokasi Kegiatan</FormLabel>
                  <FormControl>
                    <Input placeholder="Tolong Lokasi Kegiatan" {...field} />
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
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Mata Kuliah" />
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

            <FormField
              control={form.control}
              name="lampiran"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lampiran</FormLabel>
                  <FormControl>
                    <FileUpload
                      onValueChange={field.onChange}
                      accept={validLampiranExtensions
                        .map((ext) => {
                          switch (ext) {
                            case "png":
                              return "image/png";
                            case "jpeg":
                            case "jpg":
                              return "image/jpeg";
                            case "pdf":
                              return "application/pdf";
                            case "doc":
                              return "application/msword";
                            case "docx":
                              return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                            default:
                              return "";
                          }
                        })
                        .join(",")}
                      maxFiles={3}
                      maxSize={50 * 1024 * 1024}
                      onFileReject={(_, message) => {
                        form.setError("lampiran", {
                          message,
                        });
                      }}
                      multiple
                    >
                      <FileUploadDropzone className="flex-row flex-wrap border-dotted text-center">
                        <CloudUpload className="size-4" />
                        Drag and drop or
                        <FileUploadTrigger asChild>
                          <Button variant="link" size="sm" className="p-0">
                            choose files
                          </Button>
                        </FileUploadTrigger>
                        to upload (PNG, JPEG, JPG, PDF, DOC, DOCX)
                      </FileUploadDropzone>
                      <FileUploadList>
                        {field.value?.map((file, index) => (
                          <FileUploadItem key={index} value={file}>
                            <FileUploadItemPreview />
                            <FileUploadItemMetadata />
                            <FileUploadItemDelete asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="size-7"
                              >
                                <X />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </FileUploadItemDelete>
                          </FileUploadItem>
                        ))}
                      </FileUploadList>
                    </FileUpload>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Button
              onClick={() => handleKembali()}
              type="button"
              variant={"outline"}
            >
              Kembali
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
