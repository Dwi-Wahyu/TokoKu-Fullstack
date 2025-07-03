/*
  Warnings:

  - You are about to drop the column `image` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `product_variant` table. All the data in the column will be lost.
  - Added the required column `path` to the `media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "media" ADD COLUMN     "path" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "image",
ADD COLUMN     "media_id" INTEGER;

-- AlterTable
ALTER TABLE "product_variant" DROP COLUMN "image",
ADD COLUMN     "media_id" INTEGER;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variant" ADD CONSTRAINT "product_variant_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
