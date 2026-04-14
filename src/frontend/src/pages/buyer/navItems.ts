import type { NavItem } from "@/types";
import {
  BarChart2,
  Building2,
  Calculator,
  FileText,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  Package,
} from "lucide-react";

export const buyerNavItems: NavItem[] = [
  { label: "Dashboard", href: "/buyer/dashboard", icon: LayoutDashboard },
  { label: "Product Catalog", href: "/buyer/catalog", icon: Package },
  { label: "RFQ Management", href: "/buyer/rfq", icon: FileText, badge: 5 },
  { label: "Supplier Directory", href: "/buyer/suppliers", icon: Building2 },
  { label: "Pricing Calculator", href: "/buyer/pricing", icon: Calculator },
  { label: "Analytics", href: "/buyer/analytics", icon: BarChart2 },
  { label: "Feedback", href: "/buyer/feedback", icon: MessageSquare },
  { label: "Support", href: "/buyer/support", icon: HelpCircle },
];
