import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div>
      <Button asChild>
        <Link href="/admin/produk/tambah-produk">
          <Plus /> Tambah Produk
        </Link>
      </Button>
    </div>
  );
}
