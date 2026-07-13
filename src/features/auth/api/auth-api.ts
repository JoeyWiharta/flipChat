import { apiClient } from "@/lib/api-client";
import type { LoginSchema } from "../schemas/auth-schema";
import type { LoginRegisterResponse, LoginRegisterResult } from "../types/auth-types";
import { mappedUser } from "../utils/auth-mapper";

export const loginApi = async (payload: LoginSchema): Promise<LoginRegisterResult> => {
  const { data } = await apiClient.post<LoginRegisterResponse>("/auth/login", payload);
  return {
    accessToken: data.access_token,
    user: mappedUser(data.user),
  };
};
