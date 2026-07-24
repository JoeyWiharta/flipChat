import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { PATHS } from "@/constants/routes";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import LandingLayout from "@/layouts/landing/landing-layout";
import AuthLayout from "@/layouts/auth/AuthLayout";
import MainLayout from "@/layouts/main/main-layout";
import PageLoader from "@/components/common/PageSpinner";
import { NotFoundPage } from "@/features/not-found/pages/not-found-page";

const LandingPage = lazy(() => import("@/features/landing/pages/landing-page"));
const LoginPage = lazy(() => import("@/features/auth/pages/login-page"));
const RegisterPage = lazy(() => import("@/features/auth/pages/register-page"));
const ChatSectionLayout = lazy(() => import("@/features/chat/layouts/chat-section-layout"));
const EmptyStatePage = lazy(() => import("@/features/chat/pages/empty-state-pages"));
const ChatWindow = lazy(() => import("@/features/chat/pages/chat-window"));
const FriendsPage = lazy(() => import("@/features/friends/pages/friends-page"));
const ProfilePage = lazy(() => import("@/features/profile/pages/profile-page"));

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
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path={PATHS.APP.ROOT} element={<Navigate to={PATHS.APP.CHAT} replace />} />

            <Route path={PATHS.APP.CHAT} element={<ChatSectionLayout />}>
              <Route index element={<EmptyStatePage />} />
              <Route path=":conversationId" element={<ChatWindow />} />
            </Route>

            <Route path={PATHS.APP.FRIENDS} element={<FriendsPage />} />
            <Route path={PATHS.APP.PROFILE} element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default AppRouter;
