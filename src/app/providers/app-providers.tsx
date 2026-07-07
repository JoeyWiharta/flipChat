import type { ReactNode } from "react"
import QueryProvider from "./query-provider"
import ThemeProvider from "./theme-provider"

type AppProvidersProps = {
    children: ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <ThemeProvider>
            <QueryProvider>
                {children}
            </QueryProvider>
        </ThemeProvider>
    )
}
export default AppProviders