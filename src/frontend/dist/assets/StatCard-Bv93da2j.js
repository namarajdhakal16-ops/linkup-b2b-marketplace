import { j as jsxRuntimeExports } from "./index-vpbP6K3q.js";
import { c as cn } from "./button-DhRdAl0g.js";
const accentMap = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100"
};
function StatCard({
  label,
  value,
  icon,
  trend,
  trendLabel,
  className,
  accent = "blue"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-lg border bg-card p-5 shadow-sm flex flex-col gap-3",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: label }),
          icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn("rounded-md p-2 border text-sm", accentMap[accent]),
              children: icon
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground font-display leading-none", children: value }),
        trend !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: cn(
              "text-xs font-medium flex items-center gap-1",
              trend >= 0 ? "text-emerald-600" : "text-red-500"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                trend >= 0 ? "↑" : "↓",
                " ",
                Math.abs(trend),
                "%"
              ] }),
              trendLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: trendLabel })
            ]
          }
        )
      ]
    }
  );
}
export {
  StatCard as S
};
