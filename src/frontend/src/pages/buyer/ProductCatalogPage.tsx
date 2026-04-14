import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockProducts, mockSuppliers } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import type { Product } from "@/types";
import { Eye, Package, Plus, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { buyerNavItems } from "./navItems";

const CATEGORIES = [
  "All Categories",
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery",
];
const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Name A–Z", value: "name_asc" },
];

const categoryColors: Record<string, string> = {
  "Industrial Equipment": "bg-blue-100 text-blue-700",
  "Safety Gear": "bg-amber-100 text-amber-700",
  "Raw Materials": "bg-stone-100 text-stone-700",
  Electronics: "bg-purple-100 text-purple-700",
  Chemicals: "bg-cyan-100 text-cyan-700",
  Machinery: "bg-emerald-100 text-emerald-700",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`size-3 ${n <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function ProductCard({
  product,
  onView,
  onAddRFQ,
}: {
  product: Product;
  onView: (p: Product) => void;
  onAddRFQ: (p: Product) => void;
}) {
  const sup = mockSuppliers.find((s) => s.id === product.supplierId);
  const rating = sup?.rating ?? 4.5;
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-36 bg-muted/50 flex items-center justify-center border-b">
        <Package className="size-12 text-muted-foreground/40" />
      </div>
      <CardContent className="flex flex-col flex-1 gap-2 p-4">
        <div>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[product.category] ?? "bg-muted text-muted-foreground"}`}
          >
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-sm leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground">
          {sup?.company ?? product.supplierId}
        </p>
        <StarRating rating={rating} />
        <div className="flex items-center justify-between mt-1">
          <p className="font-bold text-base font-display">
            {formatINR(product.price)}
          </p>
          <span
            className={`text-xs font-medium ${product.stock > 20 ? "text-emerald-600" : product.stock > 0 ? "text-amber-600" : "text-red-600"}`}
          >
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>
        <div className="flex gap-2 mt-auto pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="flex-1 text-xs"
            onClick={() => onView(product)}
            data-ocid={`product-view-${product.id}`}
          >
            <Eye className="size-3 mr-1" />
            View Details
          </Button>
          <Button
            type="button"
            size="sm"
            className="flex-1 text-xs bg-[#059669] hover:bg-[#047857] text-white"
            onClick={() => onAddRFQ(product)}
            data-ocid={`product-rfq-${product.id}`}
          >
            <Plus className="size-3 mr-1" />
            Add to RFQ
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductCatalogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("newest");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let list = [...mockProducts];
    if (search)
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase()),
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

  function handleAddRFQ(p: Product) {
    toast.success(`${p.name} added to RFQ draft`);
  }

  const selectedSupplier = selectedProduct
    ? mockSuppliers.find((s) => s.id === selectedProduct.supplierId)
    : null;

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <PageHeader
        title="Product Catalog"
        description="Browse verified industrial products from trusted suppliers."
        breadcrumb="Buyer Portal"
      />

      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            data-ocid="catalog-search"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger
            className="w-[180px]"
            data-ocid="catalog-category-filter"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[180px]" data-ocid="catalog-sort">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Showing {filtered.length} of {mockProducts.length} products
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={setSelectedProduct}
            onAddRFQ={handleAddRFQ}
          />
        ))}
      </div>

      <Dialog
        open={!!selectedProduct}
        onOpenChange={() => setSelectedProduct(null)}
      >
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display">
              {selectedProduct?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-4">
              <div className="h-40 bg-muted/50 rounded-lg flex items-center justify-center">
                <Package className="size-16 text-muted-foreground/30" />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge
                  className={`${categoryColors[selectedProduct.category] ?? ""} border-0`}
                >
                  {selectedProduct.category}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-emerald-700 border-emerald-200"
                >
                  {selectedProduct.stock} in stock
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {selectedProduct.description}
              </p>
              <div className="rounded-lg border bg-muted/30 p-3 space-y-2 text-sm">
                <p>
                  <span className="font-medium">Price:</span>{" "}
                  <span className="font-display font-bold">
                    {formatINR(selectedProduct.price)}
                  </span>
                </p>
                <p>
                  <span className="font-medium">Specifications:</span>{" "}
                  {selectedProduct.specifications}
                </p>
                <p>
                  <span className="font-medium">Certifications:</span>{" "}
                  {selectedProduct.certifications}
                </p>
                {selectedSupplier && (
                  <>
                    <p>
                      <span className="font-medium">Supplier:</span>{" "}
                      {selectedSupplier.company}
                    </p>
                    <p>
                      <span className="font-medium">Contact:</span>{" "}
                      {selectedSupplier.contactName}
                    </p>
                    <p>
                      <span className="font-medium">Response Time:</span>{" "}
                      {selectedSupplier.responseTime}
                    </p>
                    <p>
                      <span className="font-medium">Rating:</span> ⭐{" "}
                      {selectedSupplier.rating}
                    </p>
                  </>
                )}
              </div>
              <Button
                type="button"
                className="w-full bg-[#059669] hover:bg-[#047857] text-white"
                onClick={() => {
                  handleAddRFQ(selectedProduct);
                  setSelectedProduct(null);
                }}
                data-ocid="product-dialog-rfq"
              >
                Request Quotation
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PortalLayout>
  );
}
