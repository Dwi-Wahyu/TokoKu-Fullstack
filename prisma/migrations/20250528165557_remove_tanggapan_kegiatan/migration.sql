/*
  Warnings:

  - You are about to drop the `tanggapan_kegiatan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tanggapan_kegiatan` DROP FOREIGN KEY `tanggapan_kegiatan_kegiatanId_fkey`;

-- DropForeignKey
ALTER TABLE `tanggapan_kegiatan` DROP FOREIGN KEY `tanggapan_kegiatan_namaPengguna_fkey`;

-- AlterTable
ALTER TABLE `kegiatan` ADD COLUMN `catatan` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `tanggapan_kegiatan`;
