"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, TLoginSchema } from "@/schemas/login-schema";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const processLogin = (data: TLoginSchema) => {
    console.log("Validasi berhasil! Data form:", data);
    alert(`Login dengan Username: ${data.username}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-grow flex items-center justify-center">
        <div className="container flex w-full max-w-6xl m-4 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Kiri: Formulir Login */}
          <div className="w-full lg:w-1/2 p-8 md:p-14">
            <div className="flex items-center mb-12">
              <Image
                src="/logo-tokoku.png"
                alt="Logo TokoKu"
                width={80}
                height={80}
                className="w-20 h-auto"
                priority
              />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Selamat Datang Kembali
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Masukkan username dan kata sandi Anda untuk mulai menggunakan
              sistem kasir.
            </p>

            <form
              onSubmit={handleSubmit(processLogin)}
              className="mt-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username")}
                  className={`w-full p-3 mt-1 bg-gray-50 dark:bg-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-200 ${
                    errors.username
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Contoh: Kasir1"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className={`w-full p-3 mt-1 bg-gray-50 dark:bg-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-200 ${
                    errors.password
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
              >
                {isSubmitting ? "Memeriksa..." : "Masuk"}
              </button>
            </form>
          </div>

          {/* Kanan: Visual */}
          <div className="hidden lg:flex flex-col items-center justify-center w-1/2 p-8 text-white bg-blue-700 rounded-r-2xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold">
                Kelola transaksi harian toko Anda dengan lebih mudah.
              </h2>
              <p className="mt-4">Masuk untuk mengakses dashboard kasir.</p>
            </div>
            <div className="mt-10">
              <Image
                src="/image/login-view.png"
                alt="Tampilan Kasir"
                width={500}
                height={375}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
