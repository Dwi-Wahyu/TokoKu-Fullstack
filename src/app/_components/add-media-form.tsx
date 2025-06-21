// src/app/admin/media/add/_components/add-media-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
import { mediaSchema, MediaFormValues } from "@/schemas/media-schema";
import { addMediaFromUrl, addMediaFromUpload } from "../_lib/actions/media";
import { CustomToast } from "@/components/toast";
import { toast } from "sonner";
import { MediaUpload } from "@/components/media-upload";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AddMediaForm() {
  const [activeTab, setActiveTab] = useState<"url" | "file">("url");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const form = useForm<MediaFormValues>({
    resolver: zodResolver(mediaSchema),
    defaultValues: {
      uploadType: "url",
      imageUrl: "",
      altText: "",
    },
    mode: "onTouched",
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: MediaFormValues) => {
    if (data.uploadType === "url") {
      await handleUrlSubmit(data);
    } else {
      await handleUploadSubmit();
    }
  };

  const handleUrlSubmit = async (
    data: Extract<MediaFormValues, { uploadType: "url" }>
  ) => {
    const formData = new FormData();
    formData.append("imageUrl", data.imageUrl);
    formData.append("altText", data.altText || "");
    formData.append("uploadType", "url");

    const result = await addMediaFromUrl(formData);

    if (result.success) {
      toast.custom(() =>
        CustomToast({
          title: "Media Berhasil Diunggah!",
          description: result.message || `Media berhasil diunggah`,
          variant: "success",
        })
      );
      form.reset({
        uploadType: "url",
        imageUrl: "",
        altText: "",
      });
    } else {
      handleError(result);
    }
  };

  const handleUploadSubmit = async () => {
    if (uploadedUrls.length === 0) {
      toast.custom(() =>
        CustomToast({
          title: "Tidak Ada Media",
          description: "Silakan unggah minimal 1 file",
          variant: "destructive",
        })
      );
      return;
    }

    setIsUploading(true);

    try {
      const results = await Promise.all(
        uploadedUrls.map((url) => {
          const formData = new FormData();
          formData.append("imageUrl", url);
          formData.append("altText", form.getValues("altText") || "");
          formData.append("uploadType", "upload");
          return addMediaFromUpload(formData);
        })
      );

      const successfulUploads = results.filter((result) => result.success);
      const failedUploads = results.filter((result) => !result.success);

      if (successfulUploads.length > 0) {
        toast.custom(() =>
          CustomToast({
            title: "Media Berhasil Diunggah!",
            description: `${successfulUploads.length} media berhasil ditambahkan`,
            variant: "success",
          })
        );
      }

      if (failedUploads.length > 0) {
        toast.custom(() =>
          CustomToast({
            title: "Beberapa Media Gagal",
            description: `${failedUploads.length} media gagal diunggah`,
            variant: "destructive",
          })
        );
      }

      form.reset({
        uploadType: "file",
        altText: "",
      });
      setUploadedUrls([]);
    } catch (error) {
      toast.custom(() =>
        CustomToast({
          title: "Gagal Mengunggah Media",
          description:
            "Terjadi kesalahan saat mengunggah media. Silakan coba lagi.",
          variant: "destructive",
        })
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleError = (result: any) => {
    toast.custom(() =>
      CustomToast({
        title: "Gagal Mengunggah Media",
        description:
          result.message ||
          "Terjadi kesalahan saat mengunggah media. Silakan coba lagi.",
        variant: "destructive",
      })
    );

    if (result.errors) {
      result.errors.forEach((err: any) => {
        form.setError(err.path as keyof MediaFormValues, {
          type: "server",
          message: err.message,
        });
      });
    }
  };

  const handleUploadComplete = (urls: string[]) => {
    setUploadedUrls(urls);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Tambah Media Baru</CardTitle>
        <CardDescription>
          Unggah media dari URL atau unggah langsung dari perangkat Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          value={activeTab}
          onValueChange={(value) => {
            setActiveTab(value as "url" | "file");
            form.setValue("uploadType", value as "url" | "file");
          }}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="url">Dari URL</TabsTrigger>
            <TabsTrigger value="upload">Unggah File</TabsTrigger>
          </TabsList>

          <TabsContent value="url">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL Gambar</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://example.com/gambar.jpg"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Masukkan URL gambar yang ingin Anda unggah.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="altText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teks Alternatif (Opsional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Deskripsi singkat gambar untuk aksesibilitas"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Teks deskriptif untuk pengguna dengan pembaca layar atau
                        jika gambar tidak dapat dimuat.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isSubmitting ? "Mengunggah Media..." : "Unggah Media"}
                </Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="upload">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <MediaUpload onUploadComplete={handleUploadComplete} />

                <FormField
                  control={form.control}
                  name="altText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Teks Alternatif untuk Semua Media (Opsional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Deskripsi singkat untuk aksesibilitas"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Teks deskriptif ini akan diterapkan ke semua media yang
                        diunggah.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isUploading || uploadedUrls.length === 0}
                >
                  {isUploading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isUploading
                    ? "Mengunggah Media..."
                    : `Unggah ${uploadedUrls.length} Media`}
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
