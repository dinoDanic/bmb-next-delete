import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://kodi-straga.kodius.com/api/graphql",
  documents: "features/**/*.graphql",
  generates: {
    "gql/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config
