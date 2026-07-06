import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/shared/components/ThemeToggle"
import Navbar from "../../shared/components/Navbar"

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />


            {/* <main className="flex-1 flex flex-col items-center justify-center text-center px-4 gap-6">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
          Ngobrol tanpa batas, kapan saja
        </h1>
        <p className="text-muted-foreground max-w-md text-lg">
          flipChat adalah aplikasi chat realtime yang simpel, cepat, dan aman
          untuk kamu terhubung dengan siapa saja.
        </p>
        <div className="flex gap-4 mt-4">
          <Link to="/register">
            <Button size="lg">Mulai Sekarang</Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline">
              Sudah Punya Akun
            </Button>
          </Link>
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} flipChat. All rights reserved.
      </footer> */}
        </div>
    )
}