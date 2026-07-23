import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SplitLayoutProops = {
  side?: ReactNode;
  children?: ReactNode;
};

const SplitInsetLayout = ({ side, children }: SplitLayoutProops) => {
  if (!side) {
    return <div className="h-full w-full">{children}</div>;
  }

  return (
    <div className="flex h-full">
      <div className={cn("w-3/10 shrink-0 border-r ")}>{side}</div>
      <div className={cn("w-7/10 flex-1")}>{children}</div>
    </div>
  );
};
export default SplitInsetLayout;
