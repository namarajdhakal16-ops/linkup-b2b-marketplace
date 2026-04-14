import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export type Result_2 = {
    __kind__: "ok";
    ok: UserProfile;
} | {
    __kind__: "err";
    err: string;
};
export interface Feedback {
    id: bigint;
    status: FeedbackStatus;
    userType: string;
    userId: UserId;
    createdAt: Timestamp;
    message: string;
    rating: bigint;
}
export type Result_1 = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export type UserId = Principal;
export type Result = {
    __kind__: "ok";
    ok: null;
} | {
    __kind__: "err";
    err: string;
};
export interface RFQ {
    id: bigint;
    status: RFQStatus;
    createdAt: Timestamp;
    productId: bigint;
    requiredDate: string;
    quoteAmount?: number;
    buyerId: UserId;
    quantity: bigint;
    specialRequirements: string;
    supplierId: UserId;
}
export interface UserProfile {
    id: UserId;
    verified: boolean;
    supplierSize?: SupplierSize;
    name: string;
    createdAt: Timestamp;
    role: UserRole;
    email: string;
    buyerTier?: BuyerTier;
}
export interface Product {
    id: bigint;
    status: ProductStatus;
    specifications: string;
    name: string;
    createdAt: Timestamp;
    description: string;
    stock: bigint;
    imageUrl?: string;
    category: string;
    certifications: string;
    price: number;
    supplierId: UserId;
}
export enum BuyerTier {
    tier1 = "tier1",
    tier2 = "tier2",
    tier3 = "tier3",
    tier4 = "tier4"
}
export enum FeedbackStatus {
    new_ = "new",
    closed = "closed",
    reviewed = "reviewed"
}
export enum ProductStatus {
    active = "active",
    inactive = "inactive"
}
export enum RFQStatus {
    pending = "pending",
    rejected = "rejected",
    accepted = "accepted",
    quoted = "quoted"
}
export enum SupplierSize {
    large = "large",
    small = "small",
    medium = "medium"
}
export enum UserRole {
    admin = "admin",
    supplier = "supplier",
    both = "both",
    buyer = "buyer"
}
export interface backendInterface {
    addProduct(name: string, category: string, price: number, stock: bigint, description: string, imageUrl: string | null, specifications: string, certifications: string): Promise<Result_1>;
    calculateBuyerFee(tier: BuyerTier, amount: number): Promise<number>;
    calculateMultiRoleFee(buyerTier: BuyerTier, supplierSize: SupplierSize, buyerAmount: number, supplierSales: number): Promise<number>;
    calculateSupplierFee(size: SupplierSize, salesVolume: number): Promise<number>;
    deleteProduct(id: bigint): Promise<Result>;
    getAllFeedback(): Promise<Array<Feedback>>;
    getAllRFQs(): Promise<Array<RFQ>>;
    getAllUsers(): Promise<Array<UserProfile>>;
    getIncomingRFQs(): Promise<Array<RFQ>>;
    getMyProducts(): Promise<Array<Product>>;
    getMyProfile(): Promise<UserProfile | null>;
    getMyRFQs(): Promise<Array<RFQ>>;
    getProducts(): Promise<Array<Product>>;
    registerUser(name: string, email: string, role: UserRole, buyerTier: BuyerTier | null, supplierSize: SupplierSize | null): Promise<Result_2>;
    respondToRFQ(rfqId: bigint, quoteAmount: number): Promise<Result>;
    submitFeedback(userType: string, rating: bigint, message: string): Promise<Result_1>;
    submitRFQ(supplierId: Principal, productId: bigint, quantity: bigint, requiredDate: string, specialRequirements: string): Promise<Result_1>;
    updateFeedbackStatus(id: bigint, status: string): Promise<Result>;
    updateProduct(id: bigint, price: number, stock: bigint, status: string): Promise<Result>;
    updateRFQStatus(rfqId: bigint, status: string): Promise<Result>;
    updateUserRole(userId: Principal, role: UserRole): Promise<Result>;
    verifyUser(userId: Principal): Promise<Result>;
}
