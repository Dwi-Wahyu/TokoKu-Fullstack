import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
} from "nuqs/server";

export const tugasSearchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  judul: parseAsString.withDefault(""),
  filterFlag: parseAsString.withDefault(""),
});

export type TTugasSearchParams = {
  page: number;
  perPage: number;
  judul: string;
  filterFlag: string;
};
