import { GetProductByIdDocument } from "@/gql/graphql"

import { graphqlClient } from "@/lib/graphql-request"

export const getProductById = async (productId: string) => {
  const { getProductById } = await graphqlClient.request(
    GetProductByIdDocument,
    { id: productId }
  )
  return getProductById
}
