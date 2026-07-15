import { Outlet } from "react-router";
import AuthShowcase from "@/features/auth/components/auth-showcase";
import Navbar from "@/layouts/auth/components/navbar-auth";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex flex-1">
        <div className="w-7/12 hidden lg:flex">
          <AuthShowcase />
        </div>
        <div className="flex flex-1 w-5/12 items-center justify-center p-4">
          <Outlet />
        </div>
      </section>
    </div>
  );
};
export default AuthLayout;
