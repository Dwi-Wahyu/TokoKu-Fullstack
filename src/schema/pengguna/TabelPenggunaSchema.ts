import { PeranPengguna } from "@/generated/prisma";
import { z } from "zod";
PeranPengguna;

export const tabelPenggunaSchema = z.object({
  id: z.string(),
  nama: z.string(),
  username: z.string().email("Username tidak valid. contoh: testing@gmail.com"),
  peran: z.enum(["asisten", "praktikan", "admin"]),
});

export type TTabelPenggunaSchema = z.infer<typeof tabelPenggunaSchema>;
