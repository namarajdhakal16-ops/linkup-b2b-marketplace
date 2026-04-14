import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as Send, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { h as mockFeedback } from "./mockData-BxT47ZmF.js";
import { S as SUPPLIER_NAV } from "./SupplierDashboardPage-cWtvCcFb.js";
import { S as Star } from "./star-7OWaTLG1.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./StatCard-Bv93da2j.js";
import "./badge-BpqzkKu8.js";
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
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
];
const MessageSquarePlus = createLucideIcon("message-square-plus", __iconNode);
const FEEDBACK_TYPES = [
  "Suggestion",
  "Bug Report",
  "General",
  "Complaint"
];
const STATUS_BADGE = {
  new: "bg-amber-100 text-amber-700 border-amber-200",
  reviewed: "bg-blue-100 text-blue-700 border-blue-200",
  closed: "bg-muted text-muted-foreground border-border"
};
const INITIAL_HISTORY = [
  {
    id: "fb-s1",
    type: "General",
    rating: 4,
    subject: "Good buyer base",
    message: "Would love better analytics on product views. Overall a great marketplace.",
    date: "2026-03-28",
    status: "reviewed"
  },
  {
    id: "fb-s2",
    type: "Suggestion",
    rating: 3,
    subject: "Commission concerns",
    message: "Commission structure for large orders feels high. Need negotiation options.",
    date: "2026-03-15",
    status: "new"
  },
  {
    id: "fb-s3",
    type: "General",
    rating: 5,
    subject: "Mobile app request",
    message: "Analytics dashboard is useful. Mobile app would be a great addition.",
    date: "2026-02-20",
    status: "closed"
  }
];
function SupplierFeedbackPage() {
  const [rating, setRating] = reactExports.useState(0);
  const [type, setType] = reactExports.useState("General");
  const [subject, setSubject] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [history, setHistory] = reactExports.useState(INITIAL_HISTORY);
  function handleSubmit() {
    if (!rating) {
      ue.error("Please select a rating");
      return;
    }
    if (!subject.trim()) {
      ue.error("Subject is required");
      return;
    }
    if (!message.trim()) {
      ue.error("Message is required");
      return;
    }
    const newEntry = {
      id: `fb-${Date.now()}`,
      type,
      rating,
      subject,
      message,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      status: "new"
    };
    setHistory((prev) => [newEntry, ...prev]);
    ue.success("Thank you! Your feedback has been submitted.");
    setRating(0);
    setSubject("");
    setMessage("");
    setType("General");
  }
  const supplierPlatformFeedback = mockFeedback.filter((f) => f.userType === "supplier").slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: SUPPLIER_NAV, portalName: "Supplier Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Feedback",
        description: "Share your experience to help us improve the platform",
        breadcrumb: "Supplier Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card shadow-sm p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-lg bg-[#059669]/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquarePlus, { className: "size-5 text-[#059669]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Submit Platform Feedback" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Feedback Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: type,
                onValueChange: (v) => setType(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "feedback-type-select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: FEEDBACK_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-2 block", children: "Rating *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setRating(star),
                "data-ocid": `star-${star}`,
                className: "transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] rounded",
                "aria-label": `Rate ${star} star${star > 1 ? "s" : ""}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: `size-8 ${star <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`
                  }
                )
              },
              star
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Subject *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Brief title for your feedback",
                value: subject,
                onChange: (e) => setSubject(e.target.value),
                "data-ocid": "feedback-subject"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Message *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: "Share your experience — buyer quality, platform features, RFQ handling, support...",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                rows: 5,
                "data-ocid": "feedback-message"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "w-full bg-[#059669] hover:bg-[#047857] text-white",
              onClick: handleSubmit,
              "data-ocid": "submit-feedback-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4 mr-2" }),
                "Submit Feedback"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Your Feedback History" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: history.map((fb) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-lg border bg-card p-4 shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground", children: fb.subject }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                      fb.type,
                      " · ",
                      fb.date
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] px-2 py-0.5 rounded-full font-medium border whitespace-nowrap shrink-0 ${STATUS_BADGE[fb.status]}`,
                      children: fb.status
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-2", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: `size-3.5 ${star <= fb.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`
                  },
                  star
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: fb.message })
              ]
            },
            fb.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Recent Supplier Reviews" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: supplierPlatformFeedback.map((fb) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: `size-3.5 ${star <= fb.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`
                },
                star
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[10px] px-2 py-0.5 rounded-full font-medium border ${STATUS_BADGE[fb.status]}`,
                  children: fb.status
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: fb.message }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: new Date(fb.createdAt * 1e3).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric"
            }) })
          ] }, fb.id)) })
        ] })
      ] })
    ] })
  ] });
}
export {
  SupplierFeedbackPage
};
