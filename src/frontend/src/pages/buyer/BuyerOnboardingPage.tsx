import { PortalLayout } from "@/components/layout/PortalLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { BuyerTier } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Settings,
  Tag,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { buyerNavItems } from "./navItems";

const STEPS = [
  "Company Info",
  "Contact Details",
  "Tier Selection",
  "Preferences",
  "Confirm",
];
const STEP_ICONS = [Building2, User, Tag, Settings, ClipboardCheck];

const TIERS: {
  id: BuyerTier;
  label: string;
  price: string;
  features: string[];
  color: string;
}[] = [
  {
    id: "tier1",
    label: "Tier 1 — Free",
    price: "₹0 / year",
    features: ["3 RFQs/month", "Basic catalog access", "Email support"],
    color: "border-muted bg-muted/20",
  },
  {
    id: "tier2",
    label: "Tier 2 — SME",
    price: "₹1,000 min fee",
    features: [
      "Unlimited RFQs",
      "Priority listings",
      "Dedicated AM",
      "Analytics",
    ],
    color: "border-[#1e40af]/40 bg-blue-50/30",
  },
  {
    id: "tier3",
    label: "Tier 3 — Mid-size",
    price: "₹2,000 min fee",
    features: [
      "Everything in T2",
      "Bulk discounts",
      "5 user seats",
      "API access",
    ],
    color: "border-[#059669]/40 bg-emerald-50/30",
  },
  {
    id: "tier4",
    label: "Tier 4 — Enterprise",
    price: "₹2,000 min fee",
    features: [
      "Everything in T3",
      "Verified suppliers only",
      "24/7 support",
      "Unlimited seats",
    ],
    color: "border-purple-300 bg-purple-50/20",
  },
];

const CATEGORIES = [
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery",
];

interface FormData {
  companyName: string;
  industry: string;
  companySize: string;
  taxId: string;
  gstNumber: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  tier: BuyerTier | "";
  categories: string[];
  riskTolerance: string;
  paymentMethod: string;
  agreed: boolean;
}

const INITIAL: FormData = {
  companyName: "",
  industry: "",
  companySize: "",
  taxId: "",
  gstNumber: "",
  contactName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pin: "",
  tier: "",
  categories: [],
  riskTolerance: "medium",
  paymentMethod: "",
  agreed: false,
};

