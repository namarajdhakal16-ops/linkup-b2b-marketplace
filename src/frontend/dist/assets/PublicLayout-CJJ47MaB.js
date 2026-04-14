import { r as reactExports, b as useRouterState, j as jsxRuntimeExports, L as Link, X } from "./index-vpbP6K3q.js";
import { F as Factory, c as cn, B as Button } from "./button-DhRdAl0g.js";
import { M as Menu } from "./menu-dXZt9xRu.js";
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" }
];
function PublicLayout({ children }) {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const { location } = useRouterState();
  const currentPath = location.pathname;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-card border-b border-border sticky top-0 z-40 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-[#1e40af] flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "size-4 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl text-[#1e40af] tracking-tight", children: "LinkUp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:block text-xs text-muted-foreground border-l border-border pl-2.5 leading-tight", children: [
            "B2B Industrial",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Marketplace"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.href,
            className: cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150",
              currentPath === link.href ? "text-[#1e40af] bg-[#1e40af]/8" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            ),
            children: link.label
          },
          link.href
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/buyer/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "text-[#1e40af] border-[#1e40af]/30 hover:bg-[#1e40af]/5",
              children: "Buyer Portal"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/supplier/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "bg-[#059669] hover:bg-[#047857] text-white",
              children: "Supplier Portal"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted",
            onClick: () => setMobileOpen(!mobileOpen),
            "aria-label": mobileOpen ? "Close menu" : "Open menu",
            children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
          }
        )
      ] }) }),
      mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden border-t border-border bg-card px-4 py-3 space-y-1", children: [
        NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.href,
            onClick: () => setMobileOpen(false),
            className: cn(
              "block px-3 py-2 rounded-md text-sm font-medium",
              currentPath === link.href ? "bg-[#1e40af]/10 text-[#1e40af]" : "text-muted-foreground hover:bg-muted"
            ),
            children: link.label
          },
          link.href
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2 border-t border-border mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/buyer/dashboard", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "w-full text-[#1e40af] border-[#1e40af]/30",
              children: "Buyer Portal"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/supplier/dashboard", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "w-full bg-[#059669] hover:bg-[#047857] text-white",
              children: "Supplier Portal"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-card border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 rounded bg-[#1e40af] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "size-3.5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-[#1e40af]", children: "LinkUp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4 text-sm text-muted-foreground", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: link.href,
          className: "hover:text-foreground transition-colors",
          children: link.label
        },
        link.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
        "© ",
        currentYear,
        ". Built with love using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "underline hover:text-foreground",
            children: "caffeine.ai"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  PublicLayout as P
};
