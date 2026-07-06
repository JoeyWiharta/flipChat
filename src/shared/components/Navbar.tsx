import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/shared/components/ThemeToggle"
import logoIcon from "@/assets/logo-icon.svg"

const menuList = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#About" },
    { label: "Contact", href: "#Contact" },
]

export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logoIcon} alt="FlipChat" className="w-8 h-8" />
                    <span className="text-xl font-bold">FlipChat</span>
                </Link>
            </div>
            {/* <span className="text-xl">FlipChat</span>
            <div className="flex gap-2">
                <ThemeToggle />
                <Link to="/login"><Button variant="ghost">Login</Button></Link>
                <Link to="/register"><Button variant="default">Get Started</Button></Link>
            </div> */}
        </header>
    )
}