-- CreateTable
CREATE TABLE `pengguna` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `peran` ENUM('ADMIN', 'MAHASISWA', 'DOSEN') NOT NULL DEFAULT 'MAHASISWA',
    `avatar` VARCHAR(191) NULL,
    `signature` VARCHAR(191) NULL,
    `pembimbingId` VARCHAR(191) NULL,
    `koPromotorId` VARCHAR(191) NULL,
    `promotorId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `pengguna_nama_key`(`nama`),
    UNIQUE INDEX `pengguna_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logbook` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `penggunaId` VARCHAR(191) NULL,

    UNIQUE INDEX `logbook_penggunaId_key`(`penggunaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judulDisertasi` VARCHAR(191) NULL,
    `angkatan` VARCHAR(191) NULL,
    `tempatTanggalLahir` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `alamatKeluarga` VARCHAR(191) NULL,
    `tahunLulus` VARCHAR(191) NULL,
    `mulaiMasukPendidikan` DATETIME(3) NULL,
    `pekerjaan` VARCHAR(191) NULL,
    `nomorTelpon` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `penggunaId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `profil_penggunaId_key`(`penggunaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permohonan_bimbingan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `peranPembimbing` ENUM('PROMOTOR', 'KOPROMOTOR') NOT NULL,
    `statusPermohonan` ENUM('TERKIRIM', 'DITOLAK', 'DISETUJUI') NOT NULL DEFAULT 'TERKIRIM',
    `kalimatPermohonan` TEXT NOT NULL,
    `alasanDitolak` VARCHAR(191) NULL,
    `mahasiswaId` VARCHAR(191) NULL,
    `dosenId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mata_kuliah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `mata_kuliah_judul_key`(`judul`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kegiatan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `lokasi` VARCHAR(191) NULL,
    `tanggalMulai` DATETIME(3) NULL,
    `tanggalSelesai` DATETIME(3) NULL,
    `status` ENUM('DIAJUKAN', 'DISETUJUI', 'DITOLAK') NOT NULL DEFAULT 'DIAJUKAN',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `pengajuId` VARCHAR(191) NULL,
    `mata_kuliahId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tanggapan_kegiatan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `catatan` VARCHAR(191) NULL,
    `status` ENUM('DIAJUKAN', 'DISETUJUI', 'DITOLAK') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `kegiatanId` INTEGER NULL,
    `namaPengguna` VARCHAR(191) NULL,

    UNIQUE INDEX `tanggapan_kegiatan_kegiatanId_namaPengguna_key`(`kegiatanId`, `namaPengguna`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lampiran_kegiatan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,
    `ext` VARCHAR(191) NOT NULL,
    `kegiatanId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notifikasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `pesan` TEXT NOT NULL,
    `dibaca` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `penggunaId` VARCHAR(191) NOT NULL,

    INDEX `Notifikasi_penggunaId_fkey`(`penggunaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pengguna` ADD CONSTRAINT `pengguna_pembimbingId_fkey` FOREIGN KEY (`pembimbingId`) REFERENCES `pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pengguna` ADD CONSTRAINT `pengguna_koPromotorId_fkey` FOREIGN KEY (`koPromotorId`) REFERENCES `pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pengguna` ADD CONSTRAINT `pengguna_promotorId_fkey` FOREIGN KEY (`promotorId`) REFERENCES `pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logbook` ADD CONSTRAINT `logbook_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profil` ADD CONSTRAINT `profil_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `pengguna`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permohonan_bimbingan` ADD CONSTRAINT `permohonan_bimbingan_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permohonan_bimbingan` ADD CONSTRAINT `permohonan_bimbingan_dosenId_fkey` FOREIGN KEY (`dosenId`) REFERENCES `pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kegiatan` ADD CONSTRAINT `kegiatan_pengajuId_fkey` FOREIGN KEY (`pengajuId`) REFERENCES `pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kegiatan` ADD CONSTRAINT `kegiatan_mata_kuliahId_fkey` FOREIGN KEY (`mata_kuliahId`) REFERENCES `mata_kuliah`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tanggapan_kegiatan` ADD CONSTRAINT `tanggapan_kegiatan_kegiatanId_fkey` FOREIGN KEY (`kegiatanId`) REFERENCES `kegiatan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tanggapan_kegiatan` ADD CONSTRAINT `tanggapan_kegiatan_namaPengguna_fkey` FOREIGN KEY (`namaPengguna`) REFERENCES `pengguna`(`nama`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lampiran_kegiatan` ADD CONSTRAINT `lampiran_kegiatan_kegiatanId_fkey` FOREIGN KEY (`kegiatanId`) REFERENCES `kegiatan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifikasi` ADD CONSTRAINT `Notifikasi_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `pengguna`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