export function BuyerOnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const navigate = useNavigate();

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function toggleCategory(cat: string) {
    const next = data.categories.includes(cat)
      ? data.categories.filter((c) => c !== cat)
      : [...data.categories, cat];
    update("categories", next);
  }

  function validateStep(): boolean {
    if (step === 0)
      return !!(data.companyName && data.industry && data.companySize);
    if (step === 1) return !!(data.contactName && data.email && data.phone);
    if (step === 2) return !!data.tier;
    if (step === 3) return data.categories.length > 0 && !!data.paymentMethod;
    if (step === 4) return data.agreed;
    return true;
  }

  function handleNext() {
    if (!validateStep()) {
      toast.error("Please fill in all required fields to proceed.");
      return;
    }
    setStep((s) => s + 1);
  }

  function handleSubmit() {
    if (!data.agreed) {
      toast.error("Please agree to Terms and Conditions.");
      return;
    }
    toast.success(
      "Registration submitted for review! You'll receive a confirmation email within 24 hours.",
    );
    navigate({ to: "/buyer/dashboard" });
  }

  const StepIcon = STEP_ICONS[step];

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-[#1e40af] flex items-center justify-center">
              <StepIcon className="size-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Buyer Registration
              </p>
              <h1 className="text-xl font-bold font-display">
                Step {step + 1}: {STEPS[step]}
              </h1>
            </div>
          </div>

          <div className="flex gap-1 mb-2">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-all ${i < step ? "bg-[#059669]" : i === step ? "bg-[#1e40af]" : "bg-muted"}`}
              />
            ))}
          </div>
          <div className="flex justify-between">
            {STEPS.map((s, i) => (
              <span
                key={s}
                className={`text-[10px] font-medium ${i === step ? "text-[#1e40af]" : i < step ? "text-[#059669]" : "text-muted-foreground"}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-5">
            {step === 0 && (
              <>
                <div className="space-y-1.5">
                  <Label htmlFor="ob-company">Company Name *</Label>
                  <Input
                    id="ob-company"
                    placeholder="e.g. Priya Industries Pvt Ltd"
                    value={data.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    data-ocid="ob-company-name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Industry *</Label>
                    <Select
                      value={data.industry}
                      onValueChange={(v) => update("industry", v)}
                    >
                      <SelectTrigger data-ocid="ob-industry">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Manufacturing",
                          "Construction",
                          "Automotive",
                          "Pharma",
                          "Textiles",
                          "Chemical",
                          "Mining",
                          "Aerospace",
                        ].map((ind) => (
                          <SelectItem key={ind} value={ind}>
                            {ind}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Company Size *</Label>
                    <Select
                      value={data.companySize}
                      onValueChange={(v) => update("companySize", v)}
                    >
                      <SelectTrigger data-ocid="ob-company-size">
                        <SelectValue placeholder="Employees..." />
                      </SelectTrigger>
                      <SelectContent>
                        {["1–10", "11–50", "51–200", "201–500", "500+"].map(
                          (s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="ob-tax">Tax ID / PAN</Label>
                    <Input
                      id="ob-tax"
                      placeholder="AAAPL1234C"
                      value={data.taxId}
                      onChange={(e) => update("taxId", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="ob-gst">GST Number</Label>
                    <Input
                      id="ob-gst"
                      placeholder="27AABCU9603R1ZX"
                      value={data.gstNumber}
                      onChange={(e) => update("gstNumber", e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="ob-name">Contact Person *</Label>
                    <Input
                      id="ob-name"
                      placeholder="Full name"
                      value={data.contactName}
                      onChange={(e) => update("contactName", e.target.value)}
                      data-ocid="ob-contact-name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="ob-phone">Phone *</Label>
                    <Input
                      id="ob-phone"
                      placeholder="+91 98765 43210"
                      value={data.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ob-email">Business Email *</Label>
                  <Input
                    id="ob-email"
                    type="email"
                    placeholder="contact@company.com"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    data-ocid="ob-email"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ob-address">Address</Label>
                  <Input
                    id="ob-address"
                    placeholder="Street / Area"
                    value={data.address}
                    onChange={(e) => update("address", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="ob-city">City</Label>
                    <Input
                      id="ob-city"
                      placeholder="City"
                      value={data.city}
                      onChange={(e) => update("city", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>State</Label>
                    <Select
                      value={data.state}
                      onValueChange={(v) => update("state", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Maharashtra",
                          "Gujarat",
                          "Rajasthan",
                          "Delhi",
                          "Karnataka",
                          "Tamil Nadu",
                          "Telangana",
                          "Uttar Pradesh",
                          "Punjab",
                          "West Bengal",
                        ].map((st) => (
                          <SelectItem key={st} value={st}>
                            {st}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="ob-pin">PIN Code</Label>
                    <Input
                      id="ob-pin"
                      placeholder="400001"
                      value={data.pin}
                      onChange={(e) => update("pin", e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <div className="grid grid-cols-2 gap-3">
                {TIERS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`rounded-lg border-2 p-4 text-left transition-all ${t.color} ${data.tier === t.id ? "ring-2 ring-[#1e40af] ring-offset-1" : "hover:opacity-80"}`}
                    onClick={() => update("tier", t.id)}
                    data-ocid={`tier-select-${t.id}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-sm">{t.label}</p>
                      {data.tier === t.id && (
                        <CheckCircle2 className="size-4 text-[#1e40af] shrink-0" />
                      )}
                    </div>
                    <p className="text-xs font-bold text-[#1e40af] mb-2">
                      {t.price}
                    </p>
                    <ul className="space-y-1">
                      {t.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-muted-foreground flex items-center gap-1.5"
                        >
                          <span className="size-1 rounded-full bg-[#059669] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Purchase Categories * (select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {CATEGORIES.map((cat) => (
                      <div
                        key={cat}
                        className="flex items-center gap-2.5 p-3 rounded-lg border hover:bg-muted/30 transition-colors"
                      >
                        <Checkbox
                          id={`cat-${cat}`}
                          checked={data.categories.includes(cat)}
                          onCheckedChange={() => toggleCategory(cat)}
                          data-ocid={`category-${cat.toLowerCase().replace(/ /g, "-")}`}
                        />
                        <Label
                          htmlFor={`cat-${cat}`}
                          className="text-sm cursor-pointer"
                        >
                          {cat}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Risk Tolerance</Label>
                  <div className="flex gap-2">
                    {["low", "medium", "high"].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => update("riskTolerance", r)}
                        className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all capitalize ${data.riskTolerance === r ? "border-[#1e40af] bg-blue-50 text-[#1e40af]" : "border-border hover:bg-muted/30"}`}
                        data-ocid={`risk-${r}`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label>Payment Method *</Label>
                  <Select
                    value={data.paymentMethod}
                    onValueChange={(v) => update("paymentMethod", v)}
                  >
                    <SelectTrigger data-ocid="ob-payment-method">
                      <SelectValue placeholder="Select payment method..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank_transfer">
                        Bank Transfer / NEFT / RTGS
                      </SelectItem>
                      <SelectItem value="upi">UPI</SelectItem>
                      <SelectItem value="credit_line">Credit Line</SelectItem>
                      <SelectItem value="cheque">Cheque</SelectItem>
                      <SelectItem value="lc">Letter of Credit (LC)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Review Your Information
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border bg-muted/30 p-3 col-span-2 sm:col-span-1">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Company
                    </p>
                    <p className="text-sm font-medium">
                      {data.companyName || "—"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.industry} · {data.companySize} employees
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      GST: {data.gstNumber || "—"}
                    </p>
                  </div>
                  <div className="rounded-lg border bg-muted/30 p-3 col-span-2 sm:col-span-1">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Contact
                    </p>
                    <p className="text-sm font-medium">
                      {data.contactName || "—"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.email}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.phone}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {data.city}
                      {data.state ? `, ${data.state}` : ""}
                    </p>
                  </div>
                  <div className="rounded-lg border bg-muted/30 p-3">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Selected Tier
                    </p>
                    {data.tier ? (
                      <Badge className="bg-[#1e40af]/10 text-[#1e40af] border-[#1e40af]/20 border">
                        {TIERS.find((t) => t.id === data.tier)?.label}
                      </Badge>
                    ) : (
                      <p className="text-sm text-muted-foreground">—</p>
                    )}
                  </div>
                  <div className="rounded-lg border bg-muted/30 p-3">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Preferences
                    </p>
                    <p className="text-xs">
                      Categories:{" "}
                      {data.categories.length > 0
                        ? data.categories.join(", ")
                        : "—"}
                    </p>
                    <p className="text-xs mt-1 capitalize">
                      Risk: {data.riskTolerance}
                    </p>
                    <p className="text-xs mt-1">
                      Payment: {data.paymentMethod?.replace(/_/g, " ") || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg border border-[#1e40af]/20 bg-blue-50/30">
                  <Checkbox
                    id="agree-terms"
                    checked={data.agreed}
                    onCheckedChange={(checked) => update("agreed", !!checked)}
                    data-ocid="ob-agree-terms"
                  />
                  <Label
                    htmlFor="agree-terms"
                    className="text-sm cursor-pointer leading-relaxed"
                  >
                    I agree to LinkUp&apos;s{" "}
                    <span className="text-[#1e40af] underline cursor-pointer">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-[#1e40af] underline cursor-pointer">
                      Privacy Policy
                    </span>
                    . I confirm that all information provided is accurate and up
                    to date.
                  </Label>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              step === 0
                ? navigate({ to: "/buyer/dashboard" })
                : setStep((s) => s - 1)
            }
            data-ocid="ob-back-btn"
          >
            <ArrowLeft className="size-4 mr-1.5" />
            {step === 0 ? "Cancel" : "Back"}
          </Button>

          {step < STEPS.length - 1 ? (
            <Button
              type="button"
              className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
              onClick={handleNext}
              data-ocid="ob-next-btn"
            >
              Next
              <ArrowRight className="size-4 ml-1.5" />
            </Button>
          ) : (
            <Button
              type="button"
              className="bg-[#059669] hover:bg-[#047857] text-white"
              onClick={handleSubmit}
              data-ocid="ob-submit-btn"
            >
              <CheckCircle2 className="size-4 mr-1.5" />
              Submit Registration
            </Button>
          )}
        </div>
      </div>
    </PortalLayout>
  );
}
