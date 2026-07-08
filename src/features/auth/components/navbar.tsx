import { Link } from "react-router"
import ThemeToggle from "@/components/shared/theme-toggle"
import { PATHS } from "@/app/router/paths"
import logoIcon from "@/assets/icons/logo-icon.svg"

const Navbar = () => {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="flex items-center justify-between px-10 py-4">
        <Link to={PATHS.HOME} className="flex items-center gap-2">
          <img src={logoIcon} alt="FlipChat" className="w-8 h-8" />
          <span className="text-xl font-bold">FlipChat</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar