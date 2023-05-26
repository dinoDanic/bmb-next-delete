import React from "react"
import { MeDocument } from "@/gql/graphql"

import { graphQLClient } from "@/lib/graphql-request"

const Page = async () => {
  // const session = useSession()
  // console.log(session)
  const data = await graphQLClient.request(MeDocument)
  console.log(data)

  return <div>page</div>
}

export default Page
