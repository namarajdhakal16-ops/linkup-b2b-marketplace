import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryData, monthlyData } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import { Calendar, FileText, Package, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SUPPLIER_NAV } from "./SupplierDashboardPage";

const supplierMonthly = [
  { month: "Nov", revenue: 1120000 },
  { month: "Dec", revenue: 980000 },
  { month: "Jan", revenue: 1350000 },
  { month: "Feb", revenue: 1820000 },
  { month: "Mar", revenue: 2100000 },
  { month: "Apr", revenue: 2450000 },
];

const productPerformance = [
  {
    id: "p1",
    name: "Industrial Hydraulic Press 50T",
    sold: 4,
    revenue: 1140000,
    avgPrice: 285000,
    stock: 12,
  },
  {
    id: "p2",
    name: "CNC Milling Machine VMC 850",
    sold: 2,
    revenue: 3700000,
    avgPrice: 1850000,
    stock: 4,
  },
  {
    id: "p3",
    name: "Industrial Air Compressor 10HP",
    sold: 7,
    revenue: 595000,
    avgPrice: 85000,
    stock: 18,
  },
  {
    id: "p4",
    name: "PPE Kit — Complete Industrial Set",
    sold: 320,
    revenue: 592000,
    avgPrice: 1850,
    stock: 1200,
  },
  {
    id: "p5",
    name: "Full-Body Safety Harness Class E",
    sold: 45,
    revenue: 189000,
    avgPrice: 4200,
    stock: 340,
  },
];

const buyerPieData = [
  { name: "Tata Advanced Materials", value: 32, color: "#059669" },
  { name: "Bharat Heavy Electricals", value: 26, color: "#047857" },
  { name: "Mahindra Logistics", value: 20, color: "#10b981" },
  { name: "Larsen & Toubro", value: 14, color: "#34d399" },
  { name: "Others", value: 8, color: "#6ee7b7" },
];

const DATE_RANGES = [
  "Last 30 days",
  "Last 3 months",
  "Last 6 months",
  "This Year",
];

export function SupplierAnalyticsPage() {
  const [dateRange, setDateRange] = useState("Last 6 months");

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="Sales Analytics"
        description="Track your product performance, revenue trends and buyer activity"
        breadcrumb="Supplier Portal"
        actions={
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-muted-foreground" />
            <div className="flex gap-1">
              {DATE_RANGES.map((r) => (
                <Button
                  key={r}
                  type="button"
                  size="sm"
                  variant={dateRange === r ? "default" : "outline"}
                  className={`text-xs h-7 px-2.5 ${dateRange === r ? "bg-[#059669] hover:bg-[#047857] text-white" : ""}`}
                  onClick={() => setDateRange(r)}
                  data-ocid={`date-range-${r.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {r}
                </Button>
              ))}
            </div>
          </div>
        }
      />

      {/* KPI stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Total Revenue (YTD)"
          value={formatINR(9810000)}
          icon={<TrendingUp className="size-4" />}
          trend={22.4}
          accent="green"
        />
        <StatCard
          label="RFQs Received"
          value={38}
          icon={<FileText className="size-4" />}
          trend={15}
          trendLabel="this month"
          accent="blue"
        />
        <StatCard
          label="Active Listings"
          value={15}
          icon={<Package className="size-4" />}
          trend={0}
          accent="amber"
        />
        <StatCard
          label="Repeat Buyers"
          value={8}
          icon={<Users className="size-4" />}
          trend={33}
          trendLabel="vs last month"
          accent="purple"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* Monthly revenue line chart */}
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">
            Monthly Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={supplierMonthly}
              margin={{ top: 5, right: 5, bottom: 0, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(v: number) => `₹${(v / 100000).toFixed(0)}L`}
              />
              <Tooltip
                formatter={(v: number) => [formatINR(v), "Revenue"]}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#059669"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#059669" }}
                activeDot={{ r: 6 }}
                name="Revenue"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by category bar chart */}
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">
            Revenue by Product Category
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={categoryData}
              margin={{ top: 5, right: 5, bottom: 0, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                interval={0}
                angle={-20}
                textAnchor="end"
                height={45}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                formatter={(v: number) => [`${v}%`, "Share"]}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} name="Share (%)">
                {categoryData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sales by buyer pie chart */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="xl:col-span-1 rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">
            Sales Distribution by Buyer
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={buyerPieData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                dataKey="value"
                paddingAngle={2}
              >
                {buyerPieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v: number) => [`${v}%`, "Share"]}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {buyerPieData.map((d) => (
              <div key={d.name} className="flex items-center gap-2 text-xs">
                <span
                  className="size-2 rounded-full shrink-0"
                  style={{ background: d.color }}
                />
                <span className="text-muted-foreground flex-1 truncate">
                  {d.name}
                </span>
                <span className="font-medium text-foreground">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly comparison */}
        <div className="xl:col-span-2 rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">
            Buyer & Supplier Growth
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={monthlyData}
              margin={{ top: 5, right: 5, bottom: 0, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              <Legend />
              <Line
                type="monotone"
                dataKey="buyers"
                stroke="#1e40af"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="Active Buyers"
              />
              <Line
                type="monotone"
                dataKey="suppliers"
                stroke="#059669"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="Active Suppliers"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Product performance table */}
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Product Performance</h3>
          <Badge variant="outline" className="text-xs">
            {dateRange}
          </Badge>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b">
                {[
                  "Product Name",
                  "Units Sold",
                  "Revenue",
                  "Avg Price",
                  "Stock Remaining",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productPerformance.map((p) => (
                <tr
                  key={p.id}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                  data-ocid={`product-perf-${p.id}`}
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-foreground max-w-[220px] truncate">
                      {p.name}
                    </p>
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground text-right">
                    {p.sold.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#059669]">
                    {formatINR(p.revenue)}
                  </td>
                  <td className="px-4 py-3 text-foreground">
                    {formatINR(p.avgPrice)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-sm font-medium ${p.stock < 10 ? "text-red-600" : "text-foreground"}`}
                    >
                      {p.stock.toLocaleString()}
                      {p.stock < 10 && (
                        <span className="ml-1 text-[10px] text-red-500">
                          (Low)
                        </span>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayout>
  );
}
