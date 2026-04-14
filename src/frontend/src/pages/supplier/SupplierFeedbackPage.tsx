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
import { mockFeedback } from "@/data/mockData";
import { MessageSquarePlus, Send, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SUPPLIER_NAV } from "./SupplierDashboardPage";

const FEEDBACK_TYPES = [
  "Suggestion",
  "Bug Report",
  "General",
  "Complaint",
] as const;
type FeedbackType = (typeof FEEDBACK_TYPES)[number];

interface FeedbackEntry {
  id: string;
  type: FeedbackType;
  rating: number;
  subject: string;
  message: string;
  date: string;
  status: "new" | "reviewed" | "closed";
}

const STATUS_BADGE: Record<string, string> = {
  new: "bg-amber-100 text-amber-700 border-amber-200",
  reviewed: "bg-blue-100 text-blue-700 border-blue-200",
  closed: "bg-muted text-muted-foreground border-border",
};

const INITIAL_HISTORY: FeedbackEntry[] = [
  {
    id: "fb-s1",
    type: "General",
    rating: 4,
    subject: "Good buyer base",
    message:
      "Would love better analytics on product views. Overall a great marketplace.",
    date: "2026-03-28",
    status: "reviewed",
  },
  {
    id: "fb-s2",
    type: "Suggestion",
    rating: 3,
    subject: "Commission concerns",
    message:
      "Commission structure for large orders feels high. Need negotiation options.",
    date: "2026-03-15",
    status: "new",
  },
  {
    id: "fb-s3",
    type: "General",
    rating: 5,
    subject: "Mobile app request",
    message:
      "Analytics dashboard is useful. Mobile app would be a great addition.",
    date: "2026-02-20",
    status: "closed",
  },
];

export function SupplierFeedbackPage() {
  const [rating, setRating] = useState(0);
  const [type, setType] = useState<FeedbackType>("General");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<FeedbackEntry[]>(INITIAL_HISTORY);

  function handleSubmit() {
    if (!rating) {
      toast.error("Please select a rating");
      return;
    }
    if (!subject.trim()) {
      toast.error("Subject is required");
      return;
    }
    if (!message.trim()) {
      toast.error("Message is required");
      return;
    }

    const newEntry: FeedbackEntry = {
      id: `fb-${Date.now()}`,
      type,
      rating,
      subject,
      message,
      date: new Date().toISOString().split("T")[0],
      status: "new",
    };
    setHistory((prev) => [newEntry, ...prev]);
    toast.success("Thank you! Your feedback has been submitted.");
    setRating(0);
    setSubject("");
    setMessage("");
    setType("General");
  }

  const supplierPlatformFeedback = mockFeedback
    .filter((f) => f.userType === "supplier")
    .slice(0, 3);

  return (
    <PortalLayout sidebarItems={SUPPLIER_NAV} portalName="Supplier Portal">
      <PageHeader
        title="Feedback"
        description="Share your experience to help us improve the platform"
        breadcrumb="Supplier Portal"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Submit feedback form */}
        <div className="rounded-xl border bg-card shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-9 rounded-lg bg-[#059669]/10 flex items-center justify-center">
              <MessageSquarePlus className="size-5 text-[#059669]" />
            </div>
            <h3 className="font-semibold text-foreground">
              Submit Platform Feedback
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Feedback Type
              </Label>
              <Select
                value={type}
                onValueChange={(v) => setType(v as FeedbackType)}
              >
                <SelectTrigger data-ocid="feedback-type-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FEEDBACK_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium mb-2 block">Rating *</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    data-ocid={`star-${star}`}
                    className="transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] rounded"
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                  >
                    <Star
                      className={`size-8 ${star <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Subject *
              </Label>
              <Input
                placeholder="Brief title for your feedback"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                data-ocid="feedback-subject"
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Message *
              </Label>
              <Textarea
                placeholder="Share your experience — buyer quality, platform features, RFQ handling, support..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                data-ocid="feedback-message"
              />
            </div>
            <Button
              className="w-full bg-[#059669] hover:bg-[#047857] text-white"
              onClick={handleSubmit}
              data-ocid="submit-feedback-btn"
            >
              <Send className="size-4 mr-2" />
              Submit Feedback
            </Button>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Previous feedback list */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Your Feedback History
            </h3>
            <div className="space-y-3">
              {history.map((fb) => (
                <div
                  key={fb.id}
                  className="rounded-lg border bg-card p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {fb.subject}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {fb.type} · {fb.date}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium border whitespace-nowrap shrink-0 ${STATUS_BADGE[fb.status]}`}
                    >
                      {fb.status}
                    </span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`size-3.5 ${star <= fb.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{fb.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community feedback preview */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Recent Supplier Reviews
            </h3>
            <div className="space-y-3">
              {supplierPlatformFeedback.map((fb) => (
                <div key={fb.id} className="rounded-lg border bg-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`size-3.5 ${star <= fb.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${STATUS_BADGE[fb.status]}`}
                    >
                      {fb.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {fb.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {new Date(fb.createdAt * 1000).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
