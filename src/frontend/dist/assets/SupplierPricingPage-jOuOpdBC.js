import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as SUPPLIER_SIZE_LABELS, f as formatINR, n as calculateSupplierFee, i as calculateMultiRoleFee } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Switch } from "./switch-DmeMvWqA.js";
import { S as SUPPLIER_NAV } from "./SupplierDashboardPage-cWtvCcFb.js";
import { C as Calculator } from "./calculator-CvftqAHB.js";
import { L as Layers } from "./layers-DEB89b4a.js";
import "./button-DhRdAl0g.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./StatCard-Bv93da2j.js";
import "./mockData-BxT47ZmF.js";
import "./tag-BO63xnL_.js";
import "./chart-no-axes-column-Othc_n2I.js";
import "./credit-card-BoogVyUk.js";
import "./circle-check-big-FdkHYrhv.js";
import "./trending-up-Ca1toMKI.js";
import "./generateCategoricalChart-CLakrVV0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode);
const SIZE_INFO = [
  {
    v: "small",
    label: "Small / Micro",
    desc: "1 product free in first year. Additional products use normal rates.",
    badge: "bg-emerald-100 text-emerald-700",
    features: [
      "1 product free (Year 1)",
      "Basic analytics",
      "Standard support"
    ]
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
      "Verified badge"
    ]
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
      "API access"
    ]
  }
];
const FEE_TABLE = [
  { range: "No sales (any size)", fee: "Min ₹5,000 / month" },
  {
    range: "₹1 – ₹10 Lakh (Medium/Large)",
    fee: "0.5% of transaction value (min ₹5,000)"
  },
  {
    range: "> ₹10 Lakh (Medium/Large)",
    fee: "0.25% of total transaction value"
  },
  { range: "Small / Micro — First product", fee: "Free for Year 1" },
  { range: "Small / Micro — Additional products", fee: "Normal rates apply" }
];
function SupplierPricingPage() {
  const [size, setSize] = reactExports.useState("medium");
  const [salesVolume, setSalesVolume] = reactExports.useState("5000000");
  const [multiRole, setMultiRole] = reactExports.useState(false);
  const [buyerTier] = reactExports.useState("tier3");
  const [buyerAmount] = reactExports.useState(2e6);
  const numVolume = Number.parseFloat(salesVolume.replace(/,/g, "")) || 0;
  const supplierFee = calculateSupplierFee(size, numVolume);
  const commissionRate = size === "small" ? 0 : numVolume === 0 ? 0 : numVolume <= 1e6 ? 5e-3 : 25e-4;
  const commissionAmt = numVolume * commissionRate;
  const minFee = size === "small" ? 0 : 5e3;
  const totalFee = multiRole ? calculateMultiRoleFee(buyerTier, size, buyerAmount, numVolume) : supplierFee;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: SUPPLIER_NAV, portalName: "Supplier Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Pricing & Fee Calculator",
        description: "Understand your platform commission and calculate exact fees",
        breadcrumb: "Supplier Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card shadow-sm p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Fee Calculator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Real-time calculation based on your tier" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium block", children: "Company Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: Object.keys(SUPPLIER_SIZE_LABELS).map(
            (s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSize(s),
                "data-ocid": `size-card-${s}`,
                className: `p-2.5 rounded-lg border-2 text-left transition-all ${size === s ? "border-[#059669]/50 bg-[#059669]/5 ring-1 ring-[#059669]/20" : "border-border hover:border-muted-foreground/30"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: SUPPLIER_SIZE_LABELS[s] })
              },
              s
            )
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Monthly Sales Volume (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-sm", children: "₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "0",
                className: "pl-7 font-mono",
                value: salesVolume,
                onChange: (e) => setSalesVolume(e.target.value),
                "data-ocid": "sales-volume-input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border bg-muted/30 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "size-4 text-[#1e40af]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Multi-Role Discount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Registered as Buyer + Supplier (40% off combined)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: multiRole,
              onCheckedChange: setMultiRole,
              "data-ocid": "multi-role-toggle"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-[#059669]/5 border border-[#059669]/20 p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Minimum Fee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: formatINR(minFee) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Commission Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: commissionRate > 0 ? `${(commissionRate * 100).toFixed(2)}%` : size === "small" ? "Free" : "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Commission Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: formatINR(commissionAmt) })
          ] }),
          multiRole && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Multi-role Discount (40%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-emerald-600", children: [
              "− ",
              formatINR(supplierFee * 0.4)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-2 flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Total Platform Fee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold text-[#059669]", children: formatINR(totalFee) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-4 text-amber-600 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700", children: "Fees are auto-deducted on monthly settlement. Commission applies to completed transactions only." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Tier Benefits" }),
        SIZE_INFO.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-lg border-2 p-4 transition-all ${size === s.v ? "border-[#059669]/40 bg-[#059669]/5" : "border-border bg-card"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-[10px] ${s.badge}`, children: size === s.v ? "Active" : "View" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: s.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: s.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-1.5 text-xs text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#059669] shrink-0" }),
                    f
                  ]
                },
                f
              )) })
            ]
          },
          s.v
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Fee Structure Reference" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Sales Range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Platform Fee" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: FEE_TABLE.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b last:border-0 hover:bg-muted/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: row.range }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-[#059669]", children: row.fee })
            ]
          },
          row.range
        )) })
      ] }) })
    ] })
  ] });
}
export {
  SupplierPricingPage
};
