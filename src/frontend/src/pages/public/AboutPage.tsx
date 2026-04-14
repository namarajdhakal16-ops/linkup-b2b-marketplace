import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Handshake,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const STATS = [
  { label: "Founded", value: "2020" },
  { label: "Buyers Registered", value: "1,247+" },
  { label: "Verified Suppliers", value: "486+" },
  { label: "Transactions Value", value: "₹28.47 Cr+" },
];

const TEAM = [
  {
    name: "Arjun Mehta",
    role: "Co-Founder & CEO",
    initials: "AM",
    color: "bg-[#1e40af] text-white",
  },
  {
    name: "Priya Nair",
    role: "Co-Founder & CTO",
    initials: "PN",
    color: "bg-[#059669] text-white",
  },
  {
    name: "Rakesh Verma",
    role: "VP Business Development",
    initials: "RV",
    color: "bg-purple-600 text-white",
  },
  {
    name: "Sunita Rao",
    role: "Head of Product",
    initials: "SR",
    color: "bg-amber-600 text-white",
  },
  {
    name: "Deepak Sharma",
    role: "Head of Engineering",
    initials: "DS",
    color: "bg-cyan-700 text-white",
  },
  {
    name: "Kavita Joshi",
    role: "Director, Supplier Relations",
    initials: "KJ",
    color: "bg-rose-600 text-white",
  },
];

const VALUES = [
  {
    icon: Shield,
    title: "Transparency",
    desc: "Every fee, every transaction, every supplier rating — fully visible. No hidden charges, ever.",
    color: "bg-[#1e40af]/10 text-[#1e40af]",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "AI-powered tools, real-time analytics, and smart RFQ matching to keep your procurement ahead of the curve.",
    color: "bg-[#059669]/10 text-[#059669]",
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "We succeed only when our buyers and suppliers succeed. Long-term relationships over short-term gains.",
    color: "bg-purple-100 text-purple-700",
  },
];

const MISSION_POINTS = [
  "No hidden fees or surprise charges",
  "Verified buyers and suppliers only",
  "Dedicated support for every transaction",
  "Real-time market pricing intelligence",
  "Pan-India reach across 28 states",
  "Transparent tier-based fee structure",
];

const MILESTONES = [
  {
    year: "2020",
    event:
      "LinkUp founded in Mumbai to address fragmented industrial procurement.",
  },
  {
    year: "2021",
    event:
      "First 100 verified suppliers onboarded. ₹10 Cr+ in transactions facilitated.",
  },
  {
    year: "2022",
    event:
      "Launched buyer tier system and RFQ management platform. 500+ buyers registered.",
  },
  {
    year: "2023",
    event:
      "Expanded to 28 states. Reached ₹100 Cr+ cumulative transaction value.",
  },
  {
    year: "2024",
    event:
      "AI-powered fee calculator and supplier risk assessment tools launched.",
  },
  {
    year: "2026",
    event:
      "Platform processes ₹284 Cr+ in transactions. 1,200+ active members.",
  },
];

export function AboutPage() {
  return (
    <PublicLayout>
      {/* ─── Hero ─── */}
      <section
        className="text-white py-16 lg:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Badge className="mb-4 bg-white/10 text-blue-300 border-white/20 text-xs px-3 py-1">
            Our Story
          </Badge>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            About LinkUp
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Born from a simple frustration — industrial procurement in India was
            too manual, too fragmented, and too unreliable. We set out to fix
            that by building a trusted, transparent marketplace for industrial
            buyers and suppliers.
          </p>
        </div>
      </section>

      {/* ─── Mission + Stats ─── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                To create a transparent, trusted, and efficient marketplace that
                empowers every industrial business in India — from small
                workshops to large enterprises — to source and sell with
                confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MISSION_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-gradient-to-br from-[#1e40af]/8 to-[#059669]/8 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Platform Numbers
              </p>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-[#1e40af] leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Our core values guide every decision we make — from product design
              to supplier verification policies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-xl border bg-card p-7 text-center hover:shadow-md transition-shadow"
                >
                  <div
                    className={`size-12 rounded-xl ${v.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              The people building India's industrial future — one transaction at
              a time.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border bg-card p-5 text-center hover:shadow-md transition-shadow"
              >
                <div
                  className={`size-14 rounded-full ${member.color} flex items-center justify-center mx-auto mb-3 text-lg font-bold font-display`}
                >
                  {member.initials}
                </div>
                <p className="font-semibold text-foreground text-xs leading-tight mb-0.5">
                  {member.name}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-sm">
              From a Mumbai startup to India's leading industrial marketplace.
            </p>
          </div>
          <div className="relative pl-12">
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-border" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className="relative flex gap-6 items-start">
                  <div
                    className="absolute left-[-28px] size-10 rounded-full flex items-center justify-center text-xs font-bold z-10"
                    style={{
                      background: i % 2 === 0 ? "#1e40af" : "#059669",
                      color: "white",
                    }}
                  >
                    {m.year.slice(2)}
                  </div>
                  <div className="rounded-xl border bg-card px-5 py-4 flex-1">
                    <p className="text-xs font-bold text-[#1e40af] mb-1">
                      {m.year}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Platform Stats Bar ─── */}
      <section className="py-14 text-white" style={{ background: "#0f172a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: "1,247+", label: "Buyers Registered" },
              { icon: TrendingUp, value: "486+", label: "Verified Suppliers" },
              { icon: Globe, value: "28 States", label: "Pan-India Coverage" },
              {
                icon: Shield,
                value: "₹284 Cr+",
                label: "Transactions Facilitated",
              },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-6"
              >
                <Icon className="size-7 text-blue-300 mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-white mb-1">
                  {value}
                </p>
                <p className="text-slate-400 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Join the LinkUp Community
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
            Start procurement smarter with India's most trusted industrial
            marketplace. Tier 1 access is completely free.
          </p>
          <Link to="/buyer/dashboard">
            <Button
              type="button"
              className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-11 px-8"
              data-ocid="about-cta-btn"
            >
              Get Started Free
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
