export interface AuthState {
    isAuthenticated: boolean
    accessToken: string | null
    setSession: (token: string) => void
    logout: () => void
}