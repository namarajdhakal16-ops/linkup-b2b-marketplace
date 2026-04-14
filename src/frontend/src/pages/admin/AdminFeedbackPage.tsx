import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockFeedback } from "@/data/mockData";
import type { Feedback } from "@/types";
import { Eye, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ADMIN_NAV } from "./AdminDashboardPage";

type FeedbackStatus = Feedback["status"];

const statusBadge: Record<FeedbackStatus, string> = {
  new: "bg-blue-100 text-blue-700",
  reviewed: "bg-amber-100 text-amber-700",
  closed: "bg-emerald-100 text-emerald-700",
};

const userTypeBadge: Record<string, string> = {
  buyer: "bg-blue-100 text-blue-700",
  supplier: "bg-emerald-100 text-emerald-700",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`size-3 ${s <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
        />
      ))}
    </span>
  );
}

const escalatedIds = new Set([304, 309]);
const PAGE_SIZE = 10;

export function AdminFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(mockFeedback);
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [viewFeedback, setViewFeedback] = useState<Feedback | null>(null);

  const filtered = useMemo(() => {
    return feedbacks.filter((f) => {
      const matchType = typeFilter === "all" || f.userType === typeFilter;
      const matchStatus = statusFilter === "all" || f.status === statusFilter;
      return matchType && matchStatus;
    });
  }, [feedbacks, typeFilter, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleMarkReviewed(id: number) {
    setFeedbacks((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, status: "reviewed" as FeedbackStatus } : f,
      ),
    );
    toast.success("Feedback marked as reviewed");
  }

  function handleMarkClosed(id: number) {
    setFeedbacks((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, status: "closed" as FeedbackStatus } : f,
      ),
    );
    toast.success("Feedback marked as closed");
  }

  return (
    <PortalLayout sidebarItems={ADMIN_NAV} portalName="Admin Control">
      <PageHeader
        title="Feedback Management"
        description="Review and moderate user feedback and suggestions"
        breadcrumb="Administration"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4" data-ocid="feedback-filters">
        <Select
          value={typeFilter}
          onValueChange={(v) => {
            setTypeFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-44" data-ocid="feedback-type-filter">
            <SelectValue placeholder="User type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="buyer">Buyer</SelectItem>
            <SelectItem value="supplier">Supplier</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={statusFilter}
          onValueChange={(v) => {
            setStatusFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-44" data-ocid="feedback-status-filter">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        <div className="ml-auto flex items-center text-sm text-muted-foreground">
          {filtered.length} entries
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border overflow-auto bg-card shadow-sm mb-3">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b">
              <th className="px-4 py-3 text-left font-semibold text-foreground w-10">
                #
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                User
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Type
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Rating
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Message Preview
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Date
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-10 text-center text-muted-foreground"
                >
                  No feedback found.
                </td>
              </tr>
            ) : (
              paged.map((fb, idx) => (
                <tr
                  key={fb.id}
                  className={`border-b last:border-0 hover:bg-muted/30 transition-colors ${escalatedIds.has(fb.id) ? "bg-red-50/30" : ""}`}
                  data-ocid={`feedback-row-${fb.id}`}
                >
                  <td className="px-4 py-3 text-muted-foreground">
                    {(page - 1) * PAGE_SIZE + idx + 1}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <p className="font-medium text-foreground">{fb.userId}</p>
                    {escalatedIds.has(fb.id) && (
                      <span className="text-red-600 text-[10px] font-semibold">
                        ⚠ Escalated
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      className={`text-xs ${userTypeBadge[fb.userType] ?? "bg-muted text-foreground"}`}
                    >
                      {fb.userType}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <StarRating rating={fb.rating} />
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground max-w-64">
                    <p className="line-clamp-2">{fb.message}</p>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className={`text-xs ${statusBadge[fb.status]}`}>
                      {fb.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {new Date(fb.createdAt * 1000).toLocaleDateString("en-IN")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 flex-wrap">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => setViewFeedback(fb)}
                        data-ocid={`view-feedback-${fb.id}`}
                      >
                        <Eye className="size-3 mr-1" /> View
                      </Button>
                      {fb.status === "new" && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs"
                          onClick={() => handleMarkReviewed(fb.id)}
                          data-ocid={`mark-reviewed-${fb.id}`}
                        >
                          Reviewed
                        </Button>
                      )}
                      {fb.status !== "closed" && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                          onClick={() => handleMarkClosed(fb.id)}
                          data-ocid={`mark-closed-${fb.id}`}
                        >
                          Close
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing {(page - 1) * PAGE_SIZE + 1}–
            {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
          </span>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* View Full Message Dialog */}
      <Dialog
        open={!!viewFeedback}
        onOpenChange={(o) => {
          if (!o) setViewFeedback(null);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Feedback from {viewFeedback?.userId}</DialogTitle>
          </DialogHeader>
          {viewFeedback && (
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Badge
                  className={`text-xs ${userTypeBadge[viewFeedback.userType] ?? ""}`}
                >
                  {viewFeedback.userType}
                </Badge>
                <StarRating rating={viewFeedback.rating} />
                <Badge
                  className={`text-xs ${statusBadge[viewFeedback.status]}`}
                >
                  {viewFeedback.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Submitted{" "}
                {new Date(viewFeedback.createdAt * 1000).toLocaleString(
                  "en-IN",
                )}
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm leading-relaxed">
                  {viewFeedback.message}
                </p>
              </div>
              {escalatedIds.has(viewFeedback.id) && (
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <p className="text-xs text-red-700 font-semibold">
                    ⚠ Escalation Note
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    This feedback has been flagged for human review due to a
                    critical complaint requiring immediate attention.
                  </p>
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setViewFeedback(null)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PortalLayout>
  );
}
