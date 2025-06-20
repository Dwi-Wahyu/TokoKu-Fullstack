"use client";

import { tambahPengguna } from "@/app/_lib/actions/penggunaActions";
import {
  tambahPenggunaSchema,
  TTambahPenggunaSchema,
} from "@/schema/pengguna/TambahPenggunaSchema";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { CustomToast } from "@/components/toast";

export default function TambahPengguna() {
  const [loading, setLoading] = useState(false);

  const form = useForm<TTambahPenggunaSchema>({
    resolver: zodResolver(tambahPenggunaSchema),
    defaultValues: {
      nama: "",
      username: "",
      password: "",
      peran: "DOSEN",
      angkatan: "",
    },
  });

  async function onSubmit(values: TTambahPenggunaSchema) {
    setLoading(true);

    const { success, error } = await tambahPengguna(values);

    if (success) {
      toast.custom(() =>
        CustomToast({
          title: "Akun Baru Terdaftar",
          description: "Akun Dosen telah terdaftar ke sistem",
          variant: "success",
        })
      );

      form.reset();
    } else {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <Card className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Form Input Dosen</CardTitle>
            <CardDescription>Tolong Masukkan Data Dosen.</CardDescription>
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
