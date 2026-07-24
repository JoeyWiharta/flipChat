import { Link } from "react-router";
import ThemeToggle from "@/components/common/ThemeToggle";
import { PATHS } from "@/constants/routes";
import LogoIcon from "@/assets/icons/LogoIcon.svg";

const NavbarAuth = () => {
  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur flex items-center justify-between px-10 py-4">
      <Link to={PATHS.HOME} className="flex items-center gap-2">
        <img src={LogoIcon} alt="FlipChat" className="w-7 h-7" />
        <span className="text-xl font-semibold tracking-wide">FlipChat</span>
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default NavbarAuth;
