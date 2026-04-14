import { PortalLayout } from "@/components/layout/PortalLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockBuyers, mockSuppliers } from "@/data/mockData";
import type { UserRole } from "@/types";
import { CheckCircle, Download, Search, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ADMIN_NAV } from "./AdminDashboardPage";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  tierOrSize: string;
  verified: boolean;
  created: string;
}

const initialUsers: AdminUser[] = [
  ...mockBuyers.map((b) => ({
    id: b.id,
    name: b.contactName,
    email: `${b.contactName.toLowerCase().replace(/\s+/g, ".")}@${b.company
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .slice(0, 10)}.com`,
    role: "buyer" as UserRole,
    tierOrSize:
      b.tier === "tier4"
        ? "Tier 4 — Enterprise"
        : b.tier === "tier3"
          ? "Tier 3 — Mid-size"
          : b.tier === "tier2"
            ? "Tier 2 — SME"
            : "Tier 1 — Free",
    verified: b.verified,
    created: new Date(
      1700000000 * 1000 + b.id.charCodeAt(4) * 1e9,
    ).toLocaleDateString("en-IN"),
  })),
  ...mockSuppliers.map((s) => ({
    id: s.id,
    name: s.contactName,
    email: `${s.contactName.toLowerCase().replace(/\s+/g, ".")}@${s.company
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .slice(0, 10)}.com`,
    role: "supplier" as UserRole,
    tierOrSize:
      s.products > 50 ? "Large" : s.products > 20 ? "Medium" : "Small",
    verified: s.verified,
    created: new Date(
      1700000000 * 1000 + s.id.charCodeAt(4) * 1e9,
    ).toLocaleDateString("en-IN"),
  })),
];

const roleBadgeClass: Record<string, string> = {
  buyer: "bg-blue-100 text-blue-700",
  supplier: "bg-emerald-100 text-emerald-700",
  both: "bg-purple-100 text-purple-700",
  admin: "bg-red-100 text-red-700",
};

const PAGE_SIZE = 10;

export function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [verifiedFilter, setVerifiedFilter] = useState<string>("all");
  const [page, setPage] = useState(1);
  const [editUser, setEditUser] = useState<AdminUser | null>(null);
  const [editRole, setEditRole] = useState<UserRole>("buyer");
  const [deleteUser, setDeleteUser] = useState<AdminUser | null>(null);

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchSearch =
        !search ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchRole = roleFilter === "all" || u.role === roleFilter;
      const matchVerified =
        verifiedFilter === "all" ||
        (verifiedFilter === "yes" ? u.verified : !u.verified);
      return matchSearch && matchRole && matchVerified;
    });
  }, [users, search, roleFilter, verifiedFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleVerify(id: string) {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, verified: true } : u)),
    );
    toast.success("User verified successfully");
  }

  function handleEditRole() {
    if (!editUser) return;
    setUsers((prev) =>
      prev.map((u) => (u.id === editUser.id ? { ...u, role: editRole } : u)),
    );
    setEditUser(null);
    toast.success("User role updated");
  }

  function handleDelete() {
    if (!deleteUser) return;
    setUsers((prev) => prev.filter((u) => u.id !== deleteUser.id));
    setDeleteUser(null);
    toast.success("User deleted");
  }

  return (
    <PortalLayout sidebarItems={ADMIN_NAV} portalName="Admin Control">
      <PageHeader
        title="User Management"
        description="View, verify, and manage all platform users"
        breadcrumb="Administration"
        actions={
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => toast.info("Export initiated")}
            data-ocid="export-users-btn"
          >
            <Download className="size-4 mr-1" /> Export CSV
          </Button>
        }
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4" data-ocid="user-filters">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            data-ocid="user-search-input"
          />
        </div>
        <Select
          value={roleFilter}
          onValueChange={(v) => {
            setRoleFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40" data-ocid="role-filter">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="buyer">Buyer</SelectItem>
            <SelectItem value="supplier">Supplier</SelectItem>
            <SelectItem value="both">Both</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={verifiedFilter}
          onValueChange={(v) => {
            setVerifiedFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-44" data-ocid="verified-filter">
            <SelectValue placeholder="Verification status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="yes">Verified</SelectItem>
            <SelectItem value="no">Unverified</SelectItem>
          </SelectContent>
        </Select>
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
                Name
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Email
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Role
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Tier / Size
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Verified
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Created
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
                  No users found.
                </td>
              </tr>
            ) : (
              paged.map((user, idx) => (
                <tr
                  key={user.id}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                  data-ocid={`user-row-${user.id}`}
                >
                  <td className="px-4 py-3 text-muted-foreground">
                    {(page - 1) * PAGE_SIZE + idx + 1}
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    {user.email}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      className={`text-xs ${roleBadgeClass[user.role] ?? ""}`}
                    >
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {user.tierOrSize}
                  </td>
                  <td className="px-4 py-3">
                    {user.verified ? (
                      <CheckCircle className="size-4 text-emerald-600" />
                    ) : (
                      <XCircle className="size-4 text-red-500" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {user.created}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      {!user.verified && (
                        <Button
                          type="button"
                          size="sm"
                          className="h-7 text-xs bg-emerald-600 hover:bg-emerald-700 text-white"
                          onClick={() => handleVerify(user.id)}
                          data-ocid={`verify-user-${user.id}`}
                        >
                          Verify
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => {
                          setEditUser(user);
                          setEditRole(user.role);
                        }}
                        data-ocid={`edit-role-${user.id}`}
                      >
                        Edit Role
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs text-red-600 border-red-200 hover:bg-red-50"
                        onClick={() => setDeleteUser(user)}
                        data-ocid={`delete-user-${user.id}`}
                      >
                        Delete
                      </Button>
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

      {/* Edit Role Dialog */}
      <Dialog
        open={!!editUser}
        onOpenChange={(o) => {
          if (!o) setEditUser(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Role — {editUser?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <Label htmlFor="role-select">Assign Role</Label>
            <Select
              value={editRole}
              onValueChange={(v) => setEditRole(v as UserRole)}
            >
              <SelectTrigger id="role-select" data-ocid="edit-role-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buyer">Buyer</SelectItem>
                <SelectItem value="supplier">Supplier</SelectItem>
                <SelectItem value="both">Both</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setEditUser(null)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleEditRole}
              data-ocid="save-role-btn"
            >
              Save Role
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm */}
      <AlertDialog
        open={!!deleteUser}
        onOpenChange={(o) => {
          if (!o) setDeleteUser(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete User?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <strong>{deleteUser?.name}</strong>? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
              data-ocid="confirm-delete-user-btn"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PortalLayout>
  );
}
