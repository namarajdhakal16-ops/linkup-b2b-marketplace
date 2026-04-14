import { r as reactExports, j as jsxRuntimeExports, u as ue, f as formatINR } from "./index-vpbP6K3q.js";
import { P as PortalLayout, S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { I as Input } from "./input-DhcykFoy.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { b as mockSuppliers } from "./mockData-BxT47ZmF.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { S as Search } from "./search-DL4UAOS0.js";
import { C as CircleCheckBig } from "./circle-check-big-FdkHYrhv.js";
import { C as Clock } from "./clock-D5njmlhT.js";
import { P as Package } from "./index-BfZ639JC.js";
import { M as MapPin } from "./map-pin-Bqb__ByU.js";
import { P as Phone, M as Mail } from "./phone-DnTK6QNw.js";
import { S as Star } from "./star-7OWaTLG1.js";
import "./menu-dXZt9xRu.js";
import "./index-CPoAQatq.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./file-text-CTliJwMv.js";
import "./building-2-DKVBuSES.js";
import "./calculator-CvftqAHB.js";
import "./chart-no-axes-column-Othc_n2I.js";
const INDUSTRIES = [
  "All Industries",
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery"
];
const industryMap = {
  "sup-001": "Industrial Equipment",
  "sup-002": "Safety Gear",
  "sup-003": "Raw Materials",
  "sup-004": "Electronics",
  "sup-005": "Chemicals",
  "sup-006": "Machinery",
  "sup-007": "Pneumatics",
  "sup-008": "Fasteners"
};
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
    [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: `size-3.5 ${n <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`
      },
      n
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold ml-1", children: rating.toFixed(1) })
  ] });
}
function SupplierDirectoryPage() {
  const [search, setSearch] = reactExports.useState("");
  const [industry, setIndustry] = reactExports.useState("All Industries");
  const [minRating, setMinRating] = reactExports.useState("0");
  const [selected, setSelected] = reactExports.useState(null);
  const filtered = mockSuppliers.filter((s) => {
    const matchSearch = !search || s.company.toLowerCase().includes(search.toLowerCase()) || s.location.toLowerCase().includes(search.toLowerCase());
    const ind = industryMap[s.id] ?? "";
    const matchIndustry = industry === "All Industries" || ind === industry;
    const matchRating = s.rating >= Number(minRating);
    return matchSearch && matchIndustry && matchRating;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Supplier Directory",
        description: "Explore verified industrial suppliers across all categories.",
        breadcrumb: "Buyer Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search suppliers...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9",
            "data-ocid": "supplier-search"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: industry, onValueChange: setIndustry, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "w-[180px]",
            "data-ocid": "supplier-industry-filter",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: INDUSTRIES.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: i, children: i }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: minRating, onValueChange: setMinRating, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "w-[150px]",
            "data-ocid": "supplier-rating-filter",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Min Rating" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0", children: "All Ratings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "4", children: "4+ Stars" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "4.5", children: "4.5+ Stars" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: filtered.map((sup) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "rounded-lg border bg-card p-4 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer text-left w-full",
        onClick: () => setSelected(sup),
        "data-ocid": `supplier-card-${sup.id}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-base shrink-0", children: sup.company.slice(0, 2).toUpperCase() }),
            sup.verified && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-emerald-100 text-emerald-700 border-emerald-200 border text-xs gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-3" }),
              "Verified"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm leading-snug", children: sup.company }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sup.contactName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs w-fit", children: industryMap[sup.id] ?? "Industrial" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: sup.rating }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Responds in ",
                sup.responseTime
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                sup.products,
                " products listed"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sup.location })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "sm",
                variant: "outline",
                className: "flex-1 text-xs",
                onClick: (e) => {
                  e.stopPropagation();
                  ue.info(`Contacting ${sup.company}...`);
                },
                "data-ocid": `supplier-contact-${sup.id}`,
                children: "Contact"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "sm",
                className: "flex-1 text-xs bg-[#059669] hover:bg-[#047857] text-white",
                onClick: (e) => {
                  e.stopPropagation();
                  setSelected(sup);
                },
                "data-ocid": `supplier-view-products-${sup.id}`,
                children: "View Products"
              }
            )
          ] })
        ]
      },
      sup.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!selected, onOpenChange: () => setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-md overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display", children: selected == null ? void 0 : selected.company }) }),
      selected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-xl", children: selected.company.slice(0, 2).toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: selected.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
              selected.verified && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-emerald-100 text-emerald-700 border-emerald-200 border text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-3 mr-1" }),
                "Verified"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: industryMap[selected.id] ?? "Industrial" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Contact: ",
              selected.contactName
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              selected.id,
              "@linkup.com"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selected.location })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Avg. Response: ",
              selected.responseTime
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              selected.products,
              " active product listings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium mb-2", children: "Annual Revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg", children: formatINR(selected.revenue) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium mb-2", children: "Certifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ["ISO 9001", "CE", "BIS", "MSME Certified"].map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: cert }, cert)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            className: "w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
            onClick: () => {
              ue.success(`Request sent to ${selected.company}`);
              setSelected(null);
            },
            children: "Send Contact Request"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  SupplierDirectoryPage
};
