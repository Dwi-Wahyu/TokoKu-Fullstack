import { z } from "zod";

export const tambahPenggunaSchema = z.object({
  nama: z.string().min(2, {
    message: "Nama setidaknya 2 karakter.",
  }),
  username: z
    .string()
    .email("Username tidak valid. contoh: testing@gmail.com")
    .min(2, {
      message: "Username setidaknya 2 karakter.",
    }),
  password: z.string().min(8, {
    message: "Password setidaknya 8 karakter.",
  }),
  peran: z.enum(["asisten", "praktikan", "admin"]),
});

export type TTambahPenggunaSchema = z.infer<typeof tambahPenggunaSchema>;
