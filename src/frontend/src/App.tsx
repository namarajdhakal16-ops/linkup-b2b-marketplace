import { ChatbotWidget } from "@/components/ChatbotWidget";
import { Toaster } from "@/components/ui/sonner";
import { useAuthStore } from "@/store";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// Lazy imports
const HomePage = lazy(() =>
  import("./pages/public/HomePage").then((m) => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import("./pages/public/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const ContactPage = lazy(() =>
  import("./pages/public/ContactPage").then((m) => ({
    default: m.ContactPage,
  })),
);
const CareersPage = lazy(() =>
  import("./pages/public/CareersPage").then((m) => ({
    default: m.CareersPage,
  })),
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage").then((m) => ({ default: m.LoginPage })),
);
const RoleSelectPage = lazy(() =>
  import("./pages/RoleSelectPage").then((m) => ({ default: m.RoleSelectPage })),
);

// Buyer pages
const BuyerDashboardPage = lazy(() =>
  import("./pages/buyer/BuyerDashboardPage").then((m) => ({
    default: m.BuyerDashboardPage,
  })),
);
const ProductCatalogPage = lazy(() =>
  import("./pages/buyer/ProductCatalogPage").then((m) => ({
    default: m.ProductCatalogPage,
  })),
);
const BuyerRFQPage = lazy(() =>
  import("./pages/buyer/RFQPage").then((m) => ({ default: m.RFQPage })),
);
const SupplierDirectoryPage = lazy(() =>
  import("./pages/buyer/SupplierDirectoryPage").then((m) => ({
    default: m.SupplierDirectoryPage,
  })),
);
const BuyerPricingPage = lazy(() =>
  import("./pages/buyer/BuyerPricingPage").then((m) => ({
    default: m.BuyerPricingPage,
  })),
);
const BuyerAnalyticsPage = lazy(() =>
  import("./pages/buyer/BuyerAnalyticsPage").then((m) => ({
    default: m.BuyerAnalyticsPage,
  })),
);
const BuyerFeedbackPage = lazy(() =>
  import("./pages/buyer/BuyerFeedbackPage").then((m) => ({
    default: m.BuyerFeedbackPage,
  })),
);
const BuyerSupportPage = lazy(() =>
  import("./pages/buyer/BuyerSupportPage").then((m) => ({
    default: m.BuyerSupportPage,
  })),
);
const BuyerOnboardingPage = lazy(() =>
  import("./pages/buyer/BuyerOnboardingPage").then((m) => ({
    default: m.BuyerOnboardingPage,
  })),
);

// Supplier pages
const SupplierDashboardPage = lazy(() =>
  import("./pages/supplier/SupplierDashboardPage").then((m) => ({
    default: m.SupplierDashboardPage,
  })),
);
const ProductManagementPage = lazy(() =>
  import("./pages/supplier/ProductManagementPage").then((m) => ({
    default: m.ProductManagementPage,
  })),
);
const RFQLeadsPage = lazy(() =>
  import("./pages/supplier/RFQLeadsPage").then((m) => ({
    default: m.RFQLeadsPage,
  })),
);
const SupplierPricingPage = lazy(() =>
  import("./pages/supplier/SupplierPricingPage").then((m) => ({
    default: m.SupplierPricingPage,
  })),
);
const SupplierAnalyticsPage = lazy(() =>
  import("./pages/supplier/SupplierAnalyticsPage").then((m) => ({
    default: m.SupplierAnalyticsPage,
  })),
);
const SupplierBillingPage = lazy(() =>
  import("./pages/supplier/SupplierBillingPage").then((m) => ({
    default: m.SupplierBillingPage,
  })),
);
const SupplierFeedbackPage = lazy(() =>
  import("./pages/supplier/SupplierFeedbackPage").then((m) => ({
    default: m.SupplierFeedbackPage,
  })),
);
const SupplierSupportPage = lazy(() =>
  import("./pages/supplier/SupplierSupportPage").then((m) => ({
    default: m.SupplierSupportPage,
  })),
);
const SupplierOnboardingPage = lazy(() =>
  import("./pages/supplier/SupplierOnboardingPage").then((m) => ({
    default: m.SupplierOnboardingPage,
  })),
);

// Admin pages
const AdminDashboardPage = lazy(() =>
  import("./pages/admin/AdminDashboardPage").then((m) => ({
    default: m.AdminDashboardPage,
  })),
);
const AdminUsersPage = lazy(() =>
  import("./pages/admin/AdminUsersPage").then((m) => ({
    default: m.AdminUsersPage,
  })),
);
const AdminProductsPage = lazy(() =>
  import("./pages/admin/AdminProductsPage").then((m) => ({
    default: m.AdminProductsPage,
  })),
);
const AdminRFQsPage = lazy(() =>
  import("./pages/admin/AdminRFQsPage").then((m) => ({
    default: m.AdminRFQsPage,
  })),
);
const AdminTransactionsPage = lazy(() =>
  import("./pages/admin/AdminTransactionsPage").then((m) => ({
    default: m.AdminTransactionsPage,
  })),
);
const AdminFeedbackPage = lazy(() =>
  import("./pages/admin/AdminFeedbackPage").then((m) => ({
    default: m.AdminFeedbackPage,
  })),
);
const AdminFeesPage = lazy(() =>
  import("./pages/admin/AdminFeesPage").then((m) => ({
    default: m.AdminFeesPage,
  })),
);

function requireAuth(role?: "buyer" | "supplier" | "both" | "admin") {
  const { isAuthenticated, userRole } = useAuthStore.getState();
  if (!isAuthenticated) throw redirect({ to: "/login" });
  if (
    role === "buyer" &&
    userRole !== "buyer" &&
    userRole !== "both" &&
    userRole !== "admin"
  )
    throw redirect({ to: "/login" });
  if (
    role === "supplier" &&
    userRole !== "supplier" &&
    userRole !== "both" &&
    userRole !== "admin"
  )
    throw redirect({ to: "/login" });
  if (role === "admin" && userRole !== "admin")
    throw redirect({ to: "/login" });
}

const PageLoader = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full size-8 border-2 border-primary border-t-transparent" />
  </div>
);

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

// Root
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster richColors position="top-right" />
      <ChatbotWidget />
    </>
  ),
});

