import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Factory, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { location } = useRouterState();
  const currentPath = location.pathname;

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="size-8 rounded-lg bg-[#1e40af] flex items-center justify-center shadow-sm">
                <Factory className="size-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-[#1e40af] tracking-tight">
                LinkUp
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground border-l border-border pl-2.5 leading-tight">
                B2B Industrial
                <br />
                Marketplace
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150",
                    currentPath === link.href
                      ? "text-[#1e40af] bg-[#1e40af]/8"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Portal buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Link to="/buyer/dashboard">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#1e40af] border-[#1e40af]/30 hover:bg-[#1e40af]/5"
                >
                  Buyer Portal
                </Button>
              </Link>
              <Link to="/supplier/dashboard">
                <Button
                  size="sm"
                  className="bg-[#059669] hover:bg-[#047857] text-white"
                >
                  Supplier Portal
                </Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium",
                  currentPath === link.href
                    ? "bg-[#1e40af]/10 text-[#1e40af]"
                    : "text-muted-foreground hover:bg-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border mt-2">
              <Link to="/buyer/dashboard" className="flex-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-[#1e40af] border-[#1e40af]/30"
                >
                  Buyer Portal
                </Button>
              </Link>
              <Link to="/supplier/dashboard" className="flex-1">
                <Button
                  size="sm"
                  className="w-full bg-[#059669] hover:bg-[#047857] text-white"
                >
                  Supplier Portal
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="size-6 rounded bg-[#1e40af] flex items-center justify-center">
                <Factory className="size-3.5 text-white" />
              </div>
              <span className="font-display font-bold text-[#1e40af]">
                LinkUp
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
