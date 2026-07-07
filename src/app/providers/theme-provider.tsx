import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme-store";

type ThemeProviderProps = {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const theme = useThemeStore((s) => s.theme)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    return (
        <>
            {children}
        </>
    )
}
export default ThemeProvider