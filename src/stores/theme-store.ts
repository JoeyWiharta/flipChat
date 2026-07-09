import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Theme, ThemeState } from "@/types/theme.types"
import { STORAGE_KEYS } from "@/constants/storage-keys"

const getSystemTheme = (): "light" | "dark" => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const applyTheme = (theme: Theme) => {
    const resolved = theme === "system" ? getSystemTheme() : theme
    document.documentElement.classList.toggle("dark", resolved === "dark")
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: "system",
            setTheme: (theme) => {
                set({ theme })
                applyTheme(theme)
            },
            toggleTheme: () => {
                const current = get().theme === "system" ? getSystemTheme() : get().theme
                const newTheme = current === "dark" ? "light" : "dark"
                set({ theme: newTheme })
                applyTheme(newTheme)
            },
        }),
        {
            name: STORAGE_KEYS.THEME,
            onRehydrateStorage: () => (state) => {
                if (state) applyTheme(state.theme)
            },
        }
    )
)