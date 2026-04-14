import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { mockProducts } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import type { Product } from "@/types";
import { AlertTriangle, Package, Pencil, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { SUPPLIER_NAV } from "./SupplierDashboardPage";

const CATEGORIES = [
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery",
];

type FormState = {
  name: string;
  category: string;
  price: string;
  stock: string;
  description: string;
  specifications: string;
  certifications: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  category: "",
  price: "",
  stock: "",
  description: "",
  specifications: "",
  certifications: "",
};

export function ProductManagementPage() {
  const [products, setProducts] = useState<Product[]>([...mockProducts]);
  const [showAdd, setShowAdd] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const catOk = filterCategory === "all" || p.category === filterCategory;
        const statusOk = filterStatus === "all" || p.status === filterStatus;
        return catOk && statusOk;
      }),
    [products, filterCategory, filterStatus],
  );

  const stats = {
    total: products.length,
    active: products.filter((p) => p.status === "active").length,
    inactive: products.filter((p) => p.status === "inactive").length,
    pending: 2,
  };

  function openAdd() {
    setForm(EMPTY_FORM);
    setShowAdd(true);
  }

  function openEdit(p: Product) {
    setEditProduct(p);
    setForm({
      name: p.name,
      category: p.category,
      price: String(p.price),
      stock: String(p.stock),
      description: p.description,
      specifications: p.specifications,
      certifications: p.certifications,
    });
  }

  function handleSaveAdd() {
    if (!form.name || !form.category || !form.price) {
      toast.error("Name, category and price are required");
      return;
    }
    const newProduct: Product = {
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
      createdAt: Math.floor(Date.now() / 1000),
    };
    setProducts((prev) => [newProduct, ...prev]);
    toast.success(`Product "${form.name}" added successfully!`);
    setShowAdd(false);
  }

  function handleSaveEdit() {
    if (!editProduct || !form.name || !form.category || !form.price) {
      toast.error("Name, category and price are required");
      return;
    }
    setProducts((prev) =>
      prev.map((p) =>
        p.id === editProduct.id
          ? {
              ...p,
              ...form,
              price: Number(form.price),
              stock: Number(form.stock) || 0,
            }
          : p,
      ),
    );
    toast.success(`Product "${form.name}" updated.`);
    setEditProduct(null);
  }

  function handleDelete() {
    if (!deleteTarget) return;
    setProducts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    toast.success(`"${deleteTarget.name}" removed.`);
    setDeleteTarget(null);
  }

  function field(
    key: keyof FormState,
    label: string,
    props?: React.InputHTMLAttributes<HTMLInputElement>,
  ) {
    return (
      <div>
        <Label className="text-sm font-medium mb-1.5 block">{label}</Label>
        <Input
          placeholder={label}
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          {...props}
        />
      </div>
    );
  }

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="Product Management"
        description="Add, update, and manage your product listings"
        breadcrumb="Supplier Portal"
        actions={
          <Button
            className="bg-[#059669] hover:bg-[#047857] text-white"
            onClick={openAdd}
            data-ocid="add-product-btn"
          >
            <Plus className="size-4 mr-2" />
            Add New Product
          </Button>
        }
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Products" value={stats.total} accent="blue" />
        <StatCard label="Active" value={stats.active} accent="green" />
        <StatCard label="Inactive" value={stats.inactive} accent="amber" />
        <StatCard
          label="Pending Review"
          value={stats.pending}
          accent="purple"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-48" data-ocid="filter-category">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-36" data-ocid="filter-status">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm text-muted-foreground ml-auto">
          {filtered.length} products
        </span>
      </div>

      {/* Product table */}
      <div className="rounded-lg border bg-card shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b">
              {[
                "Image",
                "Name",
                "Category",
                "Price",
                "Stock",
                "Status",
                "Created",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr
                key={product.id}
                className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                data-ocid={`product-row-${product.id}`}
              >
                <td className="px-4 py-3">
                  <div className="size-10 rounded bg-gradient-to-br from-[#059669]/10 to-[#1e40af]/10 border flex items-center justify-center">
                    <Package className="size-5 text-muted-foreground/50" />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="font-medium text-foreground max-w-[200px] truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 max-w-[200px] truncate">
                    {product.specifications}
                  </p>
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant="secondary"
                    className="text-[10px] whitespace-nowrap"
                  >
                    {product.category}
                  </Badge>
                </td>
                <td className="px-4 py-3 font-semibold text-[#059669]">
                  {formatINR(product.price)}
                </td>
                <td className="px-4 py-3 text-foreground">{product.stock}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${product.status === "active" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-muted text-muted-foreground border-border"}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground text-xs whitespace-nowrap">
                  {new Date(product.createdAt * 1000).toLocaleDateString(
                    "en-IN",
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1.5">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-2 text-xs"
                      onClick={() => openEdit(product)}
                      data-ocid={`edit-product-${product.id}`}
                    >
                      <Pencil className="size-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-2 text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => setDeleteTarget(product)}
                      data-ocid={`delete-product-${product.id}`}
                    >
                      <Trash2 className="size-3" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Dialog */}
      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2 max-h-[60vh] overflow-y-auto pr-1">
            {field("name", "Product Name *")}
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Category *
              </Label>
              <Select
                value={form.category}
                onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {field("price", "Price (₹) *", {
                type: "number",
                placeholder: "0",
              })}
              {field("stock", "Stock Quantity", {
                type: "number",
                placeholder: "0",
              })}
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Description
              </Label>
              <Textarea
                rows={3}
                placeholder="Product description"
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Specifications
              </Label>
              <Textarea
                rows={2}
                placeholder="e.g. Power: 50T, Stroke: 250mm"
                value={form.specifications}
                onChange={(e) =>
                  setForm((f) => ({ ...f, specifications: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Certifications
              </Label>
              <Textarea
                rows={2}
                placeholder="e.g. CE, ISO 9001, BIS"
                value={form.certifications}
                onChange={(e) =>
                  setForm((f) => ({ ...f, certifications: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAdd(false)}>
              Cancel
            </Button>
            <Button
              className="bg-[#059669] hover:bg-[#047857] text-white"
              onClick={handleSaveAdd}
              data-ocid="save-product-btn"
            >
              Add Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog
        open={!!editProduct}
        onOpenChange={(o) => {
          if (!o) setEditProduct(null);
        }}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2 max-h-[60vh] overflow-y-auto pr-1">
            {field("name", "Product Name *")}
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Category *
              </Label>
              <Select
                value={form.category}
                onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {field("price", "Price (₹) *", { type: "number" })}
              {field("stock", "Stock Quantity", { type: "number" })}
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Description
              </Label>
              <Textarea
                rows={3}
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Specifications
              </Label>
              <Textarea
                rows={2}
                value={form.specifications}
                onChange={(e) =>
                  setForm((f) => ({ ...f, specifications: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Certifications
              </Label>
              <Textarea
                rows={2}
                value={form.certifications}
                onChange={(e) =>
                  setForm((f) => ({ ...f, certifications: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditProduct(null)}>
              Cancel
            </Button>
            <Button
              className="bg-[#059669] hover:bg-[#047857] text-white"
              onClick={handleSaveEdit}
              data-ocid="save-edit-btn"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm */}
      <AlertDialog
        open={!!deleteTarget}
        onOpenChange={(o) => {
          if (!o) setDeleteTarget(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="size-5 text-red-500" />
              Delete Product
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <strong>{deleteTarget?.name}</strong>? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={handleDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PortalLayout>
  );
}
