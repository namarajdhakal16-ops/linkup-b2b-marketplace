import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
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
import {
  ChevronDown,
  ChevronUp,
  Headphones,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SUPPLIER_NAV } from "./SupplierDashboardPage";

const FAQS = [
  {
    q: "How do I respond to an RFQ from a buyer?",
    a: 'Go to RFQ Leads, find the pending request, and click "Submit Quote". Enter your quote amount, delivery timeline, validity date, and any special terms. The buyer is notified instantly.',
  },
  {
    q: "When and how are platform fees charged?",
    a: "Fees are charged monthly based on your total completed transactions. An invoice is auto-generated on the 1st of each month and deducted from your registered bank account via NEFT.",
  },
  {
    q: "How do I get my products and account verified?",
    a: "Submit your product with complete specifications and certifications. Our verification team reviews within 3–5 business days. Verified accounts receive a badge and higher search ranking.",
  },
  {
    q: "Can I list products in multiple categories?",
    a: "Each product is assigned to one primary category. Choose the most relevant one for best visibility. You can list products across multiple categories as separate listings.",
  },
  {
    q: "How do I upgrade from Small to Medium supplier tier?",
    a: "Contact your account manager or email suppliers@linkup.in. Provide updated turnover documents. Tier upgrades are processed within 24 hours after verification.",
  },
  {
    q: "What is the commission structure for high-value orders?",
    a: "For Medium/Large suppliers: ₹1–10L sales → 0.5% commission (minimum ₹5,000). Over ₹10L → 0.25% of total. Small/Micro suppliers get the first product free in Year 1.",
  },
  {
    q: "Can I set up automated responses to RFQs?",
    a: "Auto-response templates are coming in Q3 2026. Currently, you must manually respond within the platform. We recommend responding within 2 hours to improve your response rate score.",
  },
  {
    q: "How do I handle returns and disputes from buyers?",
    a: "Navigate to Support → Submit Ticket and select 'Dispute'. Our resolution team mediates within 48 hours. All interactions are logged. Refer to your product's stated return policy.",
  },
];

const CONTACT_CARDS = [
  {
    icon: Headphones,
    title: "Supplier Hotline",
    desc: "Dedicated supplier support: 1800-LINKUP-1",
    action: "Call Now",
    color: "text-[#059669]",
    bg: "bg-[#059669]/10",
  },
  {
    icon: Phone,
    title: "Account Manager",
    desc: "Your personal contact: Amit Sharma",
    action: "Connect",
    color: "text-[#1e40af]",
    bg: "bg-[#1e40af]/10",
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "suppliers@linkup.in · Priority queue",
    action: "Send Email",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const CATEGORIES = [
  "Billing",
  "Product Listing",
  "RFQ Issue",
  "Technical",
  "Account",
  "Other",
] as const;
const PRIORITIES = ["Low", "Medium", "High", "Critical"] as const;

export function SupplierSupportPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmitTicket() {
    if (!subject.trim() || !category || !details.trim()) {
      toast.error("Subject, category and description are required");
      return;
    }
    const ticketId = `SUP-${Date.now().toString().slice(-5)}`;
    toast.success(
      `Ticket ${ticketId} submitted! We'll respond within 4 hours.`,
    );
    setSubject("");
    setCategory("");
    setPriority("");
    setDetails("");
  }

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="Support & Help"
        description="Get assistance with your supplier account and platform queries"
        breadcrumb="Supplier Portal"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact cards */}
        <div className="space-y-4">
          {CONTACT_CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-xl border bg-card p-5 flex items-start gap-4"
              >
                <div
                  className={`size-10 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}
                >
                  <Icon className={`size-5 ${c.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">
                    {c.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 mb-3">
                    {c.desc}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className={`text-xs ${c.color}`}
                    onClick={() =>
                      toast.info(`${c.action} — feature coming soon`)
                    }
                  >
                    {c.action}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-2 space-y-6">
          {/* Support ticket form */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">
              Submit a Support Ticket
            </h3>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  Subject *
                </Label>
                <Input
                  placeholder="Brief description of your issue"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  data-ocid="ticket-subject"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-sm font-medium mb-1.5 block">
                    Category *
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger data-ocid="ticket-category">
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
                <div>
                  <Label className="text-sm font-medium mb-1.5 block">
                    Priority
                  </Label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger data-ocid="ticket-priority">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIORITIES.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  Description *
                </Label>
                <Textarea
                  placeholder="Provide detailed information about your issue — include RFQ IDs, product names, or error messages if applicable..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={4}
                  data-ocid="ticket-details"
                />
              </div>
              <Button
                className="bg-[#059669] hover:bg-[#047857] text-white"
                onClick={handleSubmitTicket}
                data-ocid="submit-ticket-btn"
              >
                <Send className="size-4 mr-2" />
                Submit Ticket
              </Button>
            </div>
          </div>

          {/* FAQ accordion */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">
              Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <div
                  key={faq.q}
                  className="rounded-lg border bg-card overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-muted/30 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    data-ocid={`faq-toggle-${i}`}
                  >
                    <span className="font-medium text-sm text-foreground pr-4">
                      {faq.q}
                    </span>
                    {openFAQ === i ? (
                      <ChevronUp className="size-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="size-4 text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {openFAQ === i && (
                    <div className="px-4 pb-4 text-sm text-muted-foreground border-t bg-muted/20 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
