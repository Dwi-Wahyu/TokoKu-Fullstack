"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { CloudUpload, ImagePlus, Loader2, SquarePen, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
  tambahLampiranSchema,
  TTambahLampiran,
} from "@/schema/TambahLampiranSchema";
import { tambahLampiran } from "../_lib/actions/kegiatanActions";
import { CustomToast } from "@/components/toast";

interface ProfileFormProps {
  onSuccess?: () => void;
  id: number;
}

function ProfileForm({ onSuccess, id }: ProfileFormProps) {
  const form = useForm<TTambahLampiran>({
    resolver: zodResolver(tambahLampiranSchema),
    defaultValues: {
      lampiran: [],
    },
  });

  const [loading, setLoading] = React.useState(false);

  form.setValue("id", id);

  const onSubmit = React.useCallback(async (data: TTambahLampiran) => {
    setLoading(true);

    const actions = await tambahLampiran(data);

    if (actions.success) {
      form.reset();
      toast.custom(() => (
        <CustomToast
          title="Berkas Terkirim"
          description={`Lampiran Anda telah terekam ${new Date().toLocaleTimeString()}.`}
          variant="success"
        />
      ));
      onSuccess?.();
    }

    setLoading(false);
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-4 pb-0 md:p-0"
      >
        <FormField
          control={form.control}
          name="lampiran"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FileUpload
                  value={field.value}
                  onValueChange={field.onChange}
                  maxFiles={3}
                  maxSize={5 * 1024 * 1024}
                  onFileReject={(_, message) => {
                    form.setError("lampiran", {
                      message,
                    });
                  }}
                >
                  <FileUploadDropzone className="flex-row flex-wrap border-dotted text-center">
                    <CloudUpload className="size-4" />
                    Drag and drop or
                    <FileUploadTrigger asChild>
                      <Button variant="link" size="sm" className="p-0">
                        choose files
                      </Button>
                    </FileUploadTrigger>
                    to upload
                  </FileUploadDropzone>
                  <FileUploadList>
                    {field.value.map((file, index) => (
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
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className=" w-full md:w-fit mt-4"
          >
            {loading ? <Loader2 className="animate-spin" /> : null}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export function TambahLampiranDrawer({ id }: { id: number }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={"secondary"}>
            <ImagePlus />
            Tambah Lampiran
          </Button>
        </DialogTrigger>
        <DialogContent className="w-fit">
          <DialogHeader>
            <DialogTitle>Tambah Lampiran</DialogTitle>
            <DialogDescription>
              Ekstensi file harus png, jpeg, jpg, pdf, doc, atau docx. Ukuran
              file maksimal 50MB
            </DialogDescription>
          </DialogHeader>
          <ProfileForm onSuccess={() => setOpen(false)} id={id} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={"secondary"}>
          <ImagePlus />
          Tambah Lampiran
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Tambah Lampiran</DrawerTitle>
          <DrawerDescription>
            Ekstensi file harus png, jpeg, jpg, pdf, doc, atau docx. Ukuran file
            maksimal 50MB
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm onSuccess={() => setOpen(false)} id={id} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
