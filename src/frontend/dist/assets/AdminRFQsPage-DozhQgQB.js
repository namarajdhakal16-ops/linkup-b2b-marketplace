import { r as reactExports, j as jsxRuntimeExports, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogFooter } from "./dialog-BQG8dMKN.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { e as mockRFQs, a as mockBuyers, b as mockSuppliers, c as mockProducts } from "./mockData-BxT47ZmF.js";
import { ADMIN_NAV } from "./AdminDashboardPage-uNaMRBOF.js";
import { E as Eye } from "./eye-BQ8gUFW0.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./StatCard-Bv93da2j.js";
import "./file-text-CTliJwMv.js";
import "./credit-card-BoogVyUk.js";
import "./shield-check-AZO3kdEQ.js";
import "./activity-CK7N99se.js";
import "./generateCategoricalChart-CLakrVV0.js";
import "./BarChart-5YJHTPWT.js";
import "./tag-BO63xnL_.js";
import "./circle-check-big-FdkHYrhv.js";
import "./triangle-alert-Clkdp-lz.js";
const statusBadge = {
  pending: "bg-amber-100 text-amber-700",
  quoted: "bg-blue-100 text-blue-700",
  accepted: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700"
};
function getBuyerName(id) {
  var _a;
  return ((_a = mockBuyers.find((b) => b.id === id)) == null ? void 0 : _a.company) ?? id;
}
function getSupplierName(id) {
  var _a;
  return ((_a = mockSuppliers.find((s) => s.id === id)) == null ? void 0 : _a.company) ?? id;
}
function getProductName(id) {
  var _a;
  return ((_a = mockProducts.find((p) => p.id === id)) == null ? void 0 : _a.name) ?? `Product #${id}`;
}
const PAGE_SIZE = 10;
function AdminRFQsPage() {
  const [rfqs, setRfqs] = reactExports.useState(mockRFQs);
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(1);
  const [viewRFQ, setViewRFQ] = reactExports.useState(null);
  const [editRFQ, setEditRFQ] = reactExports.useState(null);
  const [editStatus, setEditStatus] = reactExports.useState("pending");
  const filtered = reactExports.useMemo(() => {
    return rfqs.filter(
      (r) => statusFilter === "all" || r.status === statusFilter
    );
  }, [rfqs, statusFilter]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  function handleUpdateStatus() {
    if (!editRFQ) return;
    setRfqs(
      (prev) => prev.map((r) => r.id === editRFQ.id ? { ...r, status: editStatus } : r)
    );
    setEditRFQ(null);
    ue.success("RFQ status updated");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: ADMIN_NAV, portalName: "Admin Control", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "RFQ Management",
        description: "Monitor all Request for Quotation activity on the platform",
        breadcrumb: "Administration"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-4", "data-ocid": "rfq-filters", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: statusFilter,
          onValueChange: (v) => {
            setStatusFilter(v);
            setPage(1);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-48", "data-ocid": "rfq-status-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by status" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pending", children: "Pending" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "quoted", children: "Quoted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "accepted", children: "Accepted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rejected", children: "Rejected" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-sm text-muted-foreground flex items-center", children: [
        filtered.length,
        " RFQs"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border overflow-auto bg-card shadow-sm mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground w-10", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Buyer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Supplier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Quote Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Created" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paged.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          colSpan: 9,
          className: "px-4 py-10 text-center text-muted-foreground",
          children: "No RFQs found."
        }
      ) }) : paged.map((rfq, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
          "data-ocid": `rfq-row-${rfq.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: (page - 1) * PAGE_SIZE + idx + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-xs max-w-36", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: getBuyerName(rfq.buyerId) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: rfq.buyerId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-xs max-w-36", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: getSupplierName(rfq.supplierId) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: rfq.supplierId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground max-w-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate", children: getProductName(rfq.productId) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-foreground", children: rfq.quantity.toLocaleString("en-IN") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs ${statusBadge[rfq.status] ?? ""}`,
                children: rfq.status
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs font-mono text-foreground", children: rfq.quoteAmount ? `₹${rfq.quoteAmount.toLocaleString("en-IN")}` : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: new Date(rfq.createdAt * 1e3).toLocaleDateString("en-IN") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "h-7 text-xs",
                  onClick: () => setViewRFQ(rfq),
                  "data-ocid": `view-rfq-${rfq.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-3 mr-1" }),
                    " View"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "h-7 text-xs",
                  onClick: () => {
                    setEditRFQ(rfq);
                    setEditStatus(rfq.status);
                  },
                  "data-ocid": `update-rfq-${rfq.id}`,
                  children: "Update"
                }
              )
            ] }) })
          ]
        },
        rfq.id
      )) })
    ] }) }),
    totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Showing ",
        (page - 1) * PAGE_SIZE + 1,
        "–",
        Math.min(page * PAGE_SIZE, filtered.length),
        " of ",
        filtered.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => setPage((p) => Math.max(1, p - 1)),
            disabled: page === 1,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
            disabled: page === totalPages,
            children: "Next"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!viewRFQ,
        onOpenChange: (o) => {
          if (!o) setViewRFQ(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "RFQ #",
            viewRFQ == null ? void 0 : viewRFQ.id,
            " Details"
          ] }) }),
          viewRFQ && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Buyer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: getBuyerName(viewRFQ.buyerId) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Supplier" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: getSupplierName(viewRFQ.supplierId) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Product" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: getProductName(viewRFQ.productId) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Quantity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: viewRFQ.quantity })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Required Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: viewRFQ.requiredDate })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-xs ${statusBadge[viewRFQ.status]}`, children: viewRFQ.status })
              ] }),
              viewRFQ.quoteAmount && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Quote Amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium font-mono", children: [
                  "₹",
                  viewRFQ.quoteAmount.toLocaleString("en-IN")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Special Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-muted/50 rounded p-3 text-xs", children: viewRFQ.specialRequirements || "None" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => setViewRFQ(null),
              children: "Close"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!editRFQ,
        onOpenChange: (o) => {
          if (!o) setEditRFQ(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Update RFQ #",
            editRFQ == null ? void 0 : editRFQ.id,
            " Status"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: editStatus,
              onValueChange: (v) => setEditStatus(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "rfq-status-select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pending", children: "Pending" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "quoted", children: "Quoted" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "accepted", children: "Accepted" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rejected", children: "Rejected" })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => setEditRFQ(null),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                onClick: handleUpdateStatus,
                "data-ocid": "save-rfq-status-btn",
                children: "Update Status"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  AdminRFQsPage
};
