"use client";

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Check,
  Edit,
  Eye,
  Loader2,
  MoreHorizontal,
  Signature,
  Trash,
  Trash2Icon,
  X,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import { toast } from "sonner";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTable } from "@/components/datatable/data-table";
import { DataTableAdvancedToolbar } from "@/components/datatable/data-table-advanced-toolbar";
import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";

import { useSession } from "next-auth/react";
import { getKegiatan } from "@/app/_lib/queries/kegiatanQueries";
import { Badge } from "@/components/ui/badge";
import {
  hapusKegiatan,
  tanggapiKegiatan,
} from "@/app/_lib/actions/kegiatanActions";
import Link from "next/link";
import { format } from "date-fns";
import { CustomToast } from "@/components/toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TableType = Awaited<ReturnType<typeof getKegiatan>>;

type ColumnType = TableType["data"][number];

interface TableProps {
  promises: Promise<[TableType]>;
}

export function KegiatanTable({ promises }: TableProps) {
  const [{ data, pageCount }] = React.use(promises);
  const session = useSession();

  const [openHapusDialog, setOpenHapusDialog] = useState(false);

  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const [nama, setNama] = useQueryState("nama_mahasiswa", {
    defaultValue: "",
    shallow: false,
  });

  const [status, setStatus] = useQueryState("status", {
    defaultValue: "",
    shallow: false,
  });

  function toggleOpenDialog(id: number, aksi: string) {
    setSelectedId(id);

    setOpenHapusDialog((value) => !value);
  }

  const columns: ColumnDef<ColumnType>[] = [
    {
      accessorKey: "mata_kuliah.judul",
      header: "Mata Kuliah",
    },
    {
      accessorKey: "judul",
      header: "Judul",
      cell: ({ row }) => {
        return (
          <div className="whitespace-normal w-96">{row.original.judul}</div>
        );
      },
    },
    {
      id: "tanggal",
      header: "Tanggal",
      cell: ({ row }) => {
        const { tanggalMulai, tanggalSelesai } = row.original;

        if (!tanggalMulai && !tanggalSelesai) {
          return <div>-</div>;
        }

        if (!tanggalMulai) {
          return "-";
        }

        if (!tanggalSelesai) {
          return "-";
        }

        const formattedMulai = format(new Date(tanggalMulai), "dd/MM/yyyy");
        const formattedSelesai = format(new Date(tanggalSelesai), "dd/MM/yyyy");

        if (formattedMulai === formattedSelesai) {
          return <div>{formattedMulai}</div>;
        }

        return (
          <div>
            {formattedMulai} - {formattedSelesai}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        switch (row.original.status) {
          case "DISETUJUI":
            return <Badge>Disetujui</Badge>;
          case "DITOLAK":
            return <Badge variant={"destructive"}>Ditolak</Badge>;
          case "DIAJUKAN":
            return <Badge variant={"secondary"}>Diajukan</Badge>;
        }
      },
    },
  ];

  const aksiDosen = {
    id: "id",
    header: "Aksi",
    accessorKey: "id",
    cell: ({ row }: { row: any }) => {
      return (
        <Button asChild size={"sm"} variant={"secondary"}>
          <Link href={`/admin/kegiatan/detail/${row.original.id}`}>
            <Eye />
            Detail
          </Link>
        </Button>
      );
    },
  };

  const mahasiswaColumnName = {
    accessorKey: "pengaju.nama",
    header: "Mahasiswa",
  };

  // Buat aksi mahasiswa sebagai dropdown
  const aksiMahasiswa = {
    id: "id",
    header: "Aksi",
    accessorKey: "id",
    size: 50,
    cell: ({ row }: { row: any }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/admin/kegiatan/${row.original.id}`}>
                <Edit />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/admin/kegiatan/detail/${row.original.id}`}>
                <Eye />
                Detail
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => toggleOpenDialog(row.original.id, "hapus")}
            >
              <Trash />
              Hapus
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  };

  switch (session.data?.user.peran) {
    case "DOSEN":
      columns.unshift(mahasiswaColumnName);
      columns.push(aksiDosen);
      break;
    case "MAHASISWA":
      columns.push(aksiMahasiswa);
      break;
  }

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

    const request = await hapusKegiatan(selectedId);

    if (request.success) {
      toast.custom(() => (
        <CustomToast
          title="Pengajuan Dihapus"
          description="Pengajuan kegiatan telah berhasil diarsipkan dari sistem."
          variant="success"
          icon={<Trash2Icon />}
        />
      ));

      setOpenHapusDialog(false);
    }

    setLoading(false);
  }

  return (
    <>
      <AlertDialog open={openHapusDialog} onOpenChange={setOpenHapusDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Anda Yakin Menghapus Pengajuan?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Tindakan ini akan menghapus
              pengajuan kegiatan secara permanen.
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
          <div className="flex gap-2 items-center flex-col sm:flex-row">
            <Input
              placeholder="Cari mahasiswa . . ."
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            <Select onValueChange={(val) => setStatus(val)} value={status}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DISETUJUI">Disetujui</SelectItem>
                <SelectItem value="DITOLAK">Ditolak</SelectItem>
                <SelectItem value="DIAJUKAN">Diajukan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DataTableAdvancedToolbar>
      </DataTable>
    </>
  );
}
