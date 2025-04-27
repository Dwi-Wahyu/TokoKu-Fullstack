import { TabelTugasType } from "@/common/schema/tugas/TabelTugasType";
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
    },
    {
      accessorKey: "deskripsi",
      header: "Deskripsi",
      cell: ({ getValue }) => (
        <div className="max-w-sm truncate">{getValue() as string}</div>
      ),
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
