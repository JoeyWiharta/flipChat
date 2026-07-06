import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/sharedFeature/components/ThemeToggle"

const menuList = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#About" },
    { label: "Contact", href: "#Contact" },
]

export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b">
            <span className="text-xl">FlipChat</span>
            <div className="flex gap-2">
                <ThemeToggle />
                <Link to="/login"><Button variant="ghost">Login</Button></Link>
                <Link to="/register"><Button variant="default">Get Started</Button></Link>
            </div>
        </header>
    )
}