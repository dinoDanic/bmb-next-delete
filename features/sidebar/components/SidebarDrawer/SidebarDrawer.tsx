// import React from "react"
//
// import { ClientTrigger } from "./ClientTrigger"
// import { ExtendContent } from "./ExtendContent"
// import { Layer } from "./Layer"
// import { SidebarContent } from "./SidebarContent"
//
// export const SidebarDrawer = () => {
//   return (
//     <>
//       <ClientTrigger>
//         {/* this is not an error. Typescirpt dose not know about server components*/}
//         {/* @ts-expect-error Server Component */}
//         <SidebarContent />
//         <ExtendContent />
//       </ClientTrigger>
//       <Layer />
//     </>
//   )
// }
