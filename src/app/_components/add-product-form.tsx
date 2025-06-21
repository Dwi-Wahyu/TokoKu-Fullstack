// app/(dashboard)/products/add/_components/add-product-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { ProductFormValues, productSchema } from "@/schemas/product-schema";
import { addProduct } from "../_lib/actions/product";
import { toast } from "sonner";
import { CustomToast } from "@/components/toast";

export function AddProductForm() {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      sku: "",
      image: "",
      name: "",
      category: "",
      price: 0,
      cost: 0,
      stock: 0,
    },
    mode: "onTouched",
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ProductFormValues) => {
    const formData = new FormData();
    for (const key in data) {
      // Pastikan untuk mengubah angka kembali ke string saat menambahkan ke FormData
      const value = (data as any)[key];
      if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    }

    // Panggil Server Action
    const result = await addProduct(formData);

    if (result.success) {
      toast.custom(() =>
        CustomToast({
          title: "Produk Berhasil Ditambahkan!",
          description:
            result.message ||
            "Produk baru telah berhasil ditambahkan ke inventaris Anda.",
          variant: "success", // Pastikan Anda memiliki varian 'success' di konfigurasi toast Anda
        })
      );
      form.reset(); // Atur ulang kolom formulir setelah berhasil
    } else {
      toast.custom(() =>
        CustomToast({
          title: "Gagal Menambahkan Produk",
          description:
            result.message ||
            "Terjadi kesalahan saat mencoba menambahkan produk. Silakan coba lagi.",
          variant: "destructive", // Pastikan Anda memiliki varian 'success' di konfigurasi toast Anda
        })
      );
      if (result.errors) {
        result.errors.forEach((err) => {
          form.setError(err.path as keyof ProductFormValues, {
            type: "server",
            message: err.message,
          });
        });
      }
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Tambah Produk Baru</CardTitle>
        <CardDescription>
          Isi detail untuk menambahkan produk baru ke inventaris Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          {/* Kita tidak lagi menggunakan prop 'action' di <form> langsung ke server action */}
          {/* Sebagai gantinya, kita memanggil server action di dalam onSubmit */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU</FormLabel>
                  <FormControl>
                    <Input placeholder="Kode produk unik" {...field} />
                  </FormControl>
                  <FormDescription>
                    Pengidentifikasi unik untuk produk.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Produk</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama produk" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Gambar (Opsional)</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="http://contoh.com/gambar.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori (Opsional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: Elektronik, Makanan, Pakaian"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Harga</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        {...field}
                        value={
                          field.value !== undefined && field.value !== null
                            ? field.value.toString()
                            : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biaya</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        {...field}
                        value={
                          field.value !== undefined && field.value !== null
                            ? field.value.toString()
                            : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stok Awal</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="1"
                        placeholder="0"
                        {...field}
                        value={
                          field.value !== undefined && field.value !== null
                            ? field.value.toString()
                            : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isSubmitting ? "Menambahkan Produk..." : "Tambah Produk"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
