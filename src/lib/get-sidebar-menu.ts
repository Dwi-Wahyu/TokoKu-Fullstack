// src/utils/get-sidebar-menu.ts

import {
  adminSidebarMenu,
  dosenSidebarMenu,
  mahasiswaSidebarMenu,
} from "@/config/sidebar-menu";

export const getSidebarMenu = (role: string) => {
  switch (role) {
    case "ADMIN":
      return adminSidebarMenu;
    case "DOSEN":
      return dosenSidebarMenu;
    case "MAHASISWA":
      return mahasiswaSidebarMenu;
    default:
      return { navMain: [] }; // Fallback untuk role tidak dikenali
  }
};
