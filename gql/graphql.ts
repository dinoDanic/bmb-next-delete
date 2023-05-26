/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Account = Node & {
  __typename?: "Account"
  email?: Maybe<Scalars["String"]["output"]>
  firstName?: Maybe<Scalars["String"]["output"]>
  /** The ID of an object */
  id: Scalars["ID"]["output"]
  lastName?: Maybe<Scalars["String"]["output"]>
  username?: Maybe<Scalars["String"]["output"]>
}

export type CreateSessionInput = {
  email?: InputMaybe<Scalars["String"]["input"]>
  password: Scalars["String"]["input"]
  username?: InputMaybe<Scalars["String"]["input"]>
}

export type Node = {
  /** The ID of the object. */
  id: Scalars["ID"]["output"]
}

export type RootMutationType = {
  __typename?: "RootMutationType"
  createSession?: Maybe<Session>
}

export type RootMutationTypeCreateSessionArgs = {
  input?: InputMaybe<CreateSessionInput>
}

export type RootQueryType = {
  __typename?: "RootQueryType"
  /** Health check */
  healthCheck?: Maybe<Scalars["Boolean"]["output"]>
  me?: Maybe<Account>
  node?: Maybe<Node>
}

export type RootQueryTypeNodeArgs = {
  id: Scalars["ID"]["input"]
}

export type Session = {
  __typename?: "Session"
  account?: Maybe<Account>
  token?: Maybe<Scalars["String"]["output"]>
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: "RootQueryType"
  me?: {
    __typename?: "Account"
    id: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
  } | null
}

export type CreateSessionMutationVariables = Exact<{
  input: CreateSessionInput
}>

export type CreateSessionMutation = {
  __typename?: "RootMutationType"
  createSession?: { __typename?: "Session"; token?: string | null } | null
}

export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>
export const CreateSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createSession" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateSessionInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createSession" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateSessionMutation,
  CreateSessionMutationVariables
>
