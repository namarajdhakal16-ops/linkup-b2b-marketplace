import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockBuyers, mockProducts, mockRFQs } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import { Link } from "@tanstack/react-router";
import {
  BarChart2,
  CheckCircle,
  ClipboardList,
  CreditCard,
  HelpCircle,
  InboxIcon,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Package,
  PlusCircle,
  Receipt,
  ShoppingCart,
  Tag,
  TrendingUp,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const SUPPLIER_NAV = [
  { label: "Dashboard", href: "/supplier/dashboard", icon: LayoutDashboard },
  { label: "Product Management", href: "/supplier/products", icon: Package },
  {
    label: "RFQ Leads",
    href: "/supplier/rfq-leads",
    icon: ClipboardList,
    badge: 7,
  },
  { label: "Pricing Calculator", href: "/supplier/pricing", icon: Tag },
  { label: "Analytics", href: "/supplier/analytics", icon: BarChart2 },
  { label: "Billing", href: "/supplier/billing", icon: CreditCard },
  { label: "Promotions", href: "/supplier/billing", icon: Megaphone },
  { label: "Feedback", href: "/supplier/feedback", icon: MessageSquare },
  { label: "Support", href: "/supplier/support", icon: HelpCircle },
];

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  quoted: "bg-blue-100 text-blue-700 border-blue-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-red-100 text-red-700 border-red-200",
};

const revenueData = [
  { month: "Feb", revenue: 1450000 },
  { month: "Mar", revenue: 1820000 },
  { month: "Apr", revenue: 2100000 },
];

const topBuyers = [
  {
    id: "buy-001",
    company: "Tata Advanced Materials Ltd",
    value: 4850000,
    orders: 12,
  },
  {
    id: "buy-002",
    company: "Bharat Heavy Electricals Co.",
    value: 3520000,
    orders: 8,
  },
  {
    id: "buy-003",
    company: "Mahindra Logistics Ltd",
    value: 2275000,
    orders: 5,
  },
];

export function SupplierDashboardPage() {
  const recentRFQs = mockRFQs.slice(0, 3);

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="Welcome, Tata Industrial Supplies"
        description="Your supplier dashboard — manage products, RFQs, and revenue"
        breadcrumb="Supplier Portal"
        actions={
          <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 gap-1 px-2.5">
            <CheckCircle className="size-3" />
            Verified Supplier
          </Badge>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Total Sales"
          value="₹12.8L"
          icon={<TrendingUp className="size-4" />}
          trend={18.4}
          trendLabel="vs last month"
          accent="green"
        />
        <StatCard
          label="Pending RFQs"
          value={7}
          icon={<ClipboardList className="size-4" />}
          trend={-5}
          trendLabel="vs last week"
          accent="amber"
        />
        <StatCard
          label="Active Buyers"
          value={18}
          icon={<ShoppingCart className="size-4" />}
          trend={12.5}
          trendLabel="vs last month"
          accent="blue"
        />
        <StatCard
          label="This Month"
          value="₹2.1L"
          icon={<Receipt className="size-4" />}
          trend={9.2}
          trendLabel="vs last month"
          accent="purple"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Revenue chart */}
        <div className="xl:col-span-2 rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Revenue Trend</h3>
            <Badge variant="outline" className="text-xs">
              Last 3 months
            </Badge>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={revenueData}
              margin={{ top: 5, right: 5, bottom: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="supRevGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                </linearGradient>
              </defs>
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
                tickFormatter={(v: number) => `₹${(v / 100000).toFixed(1)}L`}
              />
              <Tooltip
                formatter={(v: number) => [formatINR(v), "Revenue"]}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#059669"
                fill="url(#supRevGrad)"
                strokeWidth={2.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top 3 buyers */}
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">Top Buyers</h3>
          <div className="space-y-3">
            {topBuyers.map((b, i) => (
              <div key={b.id} className="flex items-center gap-3">
                <span className="text-xs font-bold text-muted-foreground w-4 shrink-0">
                  #{i + 1}
                </span>
                <div className="size-8 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center text-xs font-bold shrink-0">
                  {b.company.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {b.company}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {b.orders} orders
                  </p>
                </div>
                <span className="text-xs font-semibold text-foreground shrink-0">
                  {formatINR(b.value)}
                </span>
              </div>
            ))}
          </div>
          <Link to="/supplier/analytics">
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4 text-[#059669]"
            >
              View All Analytics
            </Button>
          </Link>
        </div>
      </div>

      {/* RFQ Inbox */}
      <div className="rounded-lg border bg-card shadow-sm mb-6">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center gap-2">
            <InboxIcon className="size-4 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Incoming RFQs</h3>
            <Badge className="bg-amber-100 text-amber-700 border border-amber-200 text-xs">
              7 new
            </Badge>
          </div>
          <Link to="/supplier/rfq-leads">
            <Button variant="ghost" size="sm" className="text-[#059669]">
              View all
            </Button>
          </Link>
        </div>
        <div className="divide-y">
          {recentRFQs.map((rfq) => {
            const buyer = mockBuyers.find((b) => b.id === rfq.buyerId);
            const product = mockProducts.find((p) => p.id === rfq.productId);
            return (
              <div
                key={rfq.id}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/30 transition-colors"
                data-ocid={`rfq-inbox-row-${rfq.id}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-8 rounded bg-muted flex items-center justify-center shrink-0">
                    <ClipboardList className="size-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {buyer?.company ?? "Unknown Buyer"}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {product?.name ?? `Product #${rfq.productId}`} · Qty:{" "}
                      {rfq.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    Due: {rfq.requiredDate}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_COLORS[rfq.status]}`}
                  >
                    {rfq.status.charAt(0).toUpperCase() + rfq.status.slice(1)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3">
        <Link to="/supplier/products">
          <Button
            className="bg-[#059669] hover:bg-[#047857] text-white"
            data-ocid="quick-add-product-btn"
          >
            <PlusCircle className="size-4 mr-2" />
            Add Product
          </Button>
        </Link>
        <Link to="/supplier/rfq-leads">
          <Button
            className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
            data-ocid="quick-rfq-leads-btn"
          >
            <ClipboardList className="size-4 mr-2" />
            View RFQ Leads
          </Button>
        </Link>
        <Link to="/supplier/analytics">
          <Button variant="outline" data-ocid="quick-analytics-btn">
            <BarChart2 className="size-4 mr-2" />
            View Analytics
          </Button>
        </Link>
      </div>
    </PortalLayout>
  );
}
