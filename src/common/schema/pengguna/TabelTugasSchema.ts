import { z } from "zod";

export const tabelTugasSchema = z.object({
  judul: z.string().min(2, {
    message: "Nama setidaknya 2 karakter.",
  }),
  deskripsi: z.string().min(2, {
    message: "Nama setidaknya 2 karakter.",
  }),
});

export type TTabelTugasSchema = z.infer<typeof tabelTugasSchema>;
