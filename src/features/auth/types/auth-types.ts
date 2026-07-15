import type { Language } from "@/constants/language";

// ======= Define types for authentication (Login and Register) =======
// ======= Raw Response Type from API (Login and Register) =======
export interface LoginRegisterResponse {
  access_token: string;
  user: {
    id: string;
    name: string;
    username: string;
    bio: string | null;
    email: string;
    language: string;
    avatar_url: string | null;
    created_at: string;
  };
}

// ======= Convert User Type to camelCase for Frontend (Login and Register) =======
export interface User {
  id: string;
  name: string;
  username: string;
  bio: string | null;
  email: string;
  language: string;
  avatarUrl: string | null;
  createdAt: string;
}

// ======= Converts Raw API Response to Frontend User Type Result =======
export interface LoginRegisterResult {
  accessToken: string;
  user: User;
}

// ======= Type for Register Payload API =======
export interface RegisterPayload {
  name: string;
  username: string;
  email: string;
  password: string;
  language: Language;
}

// ======= Response Type for Logout API=======
export interface LogoutResponse {
  message: string
}

// ======= Type for Global Auth State =======
export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  user: User | null;
  setSession: (token: string, user: User) => void;
  logout: () => void;
}
