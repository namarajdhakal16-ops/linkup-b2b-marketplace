import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockProducts, mockSuppliers } from "@/data/mockData";
import type { Product } from "@/types";
import { Package, Search, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ADMIN_NAV } from "./AdminDashboardPage";

const categories = [
  "All",
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery",
];

type ProductStatus = "active" | "inactive" | "pending";

interface AdminProduct extends Omit<Product, "status"> {
  status: ProductStatus;
}

const initialProducts: AdminProduct[] = [
  ...mockProducts.map((p) => ({ ...p, status: "active" as ProductStatus })),
  {
    id: 13,
    name: "Pneumatic Cylinder 63mm Bore",
    category: "Industrial Equipment",
    price: 3200,
    stock: 0,
    description: "Pending supplier verification before listing.",
    supplierId: "sup-007",
    specifications: "Bore: 63mm, Stroke: 100mm",
    certifications: "CE",
    status: "pending" as ProductStatus,
    createdAt: 1713000000,
    imageUrl: "",
  },
];

function getSupplierName(id: string): string {
  return mockSuppliers.find((s) => s.id === id)?.company ?? id;
}

const statusBadge: Record<ProductStatus, string> = {
  active: "bg-emerald-100 text-emerald-700",
  inactive: "bg-red-100 text-red-700",
  pending: "bg-amber-100 text-amber-700",
};

const PAGE_SIZE = 10;

export function AdminProductsPage() {
  const [products, setProducts] = useState<AdminProduct[]>(initialProducts);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [deleteSingle, setDeleteSingle] = useState<AdminProduct | null>(null);
  const [bulkDeleteConfirm, setBulkDeleteConfirm] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search || p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = catFilter === "All" || p.category === catFilter;
      const matchStatus = statusFilter === "all" || p.status === statusFilter;
      return matchSearch && matchCat && matchStatus;
    });
  }, [products, search, catFilter, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pageIds = paged.map((p) => p.id);
  const allPageSelected =
    pageIds.length > 0 && pageIds.every((id) => selected.has(id));

  function toggleSelect(id: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    setSelected((prev) => {
      const next = new Set(prev);
      const allSel = pageIds.every((id) => next.has(id));
      if (allSel) {
        for (const id of pageIds) next.delete(id);
      } else {
        for (const id of pageIds) next.add(id);
      }
      return next;
    });
  }

  function handleStatusChange(id: number, status: ProductStatus) {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p)),
    );
    toast.success(`Product status updated to ${status}`);
  }

  function handleDeleteSingle() {
    if (!deleteSingle) return;
    setProducts((prev) => prev.filter((p) => p.id !== deleteSingle.id));
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(deleteSingle.id);
      return next;
    });
    setDeleteSingle(null);
    toast.success("Product deleted");
  }

  function handleBulkDeactivate() {
    setProducts((prev) =>
      prev.map((p) =>
        selected.has(p.id) ? { ...p, status: "inactive" as ProductStatus } : p,
      ),
    );
    setSelected(new Set());
    toast.success(`${selected.size} products deactivated`);
  }

  function handleBulkDelete() {
    const count = selected.size;
    setProducts((prev) => prev.filter((p) => !selected.has(p.id)));
    setSelected(new Set());
    setBulkDeleteConfirm(false);
    toast.success(`${count} products deleted`);
  }

  return (
    <PortalLayout sidebarItems={ADMIN_NAV} portalName="Admin Control">
      <PageHeader
        title="Product Management"
        description="Review, update, and moderate all platform products"
        breadcrumb="Administration"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4" data-ocid="product-filters">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            data-ocid="product-search-input"
          />
        </div>
        <Select
          value={catFilter}
          onValueChange={(v) => {
            setCatFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-52" data-ocid="category-filter">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={statusFilter}
          onValueChange={(v) => {
            setStatusFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40" data-ocid="status-filter">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bulk actions */}
      {selected.size > 0 && (
        <div
          className="flex items-center gap-3 mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg"
          data-ocid="bulk-actions"
        >
          <span className="text-sm text-blue-700 font-medium">
            {selected.size} selected
          </span>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="h-7 text-xs"
            onClick={handleBulkDeactivate}
            data-ocid="bulk-deactivate-btn"
          >
            Deactivate Selected
          </Button>
          <Button
            type="button"
            size="sm"
            className="h-7 text-xs bg-red-600 hover:bg-red-700 text-white"
            onClick={() => setBulkDeleteConfirm(true)}
            data-ocid="bulk-delete-btn"
          >
            <Trash2 className="size-3 mr-1" /> Delete Selected
          </Button>
        </div>
      )}

      {/* Table */}
      <div className="rounded-lg border overflow-auto bg-card shadow-sm mb-3">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b">
              <th className="px-4 py-3 w-10">
                <Checkbox
                  checked={allPageSelected}
                  onCheckedChange={toggleAll}
                  aria-label="Select all on page"
                  data-ocid="select-all-products"
                />
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground w-10">
                #
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground w-12">
                Img
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Name
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Category
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Supplier
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Price
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Stock
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Created
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td
                  colSpan={11}
                  className="px-4 py-10 text-center text-muted-foreground"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              paged.map((product, idx) => (
                <tr
                  key={product.id}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                  data-ocid={`product-row-${product.id}`}
                >
                  <td className="px-4 py-3">
                    <Checkbox
                      checked={selected.has(product.id)}
                      onCheckedChange={() => toggleSelect(product.id)}
                      aria-label={`Select ${product.name}`}
                    />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {(page - 1) * PAGE_SIZE + idx + 1}
                  </td>
                  <td className="px-4 py-3">
                    <div className="size-8 rounded bg-muted flex items-center justify-center">
                      <Package className="size-4 text-muted-foreground" />
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground max-w-40">
                    <p className="truncate">{product.name}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {product.category}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {getSupplierName(product.supplierId)}
                  </td>
                  <td className="px-4 py-3 text-xs font-mono">
                    ₹{product.price.toLocaleString("en-IN")}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {product.stock}
                  </td>
                  <td className="px-4 py-3">
                    <Badge className={`text-xs ${statusBadge[product.status]}`}>
                      {product.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {new Date(product.createdAt * 1000).toLocaleDateString(
                      "en-IN",
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Select
                        value={product.status}
                        onValueChange={(v) =>
                          handleStatusChange(product.id, v as ProductStatus)
                        }
                      >
                        <SelectTrigger
                          className="h-7 text-xs w-28"
                          data-ocid={`status-select-${product.id}`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs text-red-600 border-red-200 hover:bg-red-50 px-2"
                        onClick={() => setDeleteSingle(product)}
                        data-ocid={`delete-product-${product.id}`}
                      >
                        <Trash2 className="size-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing {(page - 1) * PAGE_SIZE + 1}–
            {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
          </span>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      <AlertDialog
        open={!!deleteSingle}
        onOpenChange={(o) => {
          if (!o) setDeleteSingle(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Product?</AlertDialogTitle>
            <AlertDialogDescription>
              Delete <strong>{deleteSingle?.name}</strong>? This cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteSingle}
              className="bg-red-600 hover:bg-red-700"
              data-ocid="confirm-delete-product-btn"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={bulkDeleteConfirm} onOpenChange={setBulkDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete {selected.size} Products?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all selected products. Cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleBulkDelete}
              className="bg-red-600 hover:bg-red-700"
              data-ocid="confirm-bulk-delete-btn"
            >
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PortalLayout>
  );
}
