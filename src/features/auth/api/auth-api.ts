import { apiClient } from "@/lib/api-client";
import type { LoginSchema } from "../schemas/auth-schema";
import type {
  LoginRegisterResponse,
  LoginRegisterResult,
  LogoutResponse,
  RegisterPayload,
} from "../types/auth-types";
import { mappedUser } from "../utils/auth-mapper";

export const loginApi = async (
  payload: LoginSchema,
): Promise<LoginRegisterResult> => {
  // Destructuring Concept for Axios from API (only takes response.data = {data})
  const { data } = await apiClient.post<LoginRegisterResponse>(
    "/auth/login",
    payload,
  );
  return {
    accessToken: data.access_token,
    user: mappedUser(data.user),
  };
};

// ==== Add Payload because different with RegisterSchema (Different UI and API value)
export const registerApi = async (
  payload: RegisterPayload,
): Promise<LoginRegisterResult> => {
  // Destructuring Concept for Axios from API (only takes response.data = {data})
  const { data } = await apiClient.post<LoginRegisterResponse>(
    "/auth/register",
    payload,
  );
  return {
    accessToken: data.access_token,
    user: mappedUser(data.user),
  };
};

export const logoutApi = async (): Promise<LogoutResponse> => {
  // Destructuring Concept for Axios from API (only takes response.data = {data})
  const { data } = await apiClient.post<LogoutResponse>("/auth/logout");
  return data;
};

export const refreshApi = async(): Promise<void> => {

}
