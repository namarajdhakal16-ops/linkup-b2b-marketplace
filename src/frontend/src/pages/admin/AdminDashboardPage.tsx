import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockBuyers, mockSuppliers, monthlyData } from "@/data/mockData";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowLeftRight,
  CheckCircle,
  CreditCard,
  DollarSign,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShieldCheck,
  Tag,
  UserPlus,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ADMIN_NAV = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "RFQs", href: "/admin/rfqs", icon: FileText },
  { label: "Transactions", href: "/admin/transactions", icon: CreditCard },
  { label: "Feedback", href: "/admin/feedback", icon: MessageSquare },
  { label: "Fee Management", href: "/admin/fees", icon: Settings },
];

// Generate 30-day daily transaction data
const dailyData = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(2026, 2, 15); // March 2026 base
  d.setDate(d.getDate() + i);
  return {
    day: `${d.getMonth() + 1}/${d.getDate()}`,
    transactions: Math.floor(
      30 + ((i * 2.1 + Math.sin(i * 0.5) * 18) % 80) + 10,
    ),
  };
});

const recentActivity = [
  {
    id: "a1",
    type: "user_reg",
    msg: "New buyer registered: Precision Parts SME Pvt Ltd",
    time: "2 min ago",
    icon: UserPlus,
    color: "text-blue-600",
  },
  {
    id: "a2",
    type: "product",
    msg: "Product listed: Hydraulic Pump Series 4000 by Ace Industrial",
    time: "8 min ago",
    icon: Tag,
    color: "text-emerald-600",
  },
  {
    id: "a3",
    type: "rfq",
    msg: "RFQ #109 submitted: 50 units of Steel Coils HR by Bharat Heavy",
    time: "15 min ago",
    icon: FileText,
    color: "text-purple-600",
  },
  {
    id: "a4",
    type: "txn",
    msg: "Transaction #216 completed: ₹8,75,000 — Tata Advanced → National Steel",
    time: "22 min ago",
    icon: CheckCircle,
    color: "text-emerald-600",
  },
  {
    id: "a5",
    type: "user_reg",
    msg: "New supplier registered: Electrotech Power Systems, Pune",
    time: "35 min ago",
    icon: UserPlus,
    color: "text-blue-600",
  },
  {
    id: "a6",
    type: "txn",
    msg: "Transaction #215 completed: ₹3,20,000 — Gujarat Narmada → HeavyTech",
    time: "47 min ago",
    icon: CheckCircle,
    color: "text-emerald-600",
  },
  {
    id: "a7",
    type: "product",
    msg: "Product delisted: Obsolete Motor Model 2019X by PneuTech",
    time: "1h ago",
    icon: Tag,
    color: "text-amber-600",
  },
  {
    id: "a8",
    type: "rfq",
    msg: "RFQ #110 accepted: 200 units PPE Kit — L&T Components → SafeGuard",
    time: "1h 15min ago",
    icon: FileText,
    color: "text-purple-600",
  },
  {
    id: "a9",
    type: "verify",
    msg: "Supplier verified: Precision Fasteners Corp (Faridabad)",
    time: "2h ago",
    icon: ShieldCheck,
    color: "text-emerald-600",
  },
  {
    id: "a10",
    type: "txn",
    msg: "Payment failed: Transaction #217 — ₹2,85,000 — buyer account review",
    time: "2h 30min ago",
    icon: AlertTriangle,
    color: "text-red-500",
  },
];

