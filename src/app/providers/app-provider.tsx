import type { ReactNode } from "react";
import QueryProvider from "./query-provider";
import ThemeProvider from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
        <Toaster position="top-right" />
      </QueryProvider>
    </ThemeProvider>
  );
};
export default AppProviders;
