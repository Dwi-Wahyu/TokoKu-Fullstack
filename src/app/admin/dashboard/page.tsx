"use client";

import { AreaChartComponent } from "@/components/charts/area-chart";
import BarChartComponent from "@/components/charts/bar-chart";
import DashboardCard from "@/components/dashboard-card";
import { NotebookText, Users, Users2, UserSearch } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const session = useSession();

  if (!session) {
    return <h1>Unauthorized</h1>;
  }

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-bold text-xl">
          Selamat Datang, {session.data?.user.nama}
        </h1>
      </div>
      <div className="mb-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <DashboardCard icon={Users} title="Praktikan" value={120} />

        <DashboardCard icon={Users2} title="Asisten" value={43} />

        <DashboardCard icon={NotebookText} title="Tugas" value={5} />

        <DashboardCard icon={UserSearch} title="Pengunjung" value={54} />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <BarChartComponent />

        <AreaChartComponent />
      </div>
    </div>
  );
}
