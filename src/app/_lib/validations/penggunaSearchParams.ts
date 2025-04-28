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
  peran: parseAsStringEnum(["asisten", "praktikan", "admin"]).withOptions({
    clearOnDefault: true,
  }),
  filterFlag: parseAsString.withDefault(""),
});

export type TPenggunaSearchParams = {
  page: number;
  perPage: number;
  nama: string;
  peran: "asisten" | "praktikan" | "admin" | null;
  filterFlag: string;
};
