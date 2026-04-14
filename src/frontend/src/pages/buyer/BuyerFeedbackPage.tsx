import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/badge";
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
import { mockFeedback } from "@/data/mockData";
import { Send, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { buyerNavItems } from "./navItems";

const FEEDBACK_TYPES = [
  "General",
  "Supplier Rating",
  "Platform Suggestion",
  "Complaint",
];

const STATUS_STYLES: Record<string, string> = {
  new: "bg-blue-100 text-blue-700 border-blue-200",
  reviewed: "bg-amber-100 text-amber-700 border-amber-200",
  closed: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

function StarPicker({
  value,
  onChange,
}: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
          data-ocid={`star-${n}`}
        >
          <Star
            className={`size-7 transition-colors ${n <= (hovered || value) ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="ml-2 text-sm text-muted-foreground">
          {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][value]}
        </span>
      )}
    </div>
  );
}

const buyerFeedback = mockFeedback.filter((f) => f.userType === "buyer");

export function BuyerFeedbackPage() {
  const [feedbackType, setFeedbackType] = useState("");
  const [rating, setRating] = useState(0);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!feedbackType || rating === 0 || !subject || !message) {
      toast.error("Please complete all fields before submitting.");
      return;
    }
    toast.success(
      "Thank you! Your feedback has been submitted and will be reviewed within 48 hours.",
    );
    setFeedbackType("");
    setRating(0);
    setSubject("");
    setMessage("");
  }

  return (
    <PortalLayout sidebarItems={buyerNavItems} portalName="Buyer Portal">
      <PageHeader
        title="Feedback"
        description="Share your experience and help us improve the platform."
        breadcrumb="Buyer Portal"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Submit Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="fb-type">Feedback Type *</Label>
              <Select value={feedbackType} onValueChange={setFeedbackType}>
                <SelectTrigger id="fb-type" data-ocid="feedback-type-select">
                  <SelectValue placeholder="Select type..." />
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

            <div className="space-y-1.5">
              <Label>Overall Rating *</Label>
              <StarPicker value={rating} onChange={setRating} />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="fb-subject">Subject *</Label>
              <Input
                id="fb-subject"
                placeholder="Brief summary of your feedback..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                data-ocid="feedback-subject"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="fb-message">Message *</Label>
              <Textarea
                id="fb-message"
                placeholder="Describe your experience in detail..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                data-ocid="feedback-message"
              />
            </div>

            <Button
              type="button"
              className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
              onClick={handleSubmit}
              data-ocid="feedback-submit"
            >
              <Send className="size-4 mr-2" />
              Submit Feedback
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Previous Submissions</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/40">
                    <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">
                      Date
                    </th>
                    <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">
                      Type
                    </th>
                    <th className="text-center px-4 py-2.5 font-medium text-muted-foreground">
                      Rating
                    </th>
                    <th className="text-center px-4 py-2.5 font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-left px-4 py-2.5 font-medium text-muted-foreground hidden md:table-cell">
                      Preview
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {buyerFeedback.map((fb) => (
                    <tr
                      key={fb.id}
                      className="border-b last:border-0 hover:bg-muted/20"
                    >
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {new Date(fb.createdAt * 1000).toLocaleDateString(
                          "en-IN",
                          { day: "2-digit", month: "short", year: "2-digit" },
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className="text-xs">
                          General
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex items-center justify-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <Star
                              key={n}
                              className={`size-3 ${n <= fb.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[fb.status] ?? ""}`}
                        >
                          {fb.status.charAt(0).toUpperCase() +
                            fb.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden md:table-cell max-w-[180px] truncate">
                        {fb.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
}
