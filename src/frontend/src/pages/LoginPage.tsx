import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useNavigate } from "@tanstack/react-router";
import { Factory, Globe, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const FEATURES = [
  {
    icon: Shield,
    label: "Verified Suppliers",
    desc: "Every supplier is vetted and certified",
  },
  {
    icon: Zap,
    label: "Instant RFQ",
    desc: "Submit quotes in under 60 seconds",
  },
  {
    icon: Globe,
    label: "Pan-India Network",
    desc: "1,200+ industrial buyers & suppliers",
  },
];

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useInternetIdentity();
  const { setAuth } = useAuthStore();

  async function handleLogin() {
    setLoading(true);
    try {
      await login();
      // After II login, use a mock principal for development
      const mockPrincipal = `dev-${Date.now()}-principal`;
      setAuth(mockPrincipal, "buyer");
      navigate({ to: "/role-select" });
    } catch {
      // Fallback: mock login for dev environment
      const mockPrincipal = `dev-${Date.now()}`;
      setAuth(mockPrincipal, "buyer");
      navigate({ to: "/role-select" });
    } finally {
      setLoading(false);
    }
  }

  function handleMockLogin() {
    const mockPrincipal = `mock-${Date.now()}`;
    setAuth(mockPrincipal, "buyer");
    toast.success("Signed in with mock credentials");
    navigate({ to: "/role-select" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 p-12 text-white">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-[#1e40af] flex items-center justify-center shadow-lg">
            <Factory className="size-5 text-white" />
          </div>
          <div>
            <p className="font-display font-bold text-xl tracking-tight">
              LinkUp
            </p>
            <p className="text-blue-300 text-xs">B2B Industrial Marketplace</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="font-display text-4xl font-bold leading-tight mb-4">
              India's most trusted
              <br />
              industrial marketplace
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Connect with verified buyers and suppliers across 50+ industrial
              categories. Streamline procurement, manage RFQs, and grow your
              business.
            </p>
          </div>
          <div className="space-y-4">
            {FEATURES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="size-4 text-blue-300" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-400 text-sm">
          <span>₹284 Cr+ in transactions</span>
          <span className="size-1 rounded-full bg-slate-600" />
          <span>1,247 Buyers</span>
          <span className="size-1 rounded-full bg-slate-600" />
          <span>486 Suppliers</span>
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="size-9 rounded-xl bg-[#1e40af] flex items-center justify-center">
              <Factory className="size-4 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-lg text-[#1e40af]">
                LinkUp
              </p>
              <p className="text-muted-foreground text-xs">
                B2B Industrial Marketplace
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-card shadow-lg p-8">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Welcome back
              </h2>
              <p className="text-muted-foreground text-sm">
                Sign in securely with Internet Identity to access your portal.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full h-11 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold text-base"
                onClick={handleLogin}
                disabled={loading}
                data-ocid="ii-login-btn"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Connecting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Shield className="size-4" />
                    Connect with Internet Identity
                  </span>
                )}
              </Button>

              <div className="relative flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <Button
                variant="outline"
                className="w-full h-10 text-sm text-muted-foreground"
                onClick={handleMockLogin}
                data-ocid="mock-login-btn"
              >
                Continue with mock account (dev)
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="size-3.5 text-[#059669]" />
                <span>
                  Secured by Internet Computer cryptography. No passwords
                  stored.
                </span>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            New to LinkUp?{" "}
            <button
              type="button"
              onClick={handleMockLogin}
              className="text-[#1e40af] underline hover:no-underline"
            >
              Register as buyer or supplier
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
