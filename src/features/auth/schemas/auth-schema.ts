import { z } from "zod";
import { LANGUAGES_OPTIONS, type Language } from "@/constants/language";

// ======= Login Schema and Validation Form =======
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email required")
    .pipe(z.email("Invalid email")),
  password: z.string().min(1, "Password required").min(8, "Min 8 characters"),
});
export type LoginSchema = z.infer<typeof loginSchema>;

// ======= Register Schema and Validation Form =======
const languageOptions = LANGUAGES_OPTIONS.map((data) => data.value) as [
  Language,
  ...Language[],
];

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, "Name required").min(2, "Min 2 characters"),
    username: z
      .string()
      .trim()
      .min(1, "Username required")
      .min(3, "Min 3 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Letters, numbers, underscores only"),
    email: z
      .string()
      .trim()
      .min(1, "Email required")
      .pipe(z.email("Invalid email")),
    password: z
      .string()
      .min(1, "Password required")
      .min(8, "Min 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password required"),
    language: z.enum(languageOptions, {
      message: "Select a language",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });
export type RegisterSchema = z.infer<typeof registerSchema>;
