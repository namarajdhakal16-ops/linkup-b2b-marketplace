import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { useAuthStore } from "@/store";
import type { SupplierSize } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  Banknote,
  Building2,
  CheckCircle,
  Package,
  ShieldCheck,
  Upload,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SUPPLIER_NAV } from "./SupplierDashboardPage";

const STEPS = [
  { id: 1, label: "Company Info", icon: Building2 },
  { id: 2, label: "Verification", icon: UserCheck },
  { id: 3, label: "Bank Details", icon: Banknote },
  { id: 4, label: "Product Setup", icon: Package },
  { id: 5, label: "Risk & Confirm", icon: ShieldCheck },
];

const CATEGORIES = [
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery",
];

const INDUSTRIES = [
  "Manufacturing",
  "Chemicals",
  "Metals & Mining",
  "Electronics",
  "Textiles",
  "Automotive",
  "Construction",
  "Energy",
  "Pharmaceuticals",
  "Other",
];

export function SupplierOnboardingPage() {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  const { setProfile, principal } = useAuthStore();

  // Step 1
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState<SupplierSize>("medium");
  const [gst, setGst] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [yearFounded, setYearFounded] = useState("");

  // Step 2
  const [directorName, setDirectorName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [website, setWebsite] = useState("");

  // Step 3
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountType, setAccountType] = useState("");

  // Step 4
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [certifications, setCertifications] = useState("");

  // Step 5
  const [riskLevel, setRiskLevel] = useState("");
  const [warranty, setWarranty] = useState("");
  const [insurance, setInsurance] = useState("");
  const [returnPolicy, setReturnPolicy] = useState("");

  function goNext() {
    setStep((s) => Math.min(5, s + 1));
  }
  function goBack() {
    setStep((s) => Math.max(1, s - 1));
  }

  function validateStep(): boolean {
    if (step === 1) {
      if (!companyName.trim()) {
        toast.error("Company name is required");
        return false;
      }
      if (!industry) {
        toast.error("Industry is required");
        return false;
      }
    }
    if (step === 2) {
      if (!directorName.trim()) {
        toast.error("Director name is required");
        return false;
      }
    }
    if (step === 3) {
      if (
        !bankName.trim() ||
        !accountHolder.trim() ||
        !accountNumber.trim() ||
        !ifsc.trim()
      ) {
        toast.error("All bank details are required");
        return false;
      }
    }
    if (step === 4) {
      if (!productName.trim() || !productCategory) {
        toast.error("Product name and category are required");
        return false;
      }
    }
    return true;
  }

  function handleNext() {
    if (!validateStep()) return;
    goNext();
  }

  function handleComplete() {
    if (!agreed) {
      toast.error("Please agree to the terms before submitting");
      return;
    }
    if (!riskLevel) {
      toast.error("Risk level selection is required");
      return;
    }
    setProfile({
      id: principal ?? "sup-new",
      name: companyName,
      email: "",
      role: "supplier",
      supplierSize: size,
      verified: false,
      createdAt: Date.now(),
    });
    toast.success(
      "Registration submitted! Verification pending. We'll contact you in 2–3 business days.",
    );
    navigate({ to: "/supplier/dashboard" });
  }

  const progressPct = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="Supplier Registration"
        description="Complete your profile to start listing products and receiving buyer RFQs"
        breadcrumb="Supplier Portal"
      />

      {/* Step progress bar */}
      <div className="mb-8 max-w-3xl">
        <div className="relative mb-6">
          <div className="absolute top-4.5 left-0 right-0 h-0.5 bg-border" />
          <div
            className="absolute top-4.5 left-0 h-0.5 bg-[#059669] transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
          <div className="relative flex justify-between">
            {STEPS.map((s) => {
              const Icon = s.icon;
              const isComplete = step > s.id;
              const isCurrent = step === s.id;
              return (
                <div key={s.id} className="flex flex-col items-center gap-2">
                  <div
                    className={`size-9 rounded-full flex items-center justify-center transition-all border-2 ${
                      isComplete
                        ? "bg-[#059669] border-[#059669] text-white"
                        : isCurrent
                          ? "bg-[#1e40af] border-[#1e40af] text-white"
                          : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    {isComplete ? (
                      <CheckCircle className="size-4" />
                    ) : (
                      <Icon className="size-4" />
                    )}
                  </div>
                  <span className="text-[10px] text-center text-muted-foreground hidden sm:block leading-tight max-w-[60px]">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Step {step} of {STEPS.length} — {STEPS[step - 1].label}
        </p>
      </div>

      <div className="max-w-lg">
        {/* Step 1: Company Info */}
        {step === 1 && (
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-foreground text-lg">
              Company Information
            </h3>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Company Name *
              </Label>
              <Input
                placeholder="e.g. Ace Industrial Systems Pvt Ltd"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                data-ocid="company-name-input"
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Industry *
              </Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRIES.map((i) => (
                    <SelectItem key={i} value={i}>
                      {i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Company Size *
              </Label>
              <Select
                value={size}
                onValueChange={(v) => setSize(v as SupplierSize)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">
                    Small / Micro (&lt;50 employees)
                  </SelectItem>
                  <SelectItem value="medium">
                    Medium (50–500 employees)
                  </SelectItem>
                  <SelectItem value="large">
                    Large (&gt;500 employees)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  GST Number
                </Label>
                <Input
                  placeholder="27AAACR5055K1Z5"
                  value={gst}
                  onChange={(e) => setGst(e.target.value)}
                />
              </div>
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  Year Founded
                </Label>
                <Input
                  placeholder="e.g. 2005"
                  value={yearFounded}
                  onChange={(e) => setYearFounded(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Registration Number
              </Label>
              <Input
                placeholder="e.g. CIN: L27100MH2005PLC152..."
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
              />
            </div>
            <Button
              className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
              onClick={handleNext}
              data-ocid="step1-next-btn"
            >
              Next: Verification
            </Button>
          </div>
        )}

        {/* Step 2: Verification */}
        {step === 2 && (
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-foreground text-lg">
              Verification Details
            </h3>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Director / Authorized Person *
              </Label>
              <Input
                placeholder="Full name of authorized signatory"
                value={directorName}
                onChange={(e) => setDirectorName(e.target.value)}
                data-ocid="director-name-input"
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Tax ID / PAN Number
              </Label>
              <Input
                placeholder="e.g. ABCDE1234F"
                value={taxId}
                onChange={(e) => setTaxId(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Company Website
              </Label>
              <Input
                placeholder="https://yourcompany.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Verification Document Upload
              </Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-[#059669]/40 transition-colors">
                <Upload className="size-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">
                  Upload Certificate of Incorporation or GST Certificate
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  PDF, JPG or PNG · Max 5MB
                </p>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  id="verification-doc"
                />
                <Label htmlFor="verification-doc" className="cursor-pointer">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      document.getElementById("verification-doc")?.click()
                    }
                    data-ocid="upload-doc-btn"
                  >
                    Browse Files
                  </Button>
                </Label>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={goBack}>
                Back
              </Button>
              <Button
                className="flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                onClick={handleNext}
                data-ocid="step2-next-btn"
              >
                Next: Bank Details
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Bank Details */}
        {step === 3 && (
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-foreground text-lg">
              Bank Details
            </h3>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Bank Name *
              </Label>
              <Input
                placeholder="e.g. HDFC Bank, SBI, ICICI"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                data-ocid="bank-name-input"
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Account Holder Name *
              </Label>
              <Input
                placeholder="Name as registered with bank"
                value={accountHolder}
                onChange={(e) => setAccountHolder(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Account Number *
              </Label>
              <Input
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                type="password"
                data-ocid="account-number-input"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Masked for security — used only for fee settlement
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  IFSC Code *
                </Label>
                <Input
                  placeholder="e.g. HDFC0001234"
                  value={ifsc}
                  onChange={(e) => setIfsc(e.target.value.toUpperCase())}
                  className="font-mono"
                />
              </div>
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  Account Type
                </Label>
                <Select value={accountType} onValueChange={setAccountType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current">Current Account</SelectItem>
                    <SelectItem value="savings">Savings Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={goBack}>
                Back
              </Button>
              <Button
                className="flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                onClick={handleNext}
                data-ocid="step3-next-btn"
              >
                Next: Product Setup
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Product Setup */}
        {step === 4 && (
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-foreground text-lg">
              First Product Setup
            </h3>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Product Name *
              </Label>
              <Input
                placeholder="e.g. Industrial Hydraulic Press 50T"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                data-ocid="product-name-input"
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Category *
              </Label>
              <Select
                value={productCategory}
                onValueChange={setProductCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  Price (₹)
                </Label>
                <Input
                  type="number"
                  placeholder="0"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  Stock Qty
                </Label>
                <Input
                  type="number"
                  placeholder="0"
                  value={productStock}
                  onChange={(e) => setProductStock(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Description
              </Label>
              <Textarea
                rows={3}
                placeholder="Describe your product's key features and applications"
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Certifications
              </Label>
              <Input
                placeholder="e.g. ISO 9001, CE, BIS, OSHA"
                value={certifications}
                onChange={(e) => setCertifications(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Product Images
              </Label>
              <div className="border-2 border-dashed border-border rounded-lg p-5 text-center hover:border-[#059669]/40 transition-colors">
                <Upload className="size-6 text-muted-foreground mx-auto mb-1.5" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload product images (PNG/JPG, Max 5 files)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  id="product-images"
                />
                <Label htmlFor="product-images" className="cursor-pointer">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      document.getElementById("product-images")?.click()
                    }
                    data-ocid="upload-product-images-btn"
                  >
                    Browse Images
                  </Button>
                </Label>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={goBack}>
                Back
              </Button>
              <Button
                className="flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                onClick={handleNext}
                data-ocid="step4-next-btn"
              >
                Next: Risk & Confirm
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Risk & Confirm */}
        {step === 5 && (
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-foreground text-lg">
              Risk Assessment & Confirmation
            </h3>

            {/* Risk level selector */}
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Risk Level *
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  {
                    v: "low",
                    label: "Low",
                    color: "border-emerald-300 bg-emerald-50 text-emerald-700",
                  },
                  {
                    v: "medium",
                    label: "Medium",
                    color: "border-amber-300 bg-amber-50 text-amber-700",
                  },
                  {
                    v: "high",
                    label: "High",
                    color: "border-red-300 bg-red-50 text-red-700",
                  },
                ].map((r) => (
                  <button
                    key={r.v}
                    type="button"
                    onClick={() => setRiskLevel(r.v)}
                    data-ocid={`risk-level-${r.v}`}
                    className={`p-2.5 rounded-lg border-2 text-center text-sm font-semibold transition-all ${riskLevel === r.v ? r.color : "border-border bg-background text-muted-foreground hover:border-muted-foreground/30"}`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Warranty Details
              </Label>
              <Textarea
                rows={2}
                placeholder="e.g. 2-year manufacturer warranty. Covers defects in material and workmanship."
                value={warranty}
                onChange={(e) => setWarranty(e.target.value)}
                data-ocid="warranty-input"
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Insurance Coverage
              </Label>
              <Textarea
                rows={2}
                placeholder="e.g. Product liability insurance up to ₹50L with HDFC Ergo."
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Return Policy
              </Label>
              <Textarea
                rows={2}
                placeholder="e.g. 30-day return for defective items. No returns for custom orders."
                value={returnPolicy}
                onChange={(e) => setReturnPolicy(e.target.value)}
              />
            </div>

            {/* Review summary */}
            <div className="rounded-lg bg-muted/40 border p-4 space-y-2">
              <p className="text-xs font-semibold text-foreground mb-2">
                Registration Summary
              </p>
              {[
                { label: "Company", value: companyName || "—" },
                {
                  label: "Size",
                  value: size.charAt(0).toUpperCase() + size.slice(1),
                },
                { label: "Director", value: directorName || "—" },
                {
                  label: "Bank",
                  value: bankName ? `${bankName} (${accountType || "—"})` : "—",
                },
                { label: "First Product", value: productName || "—" },
                { label: "Category", value: productCategory || "—" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-medium text-foreground text-right max-w-[60%] truncate">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
              Your registration will be reviewed by our team within 2–3 business
              days. You will receive an email confirmation with next steps and
              onboarding documents.
            </div>

            {/* Agree checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="agree-terms"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(!!v)}
                data-ocid="agree-terms-checkbox"
              />
              <Label
                htmlFor="agree-terms"
                className="text-sm text-muted-foreground leading-snug cursor-pointer"
              >
                I agree to LinkUp's{" "}
                <span className="text-[#059669] underline cursor-pointer">
                  Terms of Service
                </span>
                ,{" "}
                <span className="text-[#059669] underline cursor-pointer">
                  Supplier Policy
                </span>
                , and confirm that all information provided is accurate.
              </Label>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={goBack}>
                Back
              </Button>
              <Button
                className="flex-1 bg-[#059669] hover:bg-[#047857] text-white"
                onClick={handleComplete}
                disabled={!agreed}
                data-ocid="submit-registration-btn"
              >
                <CheckCircle className="size-4 mr-2" />
                Submit Registration
              </Button>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
