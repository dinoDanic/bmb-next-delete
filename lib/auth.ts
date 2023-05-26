import {
  Account,
  CreateSessionDocument,
  CreateSessionInput,
  MeDocument,
} from "@/gql/graphql"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { routes } from "@/config/site"
import { graphQLClient } from "@/lib/graphql-request"

const createSessionMutation = async (input: CreateSessionInput) => {
  const data = await graphQLClient.request(CreateSessionDocument, {
    input: input,
  })
  return data.createSession
}

const getMe = async () => {
  try {
    const user = await graphQLClient.request(MeDocument)
    return user.me || null
  } catch (err: unknown) {
    return null
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials): Promise<Account | null> {
        if (!credentials?.username || !credentials.password) return null
        const sessionToken = await createSessionMutation({
          username: credentials?.username,
          password: credentials?.password,
        })

        if (sessionToken?.token) {
          graphQLClient.setHeader(
            "authorization",
            `Bearer ${sessionToken?.token}`
          )
          const me = await getMe()
          return me || null
        }
        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: routes.login,
  },
}

export default NextAuth(authOptions)
