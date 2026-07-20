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
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { navItems } from "../config/nav-items";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const SidebarMain = () => {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tabIndex={-1}
              className="pointer-events-none cursor-default hover:bg-transparent active:bg-transparent data-active:bg-transparent focus-visible:ring-0"
              render={
                <div>
                  <Zap className="text-primary" fill="currentColor" />
                </div>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
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
                          <item.icon
                            className={cn(
                              "transition-colors",
                              isActive
                                ? "text-sidebar-foreground"
                                : "text-muted-foreground hover:text-sidebar-foreground",
                            )}
                          />
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

      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};
export default SidebarMain;
