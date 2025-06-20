"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import Link from "next/link";
import { AdminSidebar } from "@/components/ui/admin-sidebar";

function capitalize(str: string): string {
  if (str.length > 35) {
    return "Edit";
  }
  if (str.includes("-")) {
    const splitWord = str.split("-");
    const capitalizeEachWord = splitWord.map((val) => capitalize(val));

    return capitalizeEachWord.join(" ");
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ClientAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // contoh: "/admin/tugas"
  const segments = pathname.split("/").filter(Boolean);

  segments.shift();

  return (
    <div>
      <SidebarProvider>
        {/* <AppSidebar /> */}
        <AdminSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <div className="flex items-center">
              <SidebarTrigger className="-ml-1" />

              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {segments.map((segment, idx) => {
                    const isLast = idx === segments.length - 1;
                    const href =
                      "/admin/" + segments.slice(0, idx + 1).join("/");
                    const label = capitalize(segment);

                    return (
                      <Fragment key={href}>
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage>{label}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild>
                              <Link href={href}>{label}</Link>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                      </Fragment>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <ThemeToggle />
          </header>
          <div className="p-5">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
