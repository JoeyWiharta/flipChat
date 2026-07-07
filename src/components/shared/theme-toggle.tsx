import { Monitor, Moon, Sun } from "lucide-react"
import { useThemeStore } from "../../stores/theme-store"
import { Button } from "@/components/ui/button"

const ThemeToggle = () => {
    const { theme, setTheme } = useThemeStore()
    const cycleTheme = () => {
        if (theme === "light") setTheme("dark")
        else if (theme === "dark") setTheme("system")
        else setTheme("light")
    }

    return (
        <Button variant="ghost" size="icon" onClick={cycleTheme}>
            {theme === "light" && <Sun className="h-4 w-4" />}
            {theme === "dark" && <Moon className="h-4 w-4" />}
            {theme === "system" && <Monitor className="h-4 w-4" />}
        </Button>
    )
}

export default ThemeToggle