import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"
import { PATHS } from "./paths"

import ProtectedRoute from "./protected-route"
import PublicRoute from "./public-route"

import LandingLayout from "@/features/landing/landing-layout"
import AuthLayout from "@/features/auth/auth-layout"
// import MainLayout from "@/layouts/main/main-layout"

import PageLoader from "@/components/shared/page-loader"

const LandingPage = lazy(() => import("@/features/landing/landing-page"))
const LoginPage = lazy(() => import("@/features/auth/login-page"))
const RegisterPage = lazy(() => import("@/features/auth/register-page"))

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
      </Routes>
    </Suspense>
  )
}

export default AppRouter