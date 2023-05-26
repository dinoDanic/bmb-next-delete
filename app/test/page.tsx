"use client"

import React from "react"
import { MeDocument } from "@/gql/graphql"

import { graphQLClient } from "@/lib/graphql-request"

const Page = () => {
  graphQLClient.request(MeDocument).then((data) => {
    console.log(data.me)
  })

  return <div>page</div>
}

export default Page
