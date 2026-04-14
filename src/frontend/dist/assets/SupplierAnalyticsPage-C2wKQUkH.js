import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as formatINR, U as Users } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { S as StatCard } from "./StatCard-Bv93da2j.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { g as categoryData, f as monthlyData } from "./mockData-BxT47ZmF.js";
import { S as SUPPLIER_NAV } from "./SupplierDashboardPage-cWtvCcFb.js";
import { T as TrendingUp } from "./trending-up-Ca1toMKI.js";
import { F as FileText } from "./file-text-CTliJwMv.js";
import { P as Package } from "./index-BfZ639JC.js";
import { R as ResponsiveContainer, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, a as Cell, L as Legend } from "./generateCategoricalChart-CLakrVV0.js";
import { L as LineChart, a as Line, B as BarChart } from "./BarChart-5YJHTPWT.js";
import { P as PieChart, a as Pie } from "./PieChart-fi_giMy8.js";
import "./menu-dXZt9xRu.js";
import "./index-CPoAQatq.js";
import "./index-CN9hoFXr.js";
import "./tag-BO63xnL_.js";
import "./chart-no-axes-column-Othc_n2I.js";
import "./credit-card-BoogVyUk.js";
import "./circle-check-big-FdkHYrhv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
const supplierMonthly = [
  { month: "Nov", revenue: 112e4 },
  { month: "Dec", revenue: 98e4 },
  { month: "Jan", revenue: 135e4 },
  { month: "Feb", revenue: 182e4 },
  { month: "Mar", revenue: 21e5 },
  { month: "Apr", revenue: 245e4 }
];
const productPerformance = [
  {
    id: "p1",
    name: "Industrial Hydraulic Press 50T",
    sold: 4,
    revenue: 114e4,
    avgPrice: 285e3,
    stock: 12
  },
  {
    id: "p2",
    name: "CNC Milling Machine VMC 850",
    sold: 2,
    revenue: 37e5,
    avgPrice: 185e4,
    stock: 4
  },
  {
    id: "p3",
    name: "Industrial Air Compressor 10HP",
    sold: 7,
    revenue: 595e3,
    avgPrice: 85e3,
    stock: 18
  },
  {
    id: "p4",
    name: "PPE Kit — Complete Industrial Set",
    sold: 320,
    revenue: 592e3,
    avgPrice: 1850,
    stock: 1200
  },
  {
    id: "p5",
    name: "Full-Body Safety Harness Class E",
    sold: 45,
    revenue: 189e3,
    avgPrice: 4200,
    stock: 340
  }
];
const buyerPieData = [
  { name: "Tata Advanced Materials", value: 32, color: "#059669" },
  { name: "Bharat Heavy Electricals", value: 26, color: "#047857" },
  { name: "Mahindra Logistics", value: 20, color: "#10b981" },
  { name: "Larsen & Toubro", value: 14, color: "#34d399" },
  { name: "Others", value: 8, color: "#6ee7b7" }
];
const DATE_RANGES = [
  "Last 30 days",
  "Last 3 months",
  "Last 6 months",
  "This Year"
];
function SupplierAnalyticsPage() {
  const [dateRange, setDateRange] = reactExports.useState("Last 6 months");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: SUPPLIER_NAV, portalName: "Supplier Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Sales Analytics",
        description: "Track your product performance, revenue trends and buyer activity",
        breadcrumb: "Supplier Portal",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: DATE_RANGES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              variant: dateRange === r ? "default" : "outline",
              className: `text-xs h-7 px-2.5 ${dateRange === r ? "bg-[#059669] hover:bg-[#047857] text-white" : ""}`,
              onClick: () => setDateRange(r),
              "data-ocid": `date-range-${r.replace(/\s+/g, "-").toLowerCase()}`,
              children: r
            },
            r
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Total Revenue (YTD)",
          value: formatINR(981e4),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "size-4" }),
          trend: 22.4,
          accent: "green"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "RFQs Received",
          value: 38,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4" }),
          trend: 15,
          trendLabel: "this month",
          accent: "blue"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Active Listings",
          value: 15,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-4" }),
          trend: 0,
          accent: "amber"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Repeat Buyers",
          value: 8,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4" }),
          trend: 33,
          trendLabel: "vs last month",
          accent: "purple"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Monthly Revenue Trend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          LineChart,
          {
            data: supplierMonthly,
            margin: { top: 5, right: 5, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "hsl(var(--border))"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                XAxis,
                {
                  dataKey: "month",
                  tick: { fontSize: 12, fill: "hsl(var(--muted-foreground))" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tick: { fontSize: 12, fill: "hsl(var(--muted-foreground))" },
                  tickFormatter: (v) => `₹${(v / 1e5).toFixed(0)}L`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  formatter: (v) => [formatINR(v), "Revenue"],
                  contentStyle: { fontSize: 12, borderRadius: 8 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Line,
                {
                  type: "monotone",
                  dataKey: "revenue",
                  stroke: "#059669",
                  strokeWidth: 2.5,
                  dot: { r: 4, fill: "#059669" },
                  activeDot: { r: 6 },
                  name: "Revenue"
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Revenue by Product Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          BarChart,
          {
            data: categoryData,
            margin: { top: 5, right: 5, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "hsl(var(--border))"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                XAxis,
                {
                  dataKey: "name",
                  tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" },
                  interval: 0,
                  angle: -20,
                  textAnchor: "end",
                  height: 45
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tick: { fontSize: 12, fill: "hsl(var(--muted-foreground))" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  formatter: (v) => [`${v}%`, "Share"],
                  contentStyle: { fontSize: 12, borderRadius: 8 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [4, 4, 0, 0], name: "Share (%)", children: categoryData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.name)) })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-1 rounded-lg border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Sales Distribution by Buyer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pie,
            {
              data: buyerPieData,
              cx: "50%",
              cy: "50%",
              innerRadius: 45,
              outerRadius: 75,
              dataKey: "value",
              paddingAngle: 2,
              children: buyerPieData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.name))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              formatter: (v) => [`${v}%`, "Share"],
              contentStyle: { fontSize: 12, borderRadius: 8 }
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mt-2", children: buyerPieData.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "size-2 rounded-full shrink-0",
              style: { background: d.color }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground flex-1 truncate", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
            d.value,
            "%"
          ] })
        ] }, d.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-2 rounded-lg border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Buyer & Supplier Growth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          LineChart,
          {
            data: monthlyData,
            margin: { top: 5, right: 5, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "hsl(var(--border))"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                XAxis,
                {
                  dataKey: "month",
                  tick: { fontSize: 12, fill: "hsl(var(--muted-foreground))" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tick: { fontSize: 12, fill: "hsl(var(--muted-foreground))" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 12, borderRadius: 8 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Line,
                {
                  type: "monotone",
                  dataKey: "buyers",
                  stroke: "#1e40af",
                  strokeWidth: 2,
                  dot: { r: 3 },
                  name: "Active Buyers"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Line,
                {
                  type: "monotone",
                  dataKey: "suppliers",
                  stroke: "#059669",
                  strokeWidth: 2,
                  dot: { r: 3 },
                  name: "Active Suppliers"
                }
              )
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Product Performance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: dateRange })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/50 border-b", children: [
          "Product Name",
          "Units Sold",
          "Revenue",
          "Avg Price",
          "Stock Remaining"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: productPerformance.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
            "data-ocid": `product-perf-${p.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground max-w-[220px] truncate", children: p.name }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground text-right", children: p.sold.toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold text-[#059669]", children: formatINR(p.revenue) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: formatINR(p.avgPrice) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `text-sm font-medium ${p.stock < 10 ? "text-red-600" : "text-foreground"}`,
                  children: [
                    p.stock.toLocaleString(),
                    p.stock < 10 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[10px] text-red-500", children: "(Low)" })
                  ]
                }
              ) })
            ]
          },
          p.id
        )) })
      ] }) })
    ] })
  ] });
}
export {
  SupplierAnalyticsPage
};
