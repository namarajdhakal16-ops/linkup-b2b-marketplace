import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  mockBuyers,
  mockProducts,
  mockSuppliers,
  mockTransactions,
} from "@/data/mockData";
import type { Transaction } from "@/types";
import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ADMIN_NAV } from "./AdminDashboardPage";

function getBuyerName(id: string): string {
  return mockBuyers.find((b) => b.id === id)?.company ?? id;
}
function getSupplierName(id: string): string {
  return mockSuppliers.find((s) => s.id === id)?.company ?? id;
}
function getProductName(id: number): string {
  return mockProducts.find((p) => p.id === id)?.name ?? `Product #${id}`;
}

const statusBadge: Record<string, string> = {
  completed: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  failed: "bg-red-100 text-red-700",
};

function formatINRShort(v: number): string {
  if (v >= 10000000) return `₹${(v / 10000000).toFixed(2)}Cr`;
  if (v >= 100000) return `₹${(v / 100000).toFixed(2)}L`;
  return `₹${v.toLocaleString("en-IN")}`;
}

const PAGE_SIZE = 10;

export function AdminTransactionsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return mockTransactions.filter((t) => {
      const matchSearch =
        !search ||
        getBuyerName(t.buyerId).toLowerCase().includes(search.toLowerCase()) ||
        getSupplierName(t.supplierId)
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        String(t.id).includes(search);
      const matchStatus =
        statusFilter === "all" || t.paymentStatus === statusFilter;
      const txDate = new Date(t.date * 1000);
      const matchFrom = !dateFrom || txDate >= new Date(dateFrom);
      const matchTo = !dateTo || txDate <= new Date(dateTo);
      return matchSearch && matchStatus && matchFrom && matchTo;
    });
  }, [search, statusFilter, dateFrom, dateTo]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalAmount = filtered.reduce((sum, t) => sum + t.amount, 0);
  const completedAmount = filtered
    .filter((t) => t.paymentStatus === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <PortalLayout sidebarItems={ADMIN_NAV} portalName="Admin Control">
      <PageHeader
        title="Transactions"
        description="Platform-wide transaction records and payment status"
        breadcrumb="Administration"
        actions={
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => toast.info("Export initiated")}
            data-ocid="export-transactions-btn"
          >
            <Download className="size-4 mr-1" /> Export CSV
          </Button>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="text-xs text-muted-foreground">Total Records</p>
          <p className="text-xl font-bold text-foreground font-display mt-1">
            {filtered.length}
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="text-xs text-muted-foreground">Total Value</p>
          <p className="text-xl font-bold text-foreground font-display mt-1">
            {formatINRShort(totalAmount)}
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="text-xs text-muted-foreground">Completed</p>
          <p className="text-xl font-bold text-emerald-600 font-display mt-1">
            {formatINRShort(completedAmount)}
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="text-xs text-muted-foreground">Pending / Failed</p>
          <p className="text-xl font-bold text-amber-600 font-display mt-1">
            {formatINRShort(totalAmount - completedAmount)}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div
        className="flex flex-wrap gap-3 mb-4"
        data-ocid="transaction-filters"
      >
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search by buyer, supplier or ID..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            data-ocid="txn-search-input"
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={(v) => {
            setStatusFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-44" data-ocid="txn-status-filter">
            <SelectValue placeholder="Payment status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="date"
          className="w-44 text-sm"
          value={dateFrom}
          onChange={(e) => {
            setDateFrom(e.target.value);
            setPage(1);
          }}
          data-ocid="txn-date-from"
        />
        <Input
          type="date"
          className="w-44 text-sm"
          value={dateTo}
          onChange={(e) => {
            setDateTo(e.target.value);
            setPage(1);
          }}
          data-ocid="txn-date-to"
        />
      </div>

      {/* Table */}
      <div className="rounded-lg border overflow-auto bg-card shadow-sm mb-3">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b">
              <th className="px-4 py-3 text-left font-semibold text-foreground w-10">
                #
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                ID
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Buyer
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Supplier
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Product
              </th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">
                Amount
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Payment Status
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-10 text-center text-muted-foreground"
                >
                  No transactions found.
                </td>
              </tr>
            ) : (
              paged.map((txn: Transaction, idx) => (
                <tr
                  key={txn.id}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                  data-ocid={`txn-row-${txn.id}`}
                >
                  <td className="px-4 py-3 text-muted-foreground">
                    {(page - 1) * PAGE_SIZE + idx + 1}
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-muted-foreground">
                    #{txn.id}
                  </td>
                  <td className="px-4 py-3 text-xs max-w-36">
                    <p className="font-medium text-foreground truncate">
                      {getBuyerName(txn.buyerId)}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-xs max-w-36">
                    <p className="font-medium text-foreground truncate">
                      {getSupplierName(txn.supplierId)}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground max-w-36">
                    <p className="truncate">{getProductName(txn.productId)}</p>
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-sm font-semibold text-foreground">
                    {formatINRShort(txn.amount)}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      className={`text-xs ${statusBadge[txn.paymentStatus] ?? ""}`}
                    >
                      {txn.paymentStatus}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {new Date(txn.date * 1000).toLocaleDateString("en-IN")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
          {paged.length > 0 && (
            <tfoot>
              <tr className="bg-muted/30 border-t">
                <td
                  colSpan={5}
                  className="px-4 py-3 text-sm font-semibold text-foreground text-right"
                >
                  Total ({filtered.length} records):
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-foreground">
                  {formatINRShort(totalAmount)}
                </td>
                <td colSpan={2} />
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing {(page - 1) * PAGE_SIZE + 1}–
            {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
          </span>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </PortalLayout>
  );
}
