import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, S as ShoppingCart, U as Users, f as formatINR, u as ue, B as BookOpen, a as Send } from "./index-vpbP6K3q.js";
import { P as PublicLayout } from "./PublicLayout-CJJ47MaB.js";
import { S as StatCard } from "./StatCard-Bv93da2j.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button, F as Factory } from "./button-DhRdAl0g.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BQG8dMKN.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { m as mockMetrics, a as mockBuyers, b as mockSuppliers, c as mockProducts } from "./mockData-BxT47ZmF.js";
import { A as ArrowRight } from "./arrow-right-BJb97rUV.js";
import { T as Truck } from "./truck-Bf7iNDR2.js";
import { A as Activity } from "./activity-CK7N99se.js";
import { P as Package } from "./index-BfZ639JC.js";
import { S as Star } from "./star-7OWaTLG1.js";
import { T as TrendingUp } from "./trending-up-Ca1toMKI.js";
import { B as Briefcase } from "./briefcase-5Y2y70Ru.js";
import { M as MessageSquare } from "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const TOP_PRODUCTS = mockProducts.slice(0, 6);
const PLATFORM_STATS = [
  { label: "Total Buyers", value: "1,247", icon: Users, suffix: "+" },
  { label: "Total Suppliers", value: "486", icon: Truck, suffix: "+" },
  { label: "Products Listed", value: "3,892", icon: Package, suffix: "" },
  {
    label: "Cumulative Value",
    value: "₹28.47 Cr",
    icon: TrendingUp,
    suffix: "+"
  }
];
const QUICK_ACCESS = [
  {
    label: "Buyer Portal",
    icon: ShoppingCart,
    href: "/buyer/dashboard",
    bgClass: "bg-[#1e40af]/10 hover:bg-[#1e40af]/20 border-[#1e40af]/20",
    iconClass: "text-[#1e40af]",
    desc: "Browse products & place RFQs"
  },
  {
    label: "Supplier Portal",
    icon: Truck,
    href: "/supplier/dashboard",
    bgClass: "bg-[#059669]/10 hover:bg-[#059669]/20 border-[#059669]/20",
    iconClass: "text-[#059669]",
    desc: "Manage listings & orders"
  },
  {
    label: "About Us",
    icon: BookOpen,
    href: "/about",
    bgClass: "bg-purple-50 hover:bg-purple-100 border-purple-200",
    iconClass: "text-purple-700",
    desc: "Our story & mission"
  },
  {
    label: "Careers",
    icon: Briefcase,
    href: "/careers",
    bgClass: "bg-amber-50 hover:bg-amber-100 border-amber-200",
    iconClass: "text-amber-700",
    desc: "Join our growing team"
  }
];
function FeedbackModal({
  open,
  onClose
}) {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [msg, setMsg] = reactExports.useState("");
  function handleSubmit() {
    if (!name || !email || !msg) {
      ue.error("Please fill all fields.");
      return;
    }
    ue.success("Thank you for your feedback!");
    setName("");
    setEmail("");
    setMsg("");
    onClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 font-display", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-5 text-[#1e40af]" }),
      "Share Your Feedback"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Your name",
            value: name,
            onChange: (e) => setName(e.target.value),
            "data-ocid": "feedback-name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "email",
            placeholder: "your@email.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            "data-ocid": "feedback-email"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: "Tell us what you think...",
            value: msg,
            onChange: (e) => setMsg(e.target.value),
            rows: 4,
            "data-ocid": "feedback-message"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
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
  ] }) });
}
function HomePage() {
  const [feedbackOpen, setFeedbackOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setFeedbackOpen(true),
        className: "fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#1e40af] text-white px-2 py-4 rounded-l-lg shadow-lg hover:bg-[#1e3a8a] transition-colors",
        "aria-label": "Open feedback",
        "data-ocid": "sidebar-feedback-tab",
        style: { writingMode: "vertical-rl", textOrientation: "mixed" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-widest uppercase", children: "Feedback" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeedbackModal,
      {
        open: feedbackOpen,
        onClose: () => setFeedbackOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative text-white py-20 lg:py-28 overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-5",
              style: {
                backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-15 pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1e40af] rounded-full blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-[#059669] rounded-full blur-3xl" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-3xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "LinkUp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400", children: "Connecting Industrial" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Buyers & Suppliers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl", children: "India's most trusted B2B platform for industrial procurement — connecting verified buyers with quality suppliers across 50+ product categories nationwide." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/buyer/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "h-13 px-10 bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-base font-semibold shadow-lg transition-smooth",
                  "data-ocid": "hero-buyer-cta",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-5 mr-2" }),
                    "Buyer Portal",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 ml-2" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/supplier/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "h-13 px-10 bg-[#059669] hover:bg-[#047857] text-white text-base font-semibold shadow-lg transition-smooth",
                  "data-ocid": "hero-supplier-cta",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-5 mr-2" }),
                    "Supplier Portal",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 ml-2" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-8 pt-8 border-t border-white/10", children: [
              { label: "Registered Buyers", value: "1,247+" },
              { label: "Verified Suppliers", value: "486+" },
              { label: "Products Listed", value: "3,892+" },
              { label: "Platform Value", value: "₹28 Cr+" }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display font-bold text-white leading-none mb-1", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: stat.label })
            ] }, stat.label)) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4", children: "Today's Platform Performance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            label: "Total Transactions",
            value: mockMetrics.totalTransactions.toLocaleString(),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4" }),
            trend: 8.2,
            trendLabel: "vs last month",
            accent: "blue",
            "data-ocid": "metric-transactions"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            label: "Active Buyers",
            value: mockMetrics.activeBuyers.toLocaleString(),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4" }),
            trend: 5.4,
            trendLabel: "vs last month",
            accent: "blue",
            "data-ocid": "metric-buyers"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            label: "Active Suppliers",
            value: mockMetrics.activeSuppliers.toLocaleString(),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-4" }),
            trend: 3.1,
            trendLabel: "vs last month",
            accent: "green",
            "data-ocid": "metric-suppliers"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            label: "New Listings",
            value: mockMetrics.newListings.toLocaleString(),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-4" }),
            trend: 12.5,
            trendLabel: "vs last month",
            accent: "purple",
            "data-ocid": "metric-listings"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Platform Leaders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Top 5 buyers and suppliers ranked by volume this month" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b bg-[#1e40af]/5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-4 text-[#1e40af]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm", children: "Top 5 Buyers by Volume" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: mockBuyers.slice(0, 5).map((b, i) => {
            const maxVol = mockBuyers[0].volume;
            const pct = Math.round(b.volume / maxVol * 100);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-4 px-5 py-3.5 hover:bg-muted/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-muted-foreground w-5 shrink-0", children: [
                    "#",
                    i + 1
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center text-xs font-bold shrink-0", children: b.company.charAt(0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: b.company }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full bg-[#1e40af] rounded-full",
                          style: { width: `${pct}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground shrink-0", children: [
                        pct,
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground shrink-0", children: formatINR(b.volume) })
                ]
              },
              b.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b bg-[#059669]/5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-4 text-[#059669]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm", children: "Top 5 Suppliers by Rating" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: mockSuppliers.slice(0, 5).map((s, i) => {
            const maxRev = mockSuppliers.reduce(
              (mx, sup) => Math.max(mx, sup.revenue),
              0
            );
            const pct = Math.round(s.revenue / maxRev * 100);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-4 px-5 py-3.5 hover:bg-muted/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-muted-foreground w-5 shrink-0", children: [
                    "#",
                    i + 1
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center text-xs font-bold shrink-0", children: s.company.charAt(0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: s.company }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full bg-[#059669] rounded-full",
                          style: { width: `${pct}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: formatINR(s.revenue) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3.5 fill-amber-400 text-amber-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: s.rating })
                  ] })
                ]
              },
              s.id
            );
          }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Top Selling Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Most-sourced industrial products this month" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/buyer/catalog", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "text-[#1e40af] border-[#1e40af]/30 hover:bg-[#1e40af]/5",
            children: [
              "View All",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 ml-2" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: TOP_PRODUCTS.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden",
          "data-ocid": `home-product-${product.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-36 bg-gradient-to-br from-[#1e40af]/8 to-[#059669]/8 flex flex-col items-center justify-center border-b relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-12 text-muted-foreground/30 mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground/50 font-medium uppercase tracking-wider", children: product.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 right-2 size-7 rounded-md bg-card border flex items-center justify-center text-[10px] font-bold text-[#1e40af]", children: [
                product.supplierId.slice(-1).toUpperCase(),
                "S"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] w-fit mb-2", children: product.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm line-clamp-2 mb-1 flex-1", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3 line-clamp-2", children: product.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#1e40af] font-display text-base", children: formatINR(product.price) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                    "Stock: ",
                    product.stock,
                    " units"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      variant: "outline",
                      className: "text-xs h-7 px-2.5",
                      onClick: () => ue.info(`Viewing ${product.name}`),
                      children: "Details"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      className: "bg-[#059669] hover:bg-[#047857] text-white text-xs h-7 px-2.5",
                      onClick: () => ue.success("RFQ initiated! Check your portal."),
                      "data-ocid": `home-rfq-${product.id}`,
                      children: "Request Quotation"
                    }
                  )
                ] })
              ] })
            ] })
          ]
        },
        product.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 text-white", style: { background: "#0f172a" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-3", children: "Platform at a Glance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-base max-w-xl mx-auto", children: "Trusted by India's top industrial companies for procurement, trade, and supplier discovery." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children: PLATFORM_STATS.map(({ label, value, icon: Icon, suffix }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center rounded-xl border border-white/10 bg-white/5 px-6 py-8 hover:bg-white/8 transition-colors",
          "data-ocid": `platform-stat-${label.toLowerCase().replace(/\s+/g, "-")}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-[#1e40af]/30 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6 text-blue-300" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-4xl font-bold text-white mb-1", children: [
              value,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-2xl", children: suffix })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: label })
          ]
        },
        label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Quick Portal Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8", children: "Jump straight to your workspace" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto", children: QUICK_ACCESS.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.href,
            "data-ocid": `quick-access-${item.label.toLowerCase().replace(/\s+/g, "-")}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `rounded-xl border p-5 flex flex-col items-center gap-2.5 transition-smooth cursor-pointer ${item.bgClass}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `size-10 rounded-lg flex items-center justify-center ${item.bgClass}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `size-6 ${item.iconClass}` })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-semibold ${item.iconClass}`, children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center leading-tight", children: item.desc })
                ]
              }
            )
          },
          item.label
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-[#1e40af]/10 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "size-7 text-[#1e40af]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-4", children: "Ready to streamline your industrial procurement?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mb-8 max-w-xl mx-auto", children: "Join 1,200+ companies using LinkUp to reduce procurement costs and discover better suppliers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/buyer/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            className: "h-11 px-8 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold",
            "data-ocid": "cta-buyer-btn",
            children: [
              "Get Started as Buyer",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 ml-2" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "h-11 px-8 text-[#1e40af] border-[#1e40af]/30 hover:bg-[#1e40af]/5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-4 mr-2" }),
              "Contact Sales"
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 border-t border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-[#1e40af] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "size-4 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl text-[#1e40af]", children: "LinkUp" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: "India's trusted B2B industrial marketplace. Connecting verified buyers and suppliers for seamless industrial procurement." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground", children: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Careers", href: "/careers" },
          { label: "Privacy", href: "/" }
        ].map((lnk) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: lnk.href,
            className: "hover:text-foreground transition-colors",
            children: lnk.label
          },
          lnk.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-4 text-[#1e40af]" }),
          "Send Us Feedback"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterFeedbackForm, {})
      ] })
    ] }) }) })
  ] });
}
function FooterFeedbackForm() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  function handleSubmit() {
    if (!name || !email || !message) {
      ue.error("Please fill all fields.");
      return;
    }
    ue.success("Feedback received! We'll follow up within 24h.");
    setName("");
    setEmail("");
    setMessage("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium mb-1.5 block", children: "Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Your name",
          value: name,
          onChange: (e) => setName(e.target.value),
          className: "h-9 text-sm",
          "data-ocid": "footer-feedback-name"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium mb-1.5 block", children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "email",
          placeholder: "your@email.com",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          className: "h-9 text-sm",
          "data-ocid": "footer-feedback-email"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium mb-1.5 block", children: "Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          placeholder: "Share your thoughts...",
          value: message,
          onChange: (e) => setMessage(e.target.value),
          rows: 3,
          "data-ocid": "footer-feedback-message"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "button",
        className: "bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-sm h-9 px-6",
        onClick: handleSubmit,
        "data-ocid": "footer-feedback-submit",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-3.5 mr-2" }),
          "Submit Feedback"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-3 inline mr-1" }),
      "We respond to all feedback within 24 business hours."
    ] }) })
  ] });
}
export {
  HomePage
};
