import axios from "axios";
import type { ApiErrorResponse } from "@/types/api-error-response";

const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again.";

export const getErrorMessage = (
  error: unknown,
  fallback = DEFAULT_ERROR_MESSAGE,
): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const apiMessage = error.response?.data?.error;

    if (typeof apiMessage === "string" && apiMessage.trim()) {
      return apiMessage;
    }
    return fallback;
  }
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }
  return fallback;
};
