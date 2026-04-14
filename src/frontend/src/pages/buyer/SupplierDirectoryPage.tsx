import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { mockSuppliers } from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Package,
  Phone,
  Search,
  Star,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { buyerNavItems } from "./navItems";

const INDUSTRIES = [
  "All Industries",
  "Industrial Equipment",
  "Safety Gear",
  "Raw Materials",
  "Electronics",
  "Chemicals",
  "Machinery",
];

const industryMap: Record<string, string> = {
  "sup-001": "Industrial Equipment",
  "sup-002": "Safety Gear",
  "sup-003": "Raw Materials",
  "sup-004": "Electronics",
  "sup-005": "Chemicals",
  "sup-006": "Machinery",
  "sup-007": "Pneumatics",
  "sup-008": "Fasteners",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`size-3.5 ${n <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
        />
      ))}
      <span className="text-sm font-semibold ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

type Supplier = (typeof mockSuppliers)[number];

export function SupplierDirectoryPage() {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All Industries");
  const [minRating, setMinRating] = useState("0");
  const [selected, setSelected] = useState<Supplier | null>(null);

  const filtered = mockSuppliers.filter((s) => {
    const matchSearch =
      !search ||
      s.company.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());
    const ind = industryMap[s.id] ?? "";
    const matchIndustry = industry === "All Industries" || ind === industry;
    const matchRating = s.rating >= Number(minRating);
    return matchSearch && matchIndustry && matchRating;
  });

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <PageHeader
        title="Supplier Directory"
        description="Explore verified industrial suppliers across all categories."
        breadcrumb="Buyer Portal"
      />

      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search suppliers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            data-ocid="supplier-search"
          />
        </div>
        <Select value={industry} onValueChange={setIndustry}>
          <SelectTrigger
            className="w-[180px]"
            data-ocid="supplier-industry-filter"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {INDUSTRIES.map((i) => (
              <SelectItem key={i} value={i}>
                {i}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={minRating} onValueChange={setMinRating}>
          <SelectTrigger
            className="w-[150px]"
            data-ocid="supplier-rating-filter"
          >
            <SelectValue placeholder="Min Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">All Ratings</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((sup) => (
          <button
            key={sup.id}
            type="button"
            className="rounded-lg border bg-card p-4 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer text-left w-full"
            onClick={() => setSelected(sup)}
            data-ocid={`supplier-card-${sup.id}`}
          >
            <div className="flex items-start justify-between">
              <div className="size-12 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-base shrink-0">
                {sup.company.slice(0, 2).toUpperCase()}
              </div>
              {sup.verified && (
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 border text-xs gap-1">
                  <CheckCircle className="size-3" />
                  Verified
                </Badge>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-sm leading-snug">
                {sup.company}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {sup.contactName}
              </p>
            </div>
            <Badge variant="outline" className="text-xs w-fit">
              {industryMap[sup.id] ?? "Industrial"}
            </Badge>
            <StarRating rating={sup.rating} />
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex items-center gap-1.5">
                <Clock className="size-3" />
                <span>Responds in {sup.responseTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Package className="size-3" />
                <span>{sup.products} products listed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3" />
                <span>{sup.location}</span>
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="flex-1 text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  toast.info(`Contacting ${sup.company}...`);
                }}
                data-ocid={`supplier-contact-${sup.id}`}
              >
                Contact
              </Button>
              <Button
                type="button"
                size="sm"
                className="flex-1 text-xs bg-[#059669] hover:bg-[#047857] text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(sup);
                }}
                data-ocid={`supplier-view-products-${sup.id}`}
              >
                View Products
              </Button>
            </div>
          </button>
        ))}
      </div>

      <Sheet open={!!selected} onOpenChange={() => setSelected(null)}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="font-display">
              {selected?.company}
            </SheetTitle>
          </SheetHeader>
          {selected && (
            <div className="mt-4 space-y-5">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-full bg-[#1e40af] flex items-center justify-center text-white font-bold text-xl">
                  {selected.company.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <StarRating rating={selected.rating} />
                  <div className="flex gap-2 mt-2">
                    {selected.verified && (
                      <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 border text-xs">
                        <CheckCircle className="size-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {industryMap[selected.id] ?? "Industrial"}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-muted/30 p-4 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="size-4" />
                  <span>Contact: {selected.contactName}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="size-4" />
                  <span>{selected.id}@linkup.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4" />
                  <span>{selected.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="size-4" />
                  <span>Avg. Response: {selected.responseTime}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Package className="size-4" />
                  <span>{selected.products} active product listings</span>
                </div>
              </div>
              <div className="rounded-lg border bg-muted/30 p-4 text-sm">
                <p className="font-medium mb-2">Annual Revenue</p>
                <p className="font-display font-bold text-lg">
                  {formatINR(selected.revenue)}
                </p>
              </div>
              <div className="rounded-lg border bg-muted/30 p-4 text-sm">
                <p className="font-medium mb-2">Certifications</p>
                <div className="flex flex-wrap gap-1.5">
                  {["ISO 9001", "CE", "BIS", "MSME Certified"].map((cert) => (
                    <Badge key={cert} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button
                type="button"
                className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                onClick={() => {
                  toast.success(`Request sent to ${selected.company}`);
                  setSelected(null);
                }}
              >
                Send Contact Request
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </PortalLayout>
  );
}
