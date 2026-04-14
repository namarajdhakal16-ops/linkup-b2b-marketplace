import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as ChevronRight, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CEx7R28g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { C as ChevronDown } from "./index-CN9hoFXr.js";
import { M as Mail, P as Phone } from "./phone-DnTK6QNw.js";
import { C as Clock } from "./clock-D5njmlhT.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-Bym3sJYe.js";
import "./file-text-CTliJwMv.js";
import "./building-2-DKVBuSES.js";
import "./calculator-CvftqAHB.js";
import "./chart-no-axes-column-Othc_n2I.js";
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
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
];
const Ticket = createLucideIcon("ticket", __iconNode);
const FAQS = [
  {
    id: "faq-1",
    question: "What is LinkUp and how does it work for buyers?",
    answer: "LinkUp is a B2B industrial marketplace connecting verified buyers and suppliers. As a buyer, you can browse products, submit RFQs (Request for Quotations), compare quotes from multiple suppliers, and manage your procurement workflow in one platform."
  },
  {
    id: "faq-2",
    question: "How do I submit an RFQ to a supplier?",
    answer: "Navigate to the RFQ Management section, click 'Submit New RFQ', select your desired product and supplier, enter quantity and required delivery date, add any special requirements, and submit. The supplier will respond within their stated response time."
  },
  {
    id: "faq-3",
    question: "What are the buyer pricing tiers?",
    answer: "Tier 1 (Free): Basic access, limited RFQs. Tier 2 (SME): From ₹1,000 minimum fee + 0.01% commission. Tier 3 (Mid-size): From ₹2,000 minimum fee + 0.01% commission. Tier 4 (Enterprise): Same as Tier 3 with verified suppliers and premium support."
  },
  {
    id: "faq-4",
    question: "How does the payment process work on LinkUp?",
    answer: "Payments are processed through secure banking channels. Once an RFQ is accepted, you'll receive a payment link or bank transfer details. All transactions are logged in your dashboard for transparency and audit purposes."
  },
  {
    id: "faq-5",
    question: "How are suppliers verified on the platform?",
    answer: "All suppliers undergo a multi-step verification process including GST verification, business registration check, bank account validation, and product quality assessment. Verified suppliers are marked with a green badge on their profiles."
  },
  {
    id: "faq-6",
    question: "How do I upgrade or change my buyer tier?",
    answer: "Go to the Pricing Calculator page and click 'Upgrade My Tier'. Our team will contact you within 24 hours to process the upgrade. Tier changes take effect from the next billing cycle."
  },
  {
    id: "faq-7",
    question: "What should I do if I face a technical issue?",
    answer: "First, try refreshing the page. If the issue persists, use the Support Ticket form below to report it. Include your browser version, operating system, and a description of the issue. Our technical team responds within 4 business hours."
  },
  {
    id: "faq-8",
    question: "How can I contact the LinkUp support team directly?",
    answer: "You can reach us via email at support@linkup.com, by phone at +91 80 1234 5678 during business hours (Mon–Fri, 9 AM–6 PM IST), or by submitting a support ticket below for tracked assistance."
  }
];
const PRIORITY_STYLES = {
  Low: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Medium: "border-amber-200 bg-amber-50 text-amber-700",
  High: "border-orange-200 bg-orange-50 text-orange-700",
  Urgent: "border-red-200 bg-red-50 text-red-700"
};
function BuyerSupportPage() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    subject: "",
    category: "",
    priority: "Medium",
    description: ""
  });
  function toggleFaq(id) {
    setOpenFaq(openFaq === id ? null : id);
  }
  function handleSubmitTicket() {
    if (!form.subject || !form.category || !form.description) {
      ue.error("Please fill in all required fields.");
      return;
    }
    ue.success(
      "Support ticket #TK-2847 created! We'll respond within 4 business hours."
    );
    setForm({ subject: "", category: "", priority: "Medium", description: "" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Support & Help",
        description: "Find answers or reach our team directly.",
        breadcrumb: "Buyer Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Frequently Asked Questions" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-2", children: FAQS.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors",
                onClick: () => toggleFaq(faq.id),
                "data-ocid": `faq-toggle-${faq.id}`,
                "aria-expanded": openFaq === faq.id,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm pr-4", children: faq.question }),
                  openFaq === faq.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 text-muted-foreground shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 text-muted-foreground shrink-0" })
                ]
              }
            ),
            openFaq === faq.id && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 text-sm text-muted-foreground border-t bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-3 leading-relaxed", children: faq.answer }) })
          ] }, faq.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ticket, { className: "size-4 text-[#1e40af]" }),
            "Submit Support Ticket"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-subject", children: "Subject *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "ticket-subject",
                  placeholder: "Brief description of your issue...",
                  value: form.subject,
                  onChange: (e) => setForm({ ...form, subject: e.target.value }),
                  "data-ocid": "ticket-subject"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-category", children: "Category *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.category,
                    onValueChange: (v) => setForm({ ...form, category: v }),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          id: "ticket-category",
                          "data-ocid": "ticket-category",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category..." })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "technical", children: "Technical Issue" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "billing", children: "Billing & Payments" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rfq", children: "RFQ / Orders" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "supplier", children: "Supplier Dispute" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "account", children: "Account Management" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Priority" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: ["Low", "Medium", "High", "Urgent"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setForm({ ...form, priority: p }),
                    className: `px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${form.priority === p ? PRIORITY_STYLES[p] : "border-border bg-background hover:bg-muted/30"}`,
                    "data-ocid": `priority-${p.toLowerCase()}`,
                    children: p
                  },
                  p
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-desc", children: "Description *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "ticket-desc",
                  placeholder: "Describe your issue in detail. Include any error messages, steps to reproduce, and expected vs actual behavior...",
                  value: form.description,
                  onChange: (e) => setForm({ ...form, description: e.target.value }),
                  rows: 5,
                  "data-ocid": "ticket-description"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-attach", children: "Attachment (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "ticket-attach",
                  type: "file",
                  accept: ".pdf,.png,.jpg,.jpeg,.csv",
                  className: "cursor-pointer file:mr-3 file:px-3 file:py-1 file:rounded file:border-0 file:text-xs file:bg-[#1e40af] file:text-white file:cursor-pointer",
                  "data-ocid": "ticket-attachment"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                className: "w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
                onClick: handleSubmitTicket,
                "data-ocid": "ticket-submit",
                children: "Submit Ticket"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Contact Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-muted/30 border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5 text-[#1e40af] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Email Support" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "support@linkup.com" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Response within 4 hours" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-muted/30 border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5 text-[#059669] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Phone Support" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "+91 80 1234 5678" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Toll-free for Enterprise" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-muted/30 border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-5 text-amber-600 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Business Hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Mon – Fri: 9 AM – 6 PM IST" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Sat: 10 AM – 2 PM IST" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Response Times by Tier" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3 text-sm", children: [
            {
              tier: "Enterprise (T4)",
              time: "< 1 hour",
              color: "text-emerald-600"
            },
            {
              tier: "Mid-size (T3)",
              time: "< 2 hours",
              color: "text-blue-600"
            },
            {
              tier: "SME (T2)",
              time: "< 4 hours",
              color: "text-amber-600"
            },
            {
              tier: "Free (T1)",
              time: "< 24 hours",
              color: "text-muted-foreground"
            }
          ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between items-center py-1.5 border-b last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: row.tier }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold ${row.color}`, children: row.time })
              ]
            },
            row.tier
          )) })
        ] })
      ] })
    ] })
  ] });
}
export {
  BuyerSupportPage
};
