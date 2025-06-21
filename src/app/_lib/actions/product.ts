"use server";

import { put } from "@vercel/blob";
import { prisma } from "@/lib/prisma"; // asumsi koneksi prisma ada di sini
import { ProductFormValues } from "@/schemas/product-schema";

export async function uploadProductImage(file: File): Promise<string> {
  const blob = await put(`produk/${Date.now()}-${file.name}`, file, {
    access: "public",
  });
  return blob.url;
}

export async function addProduct(
  data: ProductFormValues & { isSingleVariant: boolean }
) {
  const {
    sku,
    name,
    category,
    description,
    image,
    price,
    cost,
    stock,
    isSingleVariant,
  } = data;

  if (isSingleVariant) {
    const product = await prisma.product.create({
      data: {
        name,
        category: category || null,
        description: description || null,
        image: image || null, // simpan di produk juga
        variants: {
          create: {
            sku: sku ?? "",
            price: price ?? 0,
            cost: cost ?? 0,
            stock: stock ?? 0,
            image: image || null,
          },
        },
      },
    });

    return {
      success: true,
      message: "Produk berhasil ditambahkan.",
      data: product,
    };
  }

  // ⏳ Placeholder untuk produk multi-variant
  return {
    success: false,
    message: "Produk multi-varian belum didukung.",
  };
}
