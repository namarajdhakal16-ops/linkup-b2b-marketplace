import { Sidebar } from "@/components/ui/NavSidebar";
import { Topbar } from "@/components/ui/NavTopbar";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store";
import type { NavItem } from "@/types";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useNavigate } from "@tanstack/react-router";
import { Factory, LogOut } from "lucide-react";
import type React from "react";

interface PortalLayoutProps {
  children: React.ReactNode;
  sidebarItems: NavItem[];
  portalName: string;
  className?: string;
}

export function PortalLayout({
  children,
  sidebarItems,
  portalName,
  className,
}: PortalLayoutProps) {
  const { logout } = useAuthStore();
  const { clear } = useInternetIdentity();
  const navigate = useNavigate();

  function handleLogout() {
    clear();
    logout();
    navigate({ to: "/login" });
  }

  const currentYear = new Date().getFullYear();

  const Logo = (
    <div className="flex items-center gap-2.5">
      <div className="size-7 rounded bg-[#1e40af] flex items-center justify-center shrink-0">
        <Factory className="size-4 text-white" />
      </div>
      <div>
        <p className="font-display font-bold text-white text-sm leading-none">
          LinkUp
        </p>
        <p className="text-slate-400 text-[10px] leading-none mt-0.5">
          {portalName}
        </p>
      </div>
    </div>
  );

  const SidebarFooter = (
    <button
      type="button"
      onClick={handleLogout}
      className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-md text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150"
      data-ocid="sidebar-logout-btn"
    >
      <LogOut className="size-4 shrink-0" />
      <span>Sign out</span>
    </button>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar items={sidebarItems} logo={Logo} footer={SidebarFooter} />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Topbar title={portalName} className="lg:pl-6" />

        <main className={cn("flex-1 overflow-y-auto", className)}>
          <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8">
            {children}
          </div>
          <footer className="border-t border-border bg-muted/40 px-6 py-3 mt-auto">
            <p className="text-xs text-muted-foreground text-center">
              © {currentYear}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                caffeine.ai
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
