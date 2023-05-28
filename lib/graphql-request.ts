import { GraphQLClient } from "graphql-request"

import { env } from "@/env.mjs"

export const graphqlClient = new GraphQLClient(env.NEXT_PUBLIC_GRPAHQL_SCHEMA)