// Public routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <SuspenseWrapper>
      <HomePage />
    </SuspenseWrapper>
  ),
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <SuspenseWrapper>
      <AboutPage />
    </SuspenseWrapper>
  ),
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <SuspenseWrapper>
      <ContactPage />
    </SuspenseWrapper>
  ),
});
const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: () => (
    <SuspenseWrapper>
      <CareersPage />
    </SuspenseWrapper>
  ),
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <SuspenseWrapper>
      <LoginPage />
    </SuspenseWrapper>
  ),
});
const roleSelectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/role-select",
  component: () => (
    <SuspenseWrapper>
      <RoleSelectPage />
    </SuspenseWrapper>
  ),
});

// Buyer routes
const buyerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/buyer",
  beforeLoad: () => requireAuth("buyer"),
  component: Outlet,
});
const buyerIndexRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/",
  component: () => {
    throw redirect({ to: "/buyer/dashboard" });
  },
});
const buyerDashRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/dashboard",
  component: () => (
    <SuspenseWrapper>
      <BuyerDashboardPage />
    </SuspenseWrapper>
  ),
});
const buyerCatalogRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/catalog",
  component: () => (
    <SuspenseWrapper>
      <ProductCatalogPage />
    </SuspenseWrapper>
  ),
});
const buyerRFQRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/rfq",
  component: () => (
    <SuspenseWrapper>
      <BuyerRFQPage />
    </SuspenseWrapper>
  ),
});
const buyerSuppliersRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/suppliers",
  component: () => (
    <SuspenseWrapper>
      <SupplierDirectoryPage />
    </SuspenseWrapper>
  ),
});
const buyerPricingRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/pricing",
  component: () => (
    <SuspenseWrapper>
      <BuyerPricingPage />
    </SuspenseWrapper>
  ),
});
const buyerAnalyticsRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/analytics",
  component: () => (
    <SuspenseWrapper>
      <BuyerAnalyticsPage />
    </SuspenseWrapper>
  ),
});
const buyerFeedbackRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/feedback",
  component: () => (
    <SuspenseWrapper>
      <BuyerFeedbackPage />
    </SuspenseWrapper>
  ),
});
const buyerSupportRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/support",
  component: () => (
    <SuspenseWrapper>
      <BuyerSupportPage />
    </SuspenseWrapper>
  ),
});
const buyerOnboardingRoute = createRoute({
  getParentRoute: () => buyerRoute,
  path: "/onboarding",
  component: () => (
    <SuspenseWrapper>
      <BuyerOnboardingPage />
    </SuspenseWrapper>
  ),
});

