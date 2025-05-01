import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
} from "nuqs/server";

export const tugasSearchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  judul: parseAsString.withDefault(""),
  // deadline: {
  //   parse: (value) => {
  //     if (value === null || value === "null") return null;
  //     try {
  //       return new Date(value);
  //     } catch {
  //       return null;
  //     }
  //   },
  //   serialize: (value) => {
  //     return value ? value.toISOString() : "null";
  //   },
  //   defaultValue: null,
  // },
  filterFlag: parseAsString.withDefault(""),
});

export type TTugasSearchParams = {
  page: number;
  perPage: number;
  judul: string;
  filterFlag: string;
};
