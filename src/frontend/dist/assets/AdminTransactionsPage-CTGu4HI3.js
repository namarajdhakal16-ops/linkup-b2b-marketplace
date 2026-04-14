import { r as reactExports, j as jsxRuntimeExports, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { d as mockTransactions, a as mockBuyers, b as mockSuppliers, c as mockProducts } from "./mockData-BxT47ZmF.js";
import { ADMIN_NAV } from "./AdminDashboardPage-uNaMRBOF.js";
import { D as Download } from "./download-DqICB6rM.js";
import { S as Search } from "./search-DL4UAOS0.js";
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
const statusBadge = {
  completed: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  failed: "bg-red-100 text-red-700"
};
function formatINRShort(v) {
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)}Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)}L`;
  return `₹${v.toLocaleString("en-IN")}`;
}
const PAGE_SIZE = 10;
function AdminTransactionsPage() {
  const [search, setSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const [page, setPage] = reactExports.useState(1);
  const filtered = reactExports.useMemo(() => {
    return mockTransactions.filter((t) => {
      const matchSearch = !search || getBuyerName(t.buyerId).toLowerCase().includes(search.toLowerCase()) || getSupplierName(t.supplierId).toLowerCase().includes(search.toLowerCase()) || String(t.id).includes(search);
      const matchStatus = statusFilter === "all" || t.paymentStatus === statusFilter;
      const txDate = new Date(t.date * 1e3);
      const matchFrom = !dateFrom || txDate >= new Date(dateFrom);
      const matchTo = !dateTo || txDate <= new Date(dateTo);
      return matchSearch && matchStatus && matchFrom && matchTo;
    });
  }, [search, statusFilter, dateFrom, dateTo]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalAmount = filtered.reduce((sum, t) => sum + t.amount, 0);
  const completedAmount = filtered.filter((t) => t.paymentStatus === "completed").reduce((sum, t) => sum + t.amount, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: ADMIN_NAV, portalName: "Admin Control", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Transactions",
        description: "Platform-wide transaction records and payment status",
        breadcrumb: "Administration",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => ue.info("Export initiated"),
            "data-ocid": "export-transactions-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4 mr-1" }),
              " Export CSV"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Records" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground font-display mt-1", children: filtered.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground font-display mt-1", children: formatINRShort(totalAmount) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Completed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-emerald-600 font-display mt-1", children: formatINRShort(completedAmount) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Pending / Failed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-amber-600 font-display mt-1", children: formatINRShort(totalAmount - completedAmount) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-3 mb-4",
        "data-ocid": "transaction-filters",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-48", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "pl-9",
                placeholder: "Search by buyer, supplier or ID...",
                value: search,
                onChange: (e) => {
                  setSearch(e.target.value);
                  setPage(1);
                },
                "data-ocid": "txn-search-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: statusFilter,
              onValueChange: (v) => {
                setStatusFilter(v);
                setPage(1);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", "data-ocid": "txn-status-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Payment status" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "completed", children: "Completed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pending", children: "Pending" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "failed", children: "Failed" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              className: "w-44 text-sm",
              value: dateFrom,
              onChange: (e) => {
                setDateFrom(e.target.value);
                setPage(1);
              },
              "data-ocid": "txn-date-from"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              className: "w-44 text-sm",
              value: dateTo,
              onChange: (e) => {
                setDateTo(e.target.value);
                setPage(1);
              },
              "data-ocid": "txn-date-to"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border overflow-auto bg-card shadow-sm mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground w-10", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Buyer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Supplier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right font-semibold text-foreground", children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Payment Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Date" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paged.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          colSpan: 8,
          className: "px-4 py-10 text-center text-muted-foreground",
          children: "No transactions found."
        }
      ) }) : paged.map((txn, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
          "data-ocid": `txn-row-${txn.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: (page - 1) * PAGE_SIZE + idx + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-xs font-mono text-muted-foreground", children: [
              "#",
              txn.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs max-w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: getBuyerName(txn.buyerId) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs max-w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: getSupplierName(txn.supplierId) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground max-w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate", children: getProductName(txn.productId) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-mono text-sm font-semibold text-foreground", children: formatINRShort(txn.amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs ${statusBadge[txn.paymentStatus] ?? ""}`,
                children: txn.paymentStatus
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: new Date(txn.date * 1e3).toLocaleDateString("en-IN") })
          ]
        },
        txn.id
      )) }),
      paged.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/30 border-t", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "td",
          {
            colSpan: 5,
            className: "px-4 py-3 text-sm font-semibold text-foreground text-right",
            children: [
              "Total (",
              filtered.length,
              " records):"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-mono font-bold text-foreground", children: formatINRShort(totalAmount) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 2 })
      ] }) })
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
    ] })
  ] });
}
export {
  AdminTransactionsPage
};
