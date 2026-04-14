import { r as reactExports, d as useNavigate, e as useInternetIdentity, g as useAuthStore, j as jsxRuntimeExports, u as ue } from "./index-vpbP6K3q.js";
import { F as Factory, B as Button } from "./button-DhRdAl0g.js";
import { S as Shield } from "./shield-D24ibK4n.js";
import { Z as Zap } from "./zap-U6VceEPs.js";
import { G as Globe } from "./globe-DXyHJLGA.js";
const FEATURES = [
  {
    icon: Shield,
    label: "Verified Suppliers",
    desc: "Every supplier is vetted and certified"
  },
  {
    icon: Zap,
    label: "Instant RFQ",
    desc: "Submit quotes in under 60 seconds"
  },
  {
    icon: Globe,
    label: "Pan-India Network",
    desc: "1,200+ industrial buyers & suppliers"
  }
];
function LoginPage() {
  const [loading, setLoading] = reactExports.useState(false);
  const navigate = useNavigate();
  const { login } = useInternetIdentity();
  const { setAuth } = useAuthStore();
  async function handleLogin() {
    setLoading(true);
    try {
      await login();
      const mockPrincipal = `dev-${Date.now()}-principal`;
      setAuth(mockPrincipal, "buyer");
      navigate({ to: "/role-select" });
    } catch {
      const mockPrincipal = `dev-${Date.now()}`;
      setAuth(mockPrincipal, "buyer");
      navigate({ to: "/role-select" });
    } finally {
      setLoading(false);
    }
  }
  function handleMockLogin() {
    const mockPrincipal = `mock-${Date.now()}`;
    setAuth(mockPrincipal, "buyer");
    ue.success("Signed in with mock credentials");
    navigate({ to: "/role-select" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col justify-between w-1/2 p-12 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-[#1e40af] flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "size-5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xl tracking-tight", children: "LinkUp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-300 text-xs", children: "B2B Industrial Marketplace" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold leading-tight mb-4", children: [
            "India's most trusted",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "industrial marketplace"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-lg leading-relaxed", children: "Connect with verified buyers and suppliers across 50+ industrial categories. Streamline procurement, manage RFQs, and grow your business." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: FEATURES.map(({ icon: Icon, label, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 text-blue-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white text-sm", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: desc })
          ] })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-slate-400 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹284 Cr+ in transactions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-slate-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1,247 Buyers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-slate-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "486 Suppliers" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center p-6 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-[#1e40af] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "size-4 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-[#1e40af]", children: "LinkUp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "B2B Industrial Marketplace" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card shadow-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Welcome back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Sign in securely with Internet Identity to access your portal." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full h-11 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold text-base",
              onClick: handleLogin,
              disabled: loading,
              "data-ocid": "ii-login-btn",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                "Connecting..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-4" }),
                "Connect with Internet Identity"
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "or" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              className: "w-full h-10 text-sm text-muted-foreground",
              onClick: handleMockLogin,
              "data-ocid": "mock-login-btn",
              children: "Continue with mock account (dev)"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-3.5 text-[#059669]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Secured by Internet Computer cryptography. No passwords stored." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-4", children: [
        "New to LinkUp?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleMockLogin,
            className: "text-[#1e40af] underline hover:no-underline",
            children: "Register as buyer or supplier"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  LoginPage
};
