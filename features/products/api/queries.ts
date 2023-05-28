import { GetProductByIdDocument } from "@/gql/graphql";
import { graphqlClient } from "@/lib";

export const getProductById = async (productId: string) => {
  const { getProductById } = await graphqlClient.request(
    GetProductByIdDocument,
    { id: productId }
  );
  return getProductById;
};