// Supplier routes
const supplierRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/supplier",
  beforeLoad: () => requireAuth("supplier"),
  component: Outlet,
});
const supplierIndexRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/",
  component: () => {
    throw redirect({ to: "/supplier/dashboard" });
  },
});
const supplierDashRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/dashboard",
  component: () => (
    <SuspenseWrapper>
      <SupplierDashboardPage />
    </SuspenseWrapper>
  ),
});
const supplierProductsRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/products",
  component: () => (
    <SuspenseWrapper>
      <ProductManagementPage />
    </SuspenseWrapper>
  ),
});
const supplierRFQRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/rfq-leads",
  component: () => (
    <SuspenseWrapper>
      <RFQLeadsPage />
    </SuspenseWrapper>
  ),
});
const supplierPricingRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/pricing",
  component: () => (
    <SuspenseWrapper>
      <SupplierPricingPage />
    </SuspenseWrapper>
  ),
});
const supplierAnalyticsRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/analytics",
  component: () => (
    <SuspenseWrapper>
      <SupplierAnalyticsPage />
    </SuspenseWrapper>
  ),
});
const supplierBillingRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/billing",
  component: () => (
    <SuspenseWrapper>
      <SupplierBillingPage />
    </SuspenseWrapper>
  ),
});
const supplierFeedbackRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/feedback",
  component: () => (
    <SuspenseWrapper>
      <SupplierFeedbackPage />
    </SuspenseWrapper>
  ),
});
const supplierSupportRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/support",
  component: () => (
    <SuspenseWrapper>
      <SupplierSupportPage />
    </SuspenseWrapper>
  ),
});
const supplierOnboardingRoute = createRoute({
  getParentRoute: () => supplierRoute,
  path: "/onboarding",
  component: () => (
    <SuspenseWrapper>
      <SupplierOnboardingPage />
    </SuspenseWrapper>
  ),
});

// Admin routes
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  beforeLoad: () => requireAuth("admin"),
  component: Outlet,
});
const adminIndexRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/",
  component: () => {
    throw redirect({ to: "/admin/dashboard" });
  },
});
const adminDashRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/dashboard",
  component: () => (
    <SuspenseWrapper>
      <AdminDashboardPage />
    </SuspenseWrapper>
  ),
});
const adminUsersRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/users",
  component: () => (
    <SuspenseWrapper>
      <AdminUsersPage />
    </SuspenseWrapper>
  ),
});
const adminProductsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/products",
  component: () => (
    <SuspenseWrapper>
      <AdminProductsPage />
    </SuspenseWrapper>
  ),
});
const adminRFQsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/rfqs",
  component: () => (
    <SuspenseWrapper>
      <AdminRFQsPage />
    </SuspenseWrapper>
  ),
});
const adminTransactionsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/transactions",
  component: () => (
    <SuspenseWrapper>
      <AdminTransactionsPage />
    </SuspenseWrapper>
  ),
});
const adminFeedbackRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/feedback",
  component: () => (
    <SuspenseWrapper>
      <AdminFeedbackPage />
    </SuspenseWrapper>
  ),
});
const adminFeesRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/fees",
  component: () => (
    <SuspenseWrapper>
      <AdminFeesPage />
    </SuspenseWrapper>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  contactRoute,
  careersRoute,
  loginRoute,
  roleSelectRoute,
  buyerRoute.addChildren([
    buyerIndexRoute,
    buyerDashRoute,
    buyerCatalogRoute,
    buyerRFQRoute,
    buyerSuppliersRoute,
    buyerPricingRoute,
    buyerAnalyticsRoute,
    buyerFeedbackRoute,
    buyerSupportRoute,
    buyerOnboardingRoute,
  ]),
  supplierRoute.addChildren([
    supplierIndexRoute,
    supplierDashRoute,
    supplierProductsRoute,
    supplierRFQRoute,
    supplierPricingRoute,
    supplierAnalyticsRoute,
    supplierBillingRoute,
    supplierFeedbackRoute,
    supplierSupportRoute,
    supplierOnboardingRoute,
  ]),
  adminRoute.addChildren([
    adminIndexRoute,
    adminDashRoute,
    adminUsersRoute,
    adminProductsRoute,
    adminRFQsRoute,
    adminTransactionsRoute,
    adminFeedbackRoute,
    adminFeesRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
