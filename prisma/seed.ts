import bcrypt from "bcrypt";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const allMedia = [
    {
      filename: "product-not-found-gAOQxXSa1XnbObw61algDxUtOSgag4.png",
      url: "https://rci0or1xhomc6pxu.public.blob.vercel-storage.com/products/product-not-found-gAOQxXSa1XnbObw61algDxUtOSgag4.png",
      mimetype: "image/png",
      path: "products",
      size: 3.04 * 1024 * 1024,
    },
    {
      filename: "product1-KUZHULRQcgnBwiwVRIamJSe9JCxvki.jpg",
      url: "https://rci0or1xhomc6pxu.public.blob.vercel-storage.com/products/product1-KUZHULRQcgnBwiwVRIamJSe9JCxvki.jpg",
      mimetype: "image/jpeg",
      path: "products",
      size: 912 * 1024,
    },
    {
      filename: "product2-crBbazd51DOIfDt37TOkZzvCKxv3zj.jpg",
      url: "https://rci0or1xhomc6pxu.public.blob.vercel-storage.com/products/product2-crBbazd51DOIfDt37TOkZzvCKxv3zj.jpg",
      mimetype: "image/jpeg",
      path: "products",
      size: 518 * 1024,
    },
    {
      filename: "product3-TBGVJDEMo3JwtpIelvUWMv9Kh45upe.jpg",
      url: "https://rci0or1xhomc6pxu.public.blob.vercel-storage.com/products/product3-TBGVJDEMo3JwtpIelvUWMv9Kh45upe.jpg",
      mimetype: "image/jpeg",
      path: "products",
      size: 331 * 1024,
    },
    {
      filename: "product4-krdGKYtb24rC1OtzC9PZDLXf0A5dHs.jpg",
      url: "https://rci0or1xhomc6pxu.public.blob.vercel-storage.com/products/product4-krdGKYtb24rC1OtzC9PZDLXf0A5dHs.jpg",
      mimetype: "image/jpeg",
      path: "products",
      size: 615 * 1024,
    },
    {
      filename: "product5-nb7NzJSyb2cyxwBnHkZfWyoTlsTOzv.jpg",
      url: "https://rci0or1xhomc6pxu.public.blob.vercel-storage.com/products/product5-nb7NzJSyb2cyxwBnHkZfWyoTlsTOzv.jpg",
      mimetype: "image/jpeg",
      path: "products",
      size: 907 * 1024,
    },
  ];

  for (const media of allMedia) {
    await prisma.media.create({
      data: media,
    });
  }

  const createdMedia = await prisma.media.findMany();

  // Create discounts
  const discount1 = await prisma.discount.create({
    data: {
      name: "Diskon Produk 1",
      type: "PERCENTAGE",
      value: 10,
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
    },
  });
  const discount2 = await prisma.discount.create({
    data: {
      name: "Diskon Produk 2",
      type: "FIXED_AMOUNT",
      value: 5000,
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000),
    },
  });
  const discount3 = await prisma.discount.create({
    data: {
      name: "Diskon Produk 3",
      type: "PERCENTAGE",
      value: 15,
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 45 * 24 * 60 * 60 * 1000),
    },
  });

  // Create 5 products with variant (3 with discounts)
  for (let i = 0; i < 5; i++) {
    const product = await prisma.product.create({
      data: {
        name: `Produk ${i + 1}`,
        description: `Deskripsi produk ${i + 1}`,
        category: "Kategori A",
        media: { connect: { url: createdMedia[i + 1].url } },
        variants: {
          create: {
            sku: `SKU-P${i + 1}-V1`,
            price: 100000 + i * 10000,
            cost: 80000 + i * 8000,
            stock: 10 + i,
            gambar: { connect: { url: createdMedia[i + 1].url } },
          },
        },
        Discount:
          i < 3
            ? {
                connect: [
                  { id: discount1.id },
                  { id: discount2.id },
                  { id: discount3.id },
                ],
              }
            : undefined,
      },
    });
  }

  // Buat akun admin
  const hashed = await bcrypt.hash("admin123", 10);
  await prisma.user.create({
    data: {
      name: "Admin",
      username: "admin",
      password: hashed,
      role: "ADMIN",
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
