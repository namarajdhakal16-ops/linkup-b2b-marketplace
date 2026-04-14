import { r as reactExports, j as jsxRuntimeExports, a as Send, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CEx7R28g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { h as mockFeedback } from "./mockData-BxT47ZmF.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { S as Star } from "./star-7OWaTLG1.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./file-text-CTliJwMv.js";
import "./building-2-DKVBuSES.js";
import "./calculator-CvftqAHB.js";
import "./chart-no-axes-column-Othc_n2I.js";
const FEEDBACK_TYPES = [
  "General",
  "Supplier Rating",
  "Platform Suggestion",
  "Complaint"
];
const STATUS_STYLES = {
  new: "bg-blue-100 text-blue-700 border-blue-200",
  reviewed: "bg-amber-100 text-amber-700 border-amber-200",
  closed: "bg-emerald-100 text-emerald-700 border-emerald-200"
};
function StarPicker({
  value,
  onChange
}) {
  const [hovered, setHovered] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onChange(n),
        onMouseEnter: () => setHovered(n),
        onMouseLeave: () => setHovered(0),
        className: "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
        "aria-label": `Rate ${n} star${n > 1 ? "s" : ""}`,
        "data-ocid": `star-${n}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            className: `size-7 transition-colors ${n <= (hovered || value) ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`
          }
        )
      },
      n
    )),
    value > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-sm text-muted-foreground", children: ["", "Poor", "Fair", "Good", "Very Good", "Excellent"][value] })
  ] });
}
const buyerFeedback = mockFeedback.filter((f) => f.userType === "buyer");
function BuyerFeedbackPage() {
  const [feedbackType, setFeedbackType] = reactExports.useState("");
  const [rating, setRating] = reactExports.useState(0);
  const [subject, setSubject] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  function handleSubmit() {
    if (!feedbackType || rating === 0 || !subject || !message) {
      ue.error("Please complete all fields before submitting.");
      return;
    }
    ue.success(
      "Thank you! Your feedback has been submitted and will be reviewed within 48 hours."
    );
    setFeedbackType("");
    setRating(0);
    setSubject("");
    setMessage("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Feedback",
        description: "Share your experience and help us improve the platform.",
        breadcrumb: "Buyer Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Submit Feedback" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fb-type", children: "Feedback Type *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: feedbackType, onValueChange: setFeedbackType, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "fb-type", "data-ocid": "feedback-type-select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type..." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: FEEDBACK_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Overall Rating *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarPicker, { value: rating, onChange: setRating })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fb-subject", children: "Subject *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "fb-subject",
                placeholder: "Brief summary of your feedback...",
                value: subject,
                onChange: (e) => setSubject(e.target.value),
                "data-ocid": "feedback-subject"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fb-message", children: "Message *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "fb-message",
                placeholder: "Describe your experience in detail...",
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
              type: "button",
              className: "w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
              onClick: handleSubmit,
              "data-ocid": "feedback-submit",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4 mr-2" }),
                "Submit Feedback"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Previous Submissions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-2.5 font-medium text-muted-foreground", children: "Rating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-2.5 font-medium text-muted-foreground", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground hidden md:table-cell", children: "Preview" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: buyerFeedback.map((fb) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b last:border-0 hover:bg-muted/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground whitespace-nowrap", children: new Date(fb.createdAt * 1e3).toLocaleDateString(
                  "en-IN",
                  { day: "2-digit", month: "short", year: "2-digit" }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "General" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-0.5", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: `size-3 ${n <= fb.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`
                  },
                  n
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[fb.status] ?? ""}`,
                    children: fb.status.charAt(0).toUpperCase() + fb.status.slice(1)
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground hidden md:table-cell max-w-[180px] truncate", children: fb.message })
              ]
            },
            fb.id
          )) })
        ] }) }) })
      ] })
    ] })
  ] });
}
export {
  BuyerFeedbackPage
};
