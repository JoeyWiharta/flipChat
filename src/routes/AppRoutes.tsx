import { Routes, Route } from "react-router"
import LandingPage from "@/features/landing/LandingPage"
import LoginPage from "@/features/auth/login/LoginPage"
import RegisterPage from "@/features/auth/register/RegisterPage"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}