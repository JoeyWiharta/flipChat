export type Theme = "light" | "dark"

export interface ThemeState {
    theme: Theme
    setTheme: (teme: Theme) => void
    toggleTheme: () => void
}