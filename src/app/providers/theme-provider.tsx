import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme-store";

type ThemeProviderProps = {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const theme = useThemeStore((s) => s.theme)

    useEffect(() => {
        const resolveTheme = () => {
            if (theme === "system") {
                const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
                document.documentElement.classList.toggle("dark", isDark)
            } else {
                document.documentElement.classList.toggle("dark", theme === "dark")
            }
        }
        resolveTheme()

        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
            const handleChange = (e: MediaQueryListEvent) => {
                document.documentElement.classList.toggle("dark", e.matches)
            }
            mediaQuery.addEventListener("change", handleChange)
            return () => {
                mediaQuery.removeEventListener("change", handleChange)
            }
        }
    }, [theme])

    return (
        <>
            {children}
        </>
    )
}
export default ThemeProvider