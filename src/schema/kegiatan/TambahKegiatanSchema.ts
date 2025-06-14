import { z } from "zod";

// Fungsi bantu untuk validasi ekstensi
export const validLampiranExtensions = [
  "png",
  "jpeg",
  "jpg",
  "pdf",
  "doc",
  "docx",
];
export const lampiranImageExtensions = ["png", "jpeg", "jpg"];
const maxFileSize = 50 * 1024 * 1024; // 50 MB

export const kegiatanStatusEnum = z.enum(["DIAJUKAN", "DISETUJUI", "DITOLAK"]);

const dateRangeSchema = z
  .object({
    from: z.coerce.date({ required_error: "Tanggal mulai wajib diisi" }),
    to: z.coerce.date({ required_error: "Tanggal selesai wajib diisi" }),
  })
  .refine((data) => data.to >= data.from, {
    message: "Tanggal selesai harus setelah atau sama dengan tanggal mulai",
    path: ["to"],
  });

export const lampiranSchema = z
  .custom<File>((val) => val instanceof File, {
    message: "Setiap lampiran harus berupa file",
  })
  .refine((file) => file.size <= maxFileSize, {
    message: "Ukuran file maksimal 50MB",
  })
  .refine(
    (file) => {
      const ext = file.name.split(".").pop()?.toLowerCase();
      return ext && validLampiranExtensions.includes(ext);
    },
    {
      message: "Ekstensi file harus png, jpeg, jpg, pdf, doc, atau docx",
    }
  );

export const tambahKegiatanSchema = z.object({
  judul: z.string().min(2, { message: "Tolong ketik judul kegiatan" }),
  tanggal: dateRangeSchema,
  lokasi: z.string().optional(),
  mata_kuliahId: z.string().refine(
    (id) => {
      return id !== "0";
    },
    { message: "Tolong pilih mata kuliah" }
  ),
  status: kegiatanStatusEnum,
  lampiran: z
    .array(lampiranSchema)
    .max(3, { message: "Maksimal 3 file lampiran" })
    .optional()
    .nullable(),
  pengajuId: z.string(),
});

export type TTambahKegiatan = z.infer<typeof tambahKegiatanSchema>;
