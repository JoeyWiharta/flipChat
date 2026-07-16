import type { ComponentType } from "react";

export type NavItem = {
  to: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
};
