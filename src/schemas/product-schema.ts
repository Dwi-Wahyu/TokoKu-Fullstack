// schemas/product.ts
import { z } from "zod";

export const productSchema = z.object({
  sku: z
    .string()
    .min(1, { message: "SKU is required." })
    .max(50, { message: "SKU must not exceed 50 characters." }),
  image: z
    .string()
    .url({ message: "Invalid URL for image." })
    .optional()
    .or(z.literal("")),
  name: z
    .string()
    .min(1, { message: "Product name is required." })
    .max(100, { message: "Product name must not exceed 100 characters." }),
  category: z.string().optional().or(z.literal("")),
  // Gunakan z.coerce.number() untuk secara otomatis mengonversi string ke number
  price: z.coerce
    .number()
    .min(0.01, { message: "Price must be greater than 0." })
    .max(999999999, { message: "Price is too high." })
    .transform((val) => parseFloat(val.toFixed(2))), // Opsional: Pastikan 2 angka di belakang koma
  cost: z.coerce
    .number()
    .min(0, { message: "Cost cannot be negative." })
    .max(999999999, { message: "Cost is too high." })
    .transform((val) => parseFloat(val.toFixed(2))), // Opsional: Pastikan 2 angka di belakang koma
  stock: z.coerce
    .number()
    .int({ message: "Stock must be a whole number." }) // Pastikan integer
    .min(0, { message: "Stock cannot be negative." })
    .max(999999, { message: "Stock is too high." }),
});

export type ProductFormValues = z.infer<typeof productSchema>;
