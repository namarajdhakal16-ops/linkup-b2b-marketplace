import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { mockProducts, mockRFQs, mockSuppliers } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import { CheckCircle, Clock, FileText, Plus, XCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { buyerNavItems } from "./navItems";

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  quoted: "bg-blue-100 text-blue-700 border-blue-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-red-100 text-red-700 border-red-200",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[status] ?? ""}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

interface NewRFQForm {
  productId: string;
  supplierId: string;
  quantity: string;
  requiredDate: string;
  specialRequirements: string;
}

const EMPTY_FORM: NewRFQForm = {
  productId: "",
  supplierId: "",
  quantity: "",
  requiredDate: "",
  specialRequirements: "",
};

export function RFQPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [form, setForm] = useState<NewRFQForm>(EMPTY_FORM);

  const counts = {
    submitted: mockRFQs.length,
    pending: mockRFQs.filter((r) => r.status === "pending").length,
    quoted: mockRFQs.filter((r) => r.status === "quoted").length,
    accepted: mockRFQs.filter((r) => r.status === "accepted").length,
  };

  function handleSubmit() {
    if (!form.productId || !form.supplierId || !form.quantity) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success(
      "RFQ submitted successfully! Supplier will respond within 24 hours.",
    );
    setForm(EMPTY_FORM);
    setShowDialog(false);
  }

  function getProductName(id: number) {
    return mockProducts.find((p) => p.id === id)?.name ?? `Product #${id}`;
  }
  function getSupplierName(id: string) {
    return mockSuppliers.find((s) => s.id === id)?.company ?? id;
  }

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <PageHeader
        title="RFQ Management"
        description="Track and manage your request for quotations."
        breadcrumb="Buyer Portal"
        actions={
          <Button
            type="button"
            className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
            onClick={() => setShowDialog(true)}
            data-ocid="rfq-new-btn"
          >
            <Plus className="size-4 mr-1.5" />
            Submit New RFQ
          </Button>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Submitted"
          value={counts.submitted}
          icon={<FileText className="size-4" />}
          accent="blue"
        />
        <StatCard
          label="Pending Review"
          value={counts.pending}
          icon={<Clock className="size-4" />}
          accent="amber"
        />
        <StatCard
          label="Quoted"
          value={counts.quoted}
          icon={<FileText className="size-4" />}
          accent="purple"
        />
        <StatCard
          label="Accepted"
          value={counts.accepted}
          icon={<CheckCircle className="size-4" />}
          accent="green"
        />
      </div>

      <div className="rounded-lg border bg-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                RFQ ID
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Product
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">
                Supplier
              </th>
              <th className="text-center px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">
                Qty
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden lg:table-cell">
                Required By
              </th>
              <th className="text-center px-4 py-3 font-medium text-muted-foreground">
                Status
              </th>
              <th className="text-right px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">
                Quote Amt
              </th>
              <th className="text-center px-4 py-3 font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mockRFQs.map((rfq) => (
              <tr
                key={rfq.id}
                className="border-b last:border-0 hover:bg-muted/20 transition-colors"
              >
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  #{rfq.id}
                </td>
                <td className="px-4 py-3 font-medium max-w-[160px] truncate">
                  {getProductName(rfq.productId)}
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                  {getSupplierName(rfq.supplierId)}
                </td>
                <td className="px-4 py-3 text-center hidden sm:table-cell">
                  {rfq.quantity}
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                  {rfq.requiredDate}
                </td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge status={rfq.status} />
                </td>
                <td className="px-4 py-3 text-right font-display font-semibold hidden sm:table-cell">
                  {rfq.quoteAmount ? formatINR(rfq.quoteAmount) : "—"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => toast.info(`Viewing RFQ #${rfq.id}`)}
                      data-ocid={`rfq-view-${rfq.id}`}
                    >
                      View
                    </Button>
                    {rfq.status === "quoted" && (
                      <>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-7 text-xs text-emerald-600 hover:text-emerald-700"
                          onClick={() =>
                            toast.success(`RFQ #${rfq.id} accepted!`)
                          }
                          data-ocid={`rfq-accept-${rfq.id}`}
                        >
                          <CheckCircle className="size-3 mr-1" />
                          Accept
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-7 text-xs text-red-600 hover:text-red-700"
                          onClick={() =>
                            toast.error(`RFQ #${rfq.id} rejected.`)
                          }
                          data-ocid={`rfq-reject-${rfq.id}`}
                        >
                          <XCircle className="size-3 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Submit New RFQ</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="rfq-product">Product *</Label>
              <Select
                value={form.productId}
                onValueChange={(v) => setForm({ ...form, productId: v })}
              >
                <SelectTrigger id="rfq-product" data-ocid="rfq-form-product">
                  <SelectValue placeholder="Select product..." />
                </SelectTrigger>
                <SelectContent>
                  {mockProducts.map((p) => (
                    <SelectItem key={p.id} value={String(p.id)}>
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="rfq-supplier">Supplier *</Label>
              <Select
                value={form.supplierId}
                onValueChange={(v) => setForm({ ...form, supplierId: v })}
              >
                <SelectTrigger id="rfq-supplier" data-ocid="rfq-form-supplier">
                  <SelectValue placeholder="Select supplier..." />
                </SelectTrigger>
                <SelectContent>
                  {mockSuppliers.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="rfq-qty">Quantity *</Label>
                <Input
                  id="rfq-qty"
                  type="number"
                  min="1"
                  placeholder="e.g. 10"
                  value={form.quantity}
                  onChange={(e) =>
                    setForm({ ...form, quantity: e.target.value })
                  }
                  data-ocid="rfq-form-qty"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="rfq-date">Required By *</Label>
                <Input
                  id="rfq-date"
                  type="date"
                  value={form.requiredDate}
                  onChange={(e) =>
                    setForm({ ...form, requiredDate: e.target.value })
                  }
                  data-ocid="rfq-form-date"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="rfq-req">Special Requirements</Label>
              <Textarea
                id="rfq-req"
                placeholder="Certifications, delivery terms, warranties..."
                value={form.specialRequirements}
                onChange={(e) =>
                  setForm({ ...form, specialRequirements: e.target.value })
                }
                rows={3}
                data-ocid="rfq-form-requirements"
              />
            </div>
            <div className="flex gap-3 pt-1">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                onClick={handleSubmit}
                data-ocid="rfq-form-submit"
              >
                Submit RFQ
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PortalLayout>
  );
}
