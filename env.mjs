import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    // NEXTAUTH_URL: z.string().url().optional(),
    // NEXTAUTH_SECRET: z.string().min(1),
    NEXT_PUBLIC_GRPAHQL_API: z.string().url(),
    NEXT_PUBLIC_GRPAHQL_SCHEMA: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_GRPAHQL_API: z.string().url(),
    NEXT_PUBLIC_GRPAHQL_SCHEMA: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GRPAHQL_API: process.env.NEXT_PUBLIC_GRPAHQL_API,
    NEXT_PUBLIC_GRPAHQL_SCHEMA: process.env.NEXT_PUBLIC_GRPAHQL_SCHEMA,
  },
})
