import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  ChevronRight,
  Clock,
  Mail,
  Phone,
  Ticket,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { buyerNavItems } from "./navItems";

const FAQS = [
  {
    id: "faq-1",
    question: "What is LinkUp and how does it work for buyers?",
    answer:
      "LinkUp is a B2B industrial marketplace connecting verified buyers and suppliers. As a buyer, you can browse products, submit RFQs (Request for Quotations), compare quotes from multiple suppliers, and manage your procurement workflow in one platform.",
  },
  {
    id: "faq-2",
    question: "How do I submit an RFQ to a supplier?",
    answer:
      "Navigate to the RFQ Management section, click 'Submit New RFQ', select your desired product and supplier, enter quantity and required delivery date, add any special requirements, and submit. The supplier will respond within their stated response time.",
  },
  {
    id: "faq-3",
    question: "What are the buyer pricing tiers?",
    answer:
      "Tier 1 (Free): Basic access, limited RFQs. Tier 2 (SME): From ₹1,000 minimum fee + 0.01% commission. Tier 3 (Mid-size): From ₹2,000 minimum fee + 0.01% commission. Tier 4 (Enterprise): Same as Tier 3 with verified suppliers and premium support.",
  },
  {
    id: "faq-4",
    question: "How does the payment process work on LinkUp?",
    answer:
      "Payments are processed through secure banking channels. Once an RFQ is accepted, you'll receive a payment link or bank transfer details. All transactions are logged in your dashboard for transparency and audit purposes.",
  },
  {
    id: "faq-5",
    question: "How are suppliers verified on the platform?",
    answer:
      "All suppliers undergo a multi-step verification process including GST verification, business registration check, bank account validation, and product quality assessment. Verified suppliers are marked with a green badge on their profiles.",
  },
  {
    id: "faq-6",
    question: "How do I upgrade or change my buyer tier?",
    answer:
      "Go to the Pricing Calculator page and click 'Upgrade My Tier'. Our team will contact you within 24 hours to process the upgrade. Tier changes take effect from the next billing cycle.",
  },
  {
    id: "faq-7",
    question: "What should I do if I face a technical issue?",
    answer:
      "First, try refreshing the page. If the issue persists, use the Support Ticket form below to report it. Include your browser version, operating system, and a description of the issue. Our technical team responds within 4 business hours.",
  },
  {
    id: "faq-8",
    question: "How can I contact the LinkUp support team directly?",
    answer:
      "You can reach us via email at support@linkup.com, by phone at +91 80 1234 5678 during business hours (Mon–Fri, 9 AM–6 PM IST), or by submitting a support ticket below for tracked assistance.",
  },
];

const PRIORITY_STYLES: Record<string, string> = {
  Low: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Medium: "border-amber-200 bg-amber-50 text-amber-700",
  High: "border-orange-200 bg-orange-50 text-orange-700",
  Urgent: "border-red-200 bg-red-50 text-red-700",
};

interface TicketForm {
  subject: string;
  category: string;
  priority: string;
  description: string;
}

export function BuyerSupportPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [form, setForm] = useState<TicketForm>({
    subject: "",
    category: "",
    priority: "Medium",
    description: "",
  });

  function toggleFaq(id: string) {
    setOpenFaq(openFaq === id ? null : id);
  }

  function handleSubmitTicket() {
    if (!form.subject || !form.category || !form.description) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success(
      "Support ticket #TK-2847 created! We'll respond within 4 business hours.",
    );
    setForm({ subject: "", category: "", priority: "Medium", description: "" });
  }

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <PageHeader
        title="Support & Help"
        description="Find answers or reach our team directly."
        breadcrumb="Buyer Portal"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {FAQS.map((faq) => (
                <div key={faq.id} className="rounded-lg border overflow-hidden">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
                    onClick={() => toggleFaq(faq.id)}
                    data-ocid={`faq-toggle-${faq.id}`}
                    aria-expanded={openFaq === faq.id}
                  >
                    <span className="font-medium text-sm pr-4">
                      {faq.question}
                    </span>
                    {openFaq === faq.id ? (
                      <ChevronDown className="size-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronRight className="size-4 text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-4 pb-4 text-sm text-muted-foreground border-t bg-muted/10">
                      <p className="pt-3 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Ticket className="size-4 text-[#1e40af]" />
                Submit Support Ticket
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="ticket-subject">Subject *</Label>
                <Input
                  id="ticket-subject"
                  placeholder="Brief description of your issue..."
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  data-ocid="ticket-subject"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="ticket-category">Category *</Label>
                  <Select
                    value={form.category}
                    onValueChange={(v) => setForm({ ...form, category: v })}
                  >
                    <SelectTrigger
                      id="ticket-category"
                      data-ocid="ticket-category"
                    >
                      <SelectValue placeholder="Select category..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="billing">
                        Billing &amp; Payments
                      </SelectItem>
                      <SelectItem value="rfq">RFQ / Orders</SelectItem>
                      <SelectItem value="supplier">Supplier Dispute</SelectItem>
                      <SelectItem value="account">
                        Account Management
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Priority</Label>
                  <div className="flex gap-1.5 flex-wrap">
                    {["Low", "Medium", "High", "Urgent"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setForm({ ...form, priority: p })}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${form.priority === p ? PRIORITY_STYLES[p] : "border-border bg-background hover:bg-muted/30"}`}
                        data-ocid={`priority-${p.toLowerCase()}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ticket-desc">Description *</Label>
                <Textarea
                  id="ticket-desc"
                  placeholder="Describe your issue in detail. Include any error messages, steps to reproduce, and expected vs actual behavior..."
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  rows={5}
                  data-ocid="ticket-description"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ticket-attach">Attachment (optional)</Label>
                <Input
                  id="ticket-attach"
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg,.csv"
                  className="cursor-pointer file:mr-3 file:px-3 file:py-1 file:rounded file:border-0 file:text-xs file:bg-[#1e40af] file:text-white file:cursor-pointer"
                  data-ocid="ticket-attachment"
                />
              </div>
              <Button
                type="button"
                className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                onClick={handleSubmitTicket}
                data-ocid="ticket-submit"
              >
                Submit Ticket
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border">
                <Mail className="size-5 text-[#1e40af] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Email Support</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    support@linkup.com
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Response within 4 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border">
                <Phone className="size-5 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Phone Support</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    +91 80 1234 5678
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Toll-free for Enterprise
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border">
                <Clock className="size-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Business Hours</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Mon – Fri: 9 AM – 6 PM IST
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sat: 10 AM – 2 PM IST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Response Times by Tier
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {[
                {
                  tier: "Enterprise (T4)",
                  time: "< 1 hour",
                  color: "text-emerald-600",
                },
                {
                  tier: "Mid-size (T3)",
                  time: "< 2 hours",
                  color: "text-blue-600",
                },
                {
                  tier: "SME (T2)",
                  time: "< 4 hours",
                  color: "text-amber-600",
                },
                {
                  tier: "Free (T1)",
                  time: "< 24 hours",
                  color: "text-muted-foreground",
                },
              ].map((row) => (
                <div
                  key={row.tier}
                  className="flex justify-between items-center py-1.5 border-b last:border-0"
                >
                  <span className="font-medium">{row.tier}</span>
                  <span className={`font-semibold ${row.color}`}>
                    {row.time}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
