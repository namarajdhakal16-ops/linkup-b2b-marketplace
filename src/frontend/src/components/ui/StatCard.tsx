import { cn } from "@/lib/utils";
import type React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  className?: string;
  accent?: "blue" | "green" | "amber" | "purple";
}

const accentMap = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
};

export function StatCard({
  label,
  value,
  icon,
  trend,
  trendLabel,
  className,
  accent = "blue",
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-5 shadow-sm flex flex-col gap-3",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {icon && (
          <div
            className={cn("rounded-md p-2 border text-sm", accentMap[accent])}
          >
            {icon}
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-foreground font-display leading-none">
        {value}
      </p>
      {trend !== undefined && (
        <p
          className={cn(
            "text-xs font-medium flex items-center gap-1",
            trend >= 0 ? "text-emerald-600" : "text-red-500",
          )}
        >
          <span>
            {trend >= 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </span>
          {trendLabel && (
            <span className="text-muted-foreground font-normal">
              {trendLabel}
            </span>
          )}
        </p>
      )}
    </div>
  );
}
