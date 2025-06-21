// src/app/admin/page.tsx
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, ShoppingBag, BarChart2, Package } from "lucide-react";
import { CustomToast } from "@/components/toast";
import { toast } from "sonner";
import DashboardCard from "@/components/dashboard-card";
import { ChartTrenPenjualan } from "@/components/charts/chart-tren-penjualan";

// --- Dummy Data ---
const dummySalesData = [
  { date: "2025-06-15", sales: 1200000, transactions: 15 },
  { date: "2025-06-16", sales: 1500000, transactions: 20 },
  { date: "2025-06-17", sales: 1000000, transactions: 12 },
  { date: "2025-06-18", sales: 1800000, transactions: 25 },
  { date: "2025-06-19", sales: 1350000, transactions: 18 },
  { date: "2025-06-20", sales: 2000000, transactions: 30 },
  { date: "2025-06-21", sales: 1700000, transactions: 22 },
];

const dummyLowStockProducts = [
  { id: "prod001", name: "Kaos Polos Putih M", stock: 5 },
  { id: "prod002", name: "Celana Jeans Biru L", stock: 3 },
  { id: "prod003", name: "Topi Baseball Hitam", stock: 8 },
  { id: "prod004", name: "Sepatu Sneakers Uk. 40", stock: 2 },
];

const dummyTopSellingProducts = [
  {
    id: "prod010",
    name: "Gamis Motif Bunga",
    unitsSold: 120,
    revenue: 12000000,
  },
  { id: "prod011", name: "Kemeja Batik Pria", unitsSold: 95, revenue: 9500000 },
  {
    id: "prod012",
    name: "Jilbab Segiempat Voal",
    unitsSold: 80,
    revenue: 4000000,
  },
  {
    id: "prod013",
    name: "Sendal Jepit Casual",
    unitsSold: 70,
    revenue: 2100000,
  },
];

export default function AdminDashboardPage() {
  // Hitung KPI dari data dummy
  const totalSalesToday = dummySalesData[dummySalesData.length - 1].sales;
  const totalTransactionsToday =
    dummySalesData[dummySalesData.length - 1].transactions;
  const totalProductsSoldOverall = dummyTopSellingProducts.reduce(
    (sum, item) => sum + item.unitsSold,
    0
  );
  const totalRevenueOverall = dummyTopSellingProducts.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Penjualan Hari Ini"
          value={`Rp${totalSalesToday.toLocaleString("id-ID")}`}
          description="Peningkatan 20.1% dari bulan lalu"
          icon={DollarSign}
        />
        <DashboardCard
          title="Jumlah Transaksi Hari Ini"
          value={totalTransactionsToday.toLocaleString("id-ID")}
          description="Total transaksi hari ini"
          icon={ShoppingBag}
        />
        <DashboardCard
          title="Produk Terjual Keseluruhan"
          value={totalProductsSoldOverall.toLocaleString("id-ID")}
          description="Total unit produk yang sudah terjual"
          icon={BarChart2}
        />
        <DashboardCard
          title="Nilai Inventaris"
          value={`Rp${(150000000).toLocaleString("id-ID")}`} // Dummy total inventory value
          description="Estimasi nilai total stok Anda"
          icon={Package}
        />
      </div>

      <ChartTrenPenjualan />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {/* Low Stock Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produk Stok Rendah</CardTitle>
            <CardDescription>
              Daftar produk yang perlu segera diisi ulang.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Produk</TableHead>
                  <TableHead className="text-right">Stok</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyLowStockProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell className="text-right">
                      {product.stock}
                    </TableCell>
                  </TableRow>
                ))}
                {dummyLowStockProducts.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      className="h-24 text-center text-muted-foreground"
                    >
                      Semua stok aman!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Top Selling Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produk Terlaris (Bulan Ini)</CardTitle>
            <CardDescription>
              Produk dengan penjualan tertinggi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Produk</TableHead>
                  <TableHead>Unit Terjual</TableHead>
                  <TableHead className="text-right">Pendapatan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyTopSellingProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.unitsSold}</TableCell>
                    <TableCell className="text-right">
                      Rp{product.revenue.toLocaleString("id-ID")}
                    </TableCell>
                  </TableRow>
                ))}
                {dummyTopSellingProducts.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="h-24 text-center text-muted-foreground"
                    >
                      Belum ada data penjualan terlaris.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
