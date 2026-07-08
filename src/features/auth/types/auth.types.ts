export interface User {
    id: string
    name: string
    username: string
    bio: string | null
    email: string
    language: string
    avatar_url: string | null
    created_at: string
}

export interface AuthState {
    isAuthenticated: boolean
    accessToken: string | null
    user: User | null
    setSession: (token: string, user: User) => void
    logout: () => void
}

export interface LoginResponse {
    access_token: string
    user: User
}