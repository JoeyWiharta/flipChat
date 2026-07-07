import { Outlet } from "react-router"

const MainLayout = () => {
    return (
        <div className="flex min-h-screen">
            <Outlet />
        </div>
    )
}

export default MainLayout