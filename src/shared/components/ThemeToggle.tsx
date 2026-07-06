import { Moon, Sun } from "lucide-react"
import { useThemeStore } from "../store/themeStore"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
    const { theme, toggleTheme } = useThemeStore()
    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </Button>
    )
}