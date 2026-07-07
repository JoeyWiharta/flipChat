import { Outlet, Link } from "react-router"
import { PATHS } from "@/app/router/paths"

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 px-4">
            <Link to={PATHS.HOME} className="mb-8 flex items-center gap-2">
                <span className="text-2xl font-bold">FlipChat</span>
            </Link>

            <div className="w-full max-w-md">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout