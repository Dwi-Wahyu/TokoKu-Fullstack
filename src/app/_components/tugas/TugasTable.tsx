"use client";

import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import React, { useState } from "react";

import { TabelTugasType } from "@/schema/tugas/TabelTugasType";
import { getTugasTableColumns } from "./TugasTableColumns";
import { TTugasSearchParams } from "@/app/_lib/validations/tugasSearchParams";
import { parseAsString, useQueryState } from "nuqs";
import { FeatureFlagsProvider, useFeatureFlags } from "../FeatureFlagProvider";
import { DataTable } from "@/components/datatable/data-table";
import { DataTableAdvancedToolbar } from "@/components/datatable/data-table-advanced-toolbar";

import { Input } from "@/components/ui/input";
import { useDataTable } from "@/hooks/use-data-table";
import { getTugas } from "@/app/_lib/queries/tugasQueries";
import { DataTableDateFilter } from "@/components/datatable/data-table-date-filter";
import DateFilter from "@/components/date-filter";

interface TugasTableProps {
  promises: Promise<[Awaited<ReturnType<typeof getTugas>>]>;
}

export function TugasTable({ promises }: TugasTableProps) {
  const [{ data, pageCount }] = React.use(promises);

  const columns = React.useMemo(() => getTugasTableColumns(), []);

  const [judul, setJudul] = useQueryState("judul", {
    defaultValue: "",
    shallow: false,
  });

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    shallow: false,
    clearOnDefault: true,
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
  });

  return (
    <div>
      <DataTable table={table}>
        <DataTableAdvancedToolbar table={table}>
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Cari judul . . ."
              size={40}
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />

            <DateFilter key="deadline" title="Filter Deadline" />
          </div>
        </DataTableAdvancedToolbar>
      </DataTable>
    </div>
  );
}
