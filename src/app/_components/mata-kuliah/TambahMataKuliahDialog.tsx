"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { BookOpenCheckIcon, BookPlus, Loader } from "lucide-react";
import { toast } from "sonner";
import { tambahMataKuliah } from "@/app/_lib/actions/kegiatanActions";
import { CustomToast } from "@/components/toast";

const tambahJenisKegiatanSchema = z.object({
  judul: z.string().min(1, { message: "Nama jenis kegiatan harus diisi" }),
  semester: z.coerce
    .number()
    .min(1)
    .max(6, { message: "Semester harus antara 1-6" }),
});

export type TTambahMataKuliah = z.infer<typeof tambahJenisKegiatanSchema>;

export default function TambahMataKuliahDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useForm<TTambahMataKuliah>({
    resolver: zodResolver(tambahJenisKegiatanSchema),
    defaultValues: {
      judul: "",
      semester: 0,
    },
  });

  async function onSubmit(values: TTambahMataKuliah) {
    setLoading(true);

    const actions = await tambahMataKuliah(values);

    if (actions.success) {
      toast.custom(() => (
        <CustomToast
          title="Mata Kuliah Terdaftar"
          description="Data mata kuliah baru telah berhasil dimasukkan ke dalam sistem kurikulum."
          variant="success"
        />
      ));
      setOpen(false);
    } else {
      toast.error(actions.error as string);
    }

    setLoading(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <BookPlus /> Tambah Mata Kuliah
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Mata Kuliah</DialogTitle>
          <DialogDescription>
            Tambahkan mata kuliah baru dengan mengisi form berikut.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="judul"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul Mata Kuliah</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tolong Ketik Judul Mata Kuliah"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="semester"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Semester</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Ketik Semester"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader className="animate-spin" /> Loading . . .
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
