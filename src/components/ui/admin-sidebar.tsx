"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Bell,
  BookCheck,
  BookOpenCheck,
  LayoutDashboard,
  Users,
} from "lucide-react";
import Link from "next/link";
import { NavUser } from "./nav-user";
import { useSession } from "next-auth/react";

const data = {
  navMain: [
    {
      title: "Utama",
      url: "/admin",
      items: [
        {
          title: "Dashboard",
          url: "dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Pengguna",
      url: "/admin/pengguna",
      items: [
        {
          title: "Daftar Pengguna",
          url: "",
          icon: Users,
        },
      ],
    },
    {
      title: "Pengaturan",
      url: "/admin/pengaturan",
      items: [
        {
          title: "Pengumuman",
          url: "pengumuman",
          icon: Bell,
        },
      ],
    },
  ],
};

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [activeLink, setActiveLink] = React.useState("/admin/dashboard");
  const { data: session, status } = useSession();

  function getLink(...links: string[]): string {
    return links.join("/");
  }

  if (!session?.user) {
    return (
      <Sidebar {...props}>
        <div className="p-4">Memuat...</div>
      </Sidebar>
    );
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center mt-2 gap-2">
          <BookOpenCheck />
          <h1 className="font-bold text-lg mb-1">StarterPack Nextjs</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((temp) => (
          <SidebarGroup key={temp.title}>
            <SidebarGroupLabel>{temp.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {temp.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={getLink(temp.url, item.url) === activeLink}
                      onClick={() => setActiveLink(getLink(temp.url, item.url))}
                    >
                      <Link href={getLink(temp.url, item.url)}>
                        <item.icon />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />

      <SidebarFooter>
        <NavUser user={session.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
