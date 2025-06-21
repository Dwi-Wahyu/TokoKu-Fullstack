import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dummyDataProduk } from "@/data/dummy-product";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div>
      <Button asChild>
        <Link href="/admin/produk/tambah-produk">
          <Plus className="mr-2 h-4 w-4" />
          Tambah Produk
        </Link>
      </Button>

      <div className="grid mt-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {dummyDataProduk.map((produk) => (
          <Card key={produk.id}>
            <CardContent className="p-4">
              <img
                src={produk.image}
                alt={produk.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{produk.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{produk.description}</p>
              <p className="text-sm text-gray-500">
                Kategori: {produk.category}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
