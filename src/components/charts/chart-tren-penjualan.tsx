// src/components/charts/chart-tren-penjualan.tsx (Disarankan untuk membuat file baru ini)
"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"; // Menambahkan YAxis
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns"; // Import format dari date-fns
import { id } from "date-fns/locale"; // Import locale id dari date-fns

// --- Data Dummy Penjualan (Diperpanjang untuk 90 hari terakhir) ---
const generateDummySalesData = (days: number) => {
  const data = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Atur ke awal hari

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = format(date, "yyyy-MM-dd"); // Format YYYY-MM-DD

    // Simulasi data penjualan yang bervariasi
    const sales = Math.floor(Math.random() * (2500000 - 500000 + 1) + 500000); // 500rb - 2.5jt
    const transactions = Math.floor(Math.random() * (50 - 10 + 1) + 10); // 10 - 50 transaksi

    data.push({
      date: formattedDate,
      sales: sales,
      transactions: transactions,
    });
  }
  return data;
};

// Generasi data untuk 90 hari terakhir
const chartData = generateDummySalesData(90);

// --- Chart Config untuk Penjualan ---
const chartConfig = {
  sales: {
    label: "Penjualan",
    color: "hsl(var(--chart-1))", // Menggunakan warna chart dari theme Shadcn
  },
  // Jika Anda ingin menampilkan transaksi juga sebagai garis lain, Anda bisa tambahkan:
  // transactions: {
  //   label: "Transaksi",
  //   color: "hsl(var(--chart-2))",
  // },
} satisfies ChartConfig;

export function ChartTrenPenjualan() {
  const [timeRange, setTimeRange] = React.useState("30d"); // Default ke 30 hari

  const filteredData = React.useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Atur ke awal hari

    let daysToSubtract: number;
    if (timeRange === "7d") {
      daysToSubtract = 7;
    } else if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "90d") {
      // Memperbaiki '90' menjadi '90d' agar konsisten
      daysToSubtract = 90;
    } else {
      daysToSubtract = 30; // Default jika tidak ada yang cocok
    }

    const startDate = new Date(now);
    startDate.setDate(now.getDate() - daysToSubtract);

    return chartData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate;
    });
  }, [timeRange]);

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Tren Penjualan TokoKu</CardTitle>
          <CardDescription>
            Menampilkan data penjualan untuk{" "}
            {timeRange === "7d"
              ? "7 hari terakhir"
              : timeRange === "30d"
              ? "30 hari terakhir"
              : timeRange === "90d"
              ? "3 bulan terakhir"
              : "periode yang dipilih"}
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Pilih rentang waktu"
          >
            <SelectValue placeholder="30 hari terakhir" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              3 bulan terakhir
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              30 hari terakhir
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              7 hari terakhir
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              {/* Gunakan ID yang sesuai dengan chartConfig, misalnya 'fillSales' */}
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                // Format tanggal ke format lokal Indonesia (contoh: Jun 21)
                return format(date, "MMM d", { locale: id });
              }}
            />
            {/* Menambahkan YAxis untuk label nilai penjualan */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `Rp${(value / 1000000).toFixed(1)}jt`} // Format ke jutaan Rupiah
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return format(new Date(value), "dd MMMM yyyy", {
                      locale: id,
                    }); // Format tanggal lengkap
                  }}
                  formatter={(value, name) => {
                    if (name === "Penjualan") {
                      // Pastikan nama sesuai dengan label di chartConfig
                      return [
                        `Rp${(value as number).toLocaleString("id-ID")}`,
                        "Penjualan",
                      ];
                    }
                    return [`${value}`, name];
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="sales" // Menggunakan dataKey "sales"
              type="natural"
              fill="url(#fillSales)" // Menggunakan ID gradient yang baru
              stroke="var(--color-sales)"
              // stackId dihapus karena ini adalah single line chart untuk total penjualan
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
