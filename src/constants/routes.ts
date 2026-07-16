export const PATHS = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  APP: {
    ROOT: "/app",
    CHAT: "/app/chat",
    CHAT_CONVERSATION: (id: string = ":conversationId") => `/app/chat/${id}`,
    FRIENDS: "/app/friends",
    SETTINGS: "/app/settings",
  },
  NOT_FOUND: "*",
} as const;
