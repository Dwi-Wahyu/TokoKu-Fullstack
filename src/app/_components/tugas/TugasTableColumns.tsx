import moment from "moment";

import { TabelTugasType } from "@/schema/tugas/TabelTugasType";
import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

export function getTugasTableColumns() {
  const tugasTableColumns: ColumnDef<TabelTugasType>[] = [
    {
      accessorKey: "judul",
      header: "Judul",
      enableColumnFilter: true,
      enableGlobalFilter: true,
    },
    {
      accessorKey: "deskripsi",
      header: "Deskripsi",
      cell: ({ getValue }) => (
        <div className="max-w-xs truncate">{getValue() as string}</div>
      ),
    },
    {
      accessorKey: "deadline",
      header: "Deadline",
      cell: ({ row }) => {
        const dateValue: Date | null = row.getValue("deadline");

        if (!dateValue) return "-";

        return moment(dateValue).format("YYYY-MM-DD | hh:mm");
      },
    },
    {
      id: "aksi",
      accessorKey: "id",
      header: "Aksi",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return tugasTableColumns;
}
