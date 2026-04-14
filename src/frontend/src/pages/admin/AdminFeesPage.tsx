import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Package, Save, Users } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { ADMIN_NAV } from "./AdminDashboardPage";

interface BuyerTierRow {
  tier: string;
  label: string;
  minFee: string;
  rate: string;
  threshold1: string;
  threshold2: string;
  editing: boolean;
  isFree: boolean;
}

interface SupplierSizeRow {
  size: string;
  label: string;
  minFee: string;
  commLow: string;
  commHigh: string;
  editing: boolean;
  isFree: boolean;
}

const initialBuyerTiers: BuyerTierRow[] = [
  {
    tier: "tier1",
    label: "Tier 1 — Free",
    minFee: "0",
    rate: "0",
    threshold1: "5000",
    threshold2: "2500000",
    editing: false,
    isFree: true,
  },
  {
    tier: "tier2",
    label: "Tier 2 — SME",
    minFee: "1000",
    rate: "0.01",
    threshold1: "5000",
    threshold2: "2500000",
    editing: false,
    isFree: false,
  },
  {
    tier: "tier3",
    label: "Tier 3 — Mid-size",
    minFee: "2000",
    rate: "0.01",
    threshold1: "5000",
    threshold2: "2500000",
    editing: false,
    isFree: false,
  },
  {
    tier: "tier4",
    label: "Tier 4 — Large Enterprise",
    minFee: "2000",
    rate: "0.01",
    threshold1: "5000",
    threshold2: "2500000",
    editing: false,
    isFree: false,
  },
];

const initialSupplierSizes: SupplierSizeRow[] = [
  {
    size: "small",
    label: "Small / Micro",
    minFee: "0",
    commLow: "0",
    commHigh: "0",
    editing: false,
    isFree: true,
  },
  {
    size: "medium",
    label: "Medium",
    minFee: "5000",
    commLow: "0.5",
    commHigh: "0.25",
    editing: false,
    isFree: false,
  },
  {
    size: "large",
    label: "Large",
    minFee: "5000",
    commLow: "0.5",
    commHigh: "0.25",
    editing: false,
    isFree: false,
  },
];

