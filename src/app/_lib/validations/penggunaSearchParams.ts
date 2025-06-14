import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
  parseAsStringEnum,
} from "nuqs/server";

export const penggunaSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  nama: parseAsString.withDefault(""),
  username: parseAsString.withDefault(""),
  angkatan: parseAsString.withDefault(""),
  peran: parseAsStringEnum(["MAHASISWA", "DOSEN"]).withOptions({
    clearOnDefault: true,
  }),
  filterFlag: parseAsString.withDefault(""),
});

export type TPenggunaSearchParams = {
  page: number;
  perPage: number;
  nama: string;
  username: string;
  angkatan: string;
  peran: "MAHASISWA" | "DOSEN" | "ADMIN";
  filterFlag: string;
};
