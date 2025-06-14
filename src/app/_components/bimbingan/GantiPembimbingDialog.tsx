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
import { BookPlus, Edit, Loader } from "lucide-react";
import { toast } from "sonner";
import {
  tambahMataKuliah,
  updateMataKuliah,
} from "@/app/_lib/actions/kegiatanActions";
import {
  getAllDosen,
  updatePembimbing,
} from "@/app/_lib/actions/penggunaActions";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomToast } from "@/components/toast";

const updatePembimbingSchema = z.object({
  id: z.string(),
  alasan: z.string().min(1, "Tolong isi alasan"),
  pembimbingId: z.string(),
  promotorId: z.string(),
  koPromotorId: z.string(),
});

export type TUpdatePembimbingSchema = z.infer<typeof updatePembimbingSchema>;

type PageProps = {
  id: string;
  namaMahasiswa: string;
  pembimbingId: string;
  promotorId: string;
  koPromotorId: string;
  allDosen: Awaited<ReturnType<typeof getAllDosen>>;
};

export default function GantiPembimbingDialog({
  id,
  namaMahasiswa,
  pembimbingId,
  promotorId,
  koPromotorId,
  allDosen,
}: PageProps) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useForm<TUpdatePembimbingSchema>({
    resolver: zodResolver(updatePembimbingSchema),
    defaultValues: {
      id,
      pembimbingId,
      promotorId,
      koPromotorId,
      alasan: "",
    },
  });

  async function onSubmit(values: TUpdatePembimbingSchema) {
    setLoading(true);

    const actions = await updatePembimbing(values);

    if (actions?.success) {
      toast.custom(() => (
        <CustomToast
          title="Pembaruan Bimbingan Terekam"
          description="Data pembimbing mahasiswa telah berhasil diperbarui dalam sistem."
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
        <Button className="mt-4 float-end">
          <Edit />
          Edit Pembimbing
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Pembimbing</DialogTitle>
          <DialogDescription>Untuk {namaMahasiswa}.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="alasan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alasan Mengubah Pembimbing</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ketik Alasan Mengubah Pembimbing"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pembimbingId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PEMBIMBING</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih dosen" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {allDosen.map((value) => (
                        <SelectItem key={value.id} value={value.id}>
                          {value.nama}
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
              name="promotorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PROMOTOR</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih dosen" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {allDosen.map((value) => (
                        <SelectItem key={value.id} value={value.id}>
                          {value.nama}
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
              name="koPromotorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>KO-PROMOTOR</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih dosen" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {allDosen.map((value) => (
                        <SelectItem key={value.id} value={value.id}>
                          {value.nama}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
