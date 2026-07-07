import { Link, useLocation } from "react-router"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/shared/theme-toggle"
import { PATHS } from "@/app/router/paths"
import logoIcon from "@/assets/icons/logo-icon.svg"

const menuList = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  const { hash } = useLocation()
  const activeHash = hash || "#home"

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="grid grid-cols-3 items-center px-10 py-4">
        <Link to={PATHS.HOME} className="flex items-center gap-2 justify-self-start">
          <img src={logoIcon} alt="FlipChat" className="w-8 h-8" />
          <span className="text-xl font-bold">FlipChat</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 justify-self-center">
          {menuList.map((item) => {
            const isActive = activeHash === item.href

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-md font-medium px-3 py-2 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-3 right-3 -bottom-px h-0.5 bg-primary transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          <Link to={PATHS.LOGIN}>
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to={PATHS.REGISTER}>
            <Button variant="default">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar