import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/pricing";
import {
  ArrowUpRight,
  CheckCircle,
  CreditCard,
  Download,
  FileText,
  Receipt,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { SUPPLIER_NAV } from "./SupplierDashboardPage";

const INVOICES = [
  {
    id: "INV-2026-004",
    date: "2026-04-01",
    description: "March 2026 Commission",
    amount: 205000,
    status: "paid",
  },
  {
    id: "INV-2026-003",
    date: "2026-03-01",
    description: "February 2026 Commission",
    amount: 182000,
    status: "paid",
  },
  {
    id: "INV-2026-002",
    date: "2026-02-01",
    description: "January 2026 Commission",
    amount: 165000,
    status: "paid",
  },
  {
    id: "INV-2026-001",
    date: "2026-01-01",
    description: "December 2025 Commission",
    amount: 145000,
    status: "paid",
  },
  {
    id: "INV-2025-012",
    date: "2025-12-01",
    description: "November 2025 Commission",
    amount: 138000,
    status: "paid",
  },
];

const INV_STATUS_BADGES: Record<string, string> = {
  paid: "bg-emerald-100 text-emerald-700 border-emerald-200",
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  overdue: "bg-red-100 text-red-700 border-red-200",
};

export function SupplierBillingPage() {
  const commissionYTD = INVOICES.reduce((s, i) => s + i.amount, 0);

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="Subscription & Billing"
        description="Manage your plan, payment methods and invoice history"
        breadcrumb="Supplier Portal"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Current plan card */}
        <div className="lg:col-span-2 rounded-xl border-2 border-[#059669]/30 bg-[#059669]/5 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Badge className="bg-[#059669] text-white mb-2 gap-1">
                <CheckCircle className="size-3" />
                Active Plan
              </Badge>
              <h3 className="font-display text-xl font-bold text-foreground">
                Medium Supplier Plan
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Commission-based · 0.5% on ₹1–10L · 0.25% on &gt;₹10L
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-muted-foreground">Next Renewal</p>
              <p className="font-semibold text-foreground text-sm">
                May 1, 2026
              </p>
            </div>
          </div>

          {/* Usage stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            {[
              { label: "Products Listed", value: "15 / Unlimited" },
              { label: "Transactions This Month", value: "23" },
              { label: "Commission YTD", value: formatINR(commissionYTD) },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg bg-background border p-3"
              >
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-bold text-foreground mt-0.5 text-sm">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <Button
            className="bg-[#059669] hover:bg-[#047857] text-white"
            onClick={() =>
              toast.info("Contact your account manager to upgrade")
            }
            data-ocid="upgrade-plan-btn"
          >
            <ArrowUpRight className="size-4 mr-2" />
            Upgrade to Large Plan
          </Button>
        </div>

        {/* Payment method */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">Payment Method</h3>
          <div className="rounded-lg border bg-muted/30 p-3 mb-3 flex items-center gap-3">
            <CreditCard className="size-5 text-muted-foreground shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                HDFC Bank — NEFT
              </p>
              <p className="text-xs text-muted-foreground">
                A/C ending ••••1234
              </p>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px] shrink-0">
              Active
            </Badge>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full mb-3"
            onClick={() => toast.info("Update payment method")}
            data-ocid="update-payment-btn"
          >
            <RefreshCw className="size-3.5 mr-2" />
            Update Method
          </Button>
          <div className="rounded-lg bg-muted/40 p-3">
            <p className="text-xs text-muted-foreground text-center">
              Fees auto-deducted on 1st of each month
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold text-foreground">
              Billing Summary
            </p>
            {[
              { label: "Current Month Est.", value: formatINR(205000) },
              { label: "Last Month", value: formatINR(182000) },
              {
                label: "Annual Fee (Estimate)",
                value: formatINR(commissionYTD),
              },
            ].map((row) => (
              <div key={row.label} className="flex justify-between text-xs">
                <span className="text-muted-foreground">{row.label}</span>
                <span className="font-medium text-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Invoice table */}
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center gap-2">
            <Receipt className="size-4 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Invoice History</h3>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => toast.success("All invoices downloaded!")}
            data-ocid="download-all-invoices-btn"
          >
            <Download className="size-4 mr-2" />
            Download All
          </Button>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b">
                {[
                  "Invoice #",
                  "Date",
                  "Description",
                  "Amount",
                  "Status",
                  "Download",
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
              {INVOICES.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                  data-ocid={`invoice-${inv.id}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-muted-foreground shrink-0" />
                      <span className="font-mono text-xs font-medium text-foreground">
                        {inv.id}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {inv.date}
                  </td>
                  <td className="px-4 py-3 text-foreground">
                    {inv.description}
                  </td>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    {formatINR(inv.amount)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${INV_STATUS_BADGES[inv.status]}`}
                    >
                      <CheckCircle className="size-3" />
                      {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      onClick={() => toast.info(`Downloading ${inv.id}`)}
                      data-ocid={`download-inv-${inv.id}`}
                      aria-label={`Download ${inv.id}`}
                    >
                      <Download className="size-3.5" />
                    </Button>
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
