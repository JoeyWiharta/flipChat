import { useNavigate } from "react-router";
import { useAuthStore } from "../store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../api/auth-api";
import { toast } from "sonner";
import { PATHS } from "@/constants/routes";
import { getErrorMessage } from "@/lib/get-error-message";

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: () => logoutApi(),
    onMutate: () => {
      const toastId = toast.loading("Logging out...");
      return { toastId };
    },
    onSuccess: (result, _, context) => {
      toast.dismiss(context?.toastId);
      toast.success(
        result?.message ? result.message : "Logged out successfully!",
      );
      logout();
      navigate(PATHS.LOGIN);
    },
    onError: (error, _, context) => {
      toast.dismiss(context?.toastId);
      toast.error(
        getErrorMessage(error, "Unable to logout. Please try again."),
      );
      logout();
      navigate(PATHS.LOGIN);
    },
  });
};
