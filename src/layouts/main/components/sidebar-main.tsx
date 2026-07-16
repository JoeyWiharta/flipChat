import { NavLink, useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navItems } from "../config/nav-items";
import logoIcon from "@/assets/icons/logo-icon.svg";

const SidebarMain = () => {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="items-center">
        <img src={logoIcon} className="h-9 w-9" />
      </SidebarHeader>

      {/*Update Rollback UI Sidebar ke default shadcn*/}
      {/*Custom width styling di form ini sidebar pakai inset*/}

      {/*<SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="p-0">
            <SidebarMenu className="flex flex-col items-center gap-3">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.to ||
                  location.pathname.startsWith(`${item.to}/`);

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      isActive={isActive}
                      render={
                        <NavLink to={item.to}>
                          <item.icon />
                        </NavLink>
                      }
                    />
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>*/}
      <SidebarFooter />
    </Sidebar>
  );
};
export default SidebarMain;
