import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, u as ue, a as Send } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as ChevronUp } from "./select-VcrPPk92.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { S as SUPPLIER_NAV } from "./SupplierDashboardPage-cWtvCcFb.js";
import { P as Phone, M as Mail } from "./phone-DnTK6QNw.js";
import { C as ChevronDown } from "./index-CN9hoFXr.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-Bym3sJYe.js";
import "./StatCard-Bv93da2j.js";
import "./badge-BpqzkKu8.js";
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
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode);
const FAQS = [
  {
    q: "How do I respond to an RFQ from a buyer?",
    a: 'Go to RFQ Leads, find the pending request, and click "Submit Quote". Enter your quote amount, delivery timeline, validity date, and any special terms. The buyer is notified instantly.'
  },
  {
    q: "When and how are platform fees charged?",
    a: "Fees are charged monthly based on your total completed transactions. An invoice is auto-generated on the 1st of each month and deducted from your registered bank account via NEFT."
  },
  {
    q: "How do I get my products and account verified?",
    a: "Submit your product with complete specifications and certifications. Our verification team reviews within 3–5 business days. Verified accounts receive a badge and higher search ranking."
  },
  {
    q: "Can I list products in multiple categories?",
    a: "Each product is assigned to one primary category. Choose the most relevant one for best visibility. You can list products across multiple categories as separate listings."
  },
  {
    q: "How do I upgrade from Small to Medium supplier tier?",
    a: "Contact your account manager or email suppliers@linkup.in. Provide updated turnover documents. Tier upgrades are processed within 24 hours after verification."
  },
  {
    q: "What is the commission structure for high-value orders?",
    a: "For Medium/Large suppliers: ₹1–10L sales → 0.5% commission (minimum ₹5,000). Over ₹10L → 0.25% of total. Small/Micro suppliers get the first product free in Year 1."
  },
  {
    q: "Can I set up automated responses to RFQs?",
    a: "Auto-response templates are coming in Q3 2026. Currently, you must manually respond within the platform. We recommend responding within 2 hours to improve your response rate score."
  },
  {
    q: "How do I handle returns and disputes from buyers?",
    a: "Navigate to Support → Submit Ticket and select 'Dispute'. Our resolution team mediates within 48 hours. All interactions are logged. Refer to your product's stated return policy."
  }
];
const CONTACT_CARDS = [
  {
    icon: Headphones,
    title: "Supplier Hotline",
    desc: "Dedicated supplier support: 1800-LINKUP-1",
    action: "Call Now",
    color: "text-[#059669]",
    bg: "bg-[#059669]/10"
  },
  {
    icon: Phone,
    title: "Account Manager",
    desc: "Your personal contact: Amit Sharma",
    action: "Connect",
    color: "text-[#1e40af]",
    bg: "bg-[#1e40af]/10"
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "suppliers@linkup.in · Priority queue",
    action: "Send Email",
    color: "text-purple-600",
    bg: "bg-purple-100"
  }
];
const CATEGORIES = [
  "Billing",
  "Product Listing",
  "RFQ Issue",
  "Technical",
  "Account",
  "Other"
];
const PRIORITIES = ["Low", "Medium", "High", "Critical"];
function SupplierSupportPage() {
  const [openFAQ, setOpenFAQ] = reactExports.useState(null);
  const [subject, setSubject] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("");
  const [priority, setPriority] = reactExports.useState("");
  const [details, setDetails] = reactExports.useState("");
  function handleSubmitTicket() {
    if (!subject.trim() || !category || !details.trim()) {
      ue.error("Subject, category and description are required");
      return;
    }
    const ticketId = `SUP-${Date.now().toString().slice(-5)}`;
    ue.success(
      `Ticket ${ticketId} submitted! We'll respond within 4 hours.`
    );
    setSubject("");
    setCategory("");
    setPriority("");
    setDetails("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: SUPPLIER_NAV, portalName: "Supplier Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Support & Help",
        description: "Get assistance with your supplier account and platform queries",
        breadcrumb: "Supplier Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: CONTACT_CARDS.map((c) => {
        const Icon = c.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl border bg-card p-5 flex items-start gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `size-10 rounded-lg ${c.bg} flex items-center justify-center shrink-0`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `size-5 ${c.color}` })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: c.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 mb-3", children: c.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: `text-xs ${c.color}`,
                    onClick: () => ue.info(`${c.action} — feature coming soon`),
                    children: c.action
                  }
                )
              ] })
            ]
          },
          c.title
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Submit a Support Ticket" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Subject *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Brief description of your issue",
                  value: subject,
                  onChange: (e) => setSubject(e.target.value),
                  "data-ocid": "ticket-subject"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Category *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: category, onValueChange: setCategory, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "ticket-category", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Priority" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: priority, onValueChange: setPriority, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "ticket-priority", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select priority" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Description *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "Provide detailed information about your issue — include RFQ IDs, product names, or error messages if applicable...",
                  value: details,
                  onChange: (e) => setDetails(e.target.value),
                  rows: 4,
                  "data-ocid": "ticket-details"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "bg-[#059669] hover:bg-[#047857] text-white",
                onClick: handleSubmitTicket,
                "data-ocid": "submit-ticket-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4 mr-2" }),
                  "Submit Ticket"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-3", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: FAQS.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-lg border bg-card overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-muted/30 transition-colors",
                    onClick: () => setOpenFAQ(openFAQ === i ? null : i),
                    "data-ocid": `faq-toggle-${i}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm text-foreground pr-4", children: faq.q }),
                      openFAQ === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-4 text-muted-foreground shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 text-muted-foreground shrink-0" })
                    ]
                  }
                ),
                openFAQ === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 text-sm text-muted-foreground border-t bg-muted/20 pt-3 leading-relaxed", children: faq.a })
              ]
            },
            faq.q
          )) })
        ] })
      ] })
    ] })
  ] });
}
export {
  SupplierSupportPage
};
