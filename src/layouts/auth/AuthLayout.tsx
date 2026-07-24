import { Outlet } from "react-router";
import AuthShowcase from "@/features/auth/components/auth-showcase";
import NavbarAuth from "@/layouts/auth/components/NavbarAuth";
import FooterAuth from "./components/FooterAuth";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarAuth />
      <section className="flex flex-1">
        <div className="w-7/12 hidden lg:flex">
          <AuthShowcase />
        </div>
        <div className="flex flex-1 w-5/12 items-center justify-center p-4">
          <Outlet />
        </div>
      </section>
      <FooterAuth />
    </div>
  );
};
export default AuthLayout;
