import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, U as Users, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { ADMIN_NAV } from "./AdminDashboardPage-uNaMRBOF.js";
import { P as Package } from "./index-BfZ639JC.js";
import { C as CreditCard } from "./credit-card-BoogVyUk.js";
import "./menu-dXZt9xRu.js";
import "./index-CPoAQatq.js";
import "./index-CN9hoFXr.js";
import "./StatCard-Bv93da2j.js";
import "./badge-BpqzkKu8.js";
import "./mockData-BxT47ZmF.js";
import "./file-text-CTliJwMv.js";
import "./shield-check-AZO3kdEQ.js";
import "./activity-CK7N99se.js";
import "./generateCategoricalChart-CLakrVV0.js";
import "./BarChart-5YJHTPWT.js";
import "./tag-BO63xnL_.js";
import "./circle-check-big-FdkHYrhv.js";
import "./triangle-alert-Clkdp-lz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode);
const initialBuyerTiers = [
  {
    tier: "tier1",
    label: "Tier 1 — Free",
    minFee: "0",
    rate: "0",
    threshold1: "5000",
    threshold2: "2500000",
    editing: false,
    isFree: true
  },
  {
    tier: "tier2",
    label: "Tier 2 — SME",
    minFee: "1000",
    rate: "0.01",
    threshold1: "5000",
    threshold2: "2500000",
    editing: false,
    isFree: false
  },
  {
    tier: "tier3",
    label: "Tier 3 — Mid-size",
    minFee: "2000",
    rate: "0.01",
    threshold1: "5000",
    threshold2: "2500000",
    editing: false,
    isFree: false
  },
  {
    tier: "tier4",
    label: "Tier 4 — Large Enterprise",
    minFee: "2000",
    rate: "0.01",
    threshold1: "5000",
    threshold2: "2500000",
    editing: false,
    isFree: false
  }
];
const initialSupplierSizes = [
  {
    size: "small",
    label: "Small / Micro",
    minFee: "0",
    commLow: "0",
    commHigh: "0",
    editing: false,
    isFree: true
  },
  {
    size: "medium",
    label: "Medium",
    minFee: "5000",
    commLow: "0.5",
    commHigh: "0.25",
    editing: false,
    isFree: false
  },
  {
    size: "large",
    label: "Large",
    minFee: "5000",
    commLow: "0.5",
    commHigh: "0.25",
    editing: false,
    isFree: false
  }
];
function FieldGroup({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: label }),
    children
  ] });
}
function AdminFeesPage() {
  const [buyerTiers, setBuyerTiers] = reactExports.useState(initialBuyerTiers);
  const [supplierSizes, setSupplierSizes] = reactExports.useState(initialSupplierSizes);
  const [multiRoleMultiplier, setMultiRoleMultiplier] = reactExports.useState("60");
  const [multiRoleEditing, setMultiRoleEditing] = reactExports.useState(false);
  function updateBuyerField(tier, field, value) {
    setBuyerTiers(
      (prev) => prev.map((r) => r.tier === tier ? { ...r, [field]: value } : r)
    );
  }
  function toggleBuyerEdit(tier) {
    setBuyerTiers(
      (prev) => prev.map((r) => {
        if (r.tier !== tier) return r;
        if (r.editing)
          ue.success(`Buyer ${r.label} fee configuration updated`);
        return { ...r, editing: !r.editing };
      })
    );
  }
  function updateSupplierField(size, field, value) {
    setSupplierSizes(
      (prev) => prev.map((r) => r.size === size ? { ...r, [field]: value } : r)
    );
  }
  function toggleSupplierEdit(size) {
    setSupplierSizes(
      (prev) => prev.map((r) => {
        if (r.size !== size) return r;
        if (r.editing)
          ue.success(`Supplier ${r.label} fee configuration updated`);
        return { ...r, editing: !r.editing };
      })
    );
  }
  function saveMultiRole() {
    setMultiRoleEditing(false);
    ue.success("Multi-role discount updated");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: ADMIN_NAV, portalName: "Admin Control", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Fee Management",
        description: "Configure buyer fees, supplier commissions, and multi-role discounts",
        breadcrumb: "Administration"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-8", "data-ocid": "buyer-fee-config", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 rounded bg-[#1e40af] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-3 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground font-display", children: "Buyer Fee Configuration" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card shadow-sm overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 border-b px-5 py-3 grid grid-cols-7 gap-3 text-xs font-semibold text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2", children: "Tier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Min Fee (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rate (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Threshold 1 (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Threshold 2 (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Action" })
        ] }),
        buyerTiers.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-5 py-4 grid grid-cols-7 gap-3 items-end border-b last:border-0 hover:bg-muted/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: row.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: row.isFree ? "No fees applied" : `Min ₹${Number(row.minFee).toLocaleString("en-IN")} + ${row.rate}% above threshold` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Min Fee (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "₹" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    className: "pl-6 h-8 text-sm",
                    value: row.minFee,
                    disabled: !row.editing || row.isFree,
                    onChange: (e) => updateBuyerField(row.tier, "minFee", e.target.value),
                    "data-ocid": `buyer-minfee-${row.tier}`
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Rate (%)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    step: "0.001",
                    className: "pr-6 h-8 text-sm",
                    value: row.rate,
                    disabled: !row.editing || row.isFree,
                    onChange: (e) => updateBuyerField(row.tier, "rate", e.target.value),
                    "data-ocid": `buyer-rate-${row.tier}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "%" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Threshold 1 (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "₹" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    className: "pl-6 h-8 text-sm",
                    value: row.threshold1,
                    disabled: !row.editing || row.isFree,
                    onChange: (e) => updateBuyerField(row.tier, "threshold1", e.target.value),
                    "data-ocid": `buyer-t1-${row.tier}`
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Threshold 2 (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "₹" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    className: "pl-6 h-8 text-sm",
                    value: row.threshold2,
                    disabled: !row.editing || row.isFree,
                    onChange: (e) => updateBuyerField(row.tier, "threshold2", e.target.value),
                    "data-ocid": `buyer-t2-${row.tier}`
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "sm",
                  className: `h-8 text-xs w-full ${row.editing ? "bg-[#059669] hover:bg-emerald-700 text-white" : ""}`,
                  variant: row.editing ? "default" : "outline",
                  onClick: () => toggleBuyerEdit(row.tier),
                  disabled: row.isFree,
                  "data-ocid": `buyer-edit-save-${row.tier}`,
                  children: row.editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-3 mr-1" }),
                    " Save"
                  ] }) : "Edit"
                }
              ) })
            ]
          },
          row.tier
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-8", "data-ocid": "supplier-fee-config", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 rounded bg-[#059669] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-3 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground font-display", children: "Supplier Fee Configuration" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card shadow-sm overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 border-b px-5 py-3 grid grid-cols-6 gap-3 text-xs font-semibold text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2", children: "Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Min Fee (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Comm ≤₹10L (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Comm >₹10L (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Action" })
        ] }),
        supplierSizes.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-5 py-4 grid grid-cols-6 gap-3 items-end border-b last:border-0 hover:bg-muted/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: row.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: row.isFree ? "1 product free for first year" : `Min ₹${Number(row.minFee).toLocaleString("en-IN")} if no sales; ${row.commLow}% on ₹1–10L; ${row.commHigh}% above` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Min Fee (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "₹" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    className: "pl-6 h-8 text-sm",
                    value: row.minFee,
                    disabled: !row.editing || row.isFree,
                    onChange: (e) => updateSupplierField(row.size, "minFee", e.target.value),
                    "data-ocid": `supplier-minfee-${row.size}`
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Comm ≤₹10L (%)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    step: "0.01",
                    className: "pr-6 h-8 text-sm",
                    value: row.commLow,
                    disabled: !row.editing || row.isFree,
                    onChange: (e) => updateSupplierField(row.size, "commLow", e.target.value),
                    "data-ocid": `supplier-commlow-${row.size}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "%" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Comm >₹10L (%)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    step: "0.01",
                    className: "pr-6 h-8 text-sm",
                    value: row.commHigh,
                    disabled: !row.editing || row.isFree,
                    onChange: (e) => updateSupplierField(row.size, "commHigh", e.target.value),
                    "data-ocid": `supplier-commhigh-${row.size}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "%" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "sm",
                  className: `h-8 text-xs w-full ${row.editing ? "bg-[#059669] hover:bg-emerald-700 text-white" : ""}`,
                  variant: row.editing ? "default" : "outline",
                  onClick: () => toggleSupplierEdit(row.size),
                  disabled: row.isFree,
                  "data-ocid": `supplier-edit-save-${row.size}`,
                  children: row.editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-3 mr-1" }),
                    " Save"
                  ] }) : "Edit"
                }
              ) })
            ]
          },
          row.size
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "multi-role-config", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 rounded bg-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-3 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground font-display", children: "Multi-Role Discount" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card shadow-sm p-5 max-w-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "For users registered as both Buyer and Supplier, the minimum fee is calculated as a percentage of the combined buyer and supplier fees." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "multi-role-multiplier",
                className: "text-xs text-muted-foreground mb-1 block",
                children: "Minimum Fee Multiplier (%)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "multi-role-multiplier",
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "1",
                  className: "pr-8 text-sm",
                  value: multiRoleMultiplier,
                  disabled: !multiRoleEditing,
                  onChange: (e) => setMultiRoleMultiplier(e.target.value),
                  "data-ocid": "multi-role-multiplier-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", children: "%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              "Current: minimum fee = ",
              multiRoleMultiplier,
              "% of (buyer fee + supplier fee)"
            ] })
          ] }),
          multiRoleEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              className: "bg-[#059669] hover:bg-emerald-700 text-white",
              onClick: saveMultiRole,
              "data-ocid": "save-multi-role-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-4 mr-1" }),
                " Save"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => setMultiRoleEditing(true),
              "data-ocid": "edit-multi-role-btn",
              children: "Edit"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminFeesPage
};
