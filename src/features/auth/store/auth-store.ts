import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AuthState } from "@/features/auth/types/auth.types"

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            accessToken: null,
            setSession: (token) => set({ isAuthenticated: true, accessToken: token }),
            logout: () => set({ isAuthenticated: false, accessToken: null }),
        }),
        { name: "flipchat-auth" }
    )
)