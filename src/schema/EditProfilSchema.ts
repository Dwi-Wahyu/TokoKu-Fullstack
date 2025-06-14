import { z } from "zod";

const validExtensions = ["png", "jpeg", "jpg"];
const maxFileSize = 10 * 1024 * 1024; // 10 MB

const fileSchema = z
  .custom<File>((val) => val instanceof File, {
    message: "Setiap tanda tangan harus berupa file",
  })
  .refine((file) => file.size <= maxFileSize, {
    message: "Ukuran file maksimal 10MB",
  })
  .refine(
    (file) => {
      const ext = file.name.split(".").pop()?.toLowerCase();
      return ext && validExtensions.includes(ext);
    },
    {
      message: "Ekstensi file harus png, jpeg atau jpg",
    }
  );

export const editProfilPenggunaSchema = z.object({
  judulDisertasi: z.string().optional(),
  email: z.string().email("Email tidak valid").optional(),
  nomorTelpon: z
    .string()
    .min(10, {
      message: "Nomor telepon minimal 10 digit",
    })
    .optional(),

  angkatan: z
    .string()
    .regex(/^\d{4}$/, {
      message: "Format angkatan harus 4 digit (contoh: 2023)",
    })
    .optional(),
  tahunLulus: z.string().optional(),
  mulaiMasukPendidikan: z.date().optional(),

  signature: fileSchema.optional().nullable(),

  // Data pribadi
  tempatTanggalLahir: z.string().optional(),
  alamat: z.string().optional(),
  alamatKeluarga: z.string().optional(),
  pekerjaan: z.string().optional(),
});

export type TEditProfilPengguna = z.infer<typeof editProfilPenggunaSchema>;
