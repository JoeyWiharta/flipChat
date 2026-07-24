import { Navigate, Outlet } from "react-router"
import { useAuthStore } from "@/features/auth/store/auth-store"
import { PATHS } from "../../constants/routes"

const PublicRoute = () => {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

    if (isAuthenticated) {
        return <Navigate to={PATHS.APP.ROOT} replace />
    }

    return <Outlet />
}

export default PublicRoute
