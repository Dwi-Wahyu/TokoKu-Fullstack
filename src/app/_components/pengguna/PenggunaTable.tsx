"use client";

import React, { useState } from "react";
import { getDataTabelPengguna } from "../../_lib/queries/penggunaQueries";
import { ClientSideDataTable } from "@/components/datatable/clientside-datatable";
import { ColumnDef } from "@tanstack/react-table";
import { TTabelPenggunaSchema } from "@/common/schema/pengguna/TabelPenggunaSchema";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deletePengguna } from "../../_lib/actions/penggunaActions";
import { toast } from "sonner";

export function PenggunaTable({
  promises,
}: {
  promises: Promise<Awaited<ReturnType<typeof getDataTabelPengguna>>>;
}) {
  const data = React.use(promises);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");

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

      <ClientSideDataTable
        columns={columns}
        data={data}
        validColumnFilters={["nama"]}
      />
    </div>
  );
}
