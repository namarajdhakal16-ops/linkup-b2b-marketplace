import { cn } from "@/lib/utils";
import type React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
  breadcrumb?: string;
}

export function PageHeader({
  title,
  description,
  actions,
  className,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-1 pb-6 border-b mb-6", className)}>
      {breadcrumb && (
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
          {breadcrumb}
        </p>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-display">
            {title}
          </h1>
          {description && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {description}
            </p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-2 shrink-0">{actions}</div>
        )}
      </div>
    </div>
  );
}
