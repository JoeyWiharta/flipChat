import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { loginApi } from "../api/login"
import { useAuthStore } from "../store/auth-store"
import { PATHS } from "@/app/router/paths"

export const useLogin = () => {
    const navigate = useNavigate()
    const setSession = useAuthStore((s) => s.setSession)

    return useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            setSession(data.access_token, data.user)
            navigate(PATHS.APP.ROOT)
        },
    })
}