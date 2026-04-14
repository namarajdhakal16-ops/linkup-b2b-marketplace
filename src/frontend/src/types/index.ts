export type UserRole = "buyer" | "supplier" | "both" | "admin";
export type BuyerTier = "tier1" | "tier2" | "tier3" | "tier4";
export type SupplierSize = "small" | "medium" | "large";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  buyerTier?: BuyerTier;
  supplierSize?: SupplierSize;
  verified: boolean;
  createdAt: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  supplierId: string;
  imageUrl?: string;
  specifications: string;
  certifications: string;
  status: "active" | "inactive";
  createdAt: number;
}

export interface RFQ {
  id: number;
  buyerId: string;
  supplierId: string;
  productId: number;
  quantity: number;
  requiredDate: string;
  specialRequirements: string;
  status: "pending" | "quoted" | "accepted" | "rejected";
  quoteAmount?: number;
  createdAt: number;
}

export interface Transaction {
  id: number;
  buyerId: string;
  supplierId: string;
  productId: number;
  amount: number;
  paymentStatus: "pending" | "completed" | "failed";
  date: number;
}

export interface Feedback {
  id: number;
  userId: string;
  userType: string;
  rating: number;
  message: string;
  status: "new" | "reviewed" | "closed";
  createdAt: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}
