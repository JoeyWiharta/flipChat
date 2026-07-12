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
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Lock, Mail } from "lucide-react";
import { useLogin } from "../hooks/use-login";
import { loginSchema, type LoginSchema } from "../schemas/auth-schema";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: submitLogin, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchema) => {
    submitLogin(values);
  };

  // Check Code ClaudeAI HERE
  // https://claude.ai/chat/b298250f-f6ec-47f1-88df-5cb132253186

  return (
    <Card className="w-full max-w-135 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-medium">Welcome Back</CardTitle>
        <CardDescription>
          Sign in to continue your conversations.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <InputGroup>
                <Mail />
                <InputGroupInput
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
              </InputGroup>
              {errors?.email && (
                <FieldDescription>{errors.email.message}</FieldDescription>
              )}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <InputGroup>
                <Lock />
                <InputGroupInput
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={!!errors.password}
                  {...register("password")}
                />
              </InputGroup>
              {errors?.password && (
                <FieldDescription>{errors.password.message}</FieldDescription>
              )}
            </Field>
          </FieldGroup>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
export default LoginForm;
