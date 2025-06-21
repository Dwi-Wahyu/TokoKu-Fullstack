import { z } from "zod";

export const productSchema = z
  .object({
    sku: z.string().min(1, { message: "SKU harus diisi." }),
    image: z.string().optional().or(z.literal("")),
    name: z.string().min(1, { message: "Nama produk harus diisi." }),
    category: z.string().optional().or(z.literal("")),
    description: z.string().optional().or(z.literal("")),
    price: z.coerce
      .number()
      .min(0.01, { message: "Harga harus lebih dari 0." }),
    isSingleVariant: z.boolean({
      required_error: "Harap tentukan tipe varian produk.",
    }),
    cost: z.coerce.number().min(0, { message: "Biaya tidak boleh negatif." }),
    stock: z.coerce
      .number()
      .int()
      .min(0, { message: "Stok tidak boleh negatif." }),
  })
  .refine(
    (data) => {
      if (!data.isSingleVariant) return true;
      return data.sku && data.price !== undefined && data.stock !== undefined;
    },
    {
      message: "SKU, harga, dan stok wajib diisi untuk produk satu varian.",
      path: ["sku"],
    }
  );

export type ProductFormValues = z.infer<typeof productSchema>;
