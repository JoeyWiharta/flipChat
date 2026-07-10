import { apiClient } from "@/lib/api-client";
import type { LoginSchema } from "../schemas/AuthSchema";
import type { LoginResponse, LoginResult, User } from "../types/AuthTypes";

const mapUser = (raw: LoginResponse["user"]): User => ({
    id: raw.id,
    name: raw.name,
    username: raw.username,
    bio: raw.bio,
    email: raw.email,
    language: raw.language,
    avatarUrl: raw.avatar_url,
    createdAt: raw.created_at,
})

export const loginApi = async (payload: LoginSchema): Promise<LoginResult> => {
    const { data } = await apiClient.post<LoginResponse>("/auth/login", payload)

    return {
        accessToken: data.access_token,
        user: mapUser(data.user)
    }
}
