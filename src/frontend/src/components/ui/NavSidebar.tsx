import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import React from "react";

interface SidebarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  footer?: React.ReactNode;
}

function NavLinks({
  items,
  onClose,
}: { items: NavItem[]; onClose?: () => void }) {
  const { location } = useRouterState();
  const currentPath = location.pathname;

  return (
    <nav className="flex flex-col gap-0.5 flex-1">
      {items.map((item) => {
        const isActive =
          currentPath === item.href ||
          (item.href !== "/" && currentPath.startsWith(item.href));
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            data-ocid={`sidebar-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-150",
              isActive
                ? "bg-primary/20 text-primary border border-primary/30"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
            )}
          >
            {Icon && <Icon className="size-4 shrink-0" />}
            <span className="flex-1 min-w-0 truncate">{item.label}</span>
            {item.badge !== undefined && (
              <span className="ml-auto bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full shrink-0">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar({ items, logo, footer }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      {/* Mobile toggle button — rendered in topbar area via portal */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="bg-slate-900 text-white hover:bg-slate-800"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 w-64 bg-[#0f172a] border-slate-700"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-5 border-b border-slate-700">
                {logo}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="size-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-4">
                <NavLinks items={items} onClose={() => setMobileOpen(false)} />
              </div>
              {footer && (
                <div className="border-t border-slate-700 px-3 py-4">
                  {footer}
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-[#0f172a] border-r border-slate-700 h-screen sticky top-0">
        {logo && (
          <div className="px-4 py-5 border-b border-slate-700">{logo}</div>
        )}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <NavLinks items={items} />
        </div>
        {footer && (
          <div className="border-t border-slate-700 px-3 py-4">{footer}</div>
        )}
      </aside>
    </>
  );
}
