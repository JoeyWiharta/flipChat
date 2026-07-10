import { useState } from "react"
import { Link } from "react-router"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldDescription,
} from "@/components/ui/field"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { SiGoogle, SiGithub } from "@icons-pack/react-simple-icons"
import { loginSchema, type LoginSchema } from "../schemas/auth-schema"
import { PATHS } from "@/constants/routes"
import { useLogin } from "../hooks/use-login"

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { mutate: submitLogin, isPending, isError, error } = useLogin()


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
    })

    const onSubmit = (values: LoginSchema) => {
              submitLogin(values)
    }

    return (
        <Card className="w-full max-w-105 shadow-2xl">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
                <CardDescription>
                    Sign in to continue your conversations.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <FieldGroup className="gap-2">
                        <Field className="gap-2">
                            <FieldLabel htmlFor="email">Email Address</FieldLabel>
                            <InputGroup className="overflow-hidden">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <InputGroupInput
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    aria-invalid={!!errors.email}
                                    {...register("email")}
                                />
                            </InputGroup>
                            {errors.email && (
                                <FieldDescription className="text-xs text-destructive">
                                    {errors.email.message}
                                </FieldDescription>
                            )}
                        </Field>
                    </FieldGroup>

                    <FieldGroup className="gap-2">
                        <Field className="gap-2">
                            <div className="flex justify-between items-center">
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <a href="#" className="text-sm text-primary hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <InputGroup className="overflow-hidden">
                                <Lock className="h-4 w-4 text-muted-foreground" />
                                <InputGroupInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    aria-invalid={!!errors.password}
                                    {...register("password")}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </InputGroup>
                            {errors.password && (
                                <FieldDescription className="text-xs text-destructive">
                                    {errors.password.message}
                                </FieldDescription>
                            )}
                        </Field>
                    </FieldGroup>

                    <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                        {isPending ? "Memproses..." : "Sign In"}
                    </Button>
                </form>

                <div className="relative my-8">
                    <Separator />
                    <span className="absolute inset-0 -top-3 flex justify-center">
                        <span className="bg-background px-4 text-sm text-muted-foreground">
                            or continue with
                        </span>
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="gap-2">
                        <SiGoogle size={16} />
                        Google
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <SiGithub size={16} />
                        GitHub
                    </Button>
                </div>

                <p className="mt-10 text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link to={PATHS.REGISTER} className="text-primary font-bold hover:underline">
                        Create Account
                    </Link>
                </p>

            </CardContent>
        </Card>
    )
}

export default LoginForm
