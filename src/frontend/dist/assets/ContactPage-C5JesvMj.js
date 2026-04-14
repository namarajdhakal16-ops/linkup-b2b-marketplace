import { r as reactExports, j as jsxRuntimeExports, a as Send, u as ue } from "./index-vpbP6K3q.js";
import { P as PublicLayout } from "./PublicLayout-CJJ47MaB.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { P as Phone, M as Mail } from "./phone-DnTK6QNw.js";
import { M as MapPin } from "./map-pin-Bqb__ByU.js";
import { C as Clock } from "./clock-D5njmlhT.js";
import { C as CircleCheckBig } from "./circle-check-big-FdkHYrhv.js";
import { M as MessageSquare } from "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Sales Enquiries",
    info: "+91 98765 43210",
    sub: "Mon–Sat, 9am–7pm IST",
    color: "text-[#1e40af] bg-[#1e40af]/10"
  },
  {
    icon: Mail,
    title: "General Support",
    info: "support@linkup.in",
    sub: "24h response SLA",
    color: "text-[#059669] bg-[#059669]/10"
  },
  {
    icon: MapPin,
    title: "Head Office",
    info: "Bandra Kurla Complex",
    sub: "Mumbai, Maharashtra 400051",
    color: "text-purple-600 bg-purple-100"
  },
  {
    icon: Clock,
    title: "Business Hours",
    info: "Mon–Sat: 9am–7pm",
    sub: "Emergency: 24/7 (Enterprise)",
    color: "text-amber-600 bg-amber-100"
  }
];
const FAQ_ITEMS = [
  {
    q: "How do I register as a buyer?",
    a: 'Click "Get Started" and choose the Buyer role. Complete the 4-step registration form with your company details.'
  },
  {
    q: "Is there a registration fee?",
    a: "Buyer Tier 1 is completely free. Higher tiers have transaction-based fees. Supplier registration is free for the first product."
  },
  {
    q: "How long does verification take?",
    a: "Standard verification: 2–3 business days. Fast-track available for enterprise accounts. You'll receive email updates."
  },
  {
    q: "Can I be both a buyer and supplier?",
    a: 'Yes! Select "Both" during registration. Multi-role users get a 40% discount on combined fees.'
  }
];
function ContactPage() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [company, setCompany] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  function handleSubmit() {
    if (!name || !email || !message) {
      ue.error("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
    ue.success("Message sent! We'll respond within 24 hours.");
  }
  function handleReset() {
    setName("");
    setEmail("");
    setCompany("");
    setSubject("");
    setMessage("");
    setSubmitted(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "text-white py-14 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-5 pointer-events-none",
              style: {
                backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-white/10 text-blue-300 border-white/20 text-xs px-3 py-1", children: "Get in Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl font-bold mb-3", children: "Contact Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-lg max-w-xl leading-relaxed", children: "Have a question or want to learn more about LinkUp? Our team is here to help you get started." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12", children: CONTACT_INFO.map((c) => {
        const Icon = c.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl border bg-card p-5 text-center hover:shadow-md transition-shadow",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `size-10 rounded-xl ${c.color} flex items-center justify-center mx-auto mb-3`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm mb-1", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: c.info }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: c.sub })
            ]
          },
          c.title
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border bg-card shadow-sm p-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-[#059669]/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-8 text-[#059669]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-2", children: "Message Sent!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-6 max-w-xs", children: [
            "Thank you, ",
            name,
            "! We've received your message and will respond to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: email }),
            " ",
            "within 24 business hours."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              className: "text-[#1e40af] border-[#1e40af]/30",
              onClick: handleReset,
              children: "Send Another Message"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-5", children: "Send Us a Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium mb-1.5 block", children: [
                  "Your Name ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Full name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    "data-ocid": "contact-name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium mb-1.5 block", children: [
                  "Email ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "email",
                    placeholder: "work@email.com",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    "data-ocid": "contact-email"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Company" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Company name",
                  value: company,
                  onChange: (e) => setCompany(e.target.value),
                  "data-ocid": "contact-company"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: subject, onValueChange: setSubject, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "contact-subject", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select inquiry type" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sales", children: "Sales Enquiry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "support", children: "Technical Support" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "partnership", children: "Partnership" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "billing", children: "Billing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "buyer-registration", children: "Buyer Registration Help" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "supplier-registration", children: "Supplier Registration Help" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium mb-1.5 block", children: [
                "Message ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "Describe your question or request in detail...",
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  rows: 5,
                  "data-ocid": "contact-message"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                className: "w-full h-11 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold",
                onClick: handleSubmit,
                "data-ocid": "send-message-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4 mr-2" }),
                  "Send Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground text-center", children: "We respond to all enquiries within 24 business hours." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-5", children: "Frequently Asked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FAQ_ITEMS.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border bg-card p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-4 text-[#1e40af] mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground mb-1.5", children: faq.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: faq.a })
            ] })
          ] }) }, faq.q)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-gradient-to-br from-[#1e40af]/5 to-[#059669]/5 p-6 mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4 text-sm", children: "Office Information" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-[#1e40af] shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Head Office" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-0.5", children: "Bandra Kurla Complex, Mumbai, Maharashtra 400051" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-[#059669] shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-0.5", children: "support@linkup.in · sales@linkup.in" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 text-purple-600 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Phone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-0.5", children: "+91 98765 43210 (Sales) · +91 87654 32109 (Support)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4 text-amber-600 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Office Hours" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs mt-0.5", children: [
                    "Monday – Saturday: 9:00 AM – 7:00 PM IST",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Enterprise: 24/7 emergency support"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage
};
