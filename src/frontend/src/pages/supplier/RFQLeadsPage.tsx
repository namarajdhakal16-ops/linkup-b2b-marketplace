import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockBuyers, mockProducts, mockRFQs } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import type { RFQ } from "@/types";
import { CalendarClock, ClipboardList, Eye } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { SUPPLIER_NAV } from "./SupplierDashboardPage";

const STATUS_BADGES: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  quoted: "bg-blue-100 text-blue-700 border-blue-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-red-100 text-red-700 border-red-200",
};

type RFQStatus = "pending" | "quoted" | "accepted" | "rejected";
type FilterTab = "all" | RFQStatus;

const TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "quoted", label: "Quoted" },
  { key: "accepted", label: "Accepted" },
  { key: "rejected", label: "Rejected" },
];

export function RFQLeadsPage() {
  const [rfqs, setRfqs] = useState<RFQ[]>([...mockRFQs]);
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [viewRFQ, setViewRFQ] = useState<RFQ | null>(null);
  const [quoteRFQ, setQuoteRFQ] = useState<RFQ | null>(null);
  const [quotePrice, setQuotePrice] = useState("");
  const [quoteNotes, setQuoteNotes] = useState("");
  const [quoteValidity, setQuoteValidity] = useState("");

  const filtered = useMemo(
    () => rfqs.filter((r) => activeTab === "all" || r.status === activeTab),
    [rfqs, activeTab],
  );

  const counts = useMemo(
    () => ({
      all: rfqs.length,
      pending: rfqs.filter((r) => r.status === "pending").length,
      quoted: rfqs.filter((r) => r.status === "quoted").length,
      accepted: rfqs.filter((r) => r.status === "accepted").length,
      rejected: rfqs.filter((r) => r.status === "rejected").length,
    }),
    [rfqs],
  );

  function handleSubmitQuote() {
    if (!quoteRFQ || !quotePrice) {
      toast.error("Quote price is required");
      return;
    }
    setRfqs((prev) =>
      prev.map((r) =>
        r.id === quoteRFQ.id
          ? {
              ...r,
              status: "quoted" as RFQStatus,
              quoteAmount: Number(quotePrice),
            }
          : r,
      ),
    );
    toast.success(`Quote submitted for RFQ #${quoteRFQ.id}!`);
    setQuoteRFQ(null);
    setQuotePrice("");
    setQuoteNotes("");
    setQuoteValidity("");
  }

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="RFQ Leads"
        description="Incoming buyer quotation requests — respond quickly to win orders"
        breadcrumb="Supplier Portal"
        actions={
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200">
            <ClipboardList className="size-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">
              {counts.pending} awaiting response
            </span>
          </div>
        }
      />

      {/* Summary stats */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
        <StatCard label="Total Received" value={counts.all} accent="blue" />
        <StatCard
          label="Pending Response"
          value={counts.pending}
          accent="amber"
        />
        <StatCard label="Quoted" value={counts.quoted} accent="purple" />
        <StatCard label="Accepted" value={counts.accepted} accent="green" />
        <StatCard label="Rejected" value={counts.rejected} />
      </div>

      {/* Tab filter */}
      <div className="flex gap-1 border-b mb-5 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            type="button"
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            data-ocid={`rfq-tab-${tab.key}`}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === tab.key
                ? "border-[#059669] text-[#059669]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">
              {counts[tab.key]}
            </Badge>
          </button>
        ))}
      </div>

      {/* RFQ table */}
      <div className="rounded-lg border bg-card shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b">
              {[
                "RFQ ID",
                "Buyer Company",
                "Product",
                "Qty",
                "Required Date",
                "Status",
                "Received",
                "Actions",
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
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-10 text-center text-muted-foreground"
                >
                  No RFQs found for this filter.
                </td>
              </tr>
            ) : (
              filtered.map((rfq) => {
                const buyer = mockBuyers.find((b) => b.id === rfq.buyerId);
                const product = mockProducts.find(
                  (p) => p.id === rfq.productId,
                );
                return (
                  <tr
                    key={rfq.id}
                    className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                    data-ocid={`rfq-row-${rfq.id}`}
                  >
                    <td className="px-4 py-3 font-mono text-xs font-medium">
                      RFQ-{rfq.id}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground">
                        {buyer?.company ?? rfq.buyerId}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {buyer?.location}
                      </p>
                    </td>
                    <td className="px-4 py-3 max-w-[180px]">
                      <p className="truncate text-foreground">
                        {product?.name ?? `Product #${rfq.productId}`}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">
                      {rfq.quantity}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <CalendarClock className="size-3.5 text-muted-foreground shrink-0" />
                        {rfq.requiredDate}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_BADGES[rfq.status]}`}
                      >
                        {rfq.status.charAt(0).toUpperCase() +
                          rfq.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(rfq.createdAt * 1000).toLocaleDateString(
                        "en-IN",
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 px-2 text-xs"
                          onClick={() => setViewRFQ(rfq)}
                          data-ocid={`view-rfq-${rfq.id}`}
                        >
                          <Eye className="size-3 mr-1" />
                          View
                        </Button>
                        {rfq.status === "pending" && (
                          <Button
                            size="sm"
                            className="bg-[#059669] hover:bg-[#047857] text-white h-7 px-2 text-xs"
                            onClick={() => {
                              setQuoteRFQ(rfq);
                              setQuotePrice("");
                              setQuoteNotes("");
                              setQuoteValidity("");
                            }}
                            data-ocid={`quote-rfq-${rfq.id}`}
                          >
                            Submit Quote
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* View RFQ Dialog */}
      <Dialog
        open={!!viewRFQ}
        onOpenChange={(o) => {
          if (!o) setViewRFQ(null);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>RFQ #{viewRFQ?.id} Details</DialogTitle>
          </DialogHeader>
          {viewRFQ &&
            (() => {
              const buyer = mockBuyers.find((b) => b.id === viewRFQ.buyerId);
              const product = mockProducts.find(
                (p) => p.id === viewRFQ.productId,
              );
              return (
                <div className="space-y-3 py-2">
                  {[
                    {
                      label: "Buyer",
                      value: buyer?.company ?? viewRFQ.buyerId,
                    },
                    {
                      label: "Product",
                      value: product?.name ?? `Product #${viewRFQ.productId}`,
                    },
                    { label: "Quantity", value: String(viewRFQ.quantity) },
                    { label: "Required By", value: viewRFQ.requiredDate },
                    {
                      label: "Status",
                      value:
                        viewRFQ.status.charAt(0).toUpperCase() +
                        viewRFQ.status.slice(1),
                    },
                    ...(viewRFQ.quoteAmount
                      ? [
                          {
                            label: "Quote Amount",
                            value: formatINR(viewRFQ.quoteAmount),
                          },
                        ]
                      : []),
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-start justify-between py-2 border-b last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">
                        {row.label}
                      </span>
                      <span className="text-sm font-medium text-foreground text-right max-w-[60%]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                  {viewRFQ.specialRequirements && (
                    <div className="rounded-lg bg-muted/40 p-3">
                      <p className="text-xs font-semibold text-foreground mb-1">
                        Special Requirements
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {viewRFQ.specialRequirements}
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewRFQ(null)}>
              Close
            </Button>
            {viewRFQ?.status === "pending" && (
              <Button
                className="bg-[#059669] hover:bg-[#047857] text-white"
                onClick={() => {
                  setQuoteRFQ(viewRFQ);
                  setViewRFQ(null);
                }}
              >
                Submit Quote
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Quote Dialog */}
      <Dialog
        open={!!quoteRFQ}
        onOpenChange={(o) => {
          if (!o) setQuoteRFQ(null);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Submit Quote — RFQ #{quoteRFQ?.id}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Quote Price (₹) *
              </Label>
              <Input
                type="number"
                placeholder="Enter total quote amount"
                value={quotePrice}
                onChange={(e) => setQuotePrice(e.target.value)}
                data-ocid="quote-price-input"
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Quote Validity Date
              </Label>
              <Input
                type="date"
                value={quoteValidity}
                onChange={(e) => setQuoteValidity(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Notes / Terms
              </Label>
              <Textarea
                rows={3}
                placeholder="Delivery timeline, payment terms, special conditions..."
                value={quoteNotes}
                onChange={(e) => setQuoteNotes(e.target.value)}
                data-ocid="quote-notes-input"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setQuoteRFQ(null)}>
              Cancel
            </Button>
            <Button
              className="bg-[#059669] hover:bg-[#047857] text-white"
              onClick={handleSubmitQuote}
              data-ocid="submit-quote-btn"
            >
              Submit Quote
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PortalLayout>
  );
}
