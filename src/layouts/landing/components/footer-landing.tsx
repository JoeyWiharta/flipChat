import { Link } from "react-router"
import { PATHS } from "@/constants/routes"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MessageCircle } from "lucide-react"
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons"

const productLinks = ["Features", "Integrations", "Enterprise", "Solutions"]
const resourceLinks = ["Documentation", "Help Center", "Blog", "Community"]
const legalLinks = ["Privacy Policy", "Terms of Service", "Security", "Compliance"]

const socialLinks = [
    { icon: SiInstagram, href: "#", label: "Instagram" },
    { icon: SiGithub, href: "#", label: "Github" },
]

const Footer = () => {
    return (
        <footer className="border-t bg-muted/20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link to={PATHS.HOME} className="flex items-center gap-2 mb-4">
                            <MessageCircle className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">FlipChat</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                            Membangun platform komunikasi paling intuitif dan aman untuk
                            perusahaan digital-first generasi berikutnya.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.label}
                                    variant="secondary"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <a href={social.href} aria-label={social.label}>
                                        <social.icon size={16} />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {productLinks.map((label) => (
                                <li key={label}>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {resourceLinks.map((label) => (
                                <li key={label}>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {legalLinks.map((label) => (
                                <li key={label}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} FlipChat Enterprise. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground/60">
                        Designed with passion for productivity.
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer
