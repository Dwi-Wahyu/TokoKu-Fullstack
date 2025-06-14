import { z } from "zod";
import { lampiranSchema } from "./kegiatan/TambahKegiatanSchema";

export const tambahLampiranSchema = z.object({
  id: z.number(),
  lampiran: z
    .array(lampiranSchema)
    .max(3, { message: "Maksimal 3 file lampiran" }),
});

export type TTambahLampiran = z.infer<typeof tambahLampiranSchema>;
