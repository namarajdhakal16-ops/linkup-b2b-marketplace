import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as formatINR, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { S as StatCard } from "./StatCard-Bv93da2j.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogFooter } from "./dialog-BQG8dMKN.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { e as mockRFQs, a as mockBuyers, c as mockProducts } from "./mockData-BxT47ZmF.js";
import { S as SUPPLIER_NAV, C as ClipboardList } from "./SupplierDashboardPage-cWtvCcFb.js";
import { E as Eye } from "./eye-BQ8gUFW0.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
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
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
];
const CalendarClock = createLucideIcon("calendar-clock", __iconNode);
const STATUS_BADGES = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  quoted: "bg-blue-100 text-blue-700 border-blue-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-red-100 text-red-700 border-red-200"
};
const TABS = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "quoted", label: "Quoted" },
  { key: "accepted", label: "Accepted" },
  { key: "rejected", label: "Rejected" }
];
function RFQLeadsPage() {
  const [rfqs, setRfqs] = reactExports.useState([...mockRFQs]);
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const [viewRFQ, setViewRFQ] = reactExports.useState(null);
  const [quoteRFQ, setQuoteRFQ] = reactExports.useState(null);
  const [quotePrice, setQuotePrice] = reactExports.useState("");
  const [quoteNotes, setQuoteNotes] = reactExports.useState("");
  const [quoteValidity, setQuoteValidity] = reactExports.useState("");
  const filtered = reactExports.useMemo(
    () => rfqs.filter((r) => activeTab === "all" || r.status === activeTab),
    [rfqs, activeTab]
  );
  const counts = reactExports.useMemo(
    () => ({
      all: rfqs.length,
      pending: rfqs.filter((r) => r.status === "pending").length,
      quoted: rfqs.filter((r) => r.status === "quoted").length,
      accepted: rfqs.filter((r) => r.status === "accepted").length,
      rejected: rfqs.filter((r) => r.status === "rejected").length
    }),
    [rfqs]
  );
  function handleSubmitQuote() {
    if (!quoteRFQ || !quotePrice) {
      ue.error("Quote price is required");
      return;
    }
    setRfqs(
      (prev) => prev.map(
        (r) => r.id === quoteRFQ.id ? {
          ...r,
          status: "quoted",
          quoteAmount: Number(quotePrice)
        } : r
      )
    );
    ue.success(`Quote submitted for RFQ #${quoteRFQ.id}!`);
    setQuoteRFQ(null);
    setQuotePrice("");
    setQuoteNotes("");
    setQuoteValidity("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: SUPPLIER_NAV, portalName: "Supplier Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "RFQ Leads",
        description: "Incoming buyer quotation requests — respond quickly to win orders",
        breadcrumb: "Supplier Portal",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "size-4 text-amber-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-amber-700 font-medium", children: [
            counts.pending,
            " awaiting response"
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Received", value: counts.all, accent: "blue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Pending Response",
          value: counts.pending,
          accent: "amber"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Quoted", value: counts.quoted, accent: "purple" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Accepted", value: counts.accepted, accent: "green" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Rejected", value: counts.rejected })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 border-b mb-5 overflow-x-auto", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setActiveTab(tab.key),
        "data-ocid": `rfq-tab-${tab.key}`,
        className: `px-4 py-2.5 text-sm font-medium border-b-2 -mb-px whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === tab.key ? "border-[#059669] text-[#059669]" : "border-transparent text-muted-foreground hover:text-foreground"}`,
        children: [
          tab.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] px-1.5 py-0", children: counts[tab.key] })
        ]
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border bg-card shadow-sm overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/50 border-b", children: [
        "RFQ ID",
        "Buyer Company",
        "Product",
        "Qty",
        "Required Date",
        "Status",
        "Received",
        "Actions"
      ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "th",
        {
          className: "px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap",
          children: h
        },
        h
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          colSpan: 8,
          className: "px-4 py-10 text-center text-muted-foreground",
          children: "No RFQs found for this filter."
        }
      ) }) : filtered.map((rfq) => {
        const buyer = mockBuyers.find((b) => b.id === rfq.buyerId);
        const product = mockProducts.find(
          (p) => p.id === rfq.productId
        );
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
            "data-ocid": `rfq-row-${rfq.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-mono text-xs font-medium", children: [
                "RFQ-",
                rfq.id
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: (buyer == null ? void 0 : buyer.company) ?? rfq.buyerId }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: buyer == null ? void 0 : buyer.location })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 max-w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-foreground", children: (product == null ? void 0 : product.name) ?? `Product #${rfq.productId}` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-medium", children: rfq.quantity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "size-3.5 text-muted-foreground shrink-0" }),
                rfq.requiredDate
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_BADGES[rfq.status]}`,
                  children: rfq.status.charAt(0).toUpperCase() + rfq.status.slice(1)
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground whitespace-nowrap", children: new Date(rfq.createdAt * 1e3).toLocaleDateString(
                "en-IN"
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 px-2 text-xs",
                    onClick: () => setViewRFQ(rfq),
                    "data-ocid": `view-rfq-${rfq.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-3 mr-1" }),
                      "View"
                    ]
                  }
                ),
                rfq.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "bg-[#059669] hover:bg-[#047857] text-white h-7 px-2 text-xs",
                    onClick: () => {
                      setQuoteRFQ(rfq);
                      setQuotePrice("");
                      setQuoteNotes("");
                      setQuoteValidity("");
                    },
                    "data-ocid": `quote-rfq-${rfq.id}`,
                    children: "Submit Quote"
                  }
                )
              ] }) })
            ]
          },
          rfq.id
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!viewRFQ,
        onOpenChange: (o) => {
          if (!o) setViewRFQ(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "RFQ #",
            viewRFQ == null ? void 0 : viewRFQ.id,
            " Details"
          ] }) }),
          viewRFQ && (() => {
            const buyer = mockBuyers.find((b) => b.id === viewRFQ.buyerId);
            const product = mockProducts.find(
              (p) => p.id === viewRFQ.productId
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
              [
                {
                  label: "Buyer",
                  value: (buyer == null ? void 0 : buyer.company) ?? viewRFQ.buyerId
                },
                {
                  label: "Product",
                  value: (product == null ? void 0 : product.name) ?? `Product #${viewRFQ.productId}`
                },
                { label: "Quantity", value: String(viewRFQ.quantity) },
                { label: "Required By", value: viewRFQ.requiredDate },
                {
                  label: "Status",
                  value: viewRFQ.status.charAt(0).toUpperCase() + viewRFQ.status.slice(1)
                },
                ...viewRFQ.quoteAmount ? [
                  {
                    label: "Quote Amount",
                    value: formatINR(viewRFQ.quoteAmount)
                  }
                ] : []
              ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start justify-between py-2 border-b last:border-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: row.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground text-right max-w-[60%]", children: row.value })
                  ]
                },
                row.label
              )),
              viewRFQ.specialRequirements && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/40 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-1", children: "Special Requirements" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: viewRFQ.specialRequirements })
              ] })
            ] });
          })(),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setViewRFQ(null), children: "Close" }),
            (viewRFQ == null ? void 0 : viewRFQ.status) === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "bg-[#059669] hover:bg-[#047857] text-white",
                onClick: () => {
                  setQuoteRFQ(viewRFQ);
                  setViewRFQ(null);
                },
                children: "Submit Quote"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!quoteRFQ,
        onOpenChange: (o) => {
          if (!o) setQuoteRFQ(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Submit Quote — RFQ #",
            quoteRFQ == null ? void 0 : quoteRFQ.id
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Quote Price (₹) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  placeholder: "Enter total quote amount",
                  value: quotePrice,
                  onChange: (e) => setQuotePrice(e.target.value),
                  "data-ocid": "quote-price-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Quote Validity Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "date",
                  value: quoteValidity,
                  onChange: (e) => setQuoteValidity(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Notes / Terms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  rows: 3,
                  placeholder: "Delivery timeline, payment terms, special conditions...",
                  value: quoteNotes,
                  onChange: (e) => setQuoteNotes(e.target.value),
                  "data-ocid": "quote-notes-input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setQuoteRFQ(null), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "bg-[#059669] hover:bg-[#047857] text-white",
                onClick: handleSubmitQuote,
                "data-ocid": "submit-quote-btn",
                children: "Submit Quote"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  RFQLeadsPage
};
