import { z } from "zod";

// Base schema with common fields
const mediaBaseSchema = z.object({
  altText: z
    .string()
    .max(255, { message: "Teks alternatif terlalu panjang." })
    .optional()
    .or(z.literal("")),
});

// Schema for URL uploads
const urlUploadSchema = mediaBaseSchema.extend({
  imageUrl: z
    .string()
    .url({ message: "URL gambar tidak valid." })
    .min(1, { message: "URL gambar wajib diisi." }),
  uploadType: z.literal("url"),
});

// Schema for file uploads
const fileUploadSchema = mediaBaseSchema.extend({
  uploadedUrls: z
    .array(z.string().url())
    .min(1, { message: "Minimal unggah 1 file." }),
  uploadType: z.literal("file"),
});

// Combined schema using discriminated union
export const mediaSchema = z.discriminatedUnion("uploadType", [
  urlUploadSchema,
  fileUploadSchema,
]);

export type MediaFormValues = z.infer<typeof mediaSchema>;