function FieldGroup({
  label,
  children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

export function AdminFeesPage() {
  const [buyerTiers, setBuyerTiers] =
    useState<BuyerTierRow[]>(initialBuyerTiers);
  const [supplierSizes, setSupplierSizes] =
    useState<SupplierSizeRow[]>(initialSupplierSizes);
  const [multiRoleMultiplier, setMultiRoleMultiplier] = useState("60");
  const [multiRoleEditing, setMultiRoleEditing] = useState(false);

  function updateBuyerField(
    tier: string,
    field: keyof BuyerTierRow,
    value: string,
  ) {
    setBuyerTiers((prev) =>
      prev.map((r) => (r.tier === tier ? { ...r, [field]: value } : r)),
    );
  }

  function toggleBuyerEdit(tier: string) {
    setBuyerTiers((prev) =>
      prev.map((r) => {
        if (r.tier !== tier) return r;
        if (r.editing)
          toast.success(`Buyer ${r.label} fee configuration updated`);
        return { ...r, editing: !r.editing };
      }),
    );
  }

  function updateSupplierField(
    size: string,
    field: keyof SupplierSizeRow,
    value: string,
  ) {
    setSupplierSizes((prev) =>
      prev.map((r) => (r.size === size ? { ...r, [field]: value } : r)),
    );
  }

  function toggleSupplierEdit(size: string) {
    setSupplierSizes((prev) =>
      prev.map((r) => {
        if (r.size !== size) return r;
        if (r.editing)
          toast.success(`Supplier ${r.label} fee configuration updated`);
        return { ...r, editing: !r.editing };
      }),
    );
  }

  function saveMultiRole() {
    setMultiRoleEditing(false);
    toast.success("Multi-role discount updated");
  }

  return (
    <PortalLayout sidebarItems={ADMIN_NAV} portalName="Admin Control">
      <PageHeader
        title="Fee Management"
        description="Configure buyer fees, supplier commissions, and multi-role discounts"
        breadcrumb="Administration"
      />

      {/* Buyer Fee Configuration */}
      <section className="mb-8" data-ocid="buyer-fee-config">
        <div className="flex items-center gap-2 mb-4">
          <div className="size-5 rounded bg-[#1e40af] flex items-center justify-center">
            <Users className="size-3 text-white" />
          </div>
          <h2 className="text-base font-semibold text-foreground font-display">
            Buyer Fee Configuration
          </h2>
        </div>

        <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
          <div className="bg-muted/50 border-b px-5 py-3 grid grid-cols-7 gap-3 text-xs font-semibold text-foreground">
            <span className="col-span-2">Tier</span>
            <span>Min Fee (₹)</span>
            <span>Rate (%)</span>
            <span>Threshold 1 (₹)</span>
            <span>Threshold 2 (₹)</span>
            <span>Action</span>
          </div>
          {buyerTiers.map((row) => (
            <div
              key={row.tier}
              className="px-5 py-4 grid grid-cols-7 gap-3 items-end border-b last:border-0 hover:bg-muted/20"
            >
              <div className="col-span-2">
                <p className="text-sm font-semibold text-foreground">
                  {row.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {row.isFree
                    ? "No fees applied"
                    : `Min ₹${Number(row.minFee).toLocaleString("en-IN")} + ${row.rate}% above threshold`}
                </p>
              </div>
              <FieldGroup label="Min Fee (₹)">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    type="number"
                    className="pl-6 h-8 text-sm"
                    value={row.minFee}
                    disabled={!row.editing || row.isFree}
                    onChange={(e) =>
                      updateBuyerField(row.tier, "minFee", e.target.value)
                    }
                    data-ocid={`buyer-minfee-${row.tier}`}
                  />
                </div>
              </FieldGroup>
              <FieldGroup label="Rate (%)">
                <div className="relative">
                  <Input
                    type="number"
                    step="0.001"
                    className="pr-6 h-8 text-sm"
                    value={row.rate}
                    disabled={!row.editing || row.isFree}
                    onChange={(e) =>
                      updateBuyerField(row.tier, "rate", e.target.value)
                    }
                    data-ocid={`buyer-rate-${row.tier}`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    %
                  </span>
                </div>
              </FieldGroup>
              <FieldGroup label="Threshold 1 (₹)">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    type="number"
                    className="pl-6 h-8 text-sm"
                    value={row.threshold1}
                    disabled={!row.editing || row.isFree}
                    onChange={(e) =>
                      updateBuyerField(row.tier, "threshold1", e.target.value)
                    }
                    data-ocid={`buyer-t1-${row.tier}`}
                  />
                </div>
              </FieldGroup>
              <FieldGroup label="Threshold 2 (₹)">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    type="number"
                    className="pl-6 h-8 text-sm"
                    value={row.threshold2}
                    disabled={!row.editing || row.isFree}
                    onChange={(e) =>
                      updateBuyerField(row.tier, "threshold2", e.target.value)
                    }
                    data-ocid={`buyer-t2-${row.tier}`}
                  />
                </div>
              </FieldGroup>
              <div>
                <Button
                  type="button"
                  size="sm"
                  className={`h-8 text-xs w-full ${row.editing ? "bg-[#059669] hover:bg-emerald-700 text-white" : ""}`}
                  variant={row.editing ? "default" : "outline"}
                  onClick={() => toggleBuyerEdit(row.tier)}
                  disabled={row.isFree}
                  data-ocid={`buyer-edit-save-${row.tier}`}
                >
                  {row.editing ? (
                    <>
                      <Save className="size-3 mr-1" /> Save
                    </>
                  ) : (
                    "Edit"
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supplier Fee Configuration */}
      <section className="mb-8" data-ocid="supplier-fee-config">
        <div className="flex items-center gap-2 mb-4">
          <div className="size-5 rounded bg-[#059669] flex items-center justify-center">
            <Package className="size-3 text-white" />
          </div>
          <h2 className="text-base font-semibold text-foreground font-display">
            Supplier Fee Configuration
          </h2>
        </div>

        <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
          <div className="bg-muted/50 border-b px-5 py-3 grid grid-cols-6 gap-3 text-xs font-semibold text-foreground">
            <span className="col-span-2">Size</span>
            <span>Min Fee (₹)</span>
            <span>Comm ≤₹10L (%)</span>
            <span>Comm &gt;₹10L (%)</span>
            <span>Action</span>
          </div>
          {supplierSizes.map((row) => (
            <div
              key={row.size}
              className="px-5 py-4 grid grid-cols-6 gap-3 items-end border-b last:border-0 hover:bg-muted/20"
            >
              <div className="col-span-2">
                <p className="text-sm font-semibold text-foreground">
                  {row.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {row.isFree
                    ? "1 product free for first year"
                    : `Min ₹${Number(row.minFee).toLocaleString("en-IN")} if no sales; ${row.commLow}% on ₹1–10L; ${row.commHigh}% above`}
                </p>
              </div>
              <FieldGroup label="Min Fee (₹)">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    type="number"
                    className="pl-6 h-8 text-sm"
                    value={row.minFee}
                    disabled={!row.editing || row.isFree}
                    onChange={(e) =>
                      updateSupplierField(row.size, "minFee", e.target.value)
                    }
                    data-ocid={`supplier-minfee-${row.size}`}
                  />
                </div>
              </FieldGroup>
              <FieldGroup label="Comm ≤₹10L (%)">
                <div className="relative">
                  <Input
                    type="number"
                    step="0.01"
                    className="pr-6 h-8 text-sm"
                    value={row.commLow}
                    disabled={!row.editing || row.isFree}
                    onChange={(e) =>
                      updateSupplierField(row.size, "commLow", e.target.value)
                    }
                    data-ocid={`supplier-commlow-${row.size}`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    %
                  </span>
                </div>
              </FieldGroup>
              <FieldGroup label="Comm &gt;₹10L (%)">
                <div className="relative">
                  <Input
                    type="number"
                    step="0.01"
                    className="pr-6 h-8 text-sm"
                    value={row.commHigh}
                    disabled={!row.editing || row.isFree}
                    onChange={(e) =>
                      updateSupplierField(row.size, "commHigh", e.target.value)
                    }
                    data-ocid={`supplier-commhigh-${row.size}`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    %
                  </span>
                </div>
              </FieldGroup>
              <div>
                <Button
                  type="button"
                  size="sm"
                  className={`h-8 text-xs w-full ${row.editing ? "bg-[#059669] hover:bg-emerald-700 text-white" : ""}`}
                  variant={row.editing ? "default" : "outline"}
                  onClick={() => toggleSupplierEdit(row.size)}
                  disabled={row.isFree}
                  data-ocid={`supplier-edit-save-${row.size}`}
                >
                  {row.editing ? (
                    <>
                      <Save className="size-3 mr-1" /> Save
                    </>
                  ) : (
                    "Edit"
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Role Discount */}
      <section data-ocid="multi-role-config">
        <div className="flex items-center gap-2 mb-4">
          <div className="size-5 rounded bg-purple-600 flex items-center justify-center">
            <CreditCard className="size-3 text-white" />
          </div>
          <h2 className="text-base font-semibold text-foreground font-display">
            Multi-Role Discount
          </h2>
        </div>

        <div className="rounded-lg border bg-card shadow-sm p-5 max-w-lg">
          <p className="text-sm text-muted-foreground mb-4">
            For users registered as both Buyer and Supplier, the minimum fee is
            calculated as a percentage of the combined buyer and supplier fees.
          </p>
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <Label
                htmlFor="multi-role-multiplier"
                className="text-xs text-muted-foreground mb-1 block"
              >
                Minimum Fee Multiplier (%)
              </Label>
              <div className="relative">
                <Input
                  id="multi-role-multiplier"
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  className="pr-8 text-sm"
                  value={multiRoleMultiplier}
                  disabled={!multiRoleEditing}
                  onChange={(e) => setMultiRoleMultiplier(e.target.value)}
                  data-ocid="multi-role-multiplier-input"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                  %
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Current: minimum fee = {multiRoleMultiplier}% of (buyer fee +
                supplier fee)
              </p>
            </div>
            {multiRoleEditing ? (
              <Button
                type="button"
                className="bg-[#059669] hover:bg-emerald-700 text-white"
                onClick={saveMultiRole}
                data-ocid="save-multi-role-btn"
              >
                <Save className="size-4 mr-1" /> Save
              </Button>
            ) : (
              <Button
                type="button"
                variant="outline"
                onClick={() => setMultiRoleEditing(true)}
                data-ocid="edit-multi-role-btn"
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      </section>
    </PortalLayout>
  );
}
