import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { loginApi } from "../api/auth-api";
import { useAuthStore } from "../store/auth-store";
import { PATHS } from "@/constants/routes";
import type { LoginSchema } from "../schemas/auth-schema";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/get-error-message";

export const useLogin = () => {
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: (payload: LoginSchema) => loginApi(payload),
    onMutate: () => {
      const toastId = toast.loading("Logging in...");
      return { toastId };
    },
    onSuccess: (result, _, context) => {
      toast.dismiss(context?.toastId);
      toast.success("Login successfully!");
      setSession(result.accessToken, result.user);
      navigate(PATHS.APP.ROOT);
    },

    onError: (error, _, context) => {
      toast.dismiss(context?.toastId);
      toast.error(getErrorMessage(error, "Unable to login. Please try again."));
    },

  });
};
