import { z } from "zod";

export const editPenggunaSchema = z.object({
  nama: z.string().min(2, {
    message: "Nama setidaknya 2 karakter.",
  }),
  username: z
    .string()
    .email("Username tidak valid. contoh: testing@gmail.com")
    .min(2, {
      message: "Username setidaknya 2 karakter.",
    }),
  peran: z.enum(["asisten", "praktikan", "admin"]),
});

export type TEditPenggunaSchema = z.infer<typeof editPenggunaSchema>;
