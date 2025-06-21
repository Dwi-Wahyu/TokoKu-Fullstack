// src/app/admin/media/add/page.tsx
"use client";

import { AddMediaForm } from "@/app/_components/add-media-form";
import { MediaUpload } from "@/components/media-upload";

export default function AddMediaPage() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Tambah Media Baru</h1>
      <AddMediaForm />
    </div>
  );
}
