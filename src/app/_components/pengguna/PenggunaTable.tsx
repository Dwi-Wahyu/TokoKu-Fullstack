"use client";

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { TTabelPenggunaSchema } from "@/schema/pengguna/TabelPenggunaSchema";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FilterX,
  Loader2,
  MoreHorizontal,
  SquareUserRound,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deletePengguna } from "../../_lib/actions/penggunaActions";
import { toast } from "sonner";
import { useDataTable } from "@/hooks/use-data-table";
import { getPengguna } from "@/app/_lib/queries/penggunaQueries";
import { DataTable } from "@/components/datatable/data-table";
import { DataTableAdvancedToolbar } from "@/components/datatable/data-table-advanced-toolbar";
import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PenggunaTableProps {
  promises: Promise<[Awaited<ReturnType<typeof getPengguna>>]>;
}

export function PenggunaTable({ promises }: PenggunaTableProps) {
  const [{ data, pageCount }] = React.use(promises);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const [nama, setNama] = useQueryState("nama", {
    defaultValue: "",
    shallow: false,
  });
  const [peran, setPeran] = useQueryState("peran", {
    defaultValue: "",
    shallow: false,
  });

  function handleResetFilter() {
    setNama("");
    setPeran("");
  }

  function toggleOpenDialog(id: string) {
    setSelectedId(id);
    setOpen((value) => !value);
  }

  const columns: ColumnDef<TTabelPenggunaSchema>[] = [
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "nama",
      header: "Nama",
    },
    {
      accessorKey: "peran",
      header: "Peran",
    },
    {
      id: "id",
      header: "Aksi",
      accessorKey: "id",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <Link href={`/admin/pengguna/${row.getValue("id")}`}>
                <DropdownMenuItem>Edit Pengguna</DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onClick={() => toggleOpenDialog(row.getValue("id"))}
              >
                Hapus Pengguna
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const { table } = useDataTable({
    data,
    columns,
    pageCount: pageCount,
    shallow: false,
    clearOnDefault: true,
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
  });

  async function handleDelete() {
    setLoading(true);
    const request = await deletePengguna(selectedId);

    if (request.success) {
      toast.success("Berhasil menghapus pengguna");

      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Anda Yakin Menghapus Pengguna?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Tindakan ini akan menghapus
              akun secara permanen dan menghapus data Anda dari server kami.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Batalkan</AlertDialogCancel>
            <Button disabled={loading} onClick={handleDelete}>
              {loading ? <Loader2 className="animate-spin" /> : null}
              Yakin
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DataTable table={table}>
        <DataTableAdvancedToolbar table={table}>
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Cari nama . . ."
              size={40}
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <Select value={peran} onValueChange={(value) => setPeran(value)}>
            <SelectTrigger>
              <SquareUserRound />
              <SelectValue placeholder="Peran Pengguna" />
            </SelectTrigger>
            <SelectContent side="top">
              <SelectItem value="praktikan">Praktikan</SelectItem>
              <SelectItem value="asisten">Asisten</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={handleResetFilter} variant={"outline"}>
            <FilterX />
            Reset Filter
          </Button>
        </DataTableAdvancedToolbar>
      </DataTable>
    </div>
  );
}
