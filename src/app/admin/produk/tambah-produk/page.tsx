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
import { toast } from "sonner";
import { CustomToast } from "@/components/toast";
import { MagicBackButton } from "@/components/magic-back-button";
import { addProduct, uploadProductImage } from "@/app/_lib/actions/product";
import { FileUploadComponent } from "@/app/_components/file-upload";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function TambahProdukPage() {
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
      isSingleVariant: false,
    },
    mode: "onTouched",
  });

  const isSingleVariant = form.watch("isSingleVariant");

  const [files, setFiles] = useState<File[]>([]);

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ProductFormValues) => {
    let imageUrl = "";

    if (files.length) {
      imageUrl = await uploadProductImage(files[0]);
    }

    const result = await addProduct({
      ...data,
      image: imageUrl,
      isSingleVariant,
    });

    if (result.success) {
      toast.custom(() =>
        CustomToast({
          title: "Produk Berhasil Ditambahkan!",
          description: result.message ?? "Produk baru berhasil ditambahkan.",
          variant: "success",
        })
      );
      form.reset();
      setFiles([]);
    } else {
      toast.custom(() =>
        CustomToast({
          title: "Gagal Menambahkan Produk",
          description: result.message ?? "Terjadi kesalahan.",
          variant: "destructive",
        })
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto relative">
      <MagicBackButton
        backLink="/admin/produk"
        className="absolute -left-14 top-6"
      />
      <Card>
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
              {isSingleVariant && (
                <FormField
                  control={form.control}
                  name="sku"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SKU</FormLabel>
                      <FormControl>
                        <Input placeholder="Kode produk unik" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

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

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi Produk (Opsional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tuliskan deskripsi produk, spesifikasi, atau informasi tambahan"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isSingleVariant && (
                <div className="w-full">
                  <h1>Gambar (Opsional)</h1>

                  <FileUploadComponent
                    multiple={false}
                    onFilesChange={(files) => setFiles(files)}
                  />
                </div>
              )}

              {isSingleVariant && (
                <>
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
                        <FormLabel>Harga Modal</FormLabel>
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
                </>
              )}

              <FormField
                control={form.control}
                name="isSingleVariant"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        id="isSingleVariant"
                        checked={field.value}
                        onCheckedChange={(checked) =>
                          field.onChange(Boolean(checked))
                        }
                      />
                    </FormControl>
                    <FormLabel htmlFor="isSingleVariant">
                      Produk hanya memiliki satu varian
                    </FormLabel>
                  </FormItem>
                )}
              />

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
    </div>
  );
}
