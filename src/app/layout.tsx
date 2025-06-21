import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: {
    default: "TokoKu",
    template: "%s | TokoKu",
  },
  description:
    "TokoKu adalah aplikasi manajemen toko/retail digital yang terintegrasi untuk membantu Anda mengelola penjualan, inventaris, dan media produk dengan mudah.", // Corrected description
  keywords: [
    "TokoKu",
    "manajemen toko",
    "retail",
    "aplikasi kasir",
    "inventaris",
    "penjualan",
    "e-commerce",
    "media management",
    "file upload",
  ],
  creator: "Dwi Wahyu",
  publisher: "TokoKu Team",
  openGraph: {
    title: "TokoKu - Aplikasi Manajemen Toko & Retail", // More specific Open Graph title
    description:
      "Kelola toko dan retail Anda dengan mudah menggunakan TokoKu. Fitur lengkap untuk penjualan, inventaris, dan manajemen media produk.", // More accurate Open Graph description
    url: "https://yourtokokuapp.com", // Replace with your actual domain
    siteName: "TokoKu",
    images: [
      {
        url: "https://yourtokokuapp.com/opengraph-image.jpg", // Replace with a default Open Graph image
        width: 1200,
        height: 630,
        alt: "TokoKu - Aplikasi Manajemen Toko & Retail", // Alt text for the image
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TokoKu - Aplikasi Manajemen Toko & Retail", // More specific Twitter title
    description:
      "Solusi lengkap untuk manajemen toko dan retail Anda. Unggah dan kelola media produk dengan mudah.", // More accurate Twitter description
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["https://yourtokokuapp.com/twitter-image.jpg"], // Replace with a default Twitter image
  },
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className}  antialiased`}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={1600}
          showAtBottom={false}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>

        <Toaster closeButton />
      </body>
    </html>
  );
}
