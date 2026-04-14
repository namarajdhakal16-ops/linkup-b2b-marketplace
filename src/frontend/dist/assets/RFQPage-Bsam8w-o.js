import { r as reactExports, j as jsxRuntimeExports, f as formatINR, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { S as StatCard } from "./StatCard-Bv93da2j.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BQG8dMKN.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { e as mockRFQs, c as mockProducts, b as mockSuppliers } from "./mockData-BxT47ZmF.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { P as Plus } from "./plus-BYDeClzd.js";
import { F as FileText } from "./file-text-CTliJwMv.js";
import { C as Clock } from "./clock-D5njmlhT.js";
import { C as CircleCheckBig } from "./circle-check-big-FdkHYrhv.js";
import { C as CircleX } from "./circle-x-BfZ9AI6x.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./building-2-DKVBuSES.js";
import "./calculator-CvftqAHB.js";
import "./chart-no-axes-column-Othc_n2I.js";
const STATUS_STYLES = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  quoted: "bg-blue-100 text-blue-700 border-blue-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-red-100 text-red-700 border-red-200"
};
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[status] ?? ""}`,
      children: status.charAt(0).toUpperCase() + status.slice(1)
    }
  );
}
const EMPTY_FORM = {
  productId: "",
  supplierId: "",
  quantity: "",
  requiredDate: "",
  specialRequirements: ""
};
function RFQPage() {
  const [showDialog, setShowDialog] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const counts = {
    submitted: mockRFQs.length,
    pending: mockRFQs.filter((r) => r.status === "pending").length,
    quoted: mockRFQs.filter((r) => r.status === "quoted").length,
    accepted: mockRFQs.filter((r) => r.status === "accepted").length
  };
  function handleSubmit() {
    if (!form.productId || !form.supplierId || !form.quantity) {
      ue.error("Please fill in all required fields.");
      return;
    }
    ue.success(
      "RFQ submitted successfully! Supplier will respond within 24 hours."
    );
    setForm(EMPTY_FORM);
    setShowDialog(false);
  }
  function getProductName(id) {
    var _a;
    return ((_a = mockProducts.find((p) => p.id === id)) == null ? void 0 : _a.name) ?? `Product #${id}`;
  }
  function getSupplierName(id) {
    var _a;
    return ((_a = mockSuppliers.find((s) => s.id === id)) == null ? void 0 : _a.company) ?? id;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "RFQ Management",
        description: "Track and manage your request for quotations.",
        breadcrumb: "Buyer Portal",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            className: "bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
            onClick: () => setShowDialog(true),
            "data-ocid": "rfq-new-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 mr-1.5" }),
              "Submit New RFQ"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Submitted",
          value: counts.submitted,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4" }),
          accent: "blue"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Pending Review",
          value: counts.pending,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4" }),
          accent: "amber"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Quoted",
          value: counts.quoted,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4" }),
          accent: "purple"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Accepted",
          value: counts.accepted,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-4" }),
          accent: "green"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border bg-card overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b bg-muted/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "RFQ ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell", children: "Supplier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell", children: "Qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground hidden lg:table-cell", children: "Required By" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-medium text-muted-foreground", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell", children: "Quote Amt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 font-medium text-muted-foreground", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: mockRFQs.map((rfq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b last:border-0 hover:bg-muted/20 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground", children: [
              "#",
              rfq.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium max-w-[160px] truncate", children: getProductName(rfq.productId) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground hidden md:table-cell", children: getSupplierName(rfq.supplierId) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center hidden sm:table-cell", children: rfq.quantity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground hidden lg:table-cell", children: rfq.requiredDate }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: rfq.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-display font-semibold hidden sm:table-cell", children: rfq.quoteAmount ? formatINR(rfq.quoteAmount) : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "h-7 text-xs",
                  onClick: () => ue.info(`Viewing RFQ #${rfq.id}`),
                  "data-ocid": `rfq-view-${rfq.id}`,
                  children: "View"
                }
              ),
              rfq.status === "quoted" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "h-7 text-xs text-emerald-600 hover:text-emerald-700",
                    onClick: () => ue.success(`RFQ #${rfq.id} accepted!`),
                    "data-ocid": `rfq-accept-${rfq.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-3 mr-1" }),
                      "Accept"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "h-7 text-xs text-red-600 hover:text-red-700",
                    onClick: () => ue.error(`RFQ #${rfq.id} rejected.`),
                    "data-ocid": `rfq-reject-${rfq.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-3 mr-1" }),
                      "Reject"
                    ]
                  }
                )
              ] })
            ] }) })
          ]
        },
        rfq.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showDialog, onOpenChange: setShowDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Submit New RFQ" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rfq-product", children: "Product *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.productId,
              onValueChange: (v) => setForm({ ...form, productId: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "rfq-product", "data-ocid": "rfq-form-product", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select product..." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: mockProducts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, p.id)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rfq-supplier", children: "Supplier *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.supplierId,
              onValueChange: (v) => setForm({ ...form, supplierId: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "rfq-supplier", "data-ocid": "rfq-form-supplier", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select supplier..." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: mockSuppliers.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.id, children: s.company }, s.id)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rfq-qty", children: "Quantity *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "rfq-qty",
                type: "number",
                min: "1",
                placeholder: "e.g. 10",
                value: form.quantity,
                onChange: (e) => setForm({ ...form, quantity: e.target.value }),
                "data-ocid": "rfq-form-qty"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rfq-date", children: "Required By *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "rfq-date",
                type: "date",
                value: form.requiredDate,
                onChange: (e) => setForm({ ...form, requiredDate: e.target.value }),
                "data-ocid": "rfq-form-date"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rfq-req", children: "Special Requirements" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "rfq-req",
              placeholder: "Certifications, delivery terms, warranties...",
              value: form.specialRequirements,
              onChange: (e) => setForm({ ...form, specialRequirements: e.target.value }),
              rows: 3,
              "data-ocid": "rfq-form-requirements"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              className: "flex-1",
              onClick: () => setShowDialog(false),
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              className: "flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
              onClick: handleSubmit,
              "data-ocid": "rfq-form-submit",
              children: "Submit RFQ"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  RFQPage
};