export function AdminDashboardPage() {
  return (
    <PortalLayout sidebarItems={ADMIN_NAV} portalName="Admin Control">
      <PageHeader
        title="Admin Dashboard"
        description="LinkUp Platform Control"
        breadcrumb="Administration"
        actions={
          <Badge className="bg-[#1e40af] text-white text-xs px-3 py-1.5 flex items-center gap-1">
            <ShieldCheck className="size-3" />
            Admin
          </Badge>
        }
      />

      {/* KPI Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        <StatCard
          label="Total Users"
          value="1,733"
          icon={<Users className="size-4" />}
          accent="blue"
          trend={8.2}
          trendLabel="vs last month"
        />
        <StatCard
          label="Buyers"
          value="1,247"
          icon={<Users className="size-4" />}
          accent="blue"
          trend={6.1}
          trendLabel="vs last month"
        />
        <StatCard
          label="Suppliers"
          value="486"
          icon={<Users className="size-4" />}
          accent="green"
          trend={4.8}
          trendLabel="vs last month"
        />
        <StatCard
          label="Products Listed"
          value="3,892"
          icon={<Package className="size-4" />}
          accent="purple"
          trend={12.4}
          trendLabel="vs last month"
        />
        <StatCard
          label="Transactions"
          value="12,847"
          icon={<ArrowLeftRight className="size-4" />}
          accent="amber"
          trend={15.3}
          trendLabel="vs last month"
        />
        <StatCard
          label="Platform Revenue"
          value="₹48.5L"
          icon={<DollarSign className="size-4" />}
          accent="green"
          trend={18.7}
          trendLabel="vs last month"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="size-4 text-[#1e40af]" />
            <h2 className="font-semibold text-sm text-foreground">
              Daily Transactions — Last 30 Days
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={dailyData}
              margin={{ top: 4, right: 8, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis dataKey="day" tick={{ fontSize: 10 }} interval={4} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey="transactions"
                stroke="#1e40af"
                strokeWidth={2}
                dot={false}
                name="Transactions"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="size-4 text-[#059669]" />
            <h2 className="font-semibold text-sm text-foreground">
              Monthly Revenue Trend (₹)
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={monthlyData}
              margin={{ top: 4, right: 8, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis
                tick={{ fontSize: 10 }}
                tickFormatter={(v: number) => `${(v / 1000000).toFixed(0)}L`}
              />
              <Tooltip
                formatter={(v: number) => [
                  `₹${(v / 100000).toFixed(2)}L`,
                  "Revenue",
                ]}
                contentStyle={{ fontSize: 12 }}
              />
              <Bar
                dataKey="revenue"
                fill="#1e40af"
                name="Revenue"
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity + Pending + Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-lg border bg-card p-5 shadow-sm">
          <h2 className="font-semibold text-sm text-foreground mb-4 flex items-center gap-2">
            <Activity className="size-4 text-primary" />
            Recent Platform Activity
          </h2>
          <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
            {recentActivity.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-start gap-3 py-2 border-b last:border-0"
                >
                  <Icon className={`size-4 mt-0.5 shrink-0 ${item.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{item.msg}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          {/* Pending Actions */}
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h2 className="font-semibold text-sm text-foreground mb-3">
              Pending Actions
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-md bg-amber-50 border border-amber-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-amber-600" />
                  <div>
                    <p className="text-xs font-medium text-amber-800">
                      Pending Verifications
                    </p>
                    <p className="text-[10px] text-amber-600">
                      3 users awaiting KYC review
                    </p>
                  </div>
                </div>
                <Link to="/admin/users">
                  <Badge className="bg-amber-500 text-white text-xs cursor-pointer">
                    3
                  </Badge>
                </Link>
              </div>
              <div className="flex items-center justify-between p-3 rounded-md bg-red-50 border border-red-200">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-4 text-red-600" />
                  <div>
                    <p className="text-xs font-medium text-red-800">
                      Escalated Support
                    </p>
                    <p className="text-[10px] text-red-600">
                      2 tickets need human review
                    </p>
                  </div>
                </div>
                <Link to="/admin/feedback">
                  <Badge className="bg-red-500 text-white text-xs cursor-pointer">
                    2
                  </Badge>
                </Link>
              </div>
            </div>
          </div>

          {/* Top performers */}
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h2 className="font-semibold text-sm text-foreground mb-3">
              Top Buyers by Volume
            </h2>
            <div className="space-y-2">
              {mockBuyers.slice(0, 3).map((buyer, idx) => (
                <div key={buyer.id} className="flex items-center gap-2">
                  <span className="text-xs font-bold text-muted-foreground w-4">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">
                      {buyer.company}
                    </p>
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold shrink-0">
                    ₹{(buyer.volume / 10000000).toFixed(1)}Cr
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t">
              <h2 className="font-semibold text-sm text-foreground mb-2">
                Top Suppliers by Revenue
              </h2>
              <div className="space-y-2">
                {mockSuppliers.slice(0, 3).map((sup, idx) => (
                  <div key={sup.id} className="flex items-center gap-2">
                    <span className="text-xs font-bold text-muted-foreground w-4">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground truncate">
                        {sup.company}
                      </p>
                    </div>
                    <span className="text-xs text-blue-600 font-semibold shrink-0">
                      ₹{(sup.revenue / 10000000).toFixed(1)}Cr
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
