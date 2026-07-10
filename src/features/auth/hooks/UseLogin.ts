import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { loginApi } from "../api/AuthApi"
import { useAuthStore } from "../store/AuthStore"
import { PATHS } from "@/app/router/paths"
import type { LoginSchema } from "../schemas/AuthSchema"

export const useLogin = () => {
    const navigate = useNavigate()
    const setSession = useAuthStore((state) => state.setSession)

    return useMutation({
        mutationFn: (payload: LoginSchema) => loginApi(payload),
        onSuccess: ({ accessToken, user }) => {
            setSession(accessToken, user)
            navigate(PATHS.APP.ROOT)
        },
    })
}
