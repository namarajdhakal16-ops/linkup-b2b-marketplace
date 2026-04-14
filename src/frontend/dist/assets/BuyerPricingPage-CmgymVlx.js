import { r as reactExports, j as jsxRuntimeExports, f as formatINR, u as ue, h as calculateBuyerFee, i as calculateMultiRoleFee } from "./index-vpbP6K3q.js";
import { R as Root, I as Item, d as createRovingFocusGroupScope, P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { c as cn, B as Button } from "./button-DhRdAl0g.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CEx7R28g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { S as Switch } from "./switch-DmeMvWqA.js";
import { u as useControllableState, P as Primitive, a as useId, c as composeEventHandlers, b as createContextScope } from "./index-CPoAQatq.js";
import { a as Presence } from "./index-BfZ639JC.js";
import { u as useDirection } from "./index-CN9hoFXr.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { C as CircleCheck } from "./circle-check--VULWhTa.js";
import { T as TrendingUp } from "./trending-up-Ca1toMKI.js";
import { A as ArrowUpRight } from "./arrow-up-right-fqNj8wUm.js";
import "./menu-dXZt9xRu.js";
import "./index-Bym3sJYe.js";
import "./file-text-CTliJwMv.js";
import "./building-2-DKVBuSES.js";
import "./calculator-CvftqAHB.js";
import "./chart-no-axes-column-Othc_n2I.js";
var TABS_NAME = "Tabs";
var [createTabsContext] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
const TIER_INFO = {
  tier1: {
    label: "Tier 1 — Free",
    price: "₹0",
    features: [
      "Browse product catalog",
      "Submit up to 3 RFQs/month",
      "Basic supplier directory",
      "Email support"
    ],
    color: "border-muted"
  },
  tier2: {
    label: "Tier 2 — SME",
    price: "From ₹1,000",
    features: [
      "Everything in Tier 1",
      "Unlimited RFQs",
      "Priority listings",
      "Dedicated account manager",
      "Analytics dashboard"
    ],
    color: "border-[#1e40af]"
  },
  tier3: {
    label: "Tier 3 — Mid-size",
    price: "From ₹2,000",
    features: [
      "Everything in Tier 2",
      "Bulk order discounts",
      "Custom contract management",
      "Multi-user access (5 seats)",
      "API integration"
    ],
    color: "border-[#059669]"
  },
  tier4: {
    label: "Tier 4 — Enterprise",
    price: "From ₹2,000",
    features: [
      "Everything in Tier 3",
      "Verified supplier priority",
      "Premium 24/7 support",
      "Custom integrations",
      "White-glove onboarding",
      "Unlimited seats"
    ],
    color: "border-purple-500"
  }
};
const TIERS = ["tier1", "tier2", "tier3", "tier4"];
function BuyerPricingPage() {
  const [activeTier, setActiveTier] = reactExports.useState("tier2");
  const [amount, setAmount] = reactExports.useState("");
  const [multiRole, setMultiRole] = reactExports.useState(false);
  const [supplierSize, setSupplierSize] = reactExports.useState("medium");
  const [supplierSales, setSupplierSales] = reactExports.useState("");
  const amountNum = Number(amount.replace(/,/g, "")) || 0;
  const salesNum = Number(supplierSales.replace(/,/g, "")) || 0;
  const buyerFee = calculateBuyerFee(activeTier, amountNum);
  const multiRoleFee = multiRole ? calculateMultiRoleFee(activeTier, supplierSize, amountNum, salesNum) : 0;
  const minFee = activeTier === "tier1" ? 0 : activeTier === "tier2" ? 1e3 : 2e3;
  const commission = amountNum > 0 ? amountNum * 1e-4 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Pricing Calculator",
        description: "Understand your platform fees and explore tier options.",
        breadcrumb: "Buyer Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Select Your Tier" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Tabs,
            {
              value: activeTier,
              onValueChange: (v) => setActiveTier(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "grid grid-cols-4 w-full mb-4", children: TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: t,
                    className: "text-xs",
                    "data-ocid": `tier-tab-${t}`,
                    children: t.replace("tier", "T")
                  },
                  t
                )) }),
                TIERS.map((t) => {
                  const info = TIER_INFO[t];
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: t, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border-2 p-4 ${info.color}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold font-display", children: info.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-[#1e40af]", children: info.price })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: info.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-center gap-2 text-sm",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3.5 text-emerald-500 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
                        ]
                      },
                      f
                    )) })
                  ] }) }, t);
                })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Transaction Calculator" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "calc-amount", children: "Transaction Amount (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium", children: "₹" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "calc-amount",
                    className: "pl-8",
                    placeholder: "Enter amount...",
                    value: amount,
                    onChange: (e) => setAmount(e.target.value),
                    "data-ocid": "pricing-amount-input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2 border-t border-b", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Multi-Role User" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Also registered as a supplier? Get 40% discount on combined fees." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: multiRole,
                  onCheckedChange: setMultiRole,
                  "data-ocid": "multi-role-toggle"
                }
              )
            ] }),
            multiRole && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 p-3 rounded-lg bg-muted/40 border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Supplier Size" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: supplierSize,
                    onValueChange: (v) => setSupplierSize(v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "supplier-size-select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "small", children: "Small / Micro" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "large", children: "Large" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Sales Volume (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Sales amount...",
                    value: supplierSales,
                    onChange: (e) => setSupplierSales(e.target.value)
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-[#1e40af]/30 bg-blue-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "size-4 text-[#1e40af]" }),
            "Fee Calculation Result"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: amountNum === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "Enter a transaction amount to calculate fees." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Minimum Platform Fee" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold font-display", children: formatINR(minFee) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Commission (0.01%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold font-display", children: formatINR(commission) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Buyer Platform Fee" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[#1e40af]", children: formatINR(buyerFee) })
              ] }),
              multiRole && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-emerald-700 font-medium", children: "Multi-Role Fee (60% rule)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-emerald-700", children: formatINR(multiRoleFee) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3 rounded-lg bg-[#1e40af]/10 border border-[#1e40af]/20 px-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Total Fee Payable" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl text-[#1e40af]", children: formatINR(multiRole ? multiRoleFee : buyerFee) })
              ] })
            ] }),
            multiRole && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-md p-2", children: [
              "✓ Saving ",
              formatINR(buyerFee - multiRoleFee),
              " with multi-role discount"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Tier Comparison" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium text-muted-foreground", children: "Feature" }),
              TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: `text-center py-2 font-medium ${activeTier === t ? "text-[#1e40af]" : "text-muted-foreground"}`,
                  children: t.replace("tier", "T")
                },
                t
              ))
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
              {
                label: "Base Fee",
                values: ["Free", "₹1,000", "₹2,000", "₹2,000"]
              },
              {
                label: "Commission",
                values: ["0%", "0.01%", "0.01%", "0.01%"]
              },
              {
                label: "RFQ Limit",
                values: [
                  "3/month",
                  "Unlimited",
                  "Unlimited",
                  "Unlimited"
                ]
              },
              {
                label: "Support",
                values: [
                  "Email",
                  "Dedicated AM",
                  "Priority",
                  "24/7 Premium"
                ]
              },
              {
                label: "Verified Suppliers",
                values: ["✗", "✗", "✗", "✓"]
              }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-medium pr-2", children: row.label }),
              row.values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  className: `py-2 text-center ${activeTier === TIERS[i] ? "font-bold text-[#1e40af] bg-blue-50/50" : ""}`,
                  children: v
                },
                TIERS[i]
              ))
            ] }, row.label)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            className: "w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
            onClick: () => ue.success(
              "Upgrade request submitted! Our team will contact you within 24 hours."
            ),
            "data-ocid": "upgrade-tier-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 mr-2" }),
              "Upgrade My Tier"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  BuyerPricingPage
};
