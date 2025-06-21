"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X, Image, Video } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Progress } from "./ui/progress";

type FileWithPreview = {
  file: File;
  preview: string;
  type: "image" | "video";
};

export function MediaUpload({
  onUploadComplete,
}: {
  onUploadComplete: (urls: string[]) => void;
}) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles
      .filter(
        (file) =>
          file.type.startsWith("image/") || file.type.startsWith("video/")
      )
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        type: file.type.startsWith("image/")
          ? ("image" as const)
          : ("video" as const),
      }));

    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
      "video/*": [".mp4", ".mov", ".avi", ".webm"],
    },
    multiple: true,
  });

  const removeFile = (index: number) => {
    const newFiles = [...files];
    URL.revokeObjectURL(newFiles[index].preview);
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const uploadFiles = async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const urls = [];
      const totalFiles = files.length;

      for (let i = 0; i < totalFiles; i++) {
        const formData = new FormData();
        formData.append("file", files[i].file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const data = await response.json();
        urls.push(data.url);

        setUploadProgress(((i + 1) / totalFiles) * 100);
      }

      onUploadComplete(urls);
      setFiles([]);
      toast.success("Files uploaded successfully!");
    } catch (error) {
      toast.error("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-muted-foreground/30"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-2">
          <UploadCloud className="h-10 w-10 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {isDragActive
              ? "Drop the files here"
              : "Drag & drop images or videos here, or click to select files"}
          </p>
          <p className="text-xs text-muted-foreground/60">
            Supports: JPG, PNG, GIF, WEBP, MP4, MOV, AVI, WEBM
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="relative group rounded-md overflow-hidden border"
              >
                {file.type === "image" ? (
                  <img
                    src={file.preview}
                    alt="Preview"
                    className="w-full h-32 object-cover"
                  />
                ) : (
                  <video
                    src={file.preview}
                    className="w-full h-32 object-cover"
                    muted
                    autoPlay
                    loop
                  />
                )}
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <p className="text-white text-xs truncate">
                    {file.file.name}
                  </p>
                  <p className="text-white/80 text-xs">
                    {(file.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setFiles([])}
              disabled={isUploading}
            >
              Clear All
            </Button>
            <Button onClick={uploadFiles} disabled={isUploading}>
              {isUploading ? "Uploading..." : "Upload Files"}
            </Button>
          </div>

          {isUploading && (
            <div className="space-y-2">
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-sm text-muted-foreground text-right">
                {Math.round(uploadProgress)}% complete
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
