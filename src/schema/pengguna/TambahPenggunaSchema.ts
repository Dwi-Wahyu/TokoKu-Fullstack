import { z } from "zod";

export const tambahPenggunaSchema = z
  .object({
    nama: z.string().min(2, {
      message: "Nama setidaknya 2 karakter.",
    }),
    username: z.string().min(2, {
      message: "Username setidaknya 2 karakter.",
    }),
    password: z.string().min(8, {
      message: "Password setidaknya 8 karakter.",
    }),
    peran: z.enum(["DOSEN", "MAHASISWA"]),
    angkatan: z.string().optional(),
  })
  .refine(
    (data) =>
      data.peran !== "MAHASISWA" ||
      (data.angkatan && data.angkatan.trim() !== ""),
    {
      message: "Angkatan wajib diisi untuk mahasiswa",
      path: ["angkatan"],
    }
  )
  .refine(
    (data) =>
      data.peran !== "MAHASISWA" ||
      !data.angkatan ||
      /^\d{2}$/.test(data.angkatan) || // Menerima 2 digit
      /^\d{4}$/.test(data.angkatan), // Menerima 4 digit
    {
      message: "Angkatan harus 2 digit (97) atau 4 digit tahun (1997)",
      path: ["angkatan"],
    }
  );

export type TTambahPenggunaSchema = z.infer<typeof tambahPenggunaSchema>;
