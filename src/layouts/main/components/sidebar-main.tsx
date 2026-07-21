import { NavLink, useLocation } from "react-router";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "@/components/ui/sidebar";
import { navItems } from "../config/nav-items";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/features/auth";
import { getInitials } from "@/utils/get-initials";
import { PATHS } from "@/constants/routes";
import defaultProfile from "@/assets/images/defaultProfile.jpg";

const SidebarMain = () => {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const initials = getInitials(user?.name);

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
                const isActive = location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      isActive={isActive}
                      render={
                        <NavLink to={item.to}>
                          <item.icon className={cn("transition-colors", isActive ? "text-sidebar-foreground" : "text-muted-foreground hover:text-sidebar-foreground")} />
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
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={user?.name ?? "Profile"}
              isActive={location.pathname === PATHS.APP.PROFILE}
              className="p-0"
              render={
                <NavLink to={PATHS.APP.PROFILE}>
                  <Avatar>
                    <AvatarImage src={user?.avatarUrl ?? defaultProfile}/>
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </NavLink>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
export default SidebarMain;
