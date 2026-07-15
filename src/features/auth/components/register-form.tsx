import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
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
import {
  EyeOffIcon,
  Eye,
  User,
  AtSign,
  Mail,
  Languages,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { useRegister } from "../hooks/use-register";
import { registerSchema, type RegisterSchema } from "../schemas/auth-schema";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { PATHS } from "@/constants/routes";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LANGUAGES_OPTIONS, type Language } from "@/constants/language";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate: submitRegister, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      language: "" as Language,
      password: "",
      confirmPassword: "",
    },
  });

  const nameValue = useWatch({ control, name: "name" });
  const usernameValue = useWatch({ control, name: "username" });
  const emailValue = useWatch({ control, name: "email" });
  const languageValue = useWatch({ control, name: "language" });
  const passwordValue = useWatch({ control, name: "password" });
  const confirmPasswordValue = useWatch({ control, name: "confirmPassword" });

  const onSubmit = (values: RegisterSchema) => {
    // Remove confirmPassword from payload before submitting (Used only for validation UI)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...payload } = values;
    submitRegister(payload, {
      onSuccess: () => {
        reset({
          name: "",
          username: "",
          email: "",
          language: "" as Language,
          password: "",
          confirmPassword: "",
        });
      },
    });
  };

  return (
    <Card className="w-full max-w-130 ring-2">
      <CardHeader>
        <CardTitle className="text-2xl font-medium">Create Account</CardTitle>
        <CardDescription className="text-base">
          Sign up to start your conversations.
        </CardDescription>
      </CardHeader>

      <FieldSeparator className="mx-6 w-auto" />

      <CardContent>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FieldGroup className="flex flex-col gap-4 lg:flex-row">
            <Field data-invalid={!!errors.name} className="gap-2">
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <InputGroup className="gap-1">
                <InputGroupAddon align="inline-start">
                  <User
                    className={cn(
                      "transition-colors",
                      nameValue ? "text-foreground" : "text-muted-foreground",
                    )}
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
              </InputGroup>
              {errors.name && <FieldError errors={[errors.name]} />}
            </Field>

            <Field data-invalid={!!errors.username} className="gap-2">
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <InputGroup className="gap-1">
                <InputGroupAddon align="inline-start">
                  <AtSign
                    className={cn(
                      "transition-colors",
                      usernameValue
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  aria-invalid={!!errors.username}
                  {...register("username")}
                />
              </InputGroup>
              {errors.username && <FieldError errors={[errors.username]} />}
            </Field>
          </FieldGroup>

          <FieldGroup className="flex flex-col gap-4 lg:flex-row">
            <Field data-invalid={!!errors.email} className="gap-2">
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <InputGroup className="gap-1">
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
                  placeholder="johndoe@gmail.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
              </InputGroup>
              {errors.email && <FieldError errors={[errors.email]} />}
            </Field>

            <Field data-invalid={!!errors.language} className="gap-2">
              <FieldLabel htmlFor="language">Language</FieldLabel>
              <Controller
                control={control}
                name="language"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      id="language"
                      aria-invalid={!!errors.language}
                      className={cn(
                        "w-full",
                        languageValue
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      <Languages className="text-muted-foreground" />
                      <SelectValue>
                        {(value: string) =>
                          LANGUAGES_OPTIONS.find(
                            (option) => option.value === value,
                          )?.label ?? "Select language"
                        }
                      </SelectValue>
                    </SelectTrigger>

                    <SelectContent
                      side="bottom"
                      sideOffset={4}
                      alignItemWithTrigger={false}
                    >
                      {LANGUAGES_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.language && <FieldError errors={[errors.language]} />}
            </Field>
          </FieldGroup>

          <FieldGroup className="flex flex-col gap-4 lg:flex-row">
            <Field data-invalid={!!errors.password} className="gap-2">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <InputGroup className="gap-1">
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

            <Field data-invalid={!!errors.confirmPassword} className="gap-2">
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>
              <InputGroup className="gap-1">
                <InputGroupAddon align="inline-start">
                  <ShieldCheck
                    className={cn(
                      "transition-colors",
                      confirmPasswordValue
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  aria-invalid={!!errors.confirmPassword}
                  {...register("confirmPassword")}
                />
                <InputGroupAddon
                  align="inline-end"
                  onClick={() =>
                    !isPending && setShowConfirmPassword((prev) => !prev)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className={cn(
                    "cursor-pointer transition-all active:scale-90",
                    isPending && "pointer-events-none",
                    confirmPasswordValue
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {showConfirmPassword ? <Eye /> : <EyeOffIcon />}
                </InputGroupAddon>
              </InputGroup>
              {errors.confirmPassword && (
                <FieldError errors={[errors.confirmPassword]} />
              )}
            </Field>
          </FieldGroup>

          <Button
            type="submit"
            size="lg"
            className="w-full mt-4 transition-opacity"
            disabled={isPending}
          >
            {isPending ? "Creating account..." : "Create Account"}
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
