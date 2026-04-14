import {
  SUPPLIER_SIZE_LABELS,
  TIER_LABELS,
  calculateBuyerFee,
  calculateMultiRoleFee,
  calculateSupplierFee,
  formatINR,
} from "@/lib/pricing";
import type { BuyerTier, SupplierSize } from "@/types";
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  HelpCircle,
  MessageCircle,
  Send,
  Settings,
  ShoppingCart,
  Store,
  Users,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

type ChatMode = "menu" | "fees" | "portal" | "faq" | "faq-detail";
type FeeUserType = "buyer" | "supplier" | "multi";

const FAQ_CATEGORIES = [
  "Pricing",
  "RFQ Process",
  "Registration",
  "Products",
  "Platform",
  "Contact",
] as const;
type FaqCategory = (typeof FAQ_CATEGORIES)[number];

const FAQ_DATA: Record<FaqCategory, { q: string; a: string }[]> = {
  Pricing: [
    {
      q: "What are buyer tiers?",
      a: "Tier 1 is free. Tiers 2–4 have minimum fees in INR based on transaction volume.",
    },
    {
      q: "How are supplier fees calculated?",
      a: "Based on company size and sales volume. Small/Micro suppliers get their first product/year free.",
    },
    {
      q: "What is the multi-role discount?",
      a: "Multi-role users (buyer + supplier) pay only 60% of the combined minimum fee.",
    },
  ],
  "RFQ Process": [
    {
      q: "How do I submit an RFQ?",
      a: "Go to Buyer Portal → RFQ Management → Submit New RFQ. Select product, quantity, and delivery date.",
    },
    {
      q: "How long do suppliers take to respond?",
      a: "Typically 24–48 hours. You can track status in RFQ Management.",
    },
    {
      q: "Can I accept multiple quotes?",
      a: "Yes. You can compare supplier quotes and accept the best one.",
    },
  ],
  Registration: [
    {
      q: "How do I register as a buyer?",
      a: "Go to Buyer Portal → New to LinkUp? Start Onboarding. Fill the 5-step form.",
    },
    {
      q: "Can I be both a buyer and supplier?",
      a: "Yes! Select Both during role selection after login.",
    },
    {
      q: "What documents do I need?",
      a: "GST number, company registration, and bank details for suppliers.",
    },
  ],
  Products: [
    {
      q: "How do suppliers add products?",
      a: "Supplier Portal → Product Management → Add New Product.",
    },
    {
      q: "Are suppliers verified?",
      a: "Yes. Verified suppliers show a green checkmark badge.",
    },
    {
      q: "Can I request a product not listed?",
      a: "Yes, use the RFQ system to request quotations for any product.",
    },
  ],
  Platform: [
    {
      q: "Is LinkUp free to use?",
      a: "Tier 1 buyers have no fees. Supplier small/micro get first year free.",
    },
    {
      q: "How does LinkUp ensure quality?",
      a: "Suppliers are verified by our team. We monitor transaction compliance.",
    },
    {
      q: "What payment methods are accepted?",
      a: "Bank transfer, NEFT/RTGS. Payment gateway coming soon.",
    },
  ],
  Contact: [
    {
      q: "How do I contact support?",
      a: "Use the Support section in your portal or email support@linkup.com",
    },
    {
      q: "Is live support available?",
      a: "Yes, Mon–Sat 9am–6pm IST. Use ticket system for 24hr response.",
    },
    {
      q: "How do I escalate an issue?",
      a: "Mark ticket as High/Urgent priority or use the escalation link in support.",
    },
  ],
};

const PORTAL_ITEMS = [
  {
    icon: ShoppingCart,
    title: "Buyer Portal",
    desc: "Browse products, submit RFQs, track orders, manage suppliers. Access from top navigation.",
    href: "/buyer/dashboard",
  },
  {
    icon: Store,
    title: "Supplier Portal",
    desc: "Manage your products, respond to RFQs, track revenue, manage billing.",
    href: "/supplier/dashboard",
  },
  {
    icon: Settings,
    title: "Admin Panel",
    desc: "Platform administration — access via /admin route.",
    href: "/admin/dashboard",
  },
  {
    icon: Users,
    title: "Onboarding",
    desc: "New? Start with Buyer Registration or Supplier Registration.",
    href: "/buyer/onboarding",
  },
];

