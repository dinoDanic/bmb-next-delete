"use client"

import { FC, ReactNode } from "react"

// // import { MeDocument } from "@/gql/graphql"
// import { SessionProvider, useSession } from "next-auth/react"
//
// import { graphQLClient } from "@/lib/graphql-request"

interface Props {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  return <>{children}</>
  // return (
  //   <SessionProvider>
  //     <GraphqlClient />
  //     {children}
  //   </SessionProvider>
  // )
}

// const GraphqlClient = () => {
//   const session = useSession()
//   const token = session.data?.user?.token
//   useEffect(() => {
//     if (token) {
//       graphQLClient.setHeader("authorization", `Bearer ${token}`)
//       console.log(token)
//       graphQLClient.request(MeDocument).then((d) => {
//         console.log(d)
//       })
//     }
//   }, [token])
//   return null
// }
