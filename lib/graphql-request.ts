import { GraphQLClient } from "graphql-request"

export const graphQLClient = new GraphQLClient(
  "https://kodi-straga.kodius.com/api/graphql"
)
