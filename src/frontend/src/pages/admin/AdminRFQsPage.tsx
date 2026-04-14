import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  mockRFQs,
  mockSuppliers,
} from "@/data/mockData";
import type { RFQ } from "@/types";
import { Eye } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ADMIN_NAV } from "./AdminDashboardPage";

const statusBadge: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  quoted: "bg-blue-100 text-blue-700",
  accepted: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
};

function getBuyerName(id: string): string {
  return mockBuyers.find((b) => b.id === id)?.company ?? id;
}
function getSupplierName(id: string): string {
  return mockSuppliers.find((s) => s.id === id)?.company ?? id;
}
function getProductName(id: number): string {
  return mockProducts.find((p) => p.id === id)?.name ?? `Product #${id}`;
}

type RFQStatus = RFQ["status"];
const PAGE_SIZE = 10;

export function AdminRFQsPage() {
  const [rfqs, setRfqs] = useState<RFQ[]>(mockRFQs);
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [viewRFQ, setViewRFQ] = useState<RFQ | null>(null);
  const [editRFQ, setEditRFQ] = useState<RFQ | null>(null);
  const [editStatus, setEditStatus] = useState<RFQStatus>("pending");

  const filtered = useMemo(() => {
    return rfqs.filter(
      (r) => statusFilter === "all" || r.status === statusFilter,
    );
  }, [rfqs, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleUpdateStatus() {
    if (!editRFQ) return;
    setRfqs((prev) =>
      prev.map((r) => (r.id === editRFQ.id ? { ...r, status: editStatus } : r)),
    );
    setEditRFQ(null);
    toast.success("RFQ status updated");
  }

  return (
    <PortalLayout sidebarItems={ADMIN_NAV} portalName="Admin Control">
      <PageHeader
        title="RFQ Management"
        description="Monitor all Request for Quotation activity on the platform"
        breadcrumb="Administration"
      />

      {/* Filter */}
      <div className="flex gap-3 mb-4" data-ocid="rfq-filters">
        <Select
          value={statusFilter}
          onValueChange={(v) => {
            setStatusFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-48" data-ocid="rfq-status-filter">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="quoted">Quoted</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <div className="ml-auto text-sm text-muted-foreground flex items-center">
          {filtered.length} RFQs
        </div>
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
                Buyer
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Supplier
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Product
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Qty
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Quote Amount
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Created
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td
                  colSpan={9}
                  className="px-4 py-10 text-center text-muted-foreground"
                >
                  No RFQs found.
                </td>
              </tr>
            ) : (
              paged.map((rfq, idx) => (
                <tr
                  key={rfq.id}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                  data-ocid={`rfq-row-${rfq.id}`}
                >
                  <td className="px-4 py-3 text-muted-foreground">
                    {(page - 1) * PAGE_SIZE + idx + 1}
                  </td>
                  <td className="px-4 py-3 text-xs max-w-36">
                    <p className="font-medium text-foreground truncate">
                      {getBuyerName(rfq.buyerId)}
                    </p>
                    <p className="text-muted-foreground">{rfq.buyerId}</p>
                  </td>
                  <td className="px-4 py-3 text-xs max-w-36">
                    <p className="font-medium text-foreground truncate">
                      {getSupplierName(rfq.supplierId)}
                    </p>
                    <p className="text-muted-foreground">{rfq.supplierId}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground max-w-40">
                    <p className="truncate">{getProductName(rfq.productId)}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-foreground">
                    {rfq.quantity.toLocaleString("en-IN")}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      className={`text-xs ${statusBadge[rfq.status] ?? ""}`}
                    >
                      {rfq.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-foreground">
                    {rfq.quoteAmount
                      ? `₹${rfq.quoteAmount.toLocaleString("en-IN")}`
                      : "—"}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {new Date(rfq.createdAt * 1000).toLocaleDateString("en-IN")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => setViewRFQ(rfq)}
                        data-ocid={`view-rfq-${rfq.id}`}
                      >
                        <Eye className="size-3 mr-1" /> View
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => {
                          setEditRFQ(rfq);
                          setEditStatus(rfq.status);
                        }}
                        data-ocid={`update-rfq-${rfq.id}`}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
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

      {/* View Details Dialog */}
      <Dialog
        open={!!viewRFQ}
        onOpenChange={(o) => {
          if (!o) setViewRFQ(null);
        }}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>RFQ #{viewRFQ?.id} Details</DialogTitle>
          </DialogHeader>
          {viewRFQ && (
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">Buyer</p>
                  <p className="font-medium">{getBuyerName(viewRFQ.buyerId)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Supplier</p>
                  <p className="font-medium">
                    {getSupplierName(viewRFQ.supplierId)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Product</p>
                  <p className="font-medium">
                    {getProductName(viewRFQ.productId)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Quantity</p>
                  <p className="font-medium">{viewRFQ.quantity}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Required Date</p>
                  <p className="font-medium">{viewRFQ.requiredDate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <Badge className={`text-xs ${statusBadge[viewRFQ.status]}`}>
                    {viewRFQ.status}
                  </Badge>
                </div>
                {viewRFQ.quoteAmount && (
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Quote Amount
                    </p>
                    <p className="font-medium font-mono">
                      ₹{viewRFQ.quoteAmount.toLocaleString("en-IN")}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  Special Requirements
                </p>
                <p className="bg-muted/50 rounded p-3 text-xs">
                  {viewRFQ.specialRequirements || "None"}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setViewRFQ(null)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Update Status Dialog */}
      <Dialog
        open={!!editRFQ}
        onOpenChange={(o) => {
          if (!o) setEditRFQ(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update RFQ #{editRFQ?.id} Status</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <Select
              value={editStatus}
              onValueChange={(v) => setEditStatus(v as RFQStatus)}
            >
              <SelectTrigger data-ocid="rfq-status-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setEditRFQ(null)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleUpdateStatus}
              data-ocid="save-rfq-status-btn"
            >
              Update Status
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PortalLayout>
  );
}