function MenuView({ onSelect }: { onSelect: (mode: ChatMode) => void }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
        Hi! I'm the <strong>LinkUp Assistant</strong>. How can I help you today?
      </p>
      <div className="flex flex-col gap-2 mt-1">
        <button
          type="button"
          onClick={() => onSelect("fees")}
          data-ocid="chatbot-menu-fees"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white transition-smooth hover:opacity-90 active:scale-[0.98]"
          style={{ background: "#1e40af" }}
        >
          <Settings className="size-4 shrink-0" />
          Calculate Fees
        </button>
        <button
          type="button"
          onClick={() => onSelect("portal")}
          data-ocid="chatbot-menu-portal"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white transition-smooth hover:opacity-90 active:scale-[0.98]"
          style={{ background: "#059669" }}
        >
          <BookOpen className="size-4 shrink-0" />
          Portal Guide
        </button>
        <button
          type="button"
          onClick={() => onSelect("faq")}
          data-ocid="chatbot-menu-faq"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium border transition-smooth hover:bg-gray-50 active:scale-[0.98]"
          style={{ borderColor: "#1e40af", color: "#1e40af" }}
        >
          <HelpCircle className="size-4 shrink-0" />
          FAQ
        </button>
      </div>
    </div>
  );
}

function FeeCalculatorView({ onBack }: { onBack: () => void }) {
  const [userType, setUserType] = useState<FeeUserType>("buyer");
  const [buyerTier, setBuyerTier] = useState<BuyerTier>("tier1");
  const [supplierSize, setSupplierSize] = useState<SupplierSize>("small");
  const [buyerAmount, setBuyerAmount] = useState("");
  const [supplierSales, setSupplierSales] = useState("");
  const [result, setResult] = useState<{
    minFee: number;
    platformFee: number;
    total: number;
  } | null>(null);

  const calculate = () => {
    const bAmt = Number.parseFloat(buyerAmount) || 0;
    const sAmt = Number.parseFloat(supplierSales) || 0;
    if (userType === "buyer") {
      const fee = calculateBuyerFee(buyerTier, bAmt);
      const isT1 = buyerTier === "tier1";
      const minFee = isT1
        ? 0
        : bAmt <= 5000
          ? buyerTier === "tier2"
            ? 1000
            : 2000
          : 0;
      const platformFee = bAmt > 5000 ? bAmt * 0.0001 : 0;
      setResult({ minFee, platformFee, total: fee });
    } else if (userType === "supplier") {
      const fee = calculateSupplierFee(supplierSize, sAmt);
      const minFee = supplierSize === "small" ? 0 : 5000;
      const platformFee =
        supplierSize !== "small" && sAmt > 0
          ? sAmt <= 1000000
            ? sAmt * 0.005
            : sAmt * 0.0025
          : 0;
      setResult({ minFee, platformFee, total: fee });
    } else {
      const total = calculateMultiRoleFee(buyerTier, supplierSize, bAmt, sAmt);
      const bFee = calculateBuyerFee(buyerTier, bAmt);
      const sFee = calculateSupplierFee(supplierSize, sAmt);
      setResult({
        minFee: bFee + sFee,
        platformFee: 0.4 * (bFee + sFee),
        total,
      });
    }
  };

  const userTypeButtons: { key: FeeUserType; label: string }[] = [
    { key: "buyer", label: "Buyer" },
    { key: "supplier", label: "Supplier" },
    { key: "multi", label: "Multi-role" },
  ];

  const buyerTiers: BuyerTier[] = ["tier1", "tier2", "tier3", "tier4"];
  const supplierSizes: SupplierSize[] = ["small", "medium", "large"];

  return (
    <div className="flex flex-col gap-3 p-4 overflow-y-auto">
      <BackButton onBack={onBack} label="Fee Calculator" />

      {/* User type toggle */}
      <div
        className="flex rounded-lg overflow-hidden border"
        style={{ borderColor: "#d1d5db" }}
      >
        {userTypeButtons.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setUserType(key);
              setResult(null);
            }}
            data-ocid={`chatbot-fee-type-${key}`}
            className="flex-1 py-2 text-xs font-medium transition-smooth"
            style={{
              background: userType === key ? "#1e40af" : "white",
              color: userType === key ? "white" : "#374151",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Buyer tier */}
      {(userType === "buyer" || userType === "multi") && (
        <div>
          <p className="text-xs font-medium mb-1" style={{ color: "#6b7280" }}>
            Buyer Tier
          </p>
          <div className="grid grid-cols-2 gap-1">
            {buyerTiers.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setBuyerTier(t);
                  setResult(null);
                }}
                data-ocid={`chatbot-tier-${t}`}
                className="py-1.5 px-2 rounded text-xs transition-smooth border"
                style={{
                  background: buyerTier === t ? "#eff6ff" : "white",
                  borderColor: buyerTier === t ? "#1e40af" : "#d1d5db",
                  color: buyerTier === t ? "#1e40af" : "#374151",
                  fontWeight: buyerTier === t ? 600 : 400,
                }}
              >
                {TIER_LABELS[t].split("—")[0].trim()}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Transaction amount (₹)"
            value={buyerAmount}
            onChange={(e) => {
              setBuyerAmount(e.target.value);
              setResult(null);
            }}
            data-ocid="chatbot-buyer-amount"
            className="mt-2 w-full border rounded px-3 py-2 text-sm outline-none"
            style={{ borderColor: "#d1d5db", color: "#111827" }}
            min="0"
          />
        </div>
      )}

      {/* Supplier size */}
      {(userType === "supplier" || userType === "multi") && (
        <div>
          <p className="text-xs font-medium mb-1" style={{ color: "#6b7280" }}>
            Supplier Size
          </p>
          <div className="flex gap-1">
            {supplierSizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSupplierSize(s);
                  setResult(null);
                }}
                data-ocid={`chatbot-size-${s}`}
                className="flex-1 py-1.5 rounded text-xs transition-smooth border"
                style={{
                  background: supplierSize === s ? "#f0fdf4" : "white",
                  borderColor: supplierSize === s ? "#059669" : "#d1d5db",
                  color: supplierSize === s ? "#059669" : "#374151",
                  fontWeight: supplierSize === s ? 600 : 400,
                }}
              >
                {SUPPLIER_SIZE_LABELS[s].split("/")[0].trim()}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Sales volume (₹)"
            value={supplierSales}
            onChange={(e) => {
              setSupplierSales(e.target.value);
              setResult(null);
            }}
            data-ocid="chatbot-supplier-sales"
            className="mt-2 w-full border rounded px-3 py-2 text-sm outline-none"
            style={{ borderColor: "#d1d5db", color: "#111827" }}
            min="0"
          />
        </div>
      )}

      <button
        type="button"
        onClick={calculate}
        data-ocid="chatbot-fee-calculate"
        className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-smooth hover:opacity-90"
        style={{ background: "#1e40af" }}
      >
        Calculate
      </button>

      {result && (
        <div
          className="rounded-lg border overflow-hidden"
          style={{ borderColor: "#d1fae5" }}
        >
          <div
            className="px-3 py-2 text-xs font-semibold text-white"
            style={{ background: "#059669" }}
          >
            Fee Breakdown
          </div>
          <table className="w-full text-xs">
            <tbody>
              {userType !== "multi" ? (
                <>
                  <tr className="border-b" style={{ borderColor: "#f0fdf4" }}>
                    <td className="px-3 py-2" style={{ color: "#6b7280" }}>
                      Minimum Fee
                    </td>
                    <td
                      className="px-3 py-2 text-right font-medium"
                      style={{ color: "#111827" }}
                    >
                      {formatINR(result.minFee)}
                    </td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "#f0fdf4" }}>
                    <td className="px-3 py-2" style={{ color: "#6b7280" }}>
                      Platform Fee
                    </td>
                    <td
                      className="px-3 py-2 text-right font-medium"
                      style={{ color: "#111827" }}
                    >
                      {formatINR(result.platformFee)}
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <tr className="border-b" style={{ borderColor: "#f0fdf4" }}>
                    <td className="px-3 py-2" style={{ color: "#6b7280" }}>
                      Combined Base Fee
                    </td>
                    <td
                      className="px-3 py-2 text-right font-medium"
                      style={{ color: "#111827" }}
                    >
                      {formatINR(result.minFee)}
                    </td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "#f0fdf4" }}>
                    <td className="px-3 py-2" style={{ color: "#6b7280" }}>
                      Multi-role Discount (40%)
                    </td>
                    <td
                      className="px-3 py-2 text-right font-medium"
                      style={{ color: "#059669" }}
                    >
                      −{formatINR(result.platformFee)}
                    </td>
                  </tr>
                </>
              )}
              <tr style={{ background: "#f0fdf4" }}>
                <td
                  className="px-3 py-2 font-semibold"
                  style={{ color: "#065f46" }}
                >
                  Total Fee
                </td>
                <td
                  className="px-3 py-2 text-right font-bold"
                  style={{ color: "#059669" }}
                >
                  {formatINR(result.total)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function PortalGuideView({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <BackButton onBack={onBack} label="Portal Guide" />
      <div className="flex flex-col gap-2">
        {PORTAL_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex gap-3 p-3 rounded-lg border"
            style={{ borderColor: "#e5e7eb", background: "#f9fafb" }}
          >
            <div
              className="size-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "#eff6ff" }}
            >
              <item.icon className="size-4" style={{ color: "#1e40af" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold" style={{ color: "#111827" }}>
                {item.title}
              </p>
              <p
                className="text-xs mt-0.5 leading-relaxed"
                style={{ color: "#6b7280" }}
              >
                {item.desc}
              </p>
              <a
                href={item.href}
                data-ocid={`chatbot-portal-link-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center gap-1 text-xs font-medium mt-1.5 transition-smooth hover:underline"
                style={{ color: "#1e40af" }}
              >
                Open <ChevronRight className="size-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQView({
  onBack,
  onSelectCategory,
}: {
  onBack: () => void;
  onSelectCategory: (cat: FaqCategory) => void;
}) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <BackButton onBack={onBack} label="FAQ" />
      <p className="text-xs" style={{ color: "#6b7280" }}>
        Select a category to view frequently asked questions:
      </p>
      <div className="flex flex-wrap gap-2">
        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            data-ocid={`chatbot-faq-cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            className="px-3 py-1.5 rounded-full text-xs font-medium border transition-smooth hover:opacity-80"
            style={{
              background: "#eff6ff",
              borderColor: "#bfdbfe",
              color: "#1e40af",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

function FAQDetailView({
  category,
  onBack,
}: {
  category: FaqCategory;
  onBack: () => void;
}) {
  const items = FAQ_DATA[category];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3 p-4">
      <BackButton onBack={onBack} label={category} />
      <div className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <div
            key={item.q}
            className="rounded-lg border overflow-hidden"
            style={{ borderColor: "#e5e7eb" }}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              data-ocid={`chatbot-faq-item-${idx}`}
              className="w-full text-left px-3 py-2.5 flex items-start gap-2 text-xs font-medium transition-smooth hover:bg-gray-50"
              style={{ color: "#111827" }}
            >
              <span className="flex-1">{item.q}</span>
              <ChevronRight
                className="size-3 mt-0.5 shrink-0 transition-smooth"
                style={{
                  transform: openIdx === idx ? "rotate(90deg)" : "rotate(0deg)",
                  color: "#1e40af",
                }}
              />
            </button>
            {openIdx === idx && (
              <div
                className="px-3 pb-3 pt-1 text-xs leading-relaxed"
                style={{ color: "#4b5563", background: "#f9fafb" }}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function BackButton({ onBack, label }: { onBack: () => void; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onBack}
        data-ocid="chatbot-back"
        className="flex items-center gap-1 text-xs font-medium transition-smooth hover:underline"
        style={{ color: "#1e40af" }}
      >
        <ArrowLeft className="size-3" />
        Back to Menu
      </button>
      <span className="text-xs font-semibold ml-1" style={{ color: "#111827" }}>
        / {label}
      </span>
    </div>
  );
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("menu");
  const [faqCategory, setFaqCategory] = useState<FaqCategory | null>(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setIsOpen(false);
    setMode("menu");
    setFaqCategory(null);
    setInputValue("");
  };

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleModeSelect = (m: ChatMode) => setMode(m);

  const handleBack = () => {
    if (mode === "faq-detail") {
      setMode("faq");
    } else {
      setMode("menu");
    }
  };

  const handleFaqCategory = (cat: FaqCategory) => {
    setFaqCategory(cat);
    setMode("faq-detail");
  };

  const handleSend = () => {
    const val = inputValue.trim().toLowerCase();
    if (!val) return;
    setInputValue("");
    if (/(fee|price|cost|calculat|tier|commission)/i.test(val)) {
      setMode("fees");
    } else if (/(guide|portal|navigate|buyer|supplier|admin)/i.test(val)) {
      setMode("portal");
    } else if (/(faq|help|question|how|what|when|why)/i.test(val)) {
      setMode("faq");
    } else if (/(bye|exit|close|quit)/i.test(val)) {
      handleClose();
    } else {
      setMode("menu");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={isOpen ? handleClose : handleOpen}
        data-ocid="chatbot-toggle"
        aria-label="Open LinkUp Assistant"
        className="fixed z-[9999] flex items-center justify-center rounded-full size-14 shadow-lg transition-smooth hover:scale-110 active:scale-95"
        style={{
          bottom: "24px",
          right: "24px",
          background: "linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)",
          boxShadow: "0 4px 20px rgba(30,64,175,0.4)",
        }}
      >
        {isOpen ? (
          <X className="size-6 text-white" />
        ) : (
          <MessageCircle className="size-6 text-white" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          data-ocid="chatbot-panel"
          className="fixed z-[9998] flex flex-col overflow-hidden rounded-2xl"
          style={{
            bottom: "88px",
            right: "24px",
            width: "380px",
            height: "520px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            background: "white",
            // Full-screen on mobile via media query applied below
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 shrink-0"
            style={{
              background:
                "linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #1d4ed8 100%)",
            }}
          >
            <div
              className="size-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <MessageCircle className="size-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">
                LinkUp Assistant
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Always here to help
              </p>
            </div>
            <div
              className="size-2 rounded-full"
              style={{ background: "#34d399" }}
            />
          </div>

          {/* Content area */}
          <div
            className="flex-1 overflow-y-auto"
            style={{ scrollbarWidth: "thin" }}
          >
            {mode === "menu" && <MenuView onSelect={handleModeSelect} />}
            {mode === "fees" && <FeeCalculatorView onBack={handleBack} />}
            {mode === "portal" && <PortalGuideView onBack={handleBack} />}
            {mode === "faq" && (
              <FAQView
                onBack={handleBack}
                onSelectCategory={handleFaqCategory}
              />
            )}
            {mode === "faq-detail" && faqCategory && (
              <FAQDetailView category={faqCategory} onBack={handleBack} />
            )}
          </div>

          {/* Input bar */}
          <div
            className="flex items-center gap-2 px-3 py-2.5 shrink-0 border-t"
            style={{ borderColor: "#e5e7eb", background: "#f9fafb" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a question..."
              data-ocid="chatbot-input"
              className="flex-1 text-sm rounded-lg px-3 py-2 border outline-none transition-smooth focus:border-blue-500"
              style={{
                borderColor: "#d1d5db",
                background: "white",
                color: "#111827",
              }}
            />
            <button
              type="button"
              onClick={handleSend}
              data-ocid="chatbot-send"
              aria-label="Send message"
              className="size-9 flex items-center justify-center rounded-lg transition-smooth hover:opacity-90 active:scale-95 shrink-0"
              style={{ background: "#1e40af" }}
            >
              <Send className="size-4 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile full-screen override */}
      <style>{`
        @media (max-width: 480px) {
          [data-ocid="chatbot-panel"] {
            bottom: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            height: 100dvh !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
