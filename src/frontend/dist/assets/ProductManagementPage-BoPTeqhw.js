import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as formatINR, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { S as StatCard } from "./StatCard-Bv93da2j.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-BTpo92KO.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogFooter } from "./dialog-BQG8dMKN.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { T as Textarea } from "./textarea-4cMDYqep.js";
import { c as mockProducts } from "./mockData-BxT47ZmF.js";
import { S as SUPPLIER_NAV } from "./SupplierDashboardPage-cWtvCcFb.js";
import { P as Plus } from "./plus-BYDeClzd.js";
import { P as Package } from "./index-BfZ639JC.js";
import { T as Trash2 } from "./trash-2-BZ_ybXaF.js";
import { T as TriangleAlert } from "./triangle-alert-Clkdp-lz.js";
import "./menu-dXZt9xRu.js";
import "./index-CPoAQatq.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./tag-BO63xnL_.js";
import "./chart-no-axes-column-Othc_n2I.js";
import "./credit-card-BoogVyUk.js";
import "./circle-check-big-FdkHYrhv.js";
import "./trending-up-Ca1toMKI.js";
import "./generateCategoricalChart-CLakrVV0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode);
const CATEGORIES = [
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery"
];
const EMPTY_FORM = {
  name: "",
  category: "",
  price: "",
  stock: "",
  description: "",
  specifications: "",
  certifications: ""
};
function ProductManagementPage() {
  const [products, setProducts] = reactExports.useState([...mockProducts]);
  const [showAdd, setShowAdd] = reactExports.useState(false);
  const [editProduct, setEditProduct] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [filterCategory, setFilterCategory] = reactExports.useState("all");
  const [filterStatus, setFilterStatus] = reactExports.useState("all");
  const filtered = reactExports.useMemo(
    () => products.filter((p) => {
      const catOk = filterCategory === "all" || p.category === filterCategory;
      const statusOk = filterStatus === "all" || p.status === filterStatus;
      return catOk && statusOk;
    }),
    [products, filterCategory, filterStatus]
  );
  const stats = {
    total: products.length,
    active: products.filter((p) => p.status === "active").length,
    inactive: products.filter((p) => p.status === "inactive").length,
    pending: 2
  };
  function openAdd() {
    setForm(EMPTY_FORM);
    setShowAdd(true);
  }
  function openEdit(p) {
    setEditProduct(p);
    setForm({
      name: p.name,
      category: p.category,
      price: String(p.price),
      stock: String(p.stock),
      description: p.description,
      specifications: p.specifications,
      certifications: p.certifications
    });
  }
  function handleSaveAdd() {
    if (!form.name || !form.category || !form.price) {
      ue.error("Name, category and price are required");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock) || 0,
      description: form.description,
      supplierId: "sup-001",
      specifications: form.specifications,
      certifications: form.certifications,
      status: "active",
      createdAt: Math.floor(Date.now() / 1e3)
    };
    setProducts((prev) => [newProduct, ...prev]);
    ue.success(`Product "${form.name}" added successfully!`);
    setShowAdd(false);
  }
  function handleSaveEdit() {
    if (!editProduct || !form.name || !form.category || !form.price) {
      ue.error("Name, category and price are required");
      return;
    }
    setProducts(
      (prev) => prev.map(
        (p) => p.id === editProduct.id ? {
          ...p,
          ...form,
          price: Number(form.price),
          stock: Number(form.stock) || 0
        } : p
      )
    );
    ue.success(`Product "${form.name}" updated.`);
    setEditProduct(null);
  }
  function handleDelete() {
    if (!deleteTarget) return;
    setProducts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    ue.success(`"${deleteTarget.name}" removed.`);
    setDeleteTarget(null);
  }
  function field(key, label, props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: label,
          value: form[key],
          onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value })),
          ...props
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: SUPPLIER_NAV, portalName: "Supplier Portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Product Management",
        description: "Add, update, and manage your product listings",
        breadcrumb: "Supplier Portal",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "bg-[#059669] hover:bg-[#047857] text-white",
            onClick: openAdd,
            "data-ocid": "add-product-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 mr-2" }),
              "Add New Product"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Products", value: stats.total, accent: "blue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Active", value: stats.active, accent: "green" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Inactive", value: stats.inactive, accent: "amber" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Pending Review",
          value: stats.pending,
          accent: "purple"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterCategory, onValueChange: setFilterCategory, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-48", "data-ocid": "filter-category", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Categories" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Categories" }),
          CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterStatus, onValueChange: setFilterStatus, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-36", "data-ocid": "filter-status", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Status" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inactive", children: "Inactive" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground ml-auto", children: [
        filtered.length,
        " products"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border bg-card shadow-sm overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/50 border-b", children: [
        "Image",
        "Name",
        "Category",
        "Price",
        "Stock",
        "Status",
        "Created",
        "Actions"
      ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "th",
        {
          className: "px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap",
          children: h
        },
        h
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
          "data-ocid": `product-row-${product.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded bg-gradient-to-br from-[#059669]/10 to-[#1e40af]/10 border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-5 text-muted-foreground/50" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground max-w-[200px] truncate", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 max-w-[200px] truncate", children: product.specifications })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] whitespace-nowrap",
                children: product.category
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold text-[#059669]", children: formatINR(product.price) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: product.stock }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${product.status === "active" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-muted text-muted-foreground border-border"}`,
                children: product.status
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs whitespace-nowrap", children: new Date(product.createdAt * 1e3).toLocaleDateString(
              "en-IN"
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 px-2 text-xs",
                  onClick: () => openEdit(product),
                  "data-ocid": `edit-product-${product.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "size-3 mr-1" }),
                    "Edit"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 px-2 text-red-600 border-red-200 hover:bg-red-50",
                  onClick: () => setDeleteTarget(product),
                  "data-ocid": `delete-product-${product.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-3" })
                }
              )
            ] }) })
          ]
        },
        product.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showAdd, onOpenChange: setShowAdd, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Product" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2 max-h-[60vh] overflow-y-auto pr-1", children: [
        field("name", "Product Name *"),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Category *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.category,
              onValueChange: (v) => setForm((f) => ({ ...f, category: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          field("price", "Price (₹) *", {
            type: "number",
            placeholder: "0"
          }),
          field("stock", "Stock Quantity", {
            type: "number",
            placeholder: "0"
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 3,
              placeholder: "Product description",
              value: form.description,
              onChange: (e) => setForm((f) => ({ ...f, description: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Specifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 2,
              placeholder: "e.g. Power: 50T, Stroke: 250mm",
              value: form.specifications,
              onChange: (e) => setForm((f) => ({ ...f, specifications: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Certifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 2,
              placeholder: "e.g. CE, ISO 9001, BIS",
              value: form.certifications,
              onChange: (e) => setForm((f) => ({ ...f, certifications: e.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setShowAdd(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "bg-[#059669] hover:bg-[#047857] text-white",
            onClick: handleSaveAdd,
            "data-ocid": "save-product-btn",
            children: "Add Product"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!editProduct,
        onOpenChange: (o) => {
          if (!o) setEditProduct(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit Product" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2 max-h-[60vh] overflow-y-auto pr-1", children: [
            field("name", "Product Name *"),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Category *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.category,
                  onValueChange: (v) => setForm((f) => ({ ...f, category: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              field("price", "Price (₹) *", { type: "number" }),
              field("stock", "Stock Quantity", { type: "number" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  rows: 3,
                  value: form.description,
                  onChange: (e) => setForm((f) => ({ ...f, description: e.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Specifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  rows: 2,
                  value: form.specifications,
                  onChange: (e) => setForm((f) => ({ ...f, specifications: e.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-1.5 block", children: "Certifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  rows: 2,
                  value: form.certifications,
                  onChange: (e) => setForm((f) => ({ ...f, certifications: e.target.value }))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setEditProduct(null), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "bg-[#059669] hover:bg-[#047857] text-white",
                onClick: handleSaveEdit,
                "data-ocid": "save-edit-btn",
                children: "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: !!deleteTarget,
        onOpenChange: (o) => {
          if (!o) setDeleteTarget(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-5 text-red-500" }),
              "Delete Product"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
              "Are you sure you want to delete",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteTarget == null ? void 0 : deleteTarget.name }),
              "? This action cannot be undone."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogAction,
              {
                className: "bg-red-600 hover:bg-red-700 text-white",
                onClick: handleDelete,
                children: "Delete"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  ProductManagementPage
};
