import { apiClient } from "@/lib/api-client";
import type { LoginSchema } from "../schemas/auth.schema";
import type { LoginResponse } from "../types/auth.types";

export const loginApi = async (payload: LoginSchema): Promise<LoginResponse> => {
    const { data } = await apiClient.post<LoginResponse>("/auth/login", payload)
    return data
}