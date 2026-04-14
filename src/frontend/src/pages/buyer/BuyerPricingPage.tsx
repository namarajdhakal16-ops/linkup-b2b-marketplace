import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  calculateBuyerFee,
  calculateMultiRoleFee,
  formatINR,
} from "@/lib/pricing";
import type { BuyerTier, SupplierSize } from "@/types";
import { ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { buyerNavItems } from "./navItems";

const TIER_INFO: Record<
  BuyerTier,
  { label: string; price: string; features: string[]; color: string }
> = {
  tier1: {
    label: "Tier 1 — Free",
    price: "₹0",
    features: [
      "Browse product catalog",
      "Submit up to 3 RFQs/month",
      "Basic supplier directory",
      "Email support",
    ],
    color: "border-muted",
  },
  tier2: {
    label: "Tier 2 — SME",
    price: "From ₹1,000",
    features: [
      "Everything in Tier 1",
      "Unlimited RFQs",
      "Priority listings",
      "Dedicated account manager",
      "Analytics dashboard",
    ],
    color: "border-[#1e40af]",
  },
  tier3: {
    label: "Tier 3 — Mid-size",
    price: "From ₹2,000",
    features: [
      "Everything in Tier 2",
      "Bulk order discounts",
      "Custom contract management",
      "Multi-user access (5 seats)",
      "API integration",
    ],
    color: "border-[#059669]",
  },
  tier4: {
    label: "Tier 4 — Enterprise",
    price: "From ₹2,000",
    features: [
      "Everything in Tier 3",
      "Verified supplier priority",
      "Premium 24/7 support",
      "Custom integrations",
      "White-glove onboarding",
      "Unlimited seats",
    ],
    color: "border-purple-500",
  },
};

const TIERS: BuyerTier[] = ["tier1", "tier2", "tier3", "tier4"];

export function BuyerPricingPage() {
  const [activeTier, setActiveTier] = useState<BuyerTier>("tier2");
  const [amount, setAmount] = useState("");
  const [multiRole, setMultiRole] = useState(false);
  const [supplierSize, setSupplierSize] = useState<SupplierSize>("medium");
  const [supplierSales, setSupplierSales] = useState("");

  const amountNum = Number(amount.replace(/,/g, "")) || 0;
  const salesNum = Number(supplierSales.replace(/,/g, "")) || 0;

  const buyerFee = calculateBuyerFee(activeTier, amountNum);
  const multiRoleFee = multiRole
    ? calculateMultiRoleFee(activeTier, supplierSize, amountNum, salesNum)
    : 0;
  const minFee =
    activeTier === "tier1" ? 0 : activeTier === "tier2" ? 1000 : 2000;
  const commission = amountNum > 0 ? amountNum * 0.0001 : 0;

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <PageHeader
        title="Pricing Calculator"
        description="Understand your platform fees and explore tier options."
        breadcrumb="Buyer Portal"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Select Your Tier</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs
                value={activeTier}
                onValueChange={(v) => setActiveTier(v as BuyerTier)}
              >
                <TabsList className="grid grid-cols-4 w-full mb-4">
                  {TIERS.map((t) => (
                    <TabsTrigger
                      key={t}
                      value={t}
                      className="text-xs"
                      data-ocid={`tier-tab-${t}`}
                    >
                      {t.replace("tier", "T")}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TIERS.map((t) => {
                  const info = TIER_INFO[t];
                  return (
                    <TabsContent key={t} value={t}>
                      <div className={`rounded-lg border-2 p-4 ${info.color}`}>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold font-display">
                            {info.label}
                          </h3>
                          <span className="text-sm font-bold text-[#1e40af]">
                            {info.price}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {info.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Transaction Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="calc-amount">Transaction Amount (₹)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    ₹
                  </span>
                  <Input
                    id="calc-amount"
                    className="pl-8"
                    placeholder="Enter amount..."
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    data-ocid="pricing-amount-input"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-b">
                <div>
                  <p className="text-sm font-medium">Multi-Role User</p>
                  <p className="text-xs text-muted-foreground">
                    Also registered as a supplier? Get 40% discount on combined
                    fees.
                  </p>
                </div>
                <Switch
                  checked={multiRole}
                  onCheckedChange={setMultiRole}
                  data-ocid="multi-role-toggle"
                />
              </div>

              {multiRole && (
                <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-muted/40 border">
                  <div className="space-y-1.5">
                    <Label>Supplier Size</Label>
                    <Select
                      value={supplierSize}
                      onValueChange={(v) => setSupplierSize(v as SupplierSize)}
                    >
                      <SelectTrigger data-ocid="supplier-size-select">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small / Micro</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Sales Volume (₹)</Label>
                    <Input
                      placeholder="Sales amount..."
                      value={supplierSales}
                      onChange={(e) => setSupplierSales(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-[#1e40af]/30 bg-blue-50/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="size-4 text-[#1e40af]" />
                Fee Calculation Result
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {amountNum === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Enter a transaction amount to calculate fees.
                </p>
              ) : (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">
                        Minimum Platform Fee
                      </span>
                      <span className="font-semibold font-display">
                        {formatINR(minFee)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">
                        Commission (0.01%)
                      </span>
                      <span className="font-semibold font-display">
                        {formatINR(commission)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b font-bold">
                      <span className="text-sm">Buyer Platform Fee</span>
                      <span className="font-display text-[#1e40af]">
                        {formatINR(buyerFee)}
                      </span>
                    </div>
                    {multiRole && (
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-emerald-700 font-medium">
                          Multi-Role Fee (60% rule)
                        </span>
                        <span className="font-display font-bold text-emerald-700">
                          {formatINR(multiRoleFee)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-3 rounded-lg bg-[#1e40af]/10 border border-[#1e40af]/20 px-3">
                      <span className="font-semibold">Total Fee Payable</span>
                      <span className="font-display font-bold text-xl text-[#1e40af]">
                        {formatINR(multiRole ? multiRoleFee : buyerFee)}
                      </span>
                    </div>
                  </div>
                  {multiRole && (
                    <p className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-md p-2">
                      ✓ Saving {formatINR(buyerFee - multiRoleFee)} with
                      multi-role discount
                    </p>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Tier Comparison</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-medium text-muted-foreground">
                      Feature
                    </th>
                    {TIERS.map((t) => (
                      <th
                        key={t}
                        className={`text-center py-2 font-medium ${activeTier === t ? "text-[#1e40af]" : "text-muted-foreground"}`}
                      >
                        {t.replace("tier", "T")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Base Fee",
                      values: ["Free", "₹1,000", "₹2,000", "₹2,000"],
                    },
                    {
                      label: "Commission",
                      values: ["0%", "0.01%", "0.01%", "0.01%"],
                    },
                    {
                      label: "RFQ Limit",
                      values: [
                        "3/month",
                        "Unlimited",
                        "Unlimited",
                        "Unlimited",
                      ],
                    },
                    {
                      label: "Support",
                      values: [
                        "Email",
                        "Dedicated AM",
                        "Priority",
                        "24/7 Premium",
                      ],
                    },
                    {
                      label: "Verified Suppliers",
                      values: ["✗", "✗", "✗", "✓"],
                    },
                  ].map((row) => (
                    <tr key={row.label} className="border-b last:border-0">
                      <td className="py-2 font-medium pr-2">{row.label}</td>
                      {row.values.map((v, i) => (
                        <td
                          key={TIERS[i]}
                          className={`py-2 text-center ${activeTier === TIERS[i] ? "font-bold text-[#1e40af] bg-blue-50/50" : ""}`}
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Button
            type="button"
            className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
            onClick={() =>
              toast.success(
                "Upgrade request submitted! Our team will contact you within 24 hours.",
              )
            }
            data-ocid="upgrade-tier-btn"
          >
            <ArrowUpRight className="size-4 mr-2" />
            Upgrade My Tier
          </Button>
        </div>
      </div>
    </PortalLayout>
  );
}
