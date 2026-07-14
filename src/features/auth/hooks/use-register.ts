import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { registerApi } from "../api/auth-api";
import { useAuthStore } from "../store/auth-store";
import { PATHS } from "@/constants/routes";
import type { RegisterPayload } from "../types/auth-types";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/get-error-message";

export const useRegister = () => {
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: (payload: RegisterPayload) => registerApi(payload),
    onMutate: () => {
      const toastId = toast.loading("Creating your account...");
      return { toastId };
    },
    onSuccess: (result, _, context) => {
      toast.dismiss(context?.toastId);
      toast.success("Account created successfully!");
      setSession(result.accessToken, result.user);
      navigate(PATHS.APP.ROOT);
    },
    onError: (error, _, context) => {
      toast.dismiss(context?.toastId);
      toast.error(
        getErrorMessage(error, "Unable to create account. Please try again."),
      );
    },
  });
};
