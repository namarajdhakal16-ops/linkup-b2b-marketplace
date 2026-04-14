import { r as reactExports, j as jsxRuntimeExports, f as formatINR, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { C as Card, c as CardContent } from "./card-CEx7R28g.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BQG8dMKN.js";
import { I as Input } from "./input-DhcykFoy.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { c as mockProducts, b as mockSuppliers } from "./mockData-BxT47ZmF.js";
import { b as buyerNavItems } from "./navItems-DO3CAQ2F.js";
import { S as Search } from "./search-DL4UAOS0.js";
import { P as Package } from "./index-BfZ639JC.js";
import { E as Eye } from "./eye-BQ8gUFW0.js";
import { P as Plus } from "./plus-BYDeClzd.js";
import { S as Star } from "./star-7OWaTLG1.js";
import "./menu-dXZt9xRu.js";
import "./index-CPoAQatq.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./file-text-CTliJwMv.js";
import "./building-2-DKVBuSES.js";
import "./calculator-CvftqAHB.js";
import "./chart-no-axes-column-Othc_n2I.js";
const CATEGORIES = [
  "All Categories",
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery"
];
const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Name A–Z", value: "name_asc" }
];
const categoryColors = {
  "Industrial Equipment": "bg-blue-100 text-blue-700",
  "Safety Gear": "bg-amber-100 text-amber-700",
  "Raw Materials": "bg-stone-100 text-stone-700",
  Electronics: "bg-purple-100 text-purple-700",
  Chemicals: "bg-cyan-100 text-cyan-700",
  Machinery: "bg-emerald-100 text-emerald-700"
};
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: `size-3 ${n <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`
      },
      n
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: rating.toFixed(1) })
  ] });
}
function ProductCard({
  product,
  onView,
  onAddRFQ
}) {
  const sup = mockSuppliers.find((s) => s.id === product.supplierId);
  const rating = (sup == null ? void 0 : sup.rating) ?? 4.5;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col overflow-hidden hover:shadow-md transition-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-36 bg-muted/50 flex items-center justify-center border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-12 text-muted-foreground/40" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col flex-1 gap-2 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[product.category] ?? "bg-muted text-muted-foreground"}`,
          children: product.category
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm leading-snug line-clamp-2", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: (sup == null ? void 0 : sup.company) ?? product.supplierId }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-base font-display", children: formatINR(product.price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `text-xs font-medium ${product.stock > 20 ? "text-emerald-600" : product.stock > 0 ? "text-amber-600" : "text-red-600"}`,
            children: product.stock > 0 ? `${product.stock} in stock` : "Out of stock"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-auto pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            className: "flex-1 text-xs",
            onClick: () => onView(product),
            "data-ocid": `product-view-${product.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-3 mr-1" }),
              "View Details"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            className: "flex-1 text-xs bg-[#059669] hover:bg-[#047857] text-white",
            onClick: () => onAddRFQ(product),
            "data-ocid": `product-rfq-${product.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-3 mr-1" }),
              "Add to RFQ"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function ProductCatalogPage() {
  const [search, setSearch] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("All Categories");
  const [sort, setSort] = reactExports.useState("newest");
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    let list = [...mockProducts];
    if (search)
      list = list.filter(
        (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
      );
    if (category !== "All Categories")
      list = list.filter((p) => p.category === category);
    if (sort === "price_asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price_desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "name_asc")
      list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => b.createdAt - a.createdAt);
    return list;
  }, [search, category, sort]);
  function handleAddRFQ(p) {
    ue.success(`${p.name} added to RFQ draft`);
  }
  const selectedSupplier = selectedProduct ? mockSuppliers.find((s) => s.id === selectedProduct.supplierId) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: buyerNavItems, portalName: "Buyer Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Product Catalog",
        description: "Browse verified industrial products from trusted suppliers.",
        breadcrumb: "Buyer Portal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search products...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9",
            "data-ocid": "catalog-search"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: category, onValueChange: setCategory, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "w-[180px]",
            "data-ocid": "catalog-category-filter",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sort, onValueChange: setSort, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[180px]", "data-ocid": "catalog-sort", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SORT_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.value, children: o.label }, o.value)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
      "Showing ",
      filtered.length,
      " of ",
      mockProducts.length,
      " products"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: filtered.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCard,
      {
        product,
        onView: setSelectedProduct,
        onAddRFQ: handleAddRFQ
      },
      product.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!selectedProduct,
        onOpenChange: () => setSelectedProduct(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: selectedProduct == null ? void 0 : selectedProduct.name }) }),
          selectedProduct && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 bg-muted/50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-16 text-muted-foreground/30" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `${categoryColors[selectedProduct.category] ?? ""} border-0`,
                  children: selectedProduct.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "text-emerald-700 border-emerald-200",
                  children: [
                    selectedProduct.stock,
                    " in stock"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedProduct.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-3 space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Price:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold", children: formatINR(selectedProduct.price) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Specifications:" }),
                " ",
                selectedProduct.specifications
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Certifications:" }),
                " ",
                selectedProduct.certifications
              ] }),
              selectedSupplier && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Supplier:" }),
                  " ",
                  selectedSupplier.company
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Contact:" }),
                  " ",
                  selectedSupplier.contactName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Response Time:" }),
                  " ",
                  selectedSupplier.responseTime
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Rating:" }),
                  " ⭐",
                  " ",
                  selectedSupplier.rating
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                className: "w-full bg-[#059669] hover:bg-[#047857] text-white",
                onClick: () => {
                  handleAddRFQ(selectedProduct);
                  setSelectedProduct(null);
                },
                "data-ocid": "product-dialog-rfq",
                children: "Request Quotation"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  ProductCatalogPage
};
