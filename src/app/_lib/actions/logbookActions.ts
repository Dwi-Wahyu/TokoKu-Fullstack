"use server";

import { createReport } from "docx-templates";

import { prisma } from "@/lib/prisma";
import { getDataLogbookPengguna } from "../queries/logbookQueries";
import { revalidatePath } from "next/cache";
import { join } from "path";
import { readFileSync, unlinkSync, writeFileSync } from "fs";
import { format } from "date-fns";
import { Prisma } from "@/generated/prisma";

// Perbaiki fungsi ini
export async function generateLogbook(id: string) {
  const dataPengguna = await getDataLogbookPengguna(id);

  if (!dataPengguna) {
    return { success: false, error: "Pengguna tidak ditemukan" };
  }

  const cekLogbook = await prisma.logbook.findFirst({
    where: {
      penggunaId: id,
    },
  });

  if (cekLogbook) {
    const previousPath = join(
      process.cwd(),
      "generated_logbook",
      cekLogbook.path
    );
    unlinkSync(previousPath);
  }

  const templatePath = join(process.cwd(), "public", "template.docx");
  const template = readFileSync(templatePath);

  const mulaiMasukPendidikan = dataPengguna.profil?.mulaiMasukPendidikan
    ? format(dataPengguna.profil?.mulaiMasukPendidikan, "yyyy-MM-dd")
    : "";

  // Define types for type safety
  type KegiatanWithMataKuliah = Prisma.kegiatanGetPayload<{
    select: {
      judul: true;
      tanggalMulai: true;
      tanggalSelesai: true;
      status: true;
      pengaju: { select: { nama: true } };
      mata_kuliah: { select: { judul: true; semester: true } };
    };
  }>;

  type MataKuliahWithKegiatan = {
    judul: string;
    kegiatan: {
      judul: string;
      tanggal: string | null;
      status: string;
    }[];
  };

  type SemesterWithMataKuliah = {
    semester: number;
    mataKuliah: MataKuliahWithKegiatan[];
  };

  // Query kegiatan
  const allKegiatan: KegiatanWithMataKuliah[] = await prisma.kegiatan.findMany({
    where: {
      pengajuId: id,
    },
    select: {
      judul: true,
      tanggalMulai: true,
      tanggalSelesai: true,
      status: true,
      pengaju: {
        select: { nama: true }, // Maps to ttd_nama_dosen
      },
      mata_kuliah: {
        select: {
          judul: true,
          semester: true,
        },
      },
    },
    orderBy: {
      mata_kuliah: { semester: "asc" },
    },
  });

  // Group by semester and mata_kuliah
  const groupedBySemester: SemesterWithMataKuliah[] = allKegiatan.reduce(
    (acc: SemesterWithMataKuliah[], kegiatan: KegiatanWithMataKuliah) => {
      const mataKuliah = kegiatan.mata_kuliah;
      if (!mataKuliah) return acc; // Skip if no mata_kuliah

      const semester = mataKuliah.semester;
      const mataKuliahJudul = mataKuliah.judul;

      let tanggal = "-";

      if (kegiatan.tanggalMulai && kegiatan.tanggalSelesai) {
        tanggal =
          format(kegiatan.tanggalMulai, "YYYY-MM-dd") +
          " - " +
          format(kegiatan.tanggalSelesai, "YYYY-MM-dd");
      }

      const kegiatanData = {
        judul: kegiatan.judul,
        tanggal,
        status: kegiatan.status,
      };

      // Find or create semester
      let semesterGroup = acc.find((s) => s.semester === semester);
      if (!semesterGroup) {
        semesterGroup = { semester, mataKuliah: [] };
        acc.push(semesterGroup);
      }

      // Find or create mata_kuliah within semester
      let mataKuliahGroup = semesterGroup.mataKuliah.find(
        (m) => m.judul === mataKuliahJudul
      );
      if (!mataKuliahGroup) {
        mataKuliahGroup = { judul: mataKuliahJudul, kegiatan: [] };
        semesterGroup.mataKuliah.push(mataKuliahGroup);
      }

      // Add kegiatan to mata_kuliah
      mataKuliahGroup.kegiatan.push(kegiatanData);

      return acc;
    },
    [] as SemesterWithMataKuliah[]
  );

  groupedBySemester.forEach((semester) => {
    semester.mataKuliah.forEach((mataKuliah) => {
      const currentLength = mataKuliah.kegiatan.length;
      if (currentLength < 10) {
        const emptyKegiatan = Array(10 - currentLength).fill({
          judul: "..................",
          tanggal: "-",
          status: "",
        });
        mataKuliah.kegiatan = [...mataKuliah.kegiatan, ...emptyKegiatan];
      }

      mataKuliah.kegiatan = mataKuliah.kegiatan.map((kegiatan, index) => ({
        ...kegiatan,
        idx: index + 1,
      }));
    });
  });

  // Sort semesters
  groupedBySemester.sort((a, b) => a.semester - b.semester);

  const data = {
    nama: dataPengguna.nama,
    nim: dataPengguna.username,
    namaPromotor: dataPengguna.promotor?.nama,
    namaKoPromotor: dataPengguna.koPromotor?.nama,
    judulDisertasi: dataPengguna.profil?.judulDisertasi,
    tempatTanggalLahir: dataPengguna.profil?.tempatTanggalLahir,
    alamat: dataPengguna.profil?.alamat,
    alamatKeluarga: dataPengguna.profil?.alamatKeluarga,
    tahunLulus: dataPengguna.profil?.tahunLulus,
    mulaiMasukPendidikan,
    groupedBySemester,
    pekerjaan: dataPengguna.profil?.pekerjaan,
    nomorTelpon: dataPengguna.profil?.nomorTelpon,
    email: dataPengguna.profil?.email,
  };

  const buffer = await createReport({
    template,
    data,
    cmdDelimiter: "|",
  });

  const newLogbookRelativePath = cekLogbook ? cekLogbook.path : id + ".docx";

  const newLogbookAbsolutePath = join(
    process.cwd(),
    "generated_logbook",
    newLogbookRelativePath
  );

  writeFileSync(newLogbookAbsolutePath, buffer);

  const updateLogbook = await prisma.logbook.upsert({
    where: {
      id: cekLogbook?.id ?? 0,
    },
    update: {
      path: newLogbookRelativePath,
    },
    create: {
      path: newLogbookRelativePath,
      penggunaId: id,
    },
  });

  revalidatePath("/admin/logbook-anda");

  return { success: true };
}

export async function downloadLogbook(path: string) {
  const absPath = join(process.cwd(), "generated_logbook", path);
  const logbookFile = readFileSync(absPath);

  return logbookFile;
}
