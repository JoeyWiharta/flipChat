import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeOffIcon, Mail, Eye, LockKeyhole } from "lucide-react";
import { useLogin } from "../hooks/use-login";
import { loginSchema, type LoginSchema } from "../schemas/auth-schema";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { PATHS } from "@/constants/routes";
import { cn } from "@/lib/utils";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: submitLogin, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchema) => {
    submitLogin(values, {
      onSuccess: () => {
        reset({
          email: "",
          password: "",
        });
      },
    });
  };

  return (
    <Card className="w-full max-w-120 shadow-2xl gap-8">
      <CardHeader>
        <CardTitle className="text-3xl font-medium">Welcome Back</CardTitle>
        <CardDescription>
          Sign in to continue your conversations.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FieldGroup>
            <Field data-invalid={!!errors.email} className="gap-2">
              <FieldLabel htmlFor="email" className="text-sm">
                Email Address
              </FieldLabel>
              <InputGroup className="h-10 gap-1">
                <InputGroupAddon align="inline-start">
                  <Mail />
                </InputGroupAddon>
                <InputGroupInput
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
              </InputGroup>
              {errors.email && <FieldError errors={[errors.email]} />}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field data-invalid={!!errors.password} className="gap-2">
              <FieldLabel htmlFor="email" className="text-sm">
                Password
              </FieldLabel>
              <InputGroup className="h-10 gap-1">
                <InputGroupAddon align="inline-start">
                  <LockKeyhole />
                </InputGroupAddon>
                <InputGroupInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  aria-invalid={!!errors.password}
                  {...register("password")}
                />
                <InputGroupAddon
                  align="inline-end"
                  onClick={() => !isPending && setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className={cn(
                    "cursor-pointer",
                    isPending && "pointer-events-none",
                  )}
                >
                  {showPassword ? <Eye /> : <EyeOffIcon />}
                </InputGroupAddon>
              </InputGroup>
              {errors.password && <FieldError errors={[errors.password]} />}
            </Field>
          </FieldGroup>

          <Button
            type="submit"
            size="lg"
            className="w-full mt-5"
            disabled={isPending}
          >
            {isPending ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <FieldSeparator className="my-5">or continue with</FieldSeparator>
        <Button
          type="button"
          size="lg"
          className="w-full mb-5"
          variant="outline"
          disabled={isPending}
          onClick={() => alert("Coming soon")}
        >
          <FcGoogle />
          Continue with Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?
          <Link
            to={PATHS.REGISTER}
            className={cn(
              "text-primary ml-1 hover:font-medium",
              isPending && "pointer-events-none",
            )}
            aria-disabled={isPending}
          >
            Create an Account
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
export default LoginForm;
