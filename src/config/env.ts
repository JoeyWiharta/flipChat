import { z } from "zod"

const envSchema = z.object({
    VITE_API_BASE_URL: z.url(),
})

const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
    const flattened = z.flattenError(parsed.error)
    console.error("Invalid environment variables:", flattened.fieldErrors)
    throw new Error("Invalid environment variables")
}

export const env = {
    API_BASE_URL: parsed.data.VITE_API_BASE_URL
}