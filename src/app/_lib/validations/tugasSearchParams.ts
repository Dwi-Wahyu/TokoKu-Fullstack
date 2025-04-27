import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
} from "nuqs/server";

export const tugasSearchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(5),
  judul: parseAsString.withDefault(""),
});

export type TTugasSearchParams = {
  page: number;
  limit: number;
  judul: string;
};
