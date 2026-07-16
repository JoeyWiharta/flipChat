import { Outlet } from "react-router";
import SidebarMain from "./components/sidebar-main";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const MainLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarMain />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 sm:hidden"></header>
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
export default MainLayout;
