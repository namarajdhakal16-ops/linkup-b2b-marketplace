import { r as reactExports, j as jsxRuntimeExports, u as ue } from "./index-vpbP6K3q.js";
import { P as PortalLayout } from "./PortalLayout-CnOgzSAn.js";
import { P as PageHeader } from "./PageHeader-BTkmX1R0.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-BTpo92KO.js";
import { B as Badge } from "./badge-BpqzkKu8.js";
import { B as Button } from "./button-DhRdAl0g.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogFooter } from "./dialog-BQG8dMKN.js";
import { I as Input } from "./input-DhcykFoy.js";
import { L as Label } from "./label-CbXwkIaO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-VcrPPk92.js";
import { a as mockBuyers, b as mockSuppliers } from "./mockData-BxT47ZmF.js";
import { ADMIN_NAV } from "./AdminDashboardPage-uNaMRBOF.js";
import { D as Download } from "./download-DqICB6rM.js";
import { S as Search } from "./search-DL4UAOS0.js";
import { C as CircleCheckBig } from "./circle-check-big-FdkHYrhv.js";
import { C as CircleX } from "./circle-x-BfZ9AI6x.js";
import "./index-BfZ639JC.js";
import "./index-CPoAQatq.js";
import "./menu-dXZt9xRu.js";
import "./index-CN9hoFXr.js";
import "./index-Bym3sJYe.js";
import "./StatCard-Bv93da2j.js";
import "./file-text-CTliJwMv.js";
import "./credit-card-BoogVyUk.js";
import "./shield-check-AZO3kdEQ.js";
import "./activity-CK7N99se.js";
import "./generateCategoricalChart-CLakrVV0.js";
import "./BarChart-5YJHTPWT.js";
import "./tag-BO63xnL_.js";
import "./triangle-alert-Clkdp-lz.js";
const initialUsers = [
  ...mockBuyers.map((b) => ({
    id: b.id,
    name: b.contactName,
    email: `${b.contactName.toLowerCase().replace(/\s+/g, ".")}@${b.company.toLowerCase().replace(/[^a-z]/g, "").slice(0, 10)}.com`,
    role: "buyer",
    tierOrSize: b.tier === "tier4" ? "Tier 4 — Enterprise" : b.tier === "tier3" ? "Tier 3 — Mid-size" : b.tier === "tier2" ? "Tier 2 — SME" : "Tier 1 — Free",
    verified: b.verified,
    created: new Date(
      17e8 * 1e3 + b.id.charCodeAt(4) * 1e9
    ).toLocaleDateString("en-IN")
  })),
  ...mockSuppliers.map((s) => ({
    id: s.id,
    name: s.contactName,
    email: `${s.contactName.toLowerCase().replace(/\s+/g, ".")}@${s.company.toLowerCase().replace(/[^a-z]/g, "").slice(0, 10)}.com`,
    role: "supplier",
    tierOrSize: s.products > 50 ? "Large" : s.products > 20 ? "Medium" : "Small",
    verified: s.verified,
    created: new Date(
      17e8 * 1e3 + s.id.charCodeAt(4) * 1e9
    ).toLocaleDateString("en-IN")
  }))
];
const roleBadgeClass = {
  buyer: "bg-blue-100 text-blue-700",
  supplier: "bg-emerald-100 text-emerald-700",
  both: "bg-purple-100 text-purple-700",
  admin: "bg-red-100 text-red-700"
};
const PAGE_SIZE = 10;
function AdminUsersPage() {
  const [users, setUsers] = reactExports.useState(initialUsers);
  const [search, setSearch] = reactExports.useState("");
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [verifiedFilter, setVerifiedFilter] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(1);
  const [editUser, setEditUser] = reactExports.useState(null);
  const [editRole, setEditRole] = reactExports.useState("buyer");
  const [deleteUser, setDeleteUser] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    return users.filter((u) => {
      const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
      const matchRole = roleFilter === "all" || u.role === roleFilter;
      const matchVerified = verifiedFilter === "all" || (verifiedFilter === "yes" ? u.verified : !u.verified);
      return matchSearch && matchRole && matchVerified;
    });
  }, [users, search, roleFilter, verifiedFilter]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  function handleVerify(id) {
    setUsers(
      (prev) => prev.map((u) => u.id === id ? { ...u, verified: true } : u)
    );
    ue.success("User verified successfully");
  }
  function handleEditRole() {
    if (!editUser) return;
    setUsers(
      (prev) => prev.map((u) => u.id === editUser.id ? { ...u, role: editRole } : u)
    );
    setEditUser(null);
    ue.success("User role updated");
  }
  function handleDelete() {
    if (!deleteUser) return;
    setUsers((prev) => prev.filter((u) => u.id !== deleteUser.id));
    setDeleteUser(null);
    ue.success("User deleted");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { sidebarItems: ADMIN_NAV, portalName: "Admin Control", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "User Management",
        description: "View, verify, and manage all platform users",
        breadcrumb: "Administration",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => ue.info("Export initiated"),
            "data-ocid": "export-users-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4 mr-1" }),
              " Export CSV"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-4", "data-ocid": "user-filters", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-48", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "pl-9",
            placeholder: "Search by name or email...",
            value: search,
            onChange: (e) => {
              setSearch(e.target.value);
              setPage(1);
            },
            "data-ocid": "user-search-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: roleFilter,
          onValueChange: (v) => {
            setRoleFilter(v);
            setPage(1);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-40", "data-ocid": "role-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by role" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Roles" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "buyer", children: "Buyer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "supplier", children: "Supplier" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "both", children: "Both" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "admin", children: "Admin" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: verifiedFilter,
          onValueChange: (v) => {
            setVerifiedFilter(v);
            setPage(1);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", "data-ocid": "verified-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Verification status" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Verified" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "Unverified" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border overflow-auto bg-card shadow-sm mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground w-10", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Tier / Size" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Verified" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Created" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-semibold text-foreground", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paged.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          colSpan: 8,
          className: "px-4 py-10 text-center text-muted-foreground",
          children: "No users found."
        }
      ) }) : paged.map((user, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
          "data-ocid": `user-row-${user.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: (page - 1) * PAGE_SIZE + idx + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: user.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs", children: user.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs ${roleBadgeClass[user.role] ?? ""}`,
                children: user.role
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: user.tierOrSize }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: user.verified ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-4 text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-4 text-red-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: user.created }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              !user.verified && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "sm",
                  className: "h-7 text-xs bg-emerald-600 hover:bg-emerald-700 text-white",
                  onClick: () => handleVerify(user.id),
                  "data-ocid": `verify-user-${user.id}`,
                  children: "Verify"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "h-7 text-xs",
                  onClick: () => {
                    setEditUser(user);
                    setEditRole(user.role);
                  },
                  "data-ocid": `edit-role-${user.id}`,
                  children: "Edit Role"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "h-7 text-xs text-red-600 border-red-200 hover:bg-red-50",
                  onClick: () => setDeleteUser(user),
                  "data-ocid": `delete-user-${user.id}`,
                  children: "Delete"
                }
              )
            ] }) })
          ]
        },
        user.id
      )) })
    ] }) }),
    totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Showing ",
        (page - 1) * PAGE_SIZE + 1,
        "–",
        Math.min(page * PAGE_SIZE, filtered.length),
        " of ",
        filtered.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => setPage((p) => Math.max(1, p - 1)),
            disabled: page === 1,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
            disabled: page === totalPages,
            children: "Next"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!editUser,
        onOpenChange: (o) => {
          if (!o) setEditUser(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Edit Role — ",
            editUser == null ? void 0 : editUser.name
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "role-select", children: "Assign Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: editRole,
                onValueChange: (v) => setEditRole(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "role-select", "data-ocid": "edit-role-select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "buyer", children: "Buyer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "supplier", children: "Supplier" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "both", children: "Both" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "admin", children: "Admin" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => setEditUser(null),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                onClick: handleEditRole,
                "data-ocid": "save-role-btn",
                children: "Save Role"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: !!deleteUser,
        onOpenChange: (o) => {
          if (!o) setDeleteUser(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete User?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
              "Are you sure you want to delete",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteUser == null ? void 0 : deleteUser.name }),
              "? This action cannot be undone."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogAction,
              {
                onClick: handleDelete,
                className: "bg-red-600 hover:bg-red-700",
                "data-ocid": "confirm-delete-user-btn",
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
  AdminUsersPage
};
