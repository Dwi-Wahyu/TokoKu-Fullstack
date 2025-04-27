/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `pengguna` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `pengguna_username_key` ON `pengguna`(`username`);
