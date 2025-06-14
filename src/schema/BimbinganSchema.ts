import { z } from "zod";

export const pengajuanBimbinganSchema = z.object({
  idPembimbing: z.string().min(1, "Harus memilih pembimbing"),
  idPengaju: z.string().min(1),
  namaPengaju: z.string().min(1),
  kalimatPermohonan: z
    .string()
    .min(10, "Permohonan bimbingan minimal 10 karakter"),
});

export type TPengajuanBimbinganForm = z.infer<typeof pengajuanBimbinganSchema>;
