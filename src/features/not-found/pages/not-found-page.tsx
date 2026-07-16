import { PATHS } from "@/constants/routes";
import { useAuthStore } from "@/features/auth";
import { Link } from "react-router";

export function NotFoundPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const backTo = isAuthenticated ? PATHS.APP.ROOT : PATHS.HOME;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">
        Halaman yang kamu cari gak ditemukan.
      </p>
      <Link to={backTo} className="text-primary underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
