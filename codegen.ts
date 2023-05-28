import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://167.235.150.40:4000/graphql",
  documents: "features/**/*.graphql",
  generates: {
    "gql/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config
