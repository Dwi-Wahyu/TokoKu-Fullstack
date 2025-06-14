"use client";

import { tambahPengguna } from "@/app/_lib/actions/penggunaActions";
import {
  tambahPenggunaSchema,
  TTambahPenggunaSchema,
} from "@/schema/pengguna/TambahPenggunaSchema";
import { ResponseType } from "@/types/respon-type";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronLeft, Loader2, Plus, UserPlusIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";

export default function TambahPengguna() {
  const [loading, setLoading] = useState(false);

  const form = useForm<TTambahPenggunaSchema>({
    resolver: zodResolver(tambahPenggunaSchema),
    defaultValues: {
      nama: "",
      username: "",
      password: "",
      peran: undefined,
    },
  });

  const peran = useWatch({
    control: form.control,
    name: "peran",
  });

  // TODO: handle error ketika unique constraint failed
  async function onSubmit(values: TTambahPenggunaSchema) {
    setLoading(true);

    const { success } = await tambahPengguna(values);
    // const { success, field, errorCode, error } = await tambahPengguna(values);

    if (success) {
      toast.success("Akun Baru Terdaftar", {
        description:
          "Pengguna baru telah berhasil ditambahkan ke dalam sistem.",
        icon: <UserPlusIcon />,
      });
      form.reset();
    }
    // } else if (errorCode === "P2002") {
    //   form.setError(field as FormFields, {
    //     message: `${field} tidak tersedia`,
    //   });
    // } else {
    //   console.log(error);
    // }

    setLoading(false);
  }

  return (
    <Card className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Form Input Pengguna</CardTitle>
            <CardDescription>Tolong Masukkan Data Pengguna.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 mt-5">
            {form.formState.errors.root && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.root.message}
              </p>
            )}

            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Tolong Ketik Nama Lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Tolong Ketik Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tolong Ketik Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="peran"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Peran</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Peran" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DOSEN">Dosen</SelectItem>
                        <SelectItem value="MAHASISWA">Mahasiswa</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex mt-5 justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Plus />}
              Submit
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
