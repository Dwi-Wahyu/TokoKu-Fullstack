"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileCog, Loader, Scroll } from "lucide-react";
import {
  downloadLogbook,
  generateLogbook,
} from "../_lib/actions/logbookActions";
import { useState } from "react";
import { toast } from "sonner";
import { CustomToast } from "@/components/toast";
import { useRouter } from "next/navigation";
import DocxViewer from "@/components/docx-viewer";

export default function LogbookCard({
  id,
  logbookPath,
}: {
  id: string;
  logbookPath?: string;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleGenerate() {
    setLoading(true);
    try {
      const result = await generateLogbook(id);

      if (result?.success) {
        // TODO: perbaiki description toast
        toast.custom(() => (
          <CustomToast
            title="Berhasil Generate Logbook"
            description="Logbook Anda telah berhasil digenerate berdasarkan data terbaru."
            variant="success"
          />
        ));

        location.reload();
      } else {
        toast.error(result?.error || "Gagal generate logbook");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat generate logbook");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleDownload() {
    router.push("/api/download-logbook/" + logbookPath);
  }

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Preview Logbook</CardTitle>
        <div>
          <Button
            onClick={() => handleDownload()}
            disabled={!logbookPath}
            size={"sm"}
            className="mr-2"
            variant={"secondary"}
          >
            <Download />
            Download Logbook
          </Button>
          <Button
            disabled={loading}
            size={"sm"}
            onClick={() => handleGenerate()}
          >
            {loading ? (
              <>
                <Loader className="animate-spin" /> Loading . . .
              </>
            ) : (
              <>
                <FileCog />
                Generate Logbook
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {!logbookPath ? (
          <div className="mt-2 flex flex-col gap-2 items-center">
            <h1 className="font-semibold text-center">
              Tolong generate logbook terlebih dahulu
            </h1>
            <Scroll width={100} height={100} />
            <h1 className="text-sm text-muted-foreground text-center">
              Tekan "Generate Logbook"
            </h1>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Tampilan preview mungkin tidak sepenuhnya sesuai dengan isi file
                asli karena:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
                <li>Perbedaan rendering antara viewer dan aplikasi office</li>
                <li>
                  Format dokumen yang kompleks mungkin tidak ditampilkan
                  sempurna
                </li>
                <li>Batasan teknis dari komponen viewer</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                Untuk melihat dokumen secara akurat, silakan download file.
              </p>
            </div>

            <DocxViewer fileUrl={"/api/download-logbook/" + logbookPath} />
          </>
        )}
      </CardContent>
    </Card>
  );
}
