import { z } from "zod";

// Skema Zod untuk validasi form
export const LoginSchema = z.object({
  username: z.string().trim().min(1, {
    message: "Username tidak boleh kosong.",
  }),
  password: z.string().min(6, {
    message: "Kata sandi minimal harus 6 karakter.",
  }),
});

// Membuat tipe data TypeScript dari skema Zod
export type TLoginSchema = z.infer<typeof LoginSchema>;
