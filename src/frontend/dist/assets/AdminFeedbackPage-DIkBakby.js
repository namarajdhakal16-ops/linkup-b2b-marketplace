import { r as reactExports, j as jsxRuntimeExports, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogFooter } from "./dialog-BQG8dMKN.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { h as mockFeedback } from "./mockData-BxT47ZmF.js";
import { ADMIN_NAV } from "./AdminDashboardPage-uNaMRBOF.js";
import { E as Eye } from "./eye-BQ8gUFW0.js";
import { S as Star } from "./star-7OWaTLG1.js";
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
  new: "bg-blue-100 text-blue-700",
  reviewed: "bg-amber-100 text-amber-700",
  closed: "bg-emerald-100 text-emerald-700"
};
const userTypeBadge = {
  buyer: "bg-blue-100 text-blue-700",
  supplier: "bg-emerald-100 text-emerald-700"
};
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      className: `size-3 ${s <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`
    },
    s
  )) });
}
const escalatedIds = /* @__PURE__ */ new Set([304, 309]);
const PAGE_SIZE = 10;
function AdminFeedbackPage() {
  const [feedbacks, setFeedbacks] = reactExports.useState(mockFeedback);
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(1);
  const [viewFeedback, setViewFeedback] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    return feedbacks.filter((f) => {
      const matchType = typeFilter === "all" || f.userType === typeFilter;
      const matchStatus = statusFilter === "all" || f.status === statusFilter;
      return matchType && matchStatus;
    });
  }, [feedbacks, typeFilter, statusFilter]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  function handleMarkReviewed(id) {
    setFeedbacks(
      (prev) => prev.map(
        (f) => f.id === id ? { ...f, status: "reviewed" } : f
      )
    );
    ue.success("Feedback marked as reviewed");
  }
  function handleMarkClosed(id) {
    setFeedbacks(
      (prev) => prev.map(
        (f) => f.id === id ? { ...f, status: "closed" } : f
      )
    );
    ue.success("Feedback marked as closed");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: ADMIN_NAV, portalName: "Admin Control", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Feedback Management",
        description: "Review and moderate user feedback and suggestions",
        breadcrumb: "Administration"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-4", "data-ocid": "feedback-filters", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: typeFilter,
          onValueChange: (v) => {
            setTypeFilter(v);
            setPage(1);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", "data-ocid": "feedback-type-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "User type" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Types" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "buyer", children: "Buyer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "supplier", children: "Supplier" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: statusFilter,
          onValueChange: (v) => {
            setStatusFilter(v);
            setPage(1);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", "data-ocid": "feedback-status-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "new", children: "New" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "reviewed", children: "Reviewed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "closed", children: "Closed" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center text-sm text-muted-foreground", children: [
        filtered.length,
        " entries"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border overflow-auto bg-card shadow-sm mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground w-10", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Message Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paged.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          colSpan: 8,
          className: "px-4 py-10 text-center text-muted-foreground",
          children: "No feedback found."
        }
      ) }) : paged.map((fb, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: `border-b last:border-0 hover:bg-muted/30 transition-colors ${escalatedIds.has(fb.id) ? "bg-red-50/30" : ""}`,
          "data-ocid": `feedback-row-${fb.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: (page - 1) * PAGE_SIZE + idx + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: fb.userId }),
              escalatedIds.has(fb.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 text-[10px] font-semibold", children: "⚠ Escalated" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs ${userTypeBadge[fb.userType] ?? "bg-muted text-foreground"}`,
                children: fb.userType
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: fb.rating }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground max-w-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2", children: fb.message }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-xs ${statusBadge[fb.status]}`, children: fb.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: new Date(fb.createdAt * 1e3).toLocaleDateString("en-IN") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "h-7 text-xs",
                  onClick: () => setViewFeedback(fb),
                  "data-ocid": `view-feedback-${fb.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-3 mr-1" }),
                    " View"
                  ]
                }
              ),
              fb.status === "new" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "h-7 text-xs",
                  onClick: () => handleMarkReviewed(fb.id),
                  "data-ocid": `mark-reviewed-${fb.id}`,
                  children: "Reviewed"
                }
              ),
              fb.status !== "closed" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "h-7 text-xs text-emerald-600 border-emerald-200 hover:bg-emerald-50",
                  onClick: () => handleMarkClosed(fb.id),
                  "data-ocid": `mark-closed-${fb.id}`,
                  children: "Close"
                }
              )
            ] }) })
          ]
        },
        fb.id
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
        open: !!viewFeedback,
        onOpenChange: (o) => {
          if (!o) setViewFeedback(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Feedback from ",
            viewFeedback == null ? void 0 : viewFeedback.userId
          ] }) }),
          viewFeedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `text-xs ${userTypeBadge[viewFeedback.userType] ?? ""}`,
                  children: viewFeedback.userType
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: viewFeedback.rating }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `text-xs ${statusBadge[viewFeedback.status]}`,
                  children: viewFeedback.status
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Submitted",
              " ",
              new Date(viewFeedback.createdAt * 1e3).toLocaleString(
                "en-IN"
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: viewFeedback.message }) }),
            escalatedIds.has(viewFeedback.id) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-700 font-semibold", children: "⚠ Escalation Note" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600 mt-1", children: "This feedback has been flagged for human review due to a critical complaint requiring immediate attention." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => setViewFeedback(null),
              children: "Close"
            }
          ) })
        ] })
      }
    )
  ] });
}
export {
  AdminFeedbackPage
};
