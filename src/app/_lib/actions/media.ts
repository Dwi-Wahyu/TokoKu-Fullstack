"use server";

import { z } from "zod";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { mediaSchema } from "@/schemas/media-schema";
import { prisma } from "@/lib/prisma";

export type AddMediaResult = {
  success: boolean;
  message?: string;
  errors?: { path: string; message: string }[];
  mediaId?: number;
  mediaUrl?: string;
};

export async function addMediaFromUrl(
  formData: FormData
): Promise<AddMediaResult> {
  const data = Object.fromEntries(formData.entries());
  const validation = mediaSchema.safeParse(data);

  if (!validation.success || validation.data.uploadType !== "url") {
    return {
      success: false,
      message: "Validasi gagal. Mohon periksa input Anda.",
      errors: validation.success
        ? []
        : validation.error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
    };
  }

  const { imageUrl, altText } = validation.data;

  try {
    // Download the image from URL
    const response = await fetch(imageUrl);
    if (!response.ok)
      throw new Error(`Gagal mengunduh gambar: ${response.statusText}`);

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimetype = response.headers.get("content-type") || undefined;

    // Extract filename
    const urlParts = imageUrl.split("/");
    let filename = urlParts[urlParts.length - 1].split("?")[0];
    if (!filename.includes(".")) {
      filename += mimetype ? `.${mimetype.split("/")[1]}` : ".bin";
    }

    // Upload to Vercel Blob
    const uniqueFilename = `${Date.now()}-${filename}`;
    const blob = await put(uniqueFilename, buffer, {
      access: "public",
      contentType: mimetype,
    });

    // Save to database
    const newMedia = await prisma.media.create({
      data: {
        url: blob.url,
        filename,
        mimetype: mimetype || "application/octet-stream",
        size: blob.size || 0,
        altText: altText || null,
      },
    });

    revalidatePath("/admin/media");
    return {
      success: true,
      message: `Media "${filename}" berhasil ditambahkan!`,
      mediaId: newMedia.id,
      mediaUrl: newMedia.url,
    };
  } catch (error: any) {
    console.error("Error:", error);
    return {
      success: false,
      message: error.message || "Gagal mengunggah media",
    };
  }
}

export async function addMediaFromUpload(
  formData: FormData
): Promise<AddMediaResult> {
  const data = Object.fromEntries(formData.entries());
  const validation = mediaSchema.safeParse(data);

  if (!validation.success || validation.data.uploadType !== "upload") {
    return {
      success: false,
      message: "Validasi gagal. Mohon periksa input Anda.",
      errors: validation.success
        ? []
        : validation.error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
    };
  }

  const { imageUrl, altText } = validation.data;

  try {
    // Fetch the uploaded file from Vercel Blob URL
    const response = await fetch(imageUrl);
    if (!response.ok)
      throw new Error(`Gagal mengakses file: ${response.statusText}`);

    // Get metadata from headers
    const contentType = response.headers.get("content-type") || undefined;
    const contentLength = response.headers.get("content-length");
    const size = contentLength ? parseInt(contentLength) : undefined;

    // Extract filename from URL
    const urlParts = imageUrl.split("/");
    const filename = urlParts[urlParts.length - 1].split("?")[0];

    // Save to database
    const newMedia = await prisma.media.create({
      data: {
        url: imageUrl,
        filename,
        mimetype: contentType || "application/octet-stream",
        size: size || 0,
        altText: altText || null,
      },
    });

    revalidatePath("/admin/media");
    return {
      success: true,
      message: `Media "${filename}" berhasil ditambahkan!`,
      mediaId: newMedia.id,
      mediaUrl: newMedia.url,
    };
  } catch (error: any) {
    console.error("Error:", error);
    return {
      success: false,
      message: error.message || "Gagal menyimpan media",
    };
  }
}
