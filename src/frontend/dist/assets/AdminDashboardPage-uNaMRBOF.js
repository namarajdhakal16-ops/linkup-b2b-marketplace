import { c as createLucideIcon, U as Users, k as Settings, j as jsxRuntimeExports, L as Link } from "./index-vpbP6K3q.js";
import { L as LayoutDashboard, P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { S as StatCard } from "./StatCard-Bv93da2j.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { f as monthlyData, a as mockBuyers, b as mockSuppliers } from "./mockData-BxT47ZmF.js";
import { P as Package } from "./index-BfZ639JC.js";
import { F as FileText } from "./file-text-CTliJwMv.js";
import { C as CreditCard } from "./credit-card-BoogVyUk.js";
import { M as MessageSquare } from "./index-CPoAQatq.js";
import { S as ShieldCheck } from "./shield-check-AZO3kdEQ.js";
import { A as Activity } from "./activity-CK7N99se.js";
import { R as ResponsiveContainer, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "./generateCategoricalChart-CLakrVV0.js";
import { L as LineChart, a as Line, B as BarChart } from "./BarChart-5YJHTPWT.js";
import { T as Tag } from "./tag-BO63xnL_.js";
import { C as CircleCheckBig } from "./circle-check-big-FdkHYrhv.js";
import { T as TriangleAlert } from "./triangle-alert-Clkdp-lz.js";
import "./button-DhRdAl0g.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
];
const ArrowLeftRight = createLucideIcon("arrow-left-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
const ADMIN_NAV = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "RFQs", href: "/admin/rfqs", icon: FileText },
  { label: "Transactions", href: "/admin/transactions", icon: CreditCard },
  { label: "Feedback", href: "/admin/feedback", icon: MessageSquare },
  { label: "Fee Management", href: "/admin/fees", icon: Settings }
];
const dailyData = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(2026, 2, 15);
  d.setDate(d.getDate() + i);
  return {
    day: `${d.getMonth() + 1}/${d.getDate()}`,
    transactions: Math.floor(
      30 + (i * 2.1 + Math.sin(i * 0.5) * 18) % 80 + 10
    )
  };
});
const recentActivity = [
  {
    id: "a1",
    type: "user_reg",
    msg: "New buyer registered: Precision Parts SME Pvt Ltd",
    time: "2 min ago",
    icon: UserPlus,
    color: "text-blue-600"
  },
  {
    id: "a2",
    type: "product",
    msg: "Product listed: Hydraulic Pump Series 4000 by Ace Industrial",
    time: "8 min ago",
    icon: Tag,
    color: "text-emerald-600"
  },
  {
    id: "a3",
    type: "rfq",
    msg: "RFQ #109 submitted: 50 units of Steel Coils HR by Bharat Heavy",
    time: "15 min ago",
    icon: FileText,
    color: "text-purple-600"
  },
  {
    id: "a4",
    type: "txn",
    msg: "Transaction #216 completed: ₹8,75,000 — Tata Advanced → National Steel",
    time: "22 min ago",
    icon: CircleCheckBig,
    color: "text-emerald-600"
  },
  {
    id: "a5",
    type: "user_reg",
    msg: "New supplier registered: Electrotech Power Systems, Pune",
    time: "35 min ago",
    icon: UserPlus,
    color: "text-blue-600"
  },
  {
    id: "a6",
    type: "txn",
    msg: "Transaction #215 completed: ₹3,20,000 — Gujarat Narmada → HeavyTech",
    time: "47 min ago",
    icon: CircleCheckBig,
    color: "text-emerald-600"
  },
  {
    id: "a7",
    type: "product",
    msg: "Product delisted: Obsolete Motor Model 2019X by PneuTech",
    time: "1h ago",
    icon: Tag,
    color: "text-amber-600"
  },
  {
    id: "a8",
    type: "rfq",
    msg: "RFQ #110 accepted: 200 units PPE Kit — L&T Components → SafeGuard",
    time: "1h 15min ago",
    icon: FileText,
    color: "text-purple-600"
  },
  {
    id: "a9",
    type: "verify",
    msg: "Supplier verified: Precision Fasteners Corp (Faridabad)",
    time: "2h ago",
    icon: ShieldCheck,
    color: "text-emerald-600"
  },
  {
    id: "a10",
    type: "txn",
    msg: "Payment failed: Transaction #217 — ₹2,85,000 — buyer account review",
    time: "2h 30min ago",
    icon: TriangleAlert,
    color: "text-red-500"
  }
];
function AdminDashboardPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: ADMIN_NAV, portalName: "Admin Control", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Admin Dashboard",
        description: "LinkUp Platform Control",
        breadcrumb: "Administration",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-[#1e40af] text-white text-xs px-3 py-1.5 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3" }),
          "Admin"
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Total Users",
          value: "1,733",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4" }),
          accent: "blue",
          trend: 8.2,
          trendLabel: "vs last month"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Buyers",
          value: "1,247",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4" }),
          accent: "blue",
          trend: 6.1,
          trendLabel: "vs last month"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Suppliers",
          value: "486",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4" }),
          accent: "green",
          trend: 4.8,
          trendLabel: "vs last month"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Products Listed",
          value: "3,892",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-4" }),
          accent: "purple",
          trend: 12.4,
          trendLabel: "vs last month"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Transactions",
          value: "12,847",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "size-4" }),
          accent: "amber",
          trend: 15.3,
          trendLabel: "vs last month"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Platform Revenue",
          value: "₹48.5L",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "size-4" }),
          accent: "green",
          trend: 18.7,
          trendLabel: "vs last month"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4 text-[#1e40af]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm text-foreground", children: "Daily Transactions — Last 30 Days" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          LineChart,
          {
            data: dailyData,
            margin: { top: 4, right: 8, left: -20, bottom: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "hsl(var(--border))"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", tick: { fontSize: 10 }, interval: 4 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 12 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Line,
                {
                  type: "monotone",
                  dataKey: "transactions",
                  stroke: "#1e40af",
                  strokeWidth: 2,
                  dot: false,
                  name: "Transactions"
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "size-4 text-[#059669]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm text-foreground", children: "Monthly Revenue Trend (₹)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          BarChart,
          {
            data: monthlyData,
            margin: { top: 4, right: 8, left: -20, bottom: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "hsl(var(--border))"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tick: { fontSize: 10 },
                  tickFormatter: (v) => `${(v / 1e6).toFixed(0)}L`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  formatter: (v) => [
                    `₹${(v / 1e5).toFixed(2)}L`,
                    "Revenue"
                  ],
                  contentStyle: { fontSize: 12 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Bar,
                {
                  dataKey: "revenue",
                  fill: "#1e40af",
                  name: "Revenue",
                  radius: [3, 3, 0, 0]
                }
              )
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-lg border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-sm text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4 text-primary" }),
          "Recent Platform Activity"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 max-h-72 overflow-y-auto pr-1", children: recentActivity.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-3 py-2 border-b last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `size-4 mt-0.5 shrink-0 ${item.color}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: item.msg }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.time })
                ] })
              ]
            },
            item.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm text-foreground mb-3", children: "Pending Actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-md bg-amber-50 border border-amber-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-amber-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-amber-800", children: "Pending Verifications" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-amber-600", children: "3 users awaiting KYC review" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/users", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-500 text-white text-xs cursor-pointer", children: "3" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-md bg-red-50 border border-red-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-red-800", children: "Escalated Support" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-red-600", children: "2 tickets need human review" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/feedback", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-500 text-white text-xs cursor-pointer", children: "2" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm text-foreground mb-3", children: "Top Buyers by Volume" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: mockBuyers.slice(0, 3).map((buyer, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground w-4", children: idx + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: buyer.company }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-emerald-600 font-semibold shrink-0", children: [
              "₹",
              (buyer.volume / 1e7).toFixed(1),
              "Cr"
            ] })
          ] }, buyer.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm text-foreground mb-2", children: "Top Suppliers by Revenue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: mockSuppliers.slice(0, 3).map((sup, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground w-4", children: idx + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: sup.company }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-blue-600 font-semibold shrink-0", children: [
                "₹",
                (sup.revenue / 1e7).toFixed(1),
                "Cr"
              ] })
            ] }, sup.id)) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ADMIN_NAV,
  AdminDashboardPage
};
