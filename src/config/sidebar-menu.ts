// sidebar-menu.ts
import { SidebarMenuData } from "@/types/sidebar";
import {
  BookType,
  HandCoins,
  LayoutDashboard,
  PackagePlus,
  ShoppingBasket,
  TicketPercent,
  Users,
  ContactRound,
  Settings,
  ReceiptText,
  Images,
} from "lucide-react";

export const adminSidebarMenu: SidebarMenuData = {
  navMain: [
    {
      title: "Utama",
      url: "/admin",
      items: [
        {
          title: "Dashboard",
          url: "dashboard",
          icon: LayoutDashboard,
          isDropdown: false,
          items: [],
        },
        {
          title: "Laporan Keuangan",
          url: "laporan-keuangan",
          icon: ReceiptText,
          isDropdown: false,
          items: [],
        },
      ],
    },
    {
      title: "Operasional", // <-- Sepertinya ada duplikasi 'Kasir' dan 'Pelanggan' di bawah 'Produk' dan 'Pengguna'
      url: "/admin", // <-- Ubah URL base agar lebih semantik
      items: [
        {
          title: "Produk", // Contoh: Ganti dengan menu terkait produk
          url: "produk",
          icon: ShoppingBasket, // Ganti icon
          isDropdown: false,
          items: [],
        },
        {
          title: "Diskon",
          url: "diskon",
          icon: TicketPercent,
          isDropdown: false,
          items: [],
        },
        {
          title: "Catatan Pengeluaran",
          url: "pengeluaran",
          icon: HandCoins,
          isDropdown: false,
          items: [],
        },
      ],
    },
    {
      title: "Pengguna",
      url: "/admin/pengguna",
      items: [
        {
          title: "Kasir",
          url: "kasir",
          icon: ContactRound,
          isDropdown: false,
          items: [],
        },
        {
          title: "Pelanggan",
          url: "pelanggan",
          icon: Users,
          isDropdown: false,
          items: [],
        },
      ],
    },
    {
      title: "Pengaturan",
      url: "/admin/pengaturan",
      items: [
        {
          title: "Umum",
          url: "umum",
          icon: Settings,
          isDropdown: false,
          items: [],
        },
        {
          title: "Media",
          url: "media",
          icon: Images,
          isDropdown: false,
          items: [],
        },
      ],
    },
  ],
};
