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
import { Zap } from "lucide-react";

const SidebarMain = () => {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tabIndex={-1}
              className="pointer-events-none cursor-default text-primary hover:bg-transparent hover:text-primary active:bg-transparent active:text-primary data-active:bg-transparent focus-visible:ring-0"
              render={<Zap fill="currentColor" />}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
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
      </SidebarContent>

      <SidebarFooter>
        Content
      </SidebarFooter>
    </Sidebar>
  );
};
export default SidebarMain;
