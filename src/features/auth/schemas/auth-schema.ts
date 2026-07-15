import { z } from "zod";
import { LANGUAGES_OPTIONS, type Language } from "@/constants/language";

// ======= Login Schema and Validation Form =======
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .pipe(z.email("Invalid email format")),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});
export type LoginSchema = z.infer<typeof loginSchema>;

// ======= Register Schema and Validation Form =======
const languageOptions = LANGUAGES_OPTIONS.map((data) => data.value) as [
  Language,
  ...Language[],
];

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters"),
    username: z
      .string()
      .trim()
      .min(1, "Username is required")
      .min(3, "Username must be at least 3 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .pipe(z.email("Invalid email format")),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    language: z.enum(languageOptions, {
      message: "Please select a language",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
export type RegisterSchema = z.infer<typeof registerSchema>;
