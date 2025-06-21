import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; // Path relatif disesuaikan

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  value: string | number;
}

export default function DashboardCard({
  // Mengubah export default menjadi export biasa
  icon: Icon, // Destrukturisasi icon menjadi komponen Icon
  title,
  description,
  value,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {/* Ikon dipindahkan ke CardHeader, dengan ukuran yang lebih kecil dan warna muted */}
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {/* Nilai utama tetap besar */}
        <div className="text-2xl font-bold">{value}</div>
        {/* Deskripsi dipindahkan di bawah nilai, dengan ukuran teks yang lebih kecil dan warna muted */}
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
