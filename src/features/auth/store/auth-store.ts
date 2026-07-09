import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AuthState } from "@/features/auth/types/auth.types"
import { STORAGE_KEYS } from "@/constants/storage-keys"

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            accessToken: null,
            user: null,
            setSession: (token, user) => set({ isAuthenticated: true, accessToken: token, user }),
            logout: () => set({ isAuthenticated: false, accessToken: null, user: null }),
        }),
        { name: STORAGE_KEYS.AUTH }
    )
)