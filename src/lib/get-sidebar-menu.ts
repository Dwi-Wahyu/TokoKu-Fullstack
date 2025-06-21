import { adminSidebarMenu } from "@/config/sidebar-menu";

export const getSidebarMenu = (role: string) => {
  switch (role) {
    case "ADMIN":
      return adminSidebarMenu;
    default:
      return adminSidebarMenu; // Fallback untuk role tidak dikenali
  }
};
