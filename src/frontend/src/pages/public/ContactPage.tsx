import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Sales Enquiries",
    info: "+91 98765 43210",
    sub: "Mon–Sat, 9am–7pm IST",
    color: "text-[#1e40af] bg-[#1e40af]/10",
  },
  {
    icon: Mail,
    title: "General Support",
    info: "support@linkup.in",
    sub: "24h response SLA",
    color: "text-[#059669] bg-[#059669]/10",
  },
  {
    icon: MapPin,
    title: "Head Office",
    info: "Bandra Kurla Complex",
    sub: "Mumbai, Maharashtra 400051",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: Clock,
    title: "Business Hours",
    info: "Mon–Sat: 9am–7pm",
    sub: "Emergency: 24/7 (Enterprise)",
    color: "text-amber-600 bg-amber-100",
  },
];

const FAQ_ITEMS = [
  {
    q: "How do I register as a buyer?",
    a: 'Click "Get Started" and choose the Buyer role. Complete the 4-step registration form with your company details.',
  },
  {
    q: "Is there a registration fee?",
    a: "Buyer Tier 1 is completely free. Higher tiers have transaction-based fees. Supplier registration is free for the first product.",
  },
  {
    q: "How long does verification take?",
    a: "Standard verification: 2–3 business days. Fast-track available for enterprise accounts. You'll receive email updates.",
  },
  {
    q: "Can I be both a buyer and supplier?",
    a: 'Yes! Select "Both" during registration. Multi-role users get a 40% discount on combined fees.',
  },
];

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!name || !email || !message) {
      toast.error("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll respond within 24 hours.");
  }

  function handleReset() {
    setName("");
    setEmail("");
    setCompany("");
    setSubject("");
    setMessage("");
    setSubmitted(false);
  }

  return (
    <PublicLayout>
      {/* ─── Hero ─── */}
      <section
        className="text-white py-14 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Badge className="mb-3 bg-white/10 text-blue-300 border-white/20 text-xs px-3 py-1">
            Get in Touch
          </Badge>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Have a question or want to learn more about LinkUp? Our team is here
            to help you get started.
          </p>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact options */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {CONTACT_INFO.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-xl border bg-card p-5 text-center hover:shadow-md transition-shadow"
                >
                  <div
                    className={`size-10 rounded-xl ${c.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <p className="font-semibold text-foreground text-sm mb-1">
                    {c.title}
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    {c.info}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {c.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="rounded-2xl border bg-card shadow-sm p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="size-16 rounded-full bg-[#059669]/10 flex items-center justify-center mb-4">
                    <CheckCircle className="size-8 text-[#059669]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                    Thank you, {name}! We've received your message and will
                    respond to{" "}
                    <span className="font-medium text-foreground">{email}</span>{" "}
                    within 24 business hours.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="text-[#1e40af] border-[#1e40af]/30"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-bold text-foreground mb-5">
                    Send Us a Message
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium mb-1.5 block">
                          Your Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          placeholder="Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          data-ocid="contact-name"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium mb-1.5 block">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="email"
                          placeholder="work@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          data-ocid="contact-email"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">
                        Company
                      </Label>
                      <Input
                        placeholder="Company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        data-ocid="contact-company"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">
                        Subject
                      </Label>
                      <Select value={subject} onValueChange={setSubject}>
                        <SelectTrigger data-ocid="contact-subject">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Enquiry</SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="billing">Billing</SelectItem>
                          <SelectItem value="buyer-registration">
                            Buyer Registration Help
                          </SelectItem>
                          <SelectItem value="supplier-registration">
                            Supplier Registration Help
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        placeholder="Describe your question or request in detail..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        data-ocid="contact-message"
                      />
                    </div>
                    <Button
                      type="button"
                      className="w-full h-11 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold"
                      onClick={handleSubmit}
                      data-ocid="send-message-btn"
                    >
                      <Send className="size-4 mr-2" />
                      Send Message
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center">
                      We respond to all enquiries within 24 business hours.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-5">
                Frequently Asked
              </h2>
              <div className="space-y-3">
                {FAQ_ITEMS.map((faq) => (
                  <div key={faq.q} className="rounded-xl border bg-card p-5">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="size-4 text-[#1e40af] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-foreground mb-1.5">
                          {faq.q}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office info box */}
              <div className="rounded-xl border bg-gradient-to-br from-[#1e40af]/5 to-[#059669]/5 p-6 mt-5">
                <h3 className="font-semibold text-foreground mb-4 text-sm">
                  Office Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-4 text-[#1e40af] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Head Office</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Bandra Kurla Complex, Mumbai, Maharashtra 400051
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        support@linkup.in · sales@linkup.in
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        +91 98765 43210 (Sales) · +91 87654 32109 (Support)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="size-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        Office Hours
                      </p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Monday – Saturday: 9:00 AM – 7:00 PM IST
                        <br />
                        Enterprise: 24/7 emergency support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
