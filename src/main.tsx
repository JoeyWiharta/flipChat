import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./app/App.tsx"
import "./styles/global.css"
import AppProviders from "./app/providers/app-provider.tsx"
import { ErrorBoundary } from "./components/common/ErrorBoundary.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <AppProviders>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProviders>
    </ErrorBoundary>
  </StrictMode >,
)
