declare var __DEV__: boolean
declare var __SERVER__: boolean
declare var SERVER_PREFIX: string

declare module '*.gql' {
  import { DocumentNode } from 'graphql'
  const value: {
    [key: string]: DocumentNode
  }
  export = value
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
