import { d as useNavigate, j as jsxRuntimeExports, S as ShoppingCart, U as Users, f as formatINR, C as ChevronRight } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { S as StatCard } from "./StatCard-Bv93da2j.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CEx7R28g.js";
import { d as mockTransactions, c as mockProducts, b as mockSuppliers } from "./mockData-BxT47ZmF.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { F as FileText } from "./file-text-CTliJwMv.js";
import { T as TrendingUp } from "./trending-up-Ca1toMKI.js";
import { S as Star } from "./star-7OWaTLG1.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-Othc_n2I.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./building-2-DKVBuSES.js";
import "./calculator-CvftqAHB.js";
function statusBadge(status) {
  const map = {
    completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    failed: "bg-red-100 text-red-700 border-red-200"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${map[status] ?? "bg-muted text-muted-foreground border-border"}`,
      children: status.charAt(0).toUpperCase() + status.slice(1)
    }
  );
}
function getProductName(id) {
  var _a;
  return ((_a = mockProducts.find((p) => p.id === id)) == null ? void 0 : _a.name) ?? `Product #${id}`;
}
function getSupplierName(id) {
  var _a;
  return ((_a = mockSuppliers.find((s) => s.id === id)) == null ? void 0 : _a.company) ?? id;
}
function BuyerDashboardPage() {
  const navigate = useNavigate();
  const recentTx = mockTransactions.slice(0, 5);
  const topSuppliers = mockSuppliers.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Welcome back, Priya Industries",
        description: "Here's what's happening with your procurement today.",
        breadcrumb: "Buyer Portal",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-semibold", children: "✓ Verified Buyer · Tier 3" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Total Orders",
          value: "42",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-4" }),
          trend: 8,
          trendLabel: "vs last month",
          accent: "blue"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Pending RFQs",
          value: "5",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4" }),
          trend: -2,
          trendLabel: "vs last month",
          accent: "amber"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Active Suppliers",
          value: "12",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4" }),
          trend: 3,
          trendLabel: "vs last month",
          accent: "green"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Total Spend",
          value: "₹18.4L",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "size-4" }),
          trend: 12,
          trendLabel: "vs last month",
          accent: "purple"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold", children: "Recent Transactions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground", children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground hidden sm:table-cell", children: "Supplier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium text-muted-foreground", children: "Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-2.5 font-medium text-muted-foreground", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: recentTx.map((tx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b last:border-0 hover:bg-muted/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground whitespace-nowrap", children: new Date(tx.date * 1e3).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short"
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium max-w-[180px] truncate", children: getProductName(tx.productId) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground hidden sm:table-cell", children: getSupplierName(tx.supplierId) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold font-display", children: formatINR(tx.amount) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: statusBadge(tx.paymentStatus) })
              ]
            },
            tx.id
          )) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold", children: "Top Suppliers" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex flex-col gap-3", children: topSuppliers.map((sup) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 p-3 rounded-lg border bg-muted/20 hover:bg-muted/40 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-sm shrink-0", children: sup.company.slice(0, 2).toUpperCase() }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm truncate", children: sup.company }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 text-amber-400 fill-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    sup.rating,
                    " · ",
                    sup.products,
                    " products"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: "size-7 shrink-0",
                  onClick: () => navigate({ to: "/buyer/suppliers" }),
                  "aria-label": "View supplier",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3.5" })
                }
              )
            ]
          },
          sup.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold", children: "Quick Actions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            className: "bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
            onClick: () => navigate({ to: "/buyer/catalog" }),
            "data-ocid": "qa-browse-catalog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-4 mr-2" }),
              "Browse Catalog"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            className: "bg-[#059669] hover:bg-[#047857] text-white",
            onClick: () => navigate({ to: "/buyer/rfq" }),
            "data-ocid": "qa-submit-rfq",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 mr-2" }),
              "Submit RFQ"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => navigate({ to: "/buyer/analytics" }),
            "data-ocid": "qa-view-analytics",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "size-4 mr-2" }),
              "View Analytics"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  BuyerDashboardPage
};
