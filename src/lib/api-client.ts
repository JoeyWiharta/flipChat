import axios from "axios"
import { env } from "@/config/env"
import { useAuthStore } from "@/features/auth/store/auth-store"

export const apiClient = axios.create({
    baseURL: env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

apiClient.interceptors.request.use((config) => {
    const token = useAuthStore.getState().accessToken
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status
        const url = error.config?.url

        // Abaikan 401 dari endpoint login
        if (status === 401 && url !== "/auth/login") {
            useAuthStore.getState().logout()
        }

        return Promise.reject(error)
    }
)