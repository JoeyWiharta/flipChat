import axios from "axios";
import type { ApiErrorResponse } from "@/types/api-response";

export const getErrorMessage = (
  error: unknown,
  fallback = "Something went wrong. Please try again.",
): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const { response } = error;

    const apiMessage = response?.data?.message ?? response?.data?.error;

    if (typeof apiMessage === "string" && apiMessage.trim()) {
      return apiMessage;
    }

    if (!response) {
      return "Unable to connect to the server. Please check your internet connection.";
    }

    switch (response.status) {
      case 400:
        return "Invalid request.";

      case 401:
        return "Invalid email or password.";

      case 403:
        return "You don't have permission to perform this action.";

      case 404:
        return "The requested resource could not be found.";

      case 409:
        return "The resource already exists.";

      case 422:
        return "Please check your input.";

      case 429:
        return "Too many requests. Please try again later.";

      case 500:
      case 502:
      case 503:
      case 504:
        return "The server is temporarily unavailable. Please try again later.";

      default:
        return fallback;
    }
  }

  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return fallback;
};
