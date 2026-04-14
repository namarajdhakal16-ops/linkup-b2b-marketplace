import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  MapPin,
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const OPEN_ROLES = [
  {
    id: "senior-fse",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Mumbai (Hybrid)",
    type: "Full-time",
    level: "Senior",
    levelColor: "text-[#1e40af] bg-[#1e40af]/10",
  },
  {
    id: "pm-buyer",
    title: "Product Manager — Buyer Experience",
    department: "Product",
    location: "Remote (India)",
    type: "Full-time",
    level: "Mid",
    levelColor: "text-[#059669] bg-[#059669]/10",
  },
  {
    id: "supplier-rm",
    title: "Industrial Supplier Relationships Manager",
    department: "Business Development",
    location: "Mumbai / Pune",
    type: "Full-time",
    level: "Senior",
    levelColor: "text-[#1e40af] bg-[#1e40af]/10",
  },
  {
    id: "data-analyst",
    title: "Data Analyst — Platform Metrics",
    department: "Analytics",
    location: "Remote (India)",
    type: "Full-time",
    level: "Mid",
    levelColor: "text-[#059669] bg-[#059669]/10",
  },
  {
    id: "customer-success",
    title: "Customer Success Specialist",
    department: "Customer Support",
    location: "Mumbai",
    type: "Full-time",
    level: "Junior",
    levelColor: "text-amber-700 bg-amber-100",
  },
  {
    id: "ux-designer",
    title: "UI/UX Designer — B2B Products",
    department: "Design",
    location: "Remote (India)",
    type: "Full-time",
    level: "Mid",
    levelColor: "text-purple-700 bg-purple-100",
  },
];

const BENEFITS = [
  {
    icon: Award,
    title: "Competitive Compensation",
    desc: "Market-beating salary with ESOPs. We believe in rewarding ownership.",
    color: "text-[#1e40af] bg-[#1e40af]/10",
  },
  {
    icon: Heart,
    title: "Health & Wellbeing",
    desc: "Comprehensive health insurance covering you and your immediate family.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Globe,
    title: "Flexible Work",
    desc: "Hybrid and remote options. Work where you're most productive.",
    color: "text-[#059669] bg-[#059669]/10",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    desc: "₹50,000 annual learning budget for courses, conferences, and books.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Rocket,
    title: "Real Impact",
    desc: "Work on products used by 1,200+ industrial companies across India.",
    color: "text-purple-700 bg-purple-100",
  },
  {
    icon: Zap,
    title: "Career Growth",
    desc: "Transparent career ladders. Promotions based on merit, not tenure.",
    color: "text-cyan-700 bg-cyan-100",
  },
];

const PERKS = [
  "Competitive salary + ESOPs",
  "Flexible work hours & remote options",
  "Health insurance for family",
  "Annual learning budget ₹50,000",
  "Work on products used by 1,200+ companies",
  "Transparent career growth paths",
];

export function CareersPage() {
  return (
    <PublicLayout>
      {/* ─── Hero ─── */}
      <section
        className="text-white py-18 lg:py-24 relative overflow-hidden"
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
            Join Our Team
          </Badge>
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4 leading-[1.05]">
            Join the LinkUp Team
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            Help digitize how India buys and sells industrial products. We're
            growing fast and need passionate people who care about making a real
            impact on Indian industry.
          </p>
          <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
            {[
              { value: "35+", label: "Team Members" },
              { value: "4.6/5", label: "Glassdoor Rating" },
              { value: "100%", label: "Health Coverage" },
              { value: "₹50k", label: "Learning Budget" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-white">
                  {s.value}
                </p>
                <p className="text-slate-400 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Culture / Benefits ─── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                We're a lean, fast-growing team building technology that powers
                ₹284 Cr+ in industrial transactions. Every team member has a
                direct impact on what we ship and how we grow.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERKS.map((perk) => (
                  <div key={perk} className="flex items-start gap-2.5">
                    <CheckCircle className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{perk}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "35+",
                  label: "Team Members",
                  color: "text-[#1e40af]",
                },
                {
                  value: "4.6/5",
                  label: "Glassdoor Rating",
                  color: "text-[#059669]",
                },
                {
                  value: "3 yrs",
                  label: "Avg Tenure",
                  color: "text-purple-600",
                },
                {
                  value: "100%",
                  label: "Remote Friendly",
                  color: "text-amber-600",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border bg-card p-6 text-center hover:shadow-md transition-shadow"
                >
                  <p
                    className={`font-display text-3xl font-bold ${stat.color}`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`size-11 rounded-xl ${b.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Open Positions ─── */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Open Positions
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                {OPEN_ROLES.length} roles currently open — across engineering,
                product, and business
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.id}
                className="rounded-xl border bg-card shadow-sm p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition-shadow"
                data-ocid={`job-listing-${role.id}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <Badge
                      className={`text-[10px] px-2 py-0.5 border-0 ${role.levelColor}`}
                    >
                      {role.level}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="size-3 shrink-0" />
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3 shrink-0" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3 shrink-0" />
                      {role.type}
                    </span>
                  </div>
                </div>
                <Button
                  type="button"
                  className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white shrink-0 text-sm"
                  onClick={() =>
                    toast.info(`Opening application for ${role.title}`)
                  }
                  data-ocid={`apply-${role.id}`}
                >
                  Apply Now
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── No Role Match ─── */}
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="size-14 rounded-2xl bg-[#1e40af]/10 flex items-center justify-center mx-auto mb-4">
            <Users className="size-7 text-[#1e40af]" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            Don't See Your Role?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
            We're always looking for talented people. Send us your profile and
            we'll reach out when the right opportunity opens up.
          </p>
          <Link to="/contact">
            <Button
              type="button"
              variant="outline"
              className="text-[#1e40af] border-[#1e40af]/30 hover:bg-[#1e40af]/5"
              data-ocid="general-application-btn"
            >
              Send General Application
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
