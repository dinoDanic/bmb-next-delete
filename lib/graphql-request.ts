import { GraphQLClient } from "graphql-request"

// import { env } from "@/env.mjs"

export const graphqlClient = new GraphQLClient(
  "http://167.235.150.40:4000/graphql"
)
