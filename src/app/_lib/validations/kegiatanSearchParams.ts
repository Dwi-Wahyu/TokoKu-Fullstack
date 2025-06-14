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
  nama_mahasiswa: string;
  status: "DISETUJUI" | "DIAJUKAN" | "DITOLAK" | "";
};
