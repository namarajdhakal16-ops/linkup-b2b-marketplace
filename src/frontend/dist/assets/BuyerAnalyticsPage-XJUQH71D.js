import { r as reactExports, j as jsxRuntimeExports, f as formatINR } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CEx7R28g.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { f as monthlyData, g as categoryData, b as mockSuppliers } from "./mockData-BxT47ZmF.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { R as ResponsiveContainer, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, a as Cell, L as Legend } from "./generateCategoricalChart-CLakrVV0.js";
import { L as LineChart, a as Line, B as BarChart } from "./BarChart-5YJHTPWT.js";
import { P as PieChart, a as Pie } from "./PieChart-fi_giMy8.js";
import "./button-DhRdAl0g.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./file-text-CTliJwMv.js";
import "./building-2-DKVBuSES.js";
import "./calculator-CvftqAHB.js";
import "./chart-no-axes-column-Othc_n2I.js";
const PIE_COLORS = ["#1e40af", "#059669", "#d97706", "#7c3aed", "#0891b2"];
const supplierMetrics = mockSuppliers.slice(0, 5).map((s, i) => ({
  supplier: s.company.split(" ").slice(0, 2).join(" "),
  orders: [12, 9, 7, 5, 3][i],
  totalSpend: [3425e3, 555e4, 875e3, 42e4, 38e4][i],
  avgOrder: [285416, 616666, 125e3, 84e3, 76e3][i],
  responseTime: [s.responseTime, "2h", "4h", "3h", "6h"][i]
}));
const pieData = mockSuppliers.slice(0, 5).map((s, i) => ({
  name: s.company.split(" ")[0],
  value: [38, 25, 18, 12, 7][i]
}));
function INRTooltip({ active, payload, label }) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card shadow-lg p-3 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: label }),
    payload.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
      entry.name,
      ":",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: formatINR(entry.value) })
    ] }, entry.name))
  ] });
}
function BuyerAnalyticsPage() {
  const [dateRange, setDateRange] = reactExports.useState("6m");
  const displayData = dateRange === "3m" ? monthlyData.slice(-3) : monthlyData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Analytics & Reports",
        description: "Track your procurement performance and spending trends.",
        breadcrumb: "Buyer Portal",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: dateRange, onValueChange: setDateRange, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "w-[130px]",
              "data-ocid": "analytics-date-range",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "3m", children: "Last 3 Months" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "6m", children: "Last 6 Months" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1y", children: "Last 12 Months" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Monthly Spend (₹)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          LineChart,
          {
            data: displayData,
            margin: { top: 5, right: 10, left: 0, bottom: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "hsl(var(--border))"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 12 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tickFormatter: (v) => `₹${(v / 1e5).toFixed(0)}L`,
                  tick: { fontSize: 11 },
                  width: 50
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(INRTooltip, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Line,
                {
                  type: "monotone",
                  dataKey: "revenue",
                  name: "Spend",
                  stroke: "#1e40af",
                  strokeWidth: 2.5,
                  dot: { fill: "#1e40af", r: 4 },
                  activeDot: { r: 6 }
                }
              )
            ]
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Spend by Category" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          BarChart,
          {
            data: categoryData,
            margin: { top: 5, right: 10, left: 0, bottom: 0 },
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
                  tick: { fontSize: 10 },
                  interval: 0,
                  angle: -20,
                  textAnchor: "end",
                  height: 50
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Share"] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Bar,
                {
                  dataKey: "value",
                  name: "Share %",
                  fill: "#059669",
                  radius: [3, 3, 0, 0]
                }
              )
            ]
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Orders by Supplier" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pie,
            {
              data: pieData,
              cx: "50%",
              cy: "50%",
              innerRadius: 50,
              outerRadius: 80,
              dataKey: "value",
              paddingAngle: 3,
              children: pieData.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Cell,
                {
                  fill: PIE_COLORS[index % PIE_COLORS.length]
                },
                entry.name
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Share"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 10 })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Supplier Performance" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "overflow-x-auto p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground", children: "Supplier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-2.5 font-medium text-muted-foreground", children: "Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium text-muted-foreground hidden sm:table-cell", children: "Total Spend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium text-muted-foreground hidden md:table-cell", children: "Avg Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-2.5 font-medium text-muted-foreground", children: "Response" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: supplierMetrics.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b last:border-0 hover:bg-muted/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium", children: row.supplier }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: row.orders }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-display hidden sm:table-cell", children: formatINR(row.totalSpend) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-display hidden md:table-cell", children: formatINR(row.avgOrder) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center text-muted-foreground", children: row.responseTime })
              ]
            },
            row.supplier
          )) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  BuyerAnalyticsPage
};
