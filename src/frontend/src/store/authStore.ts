import type { UserProfile, UserRole } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  principal: string | null;
  profile: UserProfile | null;
  setAuth: (principal: string, role: UserRole) => void;
  setProfile: (profile: UserProfile) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userRole: null,
      principal: null,
      profile: null,
      setAuth: (principal, role) =>
        set({ isAuthenticated: true, principal, userRole: role }),
      setProfile: (profile) => set({ profile }),
      logout: () =>
        set({
          isAuthenticated: false,
          userRole: null,
          principal: null,
          profile: null,
        }),
    }),
    {
      name: "linkup-auth",
    },
  ),
);
