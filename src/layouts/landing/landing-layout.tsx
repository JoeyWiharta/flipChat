import { Outlet } from "react-router";
import Navbar from "./components/navbar-landing";
import Footer from "./components/footer-landing";

const LandingLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default LandingLayout
