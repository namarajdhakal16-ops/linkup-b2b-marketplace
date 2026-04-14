import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store";
import type { UserRole } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Factory, Layers, ShoppingCart, Truck } from "lucide-react";
import { toast } from "sonner";

interface RoleCard {
  role: UserRole;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
  border: string;
  bg: string;
  cta: string;
  redirect: string;
}

const ROLES: RoleCard[] = [
  {
    role: "buyer",
    icon: ShoppingCart,
    title: "Buyer Portal",
    description:
      "Source industrial products, manage RFQs, and connect with verified suppliers.",
    features: [
      "Product catalog access",
      "RFQ management",
      "Supplier directory",
      "Purchase analytics",
    ],
    color: "text-[#1e40af]",
    border: "border-[#1e40af]/30 hover:border-[#1e40af]",
    bg: "bg-[#1e40af]/5 hover:bg-[#1e40af]/10",
    cta: "Enter Buyer Portal",
    redirect: "/buyer/dashboard",
  },
  {
    role: "supplier",
    icon: Truck,
    title: "Supplier Portal",
    description:
      "List products, respond to buyer RFQs, and grow your industrial sales pipeline.",
    features: [
      "Product management",
      "RFQ leads inbox",
      "Sales analytics",
      "Subscription billing",
    ],
    color: "text-[#059669]",
    border: "border-[#059669]/30 hover:border-[#059669]",
    bg: "bg-[#059669]/5 hover:bg-[#059669]/10",
    cta: "Enter Supplier Portal",
    redirect: "/supplier/dashboard",
  },
  {
    role: "both",
    icon: Layers,
    title: "Buyer & Supplier",
    description:
      "Access both portals with a unified dashboard. Multi-role pricing applies.",
    features: [
      "Full buyer access",
      "Full supplier access",
      "Unified dashboard",
      "40% multi-role discount",
    ],
    color: "text-purple-700",
    border: "border-purple-300 hover:border-purple-500",
    bg: "bg-purple-50 hover:bg-purple-100",
    cta: "Enter Combined Portal",
    redirect: "/buyer/dashboard",
  },
];

export function RoleSelectPage() {
  const navigate = useNavigate();
  const { setAuth, principal } = useAuthStore();

  function handleSelect(role: RoleCard) {
    setAuth(principal ?? `principal-${Date.now()}`, role.role);
    toast.success(`Welcome! Entering ${role.title}.`);
    navigate({ to: role.redirect });
  }

  function handleAdmin() {
    setAuth(principal ?? "admin-principal", "admin");
    toast.success("Entering Admin Portal");
    navigate({ to: "/admin/dashboard" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/40 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="size-10 rounded-xl bg-[#1e40af] flex items-center justify-center">
            <Factory className="size-5 text-white" />
          </div>
          <span className="font-display font-bold text-2xl text-[#1e40af]">
            LinkUp
          </span>
        </div>

        <div className="text-center max-w-xl mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground mb-3">
            Choose your role
          </h1>
          <p className="text-muted-foreground text-base">
            Select how you want to access the LinkUp marketplace. You can change
            this later from your profile settings.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
          {ROLES.map((role) => {
            const Icon = role.icon;
            return (
              <button
                type="button"
                key={role.role}
                onClick={() => handleSelect(role)}
                data-ocid={`role-select-${role.role}`}
                className={cn(
                  "rounded-2xl border-2 p-6 text-left transition-all duration-200 cursor-pointer",
                  role.border,
                  role.bg,
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
                )}
              >
                <div
                  className={cn(
                    "size-12 rounded-xl border flex items-center justify-center mb-4",
                    role.color,
                    role.border.split(" ")[0],
                  )}
                >
                  <Icon className="size-6" />
                </div>
                <h3
                  className={cn(
                    "font-display font-bold text-lg mb-1",
                    role.color,
                  )}
                >
                  {role.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {role.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {role.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full shrink-0",
                          role.color.replace("text-", "bg-"),
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  className={cn(
                    "flex items-center gap-2 font-semibold text-sm",
                    role.color,
                  )}
                >
                  {role.cta}
                  <ArrowRight className="size-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Admin link */}
        <div className="mt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleAdmin}
            className="text-xs text-muted-foreground hover:text-foreground"
            data-ocid="admin-access-btn"
          >
            Continue as Admin (internal)
          </Button>
        </div>
      </div>
    </div>
  );
}
