import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockProducts, mockSuppliers, mockTransactions } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import { useNavigate } from "@tanstack/react-router";
import {
  BarChart2,
  ChevronRight,
  FileText,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { buyerNavItems } from "./navItems";

function statusBadge(status: string) {
  const map: Record<string, string> = {
    completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    failed: "bg-red-100 text-red-700 border-red-200",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${map[status] ?? "bg-muted text-muted-foreground border-border"}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function getProductName(id: number) {
  return mockProducts.find((p) => p.id === id)?.name ?? `Product #${id}`;
}

function getSupplierName(id: string) {
  return mockSuppliers.find((s) => s.id === id)?.company ?? id;
}

export function BuyerDashboardPage() {
  const navigate = useNavigate();
  const recentTx = mockTransactions.slice(0, 5);
  const topSuppliers = mockSuppliers.slice(0, 3);

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <PageHeader
        title="Welcome back, Priya Industries"
        description="Here's what's happening with your procurement today."
        breadcrumb="Buyer Portal"
        actions={
          <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-semibold">
            ✓ Verified Buyer · Tier 3
          </Badge>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Total Orders"
          value="42"
          icon={<ShoppingCart className="size-4" />}
          trend={8}
          trendLabel="vs last month"
          accent="blue"
        />
        <StatCard
          label="Pending RFQs"
          value="5"
          icon={<FileText className="size-4" />}
          trend={-2}
          trendLabel="vs last month"
          accent="amber"
        />
        <StatCard
          label="Active Suppliers"
          value="12"
          icon={<Users className="size-4" />}
          trend={3}
          trendLabel="vs last month"
          accent="green"
        />
        <StatCard
          label="Total Spend"
          value="₹18.4L"
          icon={<TrendingUp className="size-4" />}
          trend={12}
          trendLabel="vs last month"
          accent="purple"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/40">
                    <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">
                      Date
                    </th>
                    <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">
                      Product
                    </th>
                    <th className="text-left px-4 py-2.5 font-medium text-muted-foreground hidden sm:table-cell">
                      Supplier
                    </th>
                    <th className="text-right px-4 py-2.5 font-medium text-muted-foreground">
                      Amount
                    </th>
                    <th className="text-center px-4 py-2.5 font-medium text-muted-foreground">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentTx.map((tx) => (
                    <tr
                      key={tx.id}
                      className="border-b last:border-0 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {new Date(tx.date * 1000).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </td>
                      <td className="px-4 py-3 font-medium max-w-[180px] truncate">
                        {getProductName(tx.productId)}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">
                        {getSupplierName(tx.supplierId)}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold font-display">
                        {formatINR(tx.amount)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {statusBadge(tx.paymentStatus)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">
              Top Suppliers
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {topSuppliers.map((sup) => (
              <div
                key={sup.id}
                className="flex items-center gap-3 p-3 rounded-lg border bg-muted/20 hover:bg-muted/40 transition-colors"
              >
                <div className="size-10 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {sup.company.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{sup.company}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="size-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs text-muted-foreground">
                      {sup.rating} · {sup.products} products
                    </span>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-7 shrink-0"
                  onClick={() => navigate({ to: "/buyer/suppliers" })}
                  aria-label="View supplier"
                >
                  <ChevronRight className="size-3.5" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            type="button"
            className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
            onClick={() => navigate({ to: "/buyer/catalog" })}
            data-ocid="qa-browse-catalog"
          >
            <ShoppingCart className="size-4 mr-2" />
            Browse Catalog
          </Button>
          <Button
            type="button"
            className="bg-[#059669] hover:bg-[#047857] text-white"
            onClick={() => navigate({ to: "/buyer/rfq" })}
            data-ocid="qa-submit-rfq"
          >
            <FileText className="size-4 mr-2" />
            Submit RFQ
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate({ to: "/buyer/analytics" })}
            data-ocid="qa-view-analytics"
          >
            <BarChart2 className="size-4 mr-2" />
            View Analytics
          </Button>
        </CardContent>
      </Card>
    </PortalLayout>
  );
}
