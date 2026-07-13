import type { LoginRegisterResponse, User } from "../types/auth-types";

export const mappedUser = (raw: LoginRegisterResponse["user"]): User => ({
  id: raw.id,
  name: raw.name,
  username: raw.username,
  bio: raw.bio,
  email: raw.email,
  language: raw.language,
  avatarUrl: raw.avatar_url,
  createdAt: raw.created_at,
});
