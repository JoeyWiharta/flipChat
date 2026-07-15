import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/features/auth/store/auth-store";
import { useLogout } from "../auth/hooks/use-logout";

const MainPage = () => {
  const { user } = useAuthStore();
  const { mutate: submitLogout, isPending } = useLogout();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-6 rounded-xl border p-8 shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user?.name} 👋</h1>
          <p className="text-muted-foreground">
            You are successfully logged in.
          </p>
        </div>

        <Button
          variant="destructive"
          onClick={() => submitLogout()}
          disabled={isPending}
        >
          {isPending ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
