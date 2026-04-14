import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  SUPPLIER_SIZE_LABELS,
  calculateBuyerFee,
  calculateMultiRoleFee,
  calculateSupplierFee,
  formatINR,
} from "@/lib/pricing";
import type { BuyerTier, SupplierSize } from "@/types";
import { Calculator, Info, Layers } from "lucide-react";
import { useState } from "react";
import { SUPPLIER_NAV } from "./SupplierDashboardPage";

const SIZE_INFO: {
  v: SupplierSize;
  label: string;
  desc: string;
  badge: string;
  features: string[];
}[] = [
  {
    v: "small",
    label: "Small / Micro",
    desc: "1 product free in first year. Additional products use normal rates.",
    badge: "bg-emerald-100 text-emerald-700",
    features: [
      "1 product free (Year 1)",
      "Basic analytics",
      "Standard support",
    ],
  },
  {
    v: "medium",
    label: "Medium",
    desc: "Min ₹5,000 if no sales. 0.5% on ₹1–10L. 0.25% on >₹10L.",
    badge: "bg-blue-100 text-blue-700",
    features: [
      "Unlimited products",
      "Advanced analytics",
      "Priority support",
      "Verified badge",
    ],
  },
  {
    v: "large",
    label: "Large",
    desc: "Same rate structure as Medium with enterprise-level perks.",
    badge: "bg-purple-100 text-purple-700",
    features: [
      "Unlimited products",
      "Full analytics suite",
      "Dedicated account manager",
      "Featured placement",
      "API access",
    ],
  },
];

const FEE_TABLE = [
  { range: "No sales (any size)", fee: "Min ₹5,000 / month" },
  {
    range: "₹1 – ₹10 Lakh (Medium/Large)",
    fee: "0.5% of transaction value (min ₹5,000)",
  },
  {
    range: "> ₹10 Lakh (Medium/Large)",
    fee: "0.25% of total transaction value",
  },
  { range: "Small / Micro — First product", fee: "Free for Year 1" },
  { range: "Small / Micro — Additional products", fee: "Normal rates apply" },
];

export function SupplierPricingPage() {
  const [size, setSize] = useState<SupplierSize>("medium");
  const [salesVolume, setSalesVolume] = useState("5000000");
  const [multiRole, setMultiRole] = useState(false);
  const [buyerTier] = useState<BuyerTier>("tier3");
  const [buyerAmount] = useState(2000000);

  const numVolume = Number.parseFloat(salesVolume.replace(/,/g, "")) || 0;
  const supplierFee = calculateSupplierFee(size, numVolume);
  const commissionRate =
    size === "small"
      ? 0
      : numVolume === 0
        ? 0
        : numVolume <= 1000000
          ? 0.005
          : 0.0025;
  const commissionAmt = numVolume * commissionRate;
  const minFee = size === "small" ? 0 : 5000;
  const totalFee = multiRole
    ? calculateMultiRoleFee(buyerTier, size, buyerAmount, numVolume)
    : supplierFee;

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="Pricing & Fee Calculator"
        description="Understand your platform commission and calculate exact fees"
        breadcrumb="Supplier Portal"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Calculator */}
        <div className="rounded-xl border bg-card shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center">
              <Calculator className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Fee Calculator</h3>
              <p className="text-xs text-muted-foreground">
                Real-time calculation based on your tier
              </p>
            </div>
          </div>

          {/* Tier selector */}
          <div className="space-y-2 mb-5">
            <Label className="text-sm font-medium block">Company Size</Label>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(SUPPLIER_SIZE_LABELS) as SupplierSize[]).map(
                (s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSize(s)}
                    data-ocid={`size-card-${s}`}
                    className={`p-2.5 rounded-lg border-2 text-left transition-all ${size === s ? "border-[#059669]/50 bg-[#059669]/5 ring-1 ring-[#059669]/20" : "border-border hover:border-muted-foreground/30"}`}
                  >
                    <p className="text-xs font-semibold text-foreground">
                      {SUPPLIER_SIZE_LABELS[s]}
                    </p>
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="mb-5">
            <Label className="text-sm font-medium mb-1.5 block">
              Monthly Sales Volume (₹)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-sm">
                ₹
              </span>
              <Input
                type="number"
                placeholder="0"
                className="pl-7 font-mono"
                value={salesVolume}
                onChange={(e) => setSalesVolume(e.target.value)}
                data-ocid="sales-volume-input"
              />
            </div>
          </div>

          {/* Multi-role toggle */}
          <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 mb-5">
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-[#1e40af]" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Multi-Role Discount
                </p>
                <p className="text-xs text-muted-foreground">
                  Registered as Buyer + Supplier (40% off combined)
                </p>
              </div>
            </div>
            <Switch
              checked={multiRole}
              onCheckedChange={setMultiRole}
              data-ocid="multi-role-toggle"
            />
          </div>

          {/* Result breakdown */}
          <div className="rounded-lg bg-[#059669]/5 border border-[#059669]/20 p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Minimum Fee</span>
              <span className="font-medium text-foreground">
                {formatINR(minFee)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Commission Rate</span>
              <span className="font-medium text-foreground">
                {commissionRate > 0
                  ? `${(commissionRate * 100).toFixed(2)}%`
                  : size === "small"
                    ? "Free"
                    : "—"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Commission Amount</span>
              <span className="font-medium text-foreground">
                {formatINR(commissionAmt)}
              </span>
            </div>
            {multiRole && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Multi-role Discount (40%)
                </span>
                <span className="font-medium text-emerald-600">
                  − {formatINR(supplierFee * 0.4)}
                </span>
              </div>
            )}
            <div className="border-t pt-2 flex justify-between">
              <span className="font-semibold text-foreground">
                Total Platform Fee
              </span>
              <span className="font-display text-xl font-bold text-[#059669]">
                {formatINR(totalFee)}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 mt-4">
            <Info className="size-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700">
              Fees are auto-deducted on monthly settlement. Commission applies
              to completed transactions only.
            </p>
          </div>
        </div>

        {/* Tier benefit comparison */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Tier Benefits</h3>
          {SIZE_INFO.map((s) => (
            <div
              key={s.v}
              className={`rounded-lg border-2 p-4 transition-all ${size === s.v ? "border-[#059669]/40 bg-[#059669]/5" : "border-border bg-card"}`}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-sm text-foreground">
                  {s.label}
                </p>
                <Badge className={`text-[10px] ${s.badge}`}>
                  {size === s.v ? "Active" : "View"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{s.desc}</p>
              <ul className="space-y-1">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 text-xs text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-[#059669] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Fee table */}
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="px-5 py-4 border-b">
          <h3 className="font-semibold text-foreground">
            Fee Structure Reference
          </h3>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b">
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Sales Range
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Platform Fee
                </th>
              </tr>
            </thead>
            <tbody>
              {FEE_TABLE.map((row) => (
                <tr
                  key={row.range}
                  className="border-b last:border-0 hover:bg-muted/30"
                >
                  <td className="px-4 py-3 text-foreground">{row.range}</td>
                  <td className="px-4 py-3 font-medium text-[#059669]">
                    {row.fee}
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
