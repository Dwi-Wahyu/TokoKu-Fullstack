import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { getAllMedia } from "@/app/_lib/queries/media";
import { AddMediaDialog } from "@/app/_components/add-media-dialog";

export const dynamic = "force-dynamic";

export default async function MediaListPage() {
  const mediaItems = await getAllMedia();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Koleksi Media</h1>

        <AddMediaDialog />
      </div>

      {mediaItems.length === 0 ? (
        <p className="text-center text-gray-500">
          Belum ada media yang diunggah.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mediaItems.map((media) => (
            <Card key={media.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  {media.url ? (
                    <Image
                      src={media.url}
                      alt={media.altText || media.filename}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-200 hover:scale-105"
                    />
                  ) : (
                    <span className="text-gray-400">Tidak Ada Gambar</span>
                  )}
                </div>
              </CardContent>
              <CardHeader className="pt-4 pb-2 px-4">
                <CardTitle className="text-lg truncate">
                  {media.filename}
                </CardTitle>
                <CardDescription className="text-sm">
                  {media.altText || "Tidak ada deskripsi"}
                </CardDescription>
              </CardHeader>
              <div className="p-4 border-t">
                <span className="text-xs text-gray-500">
                  {new Date(media.createdAt).toLocaleDateString()}
                </span>
                {/* Tambahkan tombol hapus atau detail di sini jika diperlukan */}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
