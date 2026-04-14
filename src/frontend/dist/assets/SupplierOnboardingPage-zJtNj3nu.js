import { c as createLucideIcon, r as reactExports, d as useNavigate, g as useAuthStore, j as jsxRuntimeExports, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { C as Checkbox } from "./checkbox-D97hW3ci.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { S as SUPPLIER_NAV } from "./SupplierDashboardPage-cWtvCcFb.js";
import { B as Building2 } from "./building-2-DKVBuSES.js";
import { P as Package } from "./index-BfZ639JC.js";
import { S as ShieldCheck } from "./shield-check-AZO3kdEQ.js";
import { C as CircleCheckBig } from "./circle-check-big-FdkHYrhv.js";
import "./menu-dXZt9xRu.js";
import "./index-CPoAQatq.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./StatCard-Bv93da2j.js";
import "./badge-BpqzkKu8.js";
import "./mockData-BxT47ZmF.js";
import "./tag-BO63xnL_.js";
import "./chart-no-axes-column-Othc_n2I.js";
import "./credit-card-BoogVyUk.js";
import "./trending-up-Ca1toMKI.js";
import "./generateCategoricalChart-CLakrVV0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
const STEPS = [
  { id: 1, label: "Company Info", icon: Building2 },
  { id: 2, label: "Verification", icon: UserCheck },
  { id: 3, label: "Bank Details", icon: Banknote },
  { id: 4, label: "Product Setup", icon: Package },
  { id: 5, label: "Risk & Confirm", icon: ShieldCheck }
];
const CATEGORIES = [
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery"
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
  "Other"
];
function SupplierOnboardingPage() {
  const [step, setStep] = reactExports.useState(1);
  const [agreed, setAgreed] = reactExports.useState(false);
  const navigate = useNavigate();
  const { setProfile, principal } = useAuthStore();
  const [companyName, setCompanyName] = reactExports.useState("");
  const [industry, setIndustry] = reactExports.useState("");
  const [size, setSize] = reactExports.useState("medium");
  const [gst, setGst] = reactExports.useState("");
  const [regNumber, setRegNumber] = reactExports.useState("");
  const [yearFounded, setYearFounded] = reactExports.useState("");
  const [directorName, setDirectorName] = reactExports.useState("");
  const [taxId, setTaxId] = reactExports.useState("");
  const [website, setWebsite] = reactExports.useState("");
  const [bankName, setBankName] = reactExports.useState("");
  const [accountHolder, setAccountHolder] = reactExports.useState("");
  const [accountNumber, setAccountNumber] = reactExports.useState("");
  const [ifsc, setIfsc] = reactExports.useState("");
  const [accountType, setAccountType] = reactExports.useState("");
  const [productName, setProductName] = reactExports.useState("");
  const [productCategory, setProductCategory] = reactExports.useState("");
  const [productPrice, setProductPrice] = reactExports.useState("");
  const [productStock, setProductStock] = reactExports.useState("");
  const [productDesc, setProductDesc] = reactExports.useState("");
  const [certifications, setCertifications] = reactExports.useState("");
  const [riskLevel, setRiskLevel] = reactExports.useState("");
  const [warranty, setWarranty] = reactExports.useState("");
  const [insurance, setInsurance] = reactExports.useState("");
  const [returnPolicy, setReturnPolicy] = reactExports.useState("");
  function goNext() {
    setStep((s) => Math.min(5, s + 1));
  }
  function goBack() {
    setStep((s) => Math.max(1, s - 1));
  }
  function validateStep() {
    if (step === 1) {
      if (!companyName.trim()) {
        ue.error("Company name is required");
        return false;
      }
      if (!industry) {
        ue.error("Industry is required");
        return false;
      }
    }
    if (step === 2) {
      if (!directorName.trim()) {
        ue.error("Director name is required");
        return false;
      }
    }
    if (step === 3) {
      if (!bankName.trim() || !accountHolder.trim() || !accountNumber.trim() || !ifsc.trim()) {
        ue.error("All bank details are required");
        return false;
      }
    }
    if (step === 4) {
      if (!productName.trim() || !productCategory) {
        ue.error("Product name and category are required");
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
      ue.error("Please agree to the terms before submitting");
      return;
    }
    if (!riskLevel) {
      ue.error("Risk level selection is required");
      return;
    }
    setProfile({
      id: principal ?? "sup-new",
      name: companyName,
      email: "",
      role: "supplier",
      supplierSize: size,
      verified: false,
      createdAt: Date.now()
    });
    ue.success(
      "Registration submitted! Verification pending. We'll contact you in 2–3 business days."
    );
    navigate({ to: "/supplier/dashboard" });
  }
  const progressPct = (step - 1) / (STEPS.length - 1) * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: SUPPLIER_NAV, portalName: "Supplier Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Supplier Registration",
        description: "Complete your profile to start listing products and receiving buyer RFQs",
        breadcrumb: "Supplier Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4.5 left-0 right-0 h-0.5 bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-4.5 left-0 h-0.5 bg-[#059669] transition-all duration-500",
            style: { width: `${progressPct}%` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-between", children: STEPS.map((s) => {
          const Icon = s.icon;
          const isComplete = step > s.id;
          const isCurrent = step === s.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `size-9 rounded-full flex items-center justify-center transition-all border-2 ${isComplete ? "bg-[#059669] border-[#059669] text-white" : isCurrent ? "bg-[#1e40af] border-[#1e40af] text-white" : "bg-background border-border text-muted-foreground"}`,
                children: isComplete ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-center text-muted-foreground hidden sm:block leading-tight max-w-[60px]", children: s.label })
          ] }, s.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "Step ",
        step,
        " of ",
        STEPS.length,
        " — ",
        STEPS[step - 1].label
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg", children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-6 shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-lg", children: "Company Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Company Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. Ace Industrial Systems Pvt Ltd",
              value: companyName,
              onChange: (e) => setCompanyName(e.target.value),
              "data-ocid": "company-name-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Industry *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: industry, onValueChange: setIndustry, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select industry" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: INDUSTRIES.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: i, children: i }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Company Size *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: size,
              onValueChange: (v) => setSize(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "small", children: "Small / Micro (<50 employees)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium (50–500 employees)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "large", children: "Large (>500 employees)" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "GST Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "27AAACR5055K1Z5",
                value: gst,
                onChange: (e) => setGst(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Year Founded" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "e.g. 2005",
                value: yearFounded,
                onChange: (e) => setYearFounded(e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Registration Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. CIN: L27100MH2005PLC152...",
              value: regNumber,
              onChange: (e) => setRegNumber(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
            onClick: handleNext,
            "data-ocid": "step1-next-btn",
            children: "Next: Verification"
          }
        )
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-6 shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-lg", children: "Verification Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Director / Authorized Person *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Full name of authorized signatory",
              value: directorName,
              onChange: (e) => setDirectorName(e.target.value),
              "data-ocid": "director-name-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Tax ID / PAN Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. ABCDE1234F",
              value: taxId,
              onChange: (e) => setTaxId(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Company Website" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "https://yourcompany.com",
              value: website,
              onChange: (e) => setWebsite(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Verification Document Upload" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-[#059669]/40 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-8 text-muted-foreground mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Upload Certificate of Incorporation or GST Certificate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "PDF, JPG or PNG · Max 5MB" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: ".pdf,.jpg,.jpeg,.png",
                className: "hidden",
                id: "verification-doc"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "verification-doc", className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: () => {
                  var _a;
                  return (_a = document.getElementById("verification-doc")) == null ? void 0 : _a.click();
                },
                "data-ocid": "upload-doc-btn",
                children: "Browse Files"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "flex-1", onClick: goBack, children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
              onClick: handleNext,
              "data-ocid": "step2-next-btn",
              children: "Next: Bank Details"
            }
          )
        ] })
      ] }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-6 shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-lg", children: "Bank Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Bank Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. HDFC Bank, SBI, ICICI",
              value: bankName,
              onChange: (e) => setBankName(e.target.value),
              "data-ocid": "bank-name-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Account Holder Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Name as registered with bank",
              value: accountHolder,
              onChange: (e) => setAccountHolder(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Account Number *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Enter account number",
              value: accountNumber,
              onChange: (e) => setAccountNumber(e.target.value),
              type: "password",
              "data-ocid": "account-number-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Masked for security — used only for fee settlement" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "IFSC Code *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "e.g. HDFC0001234",
                value: ifsc,
                onChange: (e) => setIfsc(e.target.value.toUpperCase()),
                className: "font-mono"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Account Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: accountType, onValueChange: setAccountType, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "current", children: "Current Account" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "savings", children: "Savings Account" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "flex-1", onClick: goBack, children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
              onClick: handleNext,
              "data-ocid": "step3-next-btn",
              children: "Next: Product Setup"
            }
          )
        ] })
      ] }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-6 shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-lg", children: "First Product Setup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Product Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. Industrial Hydraulic Press 50T",
              value: productName,
              onChange: (e) => setProductName(e.target.value),
              "data-ocid": "product-name-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Category *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: productCategory,
              onValueChange: setProductCategory,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Price (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "0",
                value: productPrice,
                onChange: (e) => setProductPrice(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Stock Qty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "0",
                value: productStock,
                onChange: (e) => setProductStock(e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 3,
              placeholder: "Describe your product's key features and applications",
              value: productDesc,
              onChange: (e) => setProductDesc(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Certifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. ISO 9001, CE, BIS, OSHA",
              value: certifications,
              onChange: (e) => setCertifications(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Product Images" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-dashed border-border rounded-lg p-5 text-center hover:border-[#059669]/40 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-6 text-muted-foreground mx-auto mb-1.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Upload product images (PNG/JPG, Max 5 files)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: "image/*",
                multiple: true,
                className: "hidden",
                id: "product-images"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "product-images", className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: () => {
                  var _a;
                  return (_a = document.getElementById("product-images")) == null ? void 0 : _a.click();
                },
                "data-ocid": "upload-product-images-btn",
                children: "Browse Images"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "flex-1", onClick: goBack, children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
              onClick: handleNext,
              "data-ocid": "step4-next-btn",
              children: "Next: Risk & Confirm"
            }
          )
        ] })
      ] }),
      step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-6 shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-lg", children: "Risk Assessment & Confirmation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-2 block", children: "Risk Level *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
            {
              v: "low",
              label: "Low",
              color: "border-emerald-300 bg-emerald-50 text-emerald-700"
            },
            {
              v: "medium",
              label: "Medium",
              color: "border-amber-300 bg-amber-50 text-amber-700"
            },
            {
              v: "high",
              label: "High",
              color: "border-red-300 bg-red-50 text-red-700"
            }
          ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setRiskLevel(r.v),
              "data-ocid": `risk-level-${r.v}`,
              className: `p-2.5 rounded-lg border-2 text-center text-sm font-semibold transition-all ${riskLevel === r.v ? r.color : "border-border bg-background text-muted-foreground hover:border-muted-foreground/30"}`,
              children: r.label
            },
            r.v
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Warranty Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 2,
              placeholder: "e.g. 2-year manufacturer warranty. Covers defects in material and workmanship.",
              value: warranty,
              onChange: (e) => setWarranty(e.target.value),
              "data-ocid": "warranty-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Insurance Coverage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 2,
              placeholder: "e.g. Product liability insurance up to ₹50L with HDFC Ergo.",
              value: insurance,
              onChange: (e) => setInsurance(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Return Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 2,
              placeholder: "e.g. 30-day return for defective items. No returns for custom orders.",
              value: returnPolicy,
              onChange: (e) => setReturnPolicy(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/40 border p-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2", children: "Registration Summary" }),
          [
            { label: "Company", value: companyName || "—" },
            {
              label: "Size",
              value: size.charAt(0).toUpperCase() + size.slice(1)
            },
            { label: "Director", value: directorName || "—" },
            {
              label: "Bank",
              value: bankName ? `${bankName} (${accountType || "—"})` : "—"
            },
            { label: "First Product", value: productName || "—" },
            { label: "Category", value: productCategory || "—" }
          ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: row.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-right max-w-[60%] truncate", children: row.value })
          ] }, row.label))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700", children: "Your registration will be reviewed by our team within 2–3 business days. You will receive an email confirmation with next steps and onboarding documents." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              id: "agree-terms",
              checked: agreed,
              onCheckedChange: (v) => setAgreed(!!v),
              "data-ocid": "agree-terms-checkbox"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Label,
            {
              htmlFor: "agree-terms",
              className: "text-sm text-muted-foreground leading-snug cursor-pointer",
              children: [
                "I agree to LinkUp's",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#059669] underline cursor-pointer", children: "Terms of Service" }),
                ",",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#059669] underline cursor-pointer", children: "Supplier Policy" }),
                ", and confirm that all information provided is accurate."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "flex-1", onClick: goBack, children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "flex-1 bg-[#059669] hover:bg-[#047857] text-white",
              onClick: handleComplete,
              disabled: !agreed,
              "data-ocid": "submit-registration-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-4 mr-2" }),
                "Submit Registration"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  SupplierOnboardingPage
};
