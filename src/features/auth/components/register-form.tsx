import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: submitLogin, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const emailValue = useWatch({ control, name: "email" });
  const passwordValue = useWatch({ control, name: "password" });

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
    <Card className="w-full max-w-125">
      <CardHeader>
        <CardTitle className="text-2xl font-medium">Create Account</CardTitle>
        <CardDescription className="text-base">
          Sign up to start your conversations.
        </CardDescription>
      </CardHeader>

      <FieldSeparator className="mx-6 w-auto" />

      <CardContent>
        <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <FieldGroup className="flex flex-row">
            <Field data-invalid={!!errors.email} className="gap-2">
              <FieldLabel htmlFor="email">Full Name</FieldLabel>
              <InputGroup className="h-10 gap-1">
                <InputGroupAddon align="inline-start">
                  <Mail
                    className={cn(
                      "transition-colors",
                      emailValue ? "text-foreground" : "text-muted-foreground",
                    )}
                  />
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

            <Field data-invalid={!!errors.email} className="gap-2">
              <FieldLabel htmlFor="email">Username</FieldLabel>
              <InputGroup className="h-10 gap-1">
                <InputGroupAddon align="inline-start">
                  <Mail
                    className={cn(
                      "transition-colors",
                      emailValue ? "text-foreground" : "text-muted-foreground",
                    )}
                  />
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

          <FieldGroup className="flex flex-row">


            <Field data-invalid={!!errors.email} className="gap-2">
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <InputGroup className="h-10 gap-1">
                <InputGroupAddon align="inline-start">
                  <Mail
                    className={cn(
                      "transition-colors",
                      emailValue ? "text-foreground" : "text-muted-foreground",
                    )}
                  />
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

            <Field data-invalid={!!errors.password} className="gap-2">
              <FieldLabel htmlFor="password">Language</FieldLabel>
              <InputGroup className="h-10 gap-1">
                <InputGroupAddon align="inline-start">
                  <LockKeyhole
                    className={cn(
                      "transition-colors",
                      passwordValue
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  />
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
                    "cursor-pointer transition-all active:scale-90",
                    isPending && "pointer-events-none",
                    passwordValue ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {showPassword ? <Eye /> : <EyeOffIcon />}
                </InputGroupAddon>
              </InputGroup>
              {errors.password && <FieldError errors={[errors.password]} />}
            </Field>
          </FieldGroup>

          <FieldGroup className="flex flex-row">
            <Field data-invalid={!!errors.password} className="gap-2">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <InputGroup className="h-10 gap-1">
                <InputGroupAddon align="inline-start">
                  <LockKeyhole
                    className={cn(
                      "transition-colors",
                      passwordValue
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  />
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
                    "cursor-pointer transition-all active:scale-90",
                    isPending && "pointer-events-none",
                    passwordValue ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {showPassword ? <Eye /> : <EyeOffIcon />}
                </InputGroupAddon>
              </InputGroup>
              {errors.password && <FieldError errors={[errors.password]} />}
            </Field>

            <Field data-invalid={!!errors.password} className="gap-2">
              <FieldLabel htmlFor="password">Confirm Password</FieldLabel>
              <InputGroup className="h-10 gap-1">
                <InputGroupAddon align="inline-start">
                  <LockKeyhole
                    className={cn(
                      "transition-colors",
                      passwordValue
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  />
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
                    "cursor-pointer transition-all active:scale-90",
                    isPending && "pointer-events-none",
                    passwordValue ? "text-foreground" : "text-muted-foreground",
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
            className="w-full mt-4 transition-opacity"
            disabled={isPending}
          >
            {isPending ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <FieldSeparator className="my-4">or continue with</FieldSeparator>

        <Button
          type="button"
          size="lg"
          className="w-full mb-4 transition-opacity"
          variant="outline"
          disabled={isPending}
          onClick={() => alert("Coming soon")}
        >
          <FcGoogle />
          Continue with Google
        </Button>

        <CardFooter className="justify-center text-muted-foreground">
          Already have an account?
          <Link
            to={PATHS.LOGIN}
            className={cn(
              "text-primary font-semibold ml-1.5 inline-block transition-all hover:scale-102",
              isPending && "pointer-events-none opacity-75",
            )}
            aria-disabled={isPending}
          >
            Sign In
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
export default RegisterForm;
