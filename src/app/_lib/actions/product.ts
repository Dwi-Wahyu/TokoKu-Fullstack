"use server";

import { revalidatePath } from "next/cache";
import { productSchema } from "@/schemas/product-schema";
import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../../prisma/generated/prisma";

export type AddProductResult = {
  success: boolean;
  message?: string;
  errors?: { path: string; message: string }[]; // Sederhanakan tipe errors
  productId?: number;
};

export async function addProduct(
  formData: FormData
): Promise<AddProductResult> {
  const data = Object.fromEntries(formData.entries());

  const validation = productSchema.safeParse(data);

  if (!validation.success) {
    console.error("Validation failed:", validation.error.issues);
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validation.error.issues.map((issue) => ({
        path: issue.path.join("."), // Join path array to string
        message: issue.message,
      })),
    };
  }

  const { sku, name, category, price, cost, image, stock } = validation.data;

  try {
    const newProduct = await prisma.product.create({
      data: {
        sku,
        name,
        category: category || null, // Ensure empty string becomes null for optional string fields
        price: new Prisma.Decimal(price),
        cost: new Prisma.Decimal(cost),
        image: image || null, // Ensure empty string becomes null for optional string fields
        stock,
        // updatedAt will be set by Prisma's @updatedAt default
      },
    });

    revalidatePath("/products"); // Revalidate cache for the products list page
    // revalidatePath("/products/add"); // Biasanya tidak perlu revalidate halaman form add

    console.log("Product added successfully:", newProduct);
    return {
      success: true,
      message: `Product "${newProduct.name}" added successfully!`,
      productId: newProduct.id,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (
        error.code === "P2002" &&
        (error.meta as any)?.target?.includes("sku")
      ) {
        return {
          success: false,
          message: "SKU already exists. Please use a unique SKU.",
          errors: [
            {
              path: "sku",
              message: "SKU must be unique.",
            },
          ],
        };
      }
    }
    console.error("Failed to add product:", error);
    return {
      success: false,
      message: "Failed to add product. Please try again.",
    };
  }
}
