// Raw  type from API
export interface LoginResponse {
    access_token: string,
    user: {
        id: string
        name: string
        username: string
        bio: string | null
        email: string
        language: string
        avatar_url: string | null
        created_at: string
    }
}

// Convert user type to camelCase for Frontend
export interface User {
    id: string
    name: string
    username: string
    bio: string | null
    email: string
    language: string
    avatarUrl: string | null
    createdAt: string
}

// Type for mapped login result
export interface LoginResult {
    accessToken: string
    user: User
}

// Type for Global Auth State
export interface AuthState {
    isAuthenticated: boolean,
    accessToken: string | null
    user: User | null
    setSession: (
        token: string,
        user: User
    ) => void
    logout: () => void
}
