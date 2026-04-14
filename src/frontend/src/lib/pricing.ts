import type { BuyerTier, SupplierSize } from "@/types";

/**
 * Calculate buyer fee based on tier and purchase amount (in INR).
 */
export function calculateBuyerFee(tier: BuyerTier, amount: number): number {
  switch (tier) {
    case "tier1":
      return 0;
    case "tier2":
      if (amount <= 5000) return 1000;
      if (amount <= 2500000) return 1000 + amount * 0.0001;
      return amount * 0.0001;
    case "tier3":
    case "tier4":
      if (amount <= 5000) return 2000;
      if (amount <= 2500000) return 2000 + amount * 0.0001;
      return amount * 0.0001;
    default:
      return 0;
  }
}

/**
 * Calculate supplier fee based on size and sales volume (in INR).
 */
export function calculateSupplierFee(
  size: SupplierSize,
  salesVolume: number,
): number {
  if (size === "small") return 0;

  // medium or large
  if (salesVolume === 0) return 5000;
  if (salesVolume <= 1000000) return Math.max(5000, salesVolume * 0.005);
  return salesVolume * 0.0025;
}

/**
 * Calculate multi-role fee: 60% of (buyer fee + supplier fee).
 */
export function calculateMultiRoleFee(
  buyerTier: BuyerTier,
  supplierSize: SupplierSize,
  buyerAmount: number,
  supplierSales: number,
): number {
  const buyerFee = calculateBuyerFee(buyerTier, buyerAmount);
  const supplierFee = calculateSupplierFee(supplierSize, supplierSales);
  return 0.6 * (buyerFee + supplierFee);
}

/**
 * Format number as Indian Rupee string (₹1,23,456).
 */
export function formatINR(amount: number): string {
  const rounded = Math.round(amount);
  const str = rounded.toString();
  if (str.length <= 3) return `₹${str}`;

  const lastThree = str.slice(-3);
  const remaining = str.slice(0, -3);
  const formatted = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹${formatted},${lastThree}`;
}

export const TIER_LABELS: Record<BuyerTier, string> = {
  tier1: "Tier 1 — Free",
  tier2: "Tier 2 — SME",
  tier3: "Tier 3 — Mid-size",
  tier4: "Tier 4 — Large Enterprise",
};

export const SUPPLIER_SIZE_LABELS: Record<SupplierSize, string> = {
  small: "Small / Micro",
  medium: "Medium",
  large: "Large",
};
