import { PATHS } from "@/constants/routes";
import type { NavItem } from "../types/nav-types";
import { MessageCircleMore, Users } from "lucide-react";

export const navItems: NavItem[] = [
  {
    to: PATHS.APP.CHAT,
    icon: MessageCircleMore,
    label: "Chats",
  },
  {
    to: PATHS.APP.FRIENDS,
    icon: Users,
    label: "Friends",
  },
];
