import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/features/auth/store/auth-store";
import { useNavigate } from "react-router";
import { PATHS } from "@/constants/routes";

const MainPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate(PATHS.LOGIN);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-6 rounded-xl border p-8 shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome, {user?.name} 👋
          </h1>
          <p className="text-muted-foreground">
            You are successfully logged in.
          </p>
        </div>

        <Button
          variant="destructive"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
