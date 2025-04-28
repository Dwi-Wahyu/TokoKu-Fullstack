import { z } from "zod";

const tabelTugasSchema = z.object({
  id: z.number(),
  judul: z.string(),
  deskripsi: z.string(),
  deadline: z.date(),
});

export type TabelTugasType = z.infer<typeof tabelTugasSchema>;
