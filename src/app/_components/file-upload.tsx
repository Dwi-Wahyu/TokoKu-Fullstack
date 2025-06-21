"use client";

import { Button } from "@/components/ui/button";
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
import { Upload, X } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

export function FileUploadComponent({
  onFilesChange,
  multiple = true,
}: {
  onFilesChange?: (files: File[]) => void;
  multiple?: boolean;
}) {
  const [files, setFiles] = React.useState<File[]>([]);

  const onFileReject = React.useCallback((file: File, message: string) => {
    toast(message, {
      description: `"${
        file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
      }" has been rejected`,
    });
  }, []);

  React.useEffect(() => {
    onFilesChange?.(files);
  }, [files, onFilesChange]);

  const handleDelete = () => {
    setFiles([]);
  };

  return (
    <div>
      <FileUpload
        maxFiles={multiple ? 2 : 1}
        maxSize={5 * 1024 * 1024}
        className="w-full"
        value={files}
        onValueChange={setFiles}
        onFileReject={onFileReject}
        multiple={multiple}
      >
        <FileUploadDropzone className="relative min-h-48 border border-dashed rounded-md p-4 flex items-center justify-center text-center">
          {multiple || files.length === 0 ? (
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center justify-center rounded-full border p-2.5">
                <Upload className="size-6 text-muted-foreground" />
              </div>
              <p className="font-medium text-sm">Drag & drop files here</p>
              <p className="text-muted-foreground text-xs">
                {multiple
                  ? "Or click to browse (max 2 files, up to 5MB each)"
                  : "Or click to browse (only 1 file, up to 5MB)"}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={URL.createObjectURL(files[0])}
                alt="Preview"
                className="max-h-28 object-contain rounded-md"
              />
              <FileUploadItem value={files[0]}>
                <FileUploadItemMetadata />
              </FileUploadItem>
            </div>
          )}
          <FileUploadTrigger asChild></FileUploadTrigger>
        </FileUploadDropzone>

        {multiple && (
          <FileUploadList>
            {files.map((file, index) => (
              <FileUploadItem multiple={true} key={index} value={file}>
                <FileUploadItemPreview />
                <FileUploadItemMetadata />
                <FileUploadItemDelete asChild>
                  <Button variant="ghost" size="icon" className="size-7">
                    <X />
                  </Button>
                </FileUploadItemDelete>
              </FileUploadItem>
            ))}
          </FileUploadList>
        )}
      </FileUpload>

      {!multiple && files.length === 1 && (
        <div className="mt-2 flex justify-end">
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={handleDelete}
            className="flex items-center gap-1"
          >
            <X className="w-4 h-4" /> Hapus Gambar
          </Button>
        </div>
      )}
    </div>
  );
}
