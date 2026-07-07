import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Theme, ThemeState } from "@/types/theme.types"

const getSystemTheme = (): "light" | "dark" => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const applyTheme = (theme: Theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark")
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: getSystemTheme(),
            setTheme: (theme) => {
                set({ theme })
                applyTheme(theme)
            },
            toggleTheme: () => {
                const newTheme = get().theme === "dark" ? "light" : "dark"
                set({ theme: newTheme })
                applyTheme(newTheme)
            },
        }),
        {
            name: "flipchat-theme",
            onRehydrateStorage: () => (state) => {
                if (state) applyTheme(state.theme)
            },
        }
    )
)