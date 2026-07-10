import { Outlet } from "react-router";
import Navbar from "../features/landing/components/Navbar";
import Footer from "../features/landing/components/footer";

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
