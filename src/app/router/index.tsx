import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"
import { PATHS } from "./paths"

import ProtectedRoute from "./protected-route"
import PublicRoute from "./public-route"

import LandingLayout from "@/layouts/landing-layout"
import AuthLayout from "@/layouts/auth-layout"
// import MainLayout from "@/layouts/main/main-layout"

import PageLoader from "@/components/shared/page-loader"
import { NotFoundPage } from "@/features/not-found/pages/not-found-page"

const LandingPage = lazy(() => import("@/features/landing/pages/landing-page"))
const LoginPage = lazy(() => import("@/features/auth/pages/login-page"))
const RegisterPage = lazy(() => import("@/features/auth/pages/register-page"))

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/* Public */}
                <Route element={<LandingLayout />}>
                    <Route path={PATHS.HOME} element={<LandingPage />} />
                </Route>

                {/* Auth (hanya boleh diakses kalau BELUM login) */}
                <Route element={<PublicRoute />}>
                    <Route element={<AuthLayout />}>
                        <Route path={PATHS.LOGIN} element={<LoginPage />} />
                        <Route path={PATHS.REGISTER} element={<RegisterPage />} />
                    </Route>
                </Route>

                {/* Protected (hanya boleh diakses kalau SUDAH login) */}
                {/* <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path={PATHS.APP.ROOT} element={<div>Chat Page (placeholder)</div>} />
          </Route>
        </Route> */}
                <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter