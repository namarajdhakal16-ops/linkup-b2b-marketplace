import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useNavigate } from "@tanstack/react-router";
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";
import React from "react";

interface TopbarProps {
  title?: string;
  className?: string;
}

const ROLE_LABELS: Record<string, string> = {
  buyer: "Buyer Portal",
  supplier: "Supplier Portal",
  both: "Buyer & Supplier",
  admin: "Admin Portal",
};

export function Topbar({ title, className }: TopbarProps) {
  const { userRole, principal, logout } = useAuthStore();
  const { clear } = useInternetIdentity();
  const navigate = useNavigate();

  function handleLogout() {
    clear();
    logout();
    navigate({ to: "/login" });
  }

  const shortPrincipal = principal
    ? `${principal.slice(0, 6)}...${principal.slice(-4)}`
    : "Unknown";

  return (
    <header
      className={cn(
        "bg-card border-b border-border h-14 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30 shadow-sm",
        className,
      )}
      data-ocid="topbar"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="lg:hidden w-10" /> {/* space for mobile menu toggle */}
        {title && (
          <h2 className="text-base font-semibold text-foreground truncate hidden sm:block">
            {title}
          </h2>
        )}
        {userRole && (
          <span className="hidden md:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            {ROLE_LABELS[userRole]}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
          <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 px-2"
              data-ocid="user-menu-trigger"
            >
              <div className="size-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold border border-primary/30">
                <User className="size-3.5" />
              </div>
              <span className="hidden sm:block text-sm text-muted-foreground max-w-[140px] truncate">
                {shortPrincipal}
              </span>
              <ChevronDown className="size-3.5 text-muted-foreground shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold text-foreground">
                  Principal ID
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {shortPrincipal}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="size-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-red-600 focus:text-red-600"
              onClick={handleLogout}
              data-ocid="logout-btn"
            >
              <LogOut className="size-4 mr-2" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
