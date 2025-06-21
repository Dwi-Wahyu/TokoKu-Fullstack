// types/sidebar.d.ts atau interfaces/sidebar.ts

import { LucideIcon } from "lucide-react"; // Import jika icon adalah komponen Lucide

export interface SidebarSubMenuItem {
  title: string;
  url: string;
  isQuery?: boolean;
}

export interface SidebarMenuItem {
  title: string;
  url: string;
  icon: LucideIcon; // Icon adalah komponen Lucide
  isDropdown: boolean;
  items: SidebarSubMenuItem[]; // Untuk dropdown, ini berisi sub-item
}

export interface SidebarMenuGroup {
  title: string;
  url: string; // Base URL untuk grup ini
  items: SidebarMenuItem[];
}

export interface SidebarMenuData {
  navMain: SidebarMenuGroup[];
  // Anda bisa menambahkan properti lain jika ada, misalnya navFooter, dll.
}
