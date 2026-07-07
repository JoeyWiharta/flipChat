import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "@/components/ui/navigation-menu"
import ThemeToggle from "@/components/shared/theme-toggle"
import { PATHS } from "@/app/router/paths"
import logoIcon from "@/assets/icons/logo-icon.svg"

const menuList = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#About" },
    { label: "Contact", href: "#Contact" },
]

const Navbar = () => {
    return (
        <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to={PATHS.HOME} className="flex items-center gap-2">
                    <img src={logoIcon} alt="FlipChat" className="w-8 h-8" />
                    <span className="text-xl font-bold">FlipChat</span>
                </Link>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {menuList.map((obj) => (
                            <NavigationMenuItem key={obj.label}>
                                <NavigationMenuLink href={obj.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2">
                                    {obj.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-2">
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

    // <header className="flex items-center justify-between px-6 py-4 border-b">
    //     <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    //         <Link to="/" className="flex items-center gap-2">
    //             <img src={logoIcon} alt="FlipChat" className="w-8 h-8" />
    //             <span className="text-xl font-bold">FlipChat</span>
    //         </Link>
    //     </div>
    {/* <span className="text-xl">FlipChat</span>
            <div className="flex gap-2">
                <ThemeToggle />
                <Link to="/login"><Button variant="ghost">Login</Button></Link>
                <Link to="/register"><Button variant="default">Get Started</Button></Link>
            </div> */}
    {/* </header> */ }

}
export default Navbar