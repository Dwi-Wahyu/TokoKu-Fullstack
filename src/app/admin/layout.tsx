import { auth } from "@/config/auth";
import { redirect } from "next/navigation";
import ClientAdminLayout from "../_components/admin-layout";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <ClientAdminLayout>{children}</ClientAdminLayout>;
}
