import { c as createLucideIcon, r as reactExports, d as useNavigate, j as jsxRuntimeExports, k as Settings, A as ArrowLeft, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout, U as User } from "./PortalLayout-CnOgzSAn.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { C as Card, c as CardContent } from "./card-CEx7R28g.js";
import { C as Checkbox } from "./checkbox-D97hW3ci.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { B as Building2 } from "./building-2-DKVBuSES.js";
import { T as Tag } from "./tag-BO63xnL_.js";
import { C as CircleCheck } from "./circle-check--VULWhTa.js";
import { A as ArrowRight } from "./arrow-right-BJb97rUV.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./file-text-CTliJwMv.js";
import "./calculator-CvftqAHB.js";
import "./chart-no-axes-column-Othc_n2I.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
];
const ClipboardCheck = createLucideIcon("clipboard-check", __iconNode);
const STEPS = [
  "Company Info",
  "Contact Details",
  "Tier Selection",
  "Preferences",
  "Confirm"
];
const STEP_ICONS = [Building2, User, Tag, Settings, ClipboardCheck];
const TIERS = [
  {
    id: "tier1",
    label: "Tier 1 — Free",
    price: "₹0 / year",
    features: ["3 RFQs/month", "Basic catalog access", "Email support"],
    color: "border-muted bg-muted/20"
  },
  {
    id: "tier2",
    label: "Tier 2 — SME",
    price: "₹1,000 min fee",
    features: [
      "Unlimited RFQs",
      "Priority listings",
      "Dedicated AM",
      "Analytics"
    ],
    color: "border-[#1e40af]/40 bg-blue-50/30"
  },
  {
    id: "tier3",
    label: "Tier 3 — Mid-size",
    price: "₹2,000 min fee",
    features: [
      "Everything in T2",
      "Bulk discounts",
      "5 user seats",
      "API access"
    ],
    color: "border-[#059669]/40 bg-emerald-50/30"
  },
  {
    id: "tier4",
    label: "Tier 4 — Enterprise",
    price: "₹2,000 min fee",
    features: [
      "Everything in T3",
      "Verified suppliers only",
      "24/7 support",
      "Unlimited seats"
    ],
    color: "border-purple-300 bg-purple-50/20"
  }
];
const CATEGORIES = [
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery"
];
const INITIAL = {
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
  agreed: false
};
function BuyerOnboardingPage() {
  var _a, _b;
  const [step, setStep] = reactExports.useState(0);
  const [data, setData] = reactExports.useState(INITIAL);
  const navigate = useNavigate();
  function update(key, value) {
    setData((prev) => ({ ...prev, [key]: value }));
  }
  function toggleCategory(cat) {
    const next = data.categories.includes(cat) ? data.categories.filter((c) => c !== cat) : [...data.categories, cat];
    update("categories", next);
  }
  function validateStep() {
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
      ue.error("Please fill in all required fields to proceed.");
      return;
    }
    setStep((s) => s + 1);
  }
  function handleSubmit() {
    if (!data.agreed) {
      ue.error("Please agree to Terms and Conditions.");
      return;
    }
    ue.success(
      "Registration submitted for review! You'll receive a confirmation email within 24 hours."
    );
    navigate({ to: "/buyer/dashboard" });
  }
  const StepIcon = STEP_ICONS[step];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-[#1e40af] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { className: "size-5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider font-medium", children: "Buyer Registration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl font-bold font-display", children: [
            "Step ",
            step + 1,
            ": ",
            STEPS[step]
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-2", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-2 flex-1 rounded-full transition-all ${i < step ? "bg-[#059669]" : i === step ? "bg-[#1e40af]" : "bg-muted"}`
        },
        s
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-[10px] font-medium ${i === step ? "text-[#1e40af]" : i < step ? "text-[#059669]" : "text-muted-foreground"}`,
          children: s
        },
        s
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-5", children: [
      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-company", children: "Company Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "ob-company",
              placeholder: "e.g. Priya Industries Pvt Ltd",
              value: data.companyName,
              onChange: (e) => update("companyName", e.target.value),
              "data-ocid": "ob-company-name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Industry *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: data.industry,
                onValueChange: (v) => update("industry", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "ob-industry", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select..." }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                    "Manufacturing",
                    "Construction",
                    "Automotive",
                    "Pharma",
                    "Textiles",
                    "Chemical",
                    "Mining",
                    "Aerospace"
                  ].map((ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ind, children: ind }, ind)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Company Size *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: data.companySize,
                onValueChange: (v) => update("companySize", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "ob-company-size", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Employees..." }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["1–10", "11–50", "51–200", "201–500", "500+"].map(
                    (s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)
                  ) })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-tax", children: "Tax ID / PAN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "ob-tax",
                placeholder: "AAAPL1234C",
                value: data.taxId,
                onChange: (e) => update("taxId", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-gst", children: "GST Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "ob-gst",
                placeholder: "27AABCU9603R1ZX",
                value: data.gstNumber,
                onChange: (e) => update("gstNumber", e.target.value)
              }
            )
          ] })
        ] })
      ] }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-name", children: "Contact Person *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "ob-name",
                placeholder: "Full name",
                value: data.contactName,
                onChange: (e) => update("contactName", e.target.value),
                "data-ocid": "ob-contact-name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-phone", children: "Phone *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "ob-phone",
                placeholder: "+91 98765 43210",
                value: data.phone,
                onChange: (e) => update("phone", e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-email", children: "Business Email *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "ob-email",
              type: "email",
              placeholder: "contact@company.com",
              value: data.email,
              onChange: (e) => update("email", e.target.value),
              "data-ocid": "ob-email"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-address", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "ob-address",
              placeholder: "Street / Area",
              value: data.address,
              onChange: (e) => update("address", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-city", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "ob-city",
                placeholder: "City",
                value: data.city,
                onChange: (e) => update("city", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "State" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: data.state,
                onValueChange: (v) => update("state", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "State" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                    "Maharashtra",
                    "Gujarat",
                    "Rajasthan",
                    "Delhi",
                    "Karnataka",
                    "Tamil Nadu",
                    "Telangana",
                    "Uttar Pradesh",
                    "Punjab",
                    "West Bengal"
                  ].map((st) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: st, children: st }, st)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ob-pin", children: "PIN Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "ob-pin",
                placeholder: "400001",
                value: data.pin,
                onChange: (e) => update("pin", e.target.value)
              }
            )
          ] })
        ] })
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `rounded-lg border-2 p-4 text-left transition-all ${t.color} ${data.tier === t.id ? "ring-2 ring-[#1e40af] ring-offset-1" : "hover:opacity-80"}`,
          onClick: () => update("tier", t.id),
          "data-ocid": `tier-select-${t.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: t.label }),
              data.tier === t.id && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-[#1e40af] shrink-0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-[#1e40af] mb-2", children: t.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "text-xs text-muted-foreground flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-[#059669] shrink-0" }),
                  f
                ]
              },
              f
            )) })
          ]
        },
        t.id
      )) }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Purchase Categories * (select all that apply)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2.5", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2.5 p-3 rounded-lg border hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: `cat-${cat}`,
                    checked: data.categories.includes(cat),
                    onCheckedChange: () => toggleCategory(cat),
                    "data-ocid": `category-${cat.toLowerCase().replace(/ /g, "-")}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: `cat-${cat}`,
                    className: "text-sm cursor-pointer",
                    children: cat
                  }
                )
              ]
            },
            cat
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Risk Tolerance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["low", "medium", "high"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => update("riskTolerance", r),
              className: `flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all capitalize ${data.riskTolerance === r ? "border-[#1e40af] bg-blue-50 text-[#1e40af]" : "border-border hover:bg-muted/30"}`,
              "data-ocid": `risk-${r}`,
              children: r
            },
            r
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Payment Method *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: data.paymentMethod,
              onValueChange: (v) => update("paymentMethod", v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "ob-payment-method", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select payment method..." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "bank_transfer", children: "Bank Transfer / NEFT / RTGS" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "upi", children: "UPI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "credit_line", children: "Credit Line" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cheque", children: "Cheque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "lc", children: "Letter of Credit (LC)" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm text-muted-foreground uppercase tracking-wider", children: "Review Your Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-3 col-span-2 sm:col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider", children: "Company" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: data.companyName || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              data.industry,
              " · ",
              data.companySize,
              " employees"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              "GST: ",
              data.gstNumber || "—"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-3 col-span-2 sm:col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: data.contactName || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: data.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: data.phone }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              data.city,
              data.state ? `, ${data.state}` : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider", children: "Selected Tier" }),
            data.tier ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[#1e40af]/10 text-[#1e40af] border-[#1e40af]/20 border", children: (_a = TIERS.find((t) => t.id === data.tier)) == null ? void 0 : _a.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider", children: "Preferences" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
              "Categories:",
              " ",
              data.categories.length > 0 ? data.categories.join(", ") : "—"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1 capitalize", children: [
              "Risk: ",
              data.riskTolerance
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", children: [
              "Payment: ",
              ((_b = data.paymentMethod) == null ? void 0 : _b.replace(/_/g, " ")) || "—"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg border border-[#1e40af]/20 bg-blue-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              id: "agree-terms",
              checked: data.agreed,
              onCheckedChange: (checked) => update("agreed", !!checked),
              "data-ocid": "ob-agree-terms"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Label,
            {
              htmlFor: "agree-terms",
              className: "text-sm cursor-pointer leading-relaxed",
              children: [
                "I agree to LinkUp's",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1e40af] underline cursor-pointer", children: "Terms of Service" }),
                " ",
                "and",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1e40af] underline cursor-pointer", children: "Privacy Policy" }),
                ". I confirm that all information provided is accurate and up to date."
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: () => step === 0 ? navigate({ to: "/buyer/dashboard" }) : setStep((s) => s - 1),
          "data-ocid": "ob-back-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4 mr-1.5" }),
            step === 0 ? "Cancel" : "Back"
          ]
        }
      ),
      step < STEPS.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          className: "bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
          onClick: handleNext,
          "data-ocid": "ob-next-btn",
          children: [
            "Next",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 ml-1.5" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          className: "bg-[#059669] hover:bg-[#047857] text-white",
          onClick: handleSubmit,
          "data-ocid": "ob-submit-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 mr-1.5" }),
            "Submit Registration"
          ]
        }
      )
    ] })
  ] }) });
}
export {
  BuyerOnboardingPage
};
