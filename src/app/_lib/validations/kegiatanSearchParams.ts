import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
  parseAsStringEnum,
} from "nuqs/server";

export const kegiatanSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  semester: parseAsInteger.withDefault(0),
  nama_mahasiswa: parseAsString.withDefault(""),
  id_mata_kuliah: parseAsInteger.withDefault(0),
  status: parseAsStringEnum<"DISETUJUI" | "DIAJUKAN" | "DITOLAK" | "">([
    "DISETUJUI",
    "DIAJUKAN",
    "DITOLAK",
    "",
  ]).withDefault(""),
});

export type TKegiatanSearchParams = {
  page: number;
  perPage: number;
  semester: number;
  id_mata_kuliah: number;
  nama_mahasiswa: string;
  status: "DISETUJUI" | "DIAJUKAN" | "DITOLAK" | "";
};
