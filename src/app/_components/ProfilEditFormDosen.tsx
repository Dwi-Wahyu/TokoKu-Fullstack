// src/app/(dashboard)/profil/edit-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FilePenLine, Loader, Save } from "lucide-react";
import { GantiProfilDrawer } from "./GantiProfilDrawer";
import {
  editProfilPenggunaSchema,
  TEditProfilPengguna,
} from "@/schema/EditProfilSchema";
import Image from "next/image";
import { editProfilPengguna } from "../_lib/actions/penggunaActions";
import { getProfilPengguna } from "../_lib/queries/penggunaQueries";
import { CustomToast } from "@/components/toast";

type ProfilPengguna = Awaited<ReturnType<typeof getProfilPengguna>>;

export default function ProfilEditFormDosen({
  id,
  initialData,
}: {
  id: string;
  initialData: ProfilPengguna;
}) {
  const [editForm, setEditForm] = useState(false);

  const [loading, setLoading] = useState(false);

  const form = useForm<TEditProfilPengguna>({
    resolver: zodResolver(editProfilPenggunaSchema),
    defaultValues: {
      email: initialData?.profil?.email || "",
      nomorTelpon: initialData?.profil?.nomorTelpon || "",
      alamat: initialData?.profil?.alamat || "",
    },
  });

  // TODO: Buat fungsi perbarui profil dosen
  const onSubmit = async (payload: any) => {
    setLoading(true);

    const action = await editProfilPengguna(id, payload);

    if (action.success) {
      toast.custom(() => (
        <CustomToast
          title="Profil Terupdate"
          description="Perubahan data profil Anda telah berhasil disimpan."
          variant="success"
        />
      ));
      setEditForm(false);
    }

    setLoading(false);
  };

  const showAlert = useMemo(() => {
    const dataLengkap =
      initialData?.profil?.email &&
      initialData?.profil?.nomorTelpon &&
      initialData?.profil?.alamat &&
      initialData?.signature;

    if (!dataLengkap) {
      return true;
    } else {
      return false;
    }
  }, [initialData]);

  return (
    <Form {...form}>
      {showAlert && (
        <Alert>
          <AlertTitle>Alert !</AlertTitle>
          <AlertDescription>Tolong lengkapi data berikut ini.</AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editForm}
                    placeholder="Email aktif"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nomorTelpon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editForm}
                    placeholder="Nomor telepon aktif"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="alamat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat Sekarang</FormLabel>
              <FormControl>
                <Textarea
                  disabled={!editForm}
                  placeholder="Alamat lengkap saat ini"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="signature"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanda Tangan</FormLabel>
              <FormControl>
                {editForm && (
                  <Input
                    type="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file || null);
                    }}
                  />
                )}
              </FormControl>
              {initialData?.signature && !editForm && (
                <Image
                  src={`/image/signature/${initialData.signature}`}
                  width={200}
                  height={200}
                  alt="Tanda Tangan"
                />
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => setEditForm(false)}
            disabled={!editForm}
            type="button"
            variant="outline"
          >
            Batal
          </Button>
          {!editForm ? (
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setEditForm(true);
              }}
            >
              <FilePenLine />
              Edit Data
            </Button>
          ) : (
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {loading ? (
                <>
                  <Loader className="animate-spin" />
                  Menyimpan...
                </>
              ) : (
                <>
                  <Save /> Simpan Perubahan
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
