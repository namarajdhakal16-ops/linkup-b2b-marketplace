import { d as useNavigate, g as useAuthStore, j as jsxRuntimeExports, S as ShoppingCart, u as ue } from "./index-vpbP6K3q.js";
import { F as Factory, c as cn, B as Button } from "./button-DhRdAl0g.js";
import { T as Truck } from "./truck-Bf7iNDR2.js";
import { L as Layers } from "./layers-DEB89b4a.js";
import { A as ArrowRight } from "./arrow-right-BJb97rUV.js";
const ROLES = [
  {
    role: "buyer",
    icon: ShoppingCart,
    title: "Buyer Portal",
    description: "Source industrial products, manage RFQs, and connect with verified suppliers.",
    features: [
      "Product catalog access",
      "RFQ management",
      "Supplier directory",
      "Purchase analytics"
    ],
    color: "text-[#1e40af]",
    border: "border-[#1e40af]/30 hover:border-[#1e40af]",
    bg: "bg-[#1e40af]/5 hover:bg-[#1e40af]/10",
    cta: "Enter Buyer Portal",
    redirect: "/buyer/dashboard"
  },
  {
    role: "supplier",
    icon: Truck,
    title: "Supplier Portal",
    description: "List products, respond to buyer RFQs, and grow your industrial sales pipeline.",
    features: [
      "Product management",
      "RFQ leads inbox",
      "Sales analytics",
      "Subscription billing"
    ],
    color: "text-[#059669]",
    border: "border-[#059669]/30 hover:border-[#059669]",
    bg: "bg-[#059669]/5 hover:bg-[#059669]/10",
    cta: "Enter Supplier Portal",
    redirect: "/supplier/dashboard"
  },
  {
    role: "both",
    icon: Layers,
    title: "Buyer & Supplier",
    description: "Access both portals with a unified dashboard. Multi-role pricing applies.",
    features: [
      "Full buyer access",
      "Full supplier access",
      "Unified dashboard",
      "40% multi-role discount"
    ],
    color: "text-purple-700",
    border: "border-purple-300 hover:border-purple-500",
    bg: "bg-purple-50 hover:bg-purple-100",
    cta: "Enter Combined Portal",
    redirect: "/buyer/dashboard"
  }
];
function RoleSelectPage() {
  const navigate = useNavigate();
  const { setAuth, principal } = useAuthStore();
  function handleSelect(role) {
    setAuth(principal ?? `principal-${Date.now()}`, role.role);
    ue.success(`Welcome! Entering ${role.title}.`);
    navigate({ to: role.redirect });
  }
  function handleAdmin() {
    setAuth(principal ?? "admin-principal", "admin");
    ue.success("Entering Admin Portal");
    navigate({ to: "/admin/dashboard" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/40 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-[#1e40af] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "size-5 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl text-[#1e40af]", children: "LinkUp" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-xl mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-3", children: "Choose your role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: "Select how you want to access the LinkUp marketplace. You can change this later from your profile settings." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl", children: ROLES.map((role) => {
      const Icon = role.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => handleSelect(role),
          "data-ocid": `role-select-${role.role}`,
          className: cn(
            "rounded-2xl border-2 p-6 text-left transition-all duration-200 cursor-pointer",
            role.border,
            role.bg,
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "size-12 rounded-xl border flex items-center justify-center mb-4",
                  role.color,
                  role.border.split(" ")[0]
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: cn(
                  "font-display font-bold text-lg mb-1",
                  role.color
                ),
                children: role.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4 leading-relaxed", children: role.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-5", children: role.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-center gap-2 text-sm text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "size-1.5 rounded-full shrink-0",
                        role.color.replace("text-", "bg-")
                      )
                    }
                  ),
                  f
                ]
              },
              f
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "flex items-center gap-2 font-semibold text-sm",
                  role.color
                ),
                children: [
                  role.cta,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
                ]
              }
            )
          ]
        },
        role.role
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "ghost",
        size: "sm",
        onClick: handleAdmin,
        className: "text-xs text-muted-foreground hover:text-foreground",
        "data-ocid": "admin-access-btn",
        children: "Continue as Admin (internal)"
      }
    ) })
  ] }) });
}
export {
  RoleSelectPage
};
