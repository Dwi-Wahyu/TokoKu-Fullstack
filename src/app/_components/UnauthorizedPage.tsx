import { ShieldX } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center gap-3 text-red-500">
      <h1 className="text-xl font-semibold">
        Anda Tidak Dapat Mengakses Halaman Ini
      </h1>
      <ShieldX className="w-40 h-40" />
      <h1>Tolong Login Terlebih Dahulu</h1>
    </div>
  );
}
