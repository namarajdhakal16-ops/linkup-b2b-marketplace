import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryData, mockSuppliers, monthlyData } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
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
import { buyerNavItems } from "./navItems";

const PIE_COLORS = ["#1e40af", "#059669", "#d97706", "#7c3aed", "#0891b2"];

const supplierMetrics = mockSuppliers.slice(0, 5).map((s, i) => ({
  supplier: s.company.split(" ").slice(0, 2).join(" "),
  orders: [12, 9, 7, 5, 3][i],
  totalSpend: [3425000, 5550000, 875000, 420000, 380000][i],
  avgOrder: [285416, 616666, 125000, 84000, 76000][i],
  responseTime: [s.responseTime, "2h", "4h", "3h", "6h"][i],
}));

const pieData = mockSuppliers.slice(0, 5).map((s, i) => ({
  name: s.company.split(" ")[0],
  value: [38, 25, 18, 12, 7][i],
}));

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
  label?: string;
}

function INRTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border bg-card shadow-lg p-3 text-sm">
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="text-muted-foreground">
          {entry.name}:{" "}
          <span className="font-medium text-foreground">
            {formatINR(entry.value)}
          </span>
        </p>
      ))}
    </div>
  );
}

export function BuyerAnalyticsPage() {
  const [dateRange, setDateRange] = useState("6m");

  const displayData = dateRange === "3m" ? monthlyData.slice(-3) : monthlyData;

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <PageHeader
        title="Analytics & Reports"
        description="Track your procurement performance and spending trends."
        breadcrumb="Buyer Portal"
        actions={
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger
              className="w-[130px]"
              data-ocid="analytics-date-range"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="1y">Last 12 Months</SelectItem>
            </SelectContent>
          </Select>
        }
      />

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Monthly Spend (₹)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart
                data={displayData}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis
                  tickFormatter={(v: number) => `₹${(v / 100000).toFixed(0)}L`}
                  tick={{ fontSize: 11 }}
                  width={50}
                />
                <Tooltip content={<INRTooltip />} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  name="Spend"
                  stroke="#1e40af"
                  strokeWidth={2.5}
                  dot={{ fill: "#1e40af", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Spend by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={categoryData}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                  height={50}
                />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: number) => [`${v}%`, "Share"]} />
                <Bar
                  dataKey="value"
                  name="Share %"
                  fill="#059669"
                  radius={[3, 3, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Orders by Supplier</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  paddingAngle={3}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => [`${v}%`, "Share"]} />
                <Legend iconSize={10} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Supplier Performance</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">
                    Supplier
                  </th>
                  <th className="text-center px-4 py-2.5 font-medium text-muted-foreground">
                    Orders
                  </th>
                  <th className="text-right px-4 py-2.5 font-medium text-muted-foreground hidden sm:table-cell">
                    Total Spend
                  </th>
                  <th className="text-right px-4 py-2.5 font-medium text-muted-foreground hidden md:table-cell">
                    Avg Order
                  </th>
                  <th className="text-center px-4 py-2.5 font-medium text-muted-foreground">
                    Response
                  </th>
                </tr>
              </thead>
              <tbody>
                {supplierMetrics.map((row) => (
                  <tr
                    key={row.supplier}
                    className="border-b last:border-0 hover:bg-muted/20"
                  >
                    <td className="px-4 py-3 font-medium">{row.supplier}</td>
                    <td className="px-4 py-3 text-center">{row.orders}</td>
                    <td className="px-4 py-3 text-right font-display hidden sm:table-cell">
                      {formatINR(row.totalSpend)}
                    </td>
                    <td className="px-4 py-3 text-right font-display hidden md:table-cell">
                      {formatINR(row.avgOrder)}
                    </td>
                    <td className="px-4 py-3 text-center text-muted-foreground">
                      {row.responseTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
}
