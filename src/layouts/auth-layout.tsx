import { Outlet } from "react-router";
import Navbar from "@/features/auth/components/Navbar";
import AuthShowcase from "@/features/auth/components/AuthShowcase";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1 flex">
        <AuthShowcase />
        <div className="w-full lg:w-5/12 flex items-center justify-center px-6 py-12">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
