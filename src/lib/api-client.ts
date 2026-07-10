import axios from "axios"
import { env } from "@/config/env"
import { useAuthStore } from "@/features/auth/store/AuthStore"

const AUTH_EXCLUDED_PATHS = ["/auth/login", "/auth/register"]

export const apiClient = axios.create({
    baseURL: env.API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
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
        const url = error.config?.url as string | undefined

        const isExcluded = AUTH_EXCLUDED_PATHS.some((path) => url?.includes(path))

        if (status === 401 && !isExcluded) {
            useAuthStore.getState().logout()
        }

        return Promise.reject(error)
    }
)
