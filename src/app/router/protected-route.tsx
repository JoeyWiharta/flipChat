import { Navigate, Outlet } from "react-router"
import { useAuthStore } from "@/features/auth/store/AuthStore"
import { PATHS } from "./paths"

const ProtectedRoute = () => {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to={PATHS.LOGIN} replace />
    }

    return <Outlet />
}

export default ProtectedRoute
