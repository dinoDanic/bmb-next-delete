import { Account } from "@/gql/graphql"

export interface AccountWithToken extends Account {
  token?: string
}
