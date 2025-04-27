"use client";

import { ServerSideDatatable } from "@/components/datatable/serverside-datatable";
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
import React from "react";

import { TabelTugasType } from "@/common/schema/tugas/TabelTugasType";
import { getTugasTableColumns } from "./TugasTableColumns";
import { TTugasSearchParams } from "@/app/_lib/validations/tugasSearchParams";
import { useQueryState } from "nuqs";
import { Input } from "@/components/ui/input";

interface TugasTableProps {
  data: TabelTugasType[];
  searchParams: TTugasSearchParams;
}

export function TugasTable({ data, searchParams }: TugasTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [pageIndex, setPageIndex] = useQueryState("page", {
    defaultValue: searchParams.judul,
  });
  const [pageSize, setPageSize] = useQueryState("limit", {
    defaultValue: searchParams.limit,
  });

  const columns = React.useMemo(() => getTugasTableColumns(), []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <ServerSideDatatable table={table} />
    </div>
  );
}
