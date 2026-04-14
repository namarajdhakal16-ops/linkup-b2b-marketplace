import { PublicLayout } from "@/components/layout/PublicLayout";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  mockBuyers,
  mockMetrics,
  mockProducts,
  mockSuppliers,
} from "@/data/mockData";
import { formatINR } from "@/lib/pricing";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Briefcase,
  Factory,
  MessageSquare,
  Package,
  RotateCcw,
  Send,
  ShoppingCart,
  Star,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const TOP_PRODUCTS = mockProducts.slice(0, 6);

const PLATFORM_STATS = [
  { label: "Total Buyers", value: "1,247", icon: Users, suffix: "+" },
  { label: "Total Suppliers", value: "486", icon: Truck, suffix: "+" },
  { label: "Products Listed", value: "3,892", icon: Package, suffix: "" },
  {
    label: "Cumulative Value",
    value: "₹28.47 Cr",
    icon: TrendingUp,
    suffix: "+",
  },
];

const QUICK_ACCESS = [
  {
    label: "Buyer Portal",
    icon: ShoppingCart,
    href: "/buyer/dashboard",
    bgClass: "bg-[#1e40af]/10 hover:bg-[#1e40af]/20 border-[#1e40af]/20",
    iconClass: "text-[#1e40af]",
    desc: "Browse products & place RFQs",
  },
  {
    label: "Supplier Portal",
    icon: Truck,
    href: "/supplier/dashboard",
    bgClass: "bg-[#059669]/10 hover:bg-[#059669]/20 border-[#059669]/20",
    iconClass: "text-[#059669]",
    desc: "Manage listings & orders",
  },
  {
    label: "About Us",
    icon: BookOpen,
    href: "/about",
    bgClass: "bg-purple-50 hover:bg-purple-100 border-purple-200",
    iconClass: "text-purple-700",
    desc: "Our story & mission",
  },
  {
    label: "Careers",
    icon: Briefcase,
    href: "/careers",
    bgClass: "bg-amber-50 hover:bg-amber-100 border-amber-200",
    iconClass: "text-amber-700",
    desc: "Join our growing team",
  },
];

function FeedbackModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit() {
    if (!name || !email || !msg) {
      toast.error("Please fill all fields.");
      return;
    }
    toast.success("Thank you for your feedback!");
    setName("");
    setEmail("");
    setMsg("");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <MessageSquare className="size-5 text-[#1e40af]" />
            Share Your Feedback
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div>
            <Label className="text-sm font-medium mb-1.5 block">Name</Label>
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-ocid="feedback-name"
            />
          </div>
          <div>
            <Label className="text-sm font-medium mb-1.5 block">Email</Label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-ocid="feedback-email"
            />
          </div>
          <div>
            <Label className="text-sm font-medium mb-1.5 block">Message</Label>
            <Textarea
              placeholder="Tell us what you think..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={4}
              data-ocid="feedback-message"
            />
          </div>
          <Button
            className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
            onClick={handleSubmit}
            data-ocid="feedback-submit"
          >
            <Send className="size-4 mr-2" />
            Submit Feedback
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function HomePage() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <PublicLayout>
      {/* ─── Sidebar Feedback Tab ─── */}
      <button
        type="button"
        onClick={() => setFeedbackOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#1e40af] text-white px-2 py-4 rounded-l-lg shadow-lg hover:bg-[#1e3a8a] transition-colors"
        aria-label="Open feedback"
        data-ocid="sidebar-feedback-tab"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase">
          Feedback
        </span>
      </button>

      <FeedbackModal
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />

      {/* ─── Hero ─── */}
      <section
        className="relative text-white py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1e40af] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#059669] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-3xl">
            <span className="block">LinkUp</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              Connecting Industrial
            </span>
            <span className="block">Buyers &amp; Suppliers</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            India's most trusted B2B platform for industrial procurement —
            connecting verified buyers with quality suppliers across 50+ product
            categories nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/buyer/dashboard">
              <Button
                className="h-13 px-10 bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-base font-semibold shadow-lg transition-smooth"
                data-ocid="hero-buyer-cta"
              >
                <ShoppingCart className="size-5 mr-2" />
                Buyer Portal
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
            <Link to="/supplier/dashboard">
              <Button
                className="h-13 px-10 bg-[#059669] hover:bg-[#047857] text-white text-base font-semibold shadow-lg transition-smooth"
                data-ocid="hero-supplier-cta"
              >
                <Truck className="size-5 mr-2" />
                Supplier Portal
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            {[
              { label: "Registered Buyers", value: "1,247+" },
              { label: "Verified Suppliers", value: "486+" },
              { label: "Products Listed", value: "3,892+" },
              { label: "Platform Value", value: "₹28 Cr+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-display font-bold text-white leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Daily Performance Metrics ─── */}
      <section className="py-10 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Today's Platform Performance
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              label="Total Transactions"
              value={mockMetrics.totalTransactions.toLocaleString()}
              icon={<Activity className="size-4" />}
              trend={8.2}
              trendLabel="vs last month"
              accent="blue"
              data-ocid="metric-transactions"
            />
            <StatCard
              label="Active Buyers"
              value={mockMetrics.activeBuyers.toLocaleString()}
              icon={<Users className="size-4" />}
              trend={5.4}
              trendLabel="vs last month"
              accent="blue"
              data-ocid="metric-buyers"
            />
            <StatCard
              label="Active Suppliers"
              value={mockMetrics.activeSuppliers.toLocaleString()}
              icon={<Truck className="size-4" />}
              trend={3.1}
              trendLabel="vs last month"
              accent="green"
              data-ocid="metric-suppliers"
            />
            <StatCard
              label="New Listings"
              value={mockMetrics.newListings.toLocaleString()}
              icon={<Package className="size-4" />}
              trend={12.5}
              trendLabel="vs last month"
              accent="purple"
              data-ocid="metric-listings"
            />
          </div>
        </div>
      </section>

      {/* ─── Top Buyers & Suppliers ─── */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Platform Leaders
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Top 5 buyers and suppliers ranked by volume this month
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Buyers */}
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b bg-[#1e40af]/5 flex items-center gap-2">
                <ShoppingCart className="size-4 text-[#1e40af]" />
                <h3 className="font-semibold text-foreground text-sm">
                  Top 5 Buyers by Volume
                </h3>
              </div>
              <div className="divide-y divide-border">
                {mockBuyers.slice(0, 5).map((b, i) => {
                  const maxVol = mockBuyers[0].volume;
                  const pct = Math.round((b.volume / maxVol) * 100);
                  return (
                    <div
                      key={b.id}
                      className="flex items-center gap-4 px-5 py-3.5 hover:bg-muted/20 transition-colors"
                    >
                      <span className="text-xs font-bold text-muted-foreground w-5 shrink-0">
                        #{i + 1}
                      </span>
                      <div className="size-8 rounded-full bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center text-xs font-bold shrink-0">
                        {b.company.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {b.company}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#1e40af] rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground shrink-0">
                            {pct}%
                          </span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-foreground shrink-0">
                        {formatINR(b.volume)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top Suppliers */}
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b bg-[#059669]/5 flex items-center gap-2">
                <Truck className="size-4 text-[#059669]" />
                <h3 className="font-semibold text-foreground text-sm">
                  Top 5 Suppliers by Rating
                </h3>
              </div>
              <div className="divide-y divide-border">
                {mockSuppliers.slice(0, 5).map((s, i) => {
                  const maxRev = mockSuppliers.reduce(
                    (mx, sup) => Math.max(mx, sup.revenue),
                    0,
                  );
                  const pct = Math.round((s.revenue / maxRev) * 100);
                  return (
                    <div
                      key={s.id}
                      className="flex items-center gap-4 px-5 py-3.5 hover:bg-muted/20 transition-colors"
                    >
                      <span className="text-xs font-bold text-muted-foreground w-5 shrink-0">
                        #{i + 1}
                      </span>
                      <div className="size-8 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center text-xs font-bold shrink-0">
                        {s.company.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {s.company}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#059669] rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground shrink-0">
                            {formatINR(s.revenue)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-bold text-foreground">
                          {s.rating}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Top Selling Products ─── */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Top Selling Products
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Most-sourced industrial products this month
              </p>
            </div>
            <Link to="/buyer/catalog">
              <Button
                variant="outline"
                className="text-[#1e40af] border-[#1e40af]/30 hover:bg-[#1e40af]/5"
              >
                View All
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOP_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
                data-ocid={`home-product-${product.id}`}
              >
                {/* Product image placeholder */}
                <div className="h-36 bg-gradient-to-br from-[#1e40af]/8 to-[#059669]/8 flex flex-col items-center justify-center border-b relative">
                  <Package className="size-12 text-muted-foreground/30 mb-1" />
                  <span className="text-[10px] text-muted-foreground/50 font-medium uppercase tracking-wider">
                    {product.category}
                  </span>
                  {/* Supplier logo placeholder */}
                  <div className="absolute top-2 right-2 size-7 rounded-md bg-card border flex items-center justify-center text-[10px] font-bold text-[#1e40af]">
                    {product.supplierId.slice(-1).toUpperCase()}S
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <Badge variant="outline" className="text-[10px] w-fit mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-1 flex-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-bold text-[#1e40af] font-display text-base">
                        {formatINR(product.price)}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Stock: {product.stock} units
                      </p>
                    </div>
                    <div className="flex gap-1.5">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="text-xs h-7 px-2.5"
                        onClick={() => toast.info(`Viewing ${product.name}`)}
                      >
                        Details
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        className="bg-[#059669] hover:bg-[#047857] text-white text-xs h-7 px-2.5"
                        onClick={() =>
                          toast.success("RFQ initiated! Check your portal.")
                        }
                        data-ocid={`home-rfq-${product.id}`}
                      >
                        Request Quotation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Platform Stats ─── */}
      <section className="py-16 text-white" style={{ background: "#0f172a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-3">
              Platform at a Glance
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Trusted by India's top industrial companies for procurement,
              trade, and supplier discovery.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORM_STATS.map(({ label, value, icon: Icon, suffix }) => (
              <div
                key={label}
                className="text-center rounded-xl border border-white/10 bg-white/5 px-6 py-8 hover:bg-white/8 transition-colors"
                data-ocid={`platform-stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="size-12 rounded-xl bg-[#1e40af]/30 flex items-center justify-center mx-auto mb-4">
                  <Icon className="size-6 text-blue-300" />
                </div>
                <p className="font-display text-4xl font-bold text-white mb-1">
                  {value}
                  <span className="text-blue-400 text-2xl">{suffix}</span>
                </p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick Portal Access ─── */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Quick Portal Access
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Jump straight to your workspace
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {QUICK_ACCESS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  data-ocid={`quick-access-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div
                    className={`rounded-xl border p-5 flex flex-col items-center gap-2.5 transition-smooth cursor-pointer ${item.bgClass}`}
                  >
                    <div
                      className={`size-10 rounded-lg flex items-center justify-center ${item.bgClass}`}
                    >
                      <Icon className={`size-6 ${item.iconClass}`} />
                    </div>
                    <p className={`text-sm font-semibold ${item.iconClass}`}>
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground text-center leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="size-14 rounded-2xl bg-[#1e40af]/10 flex items-center justify-center mx-auto mb-5">
            <Factory className="size-7 text-[#1e40af]" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Ready to streamline your industrial procurement?
          </h2>
          <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
            Join 1,200+ companies using LinkUp to reduce procurement costs and
            discover better suppliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buyer/dashboard">
              <Button
                type="button"
                className="h-11 px-8 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold"
                data-ocid="cta-buyer-btn"
              >
                Get Started as Buyer
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                type="button"
                variant="outline"
                className="h-11 px-8 text-[#1e40af] border-[#1e40af]/30 hover:bg-[#1e40af]/5"
              >
                <MessageSquare className="size-4 mr-2" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer Feedback ─── */}
      <section className="py-12 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="size-8 rounded-lg bg-[#1e40af] flex items-center justify-center">
                  <Factory className="size-4 text-white" />
                </div>
                <span className="font-display font-bold text-xl text-[#1e40af]">
                  LinkUp
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                India's trusted B2B industrial marketplace. Connecting verified
                buyers and suppliers for seamless industrial procurement.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                {[
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Careers", href: "/careers" },
                  { label: "Privacy", href: "/" },
                ].map((lnk) => (
                  <Link
                    key={lnk.label}
                    to={lnk.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="size-4 text-[#1e40af]" />
                Send Us Feedback
              </h3>
              <FooterFeedbackForm />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function FooterFeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!name || !email || !message) {
      toast.error("Please fill all fields.");
      return;
    }
    toast.success("Feedback received! We'll follow up within 24h.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <Label className="text-xs font-medium mb-1.5 block">Name</Label>
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-9 text-sm"
          data-ocid="footer-feedback-name"
        />
      </div>
      <div>
        <Label className="text-xs font-medium mb-1.5 block">Email</Label>
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-9 text-sm"
          data-ocid="footer-feedback-email"
        />
      </div>
      <div className="sm:col-span-2">
        <Label className="text-xs font-medium mb-1.5 block">Message</Label>
        <Textarea
          placeholder="Share your thoughts..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          data-ocid="footer-feedback-message"
        />
      </div>
      <div className="sm:col-span-2">
        <Button
          type="button"
          className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-sm h-9 px-6"
          onClick={handleSubmit}
          data-ocid="footer-feedback-submit"
        >
          <Send className="size-3.5 mr-2" />
          Submit Feedback
        </Button>
      </div>
      <div className="sm:col-span-2">
        <p className="text-xs text-muted-foreground">
          <RotateCcw className="size-3 inline mr-1" />
          We respond to all feedback within 24 business hours.
        </p>
      </div>
    </div>
  );
}
