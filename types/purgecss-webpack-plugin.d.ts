declare module 'purgecss-webpack-plugin' {
  import { Plugin } from 'webpack'

  interface PurgecssWebpackPluginOptions {
    paths: string[]
    whitelist?: string[]
    whitelistPatterns?: RegExp[]
  }

  namespace PurgecssWebpackPlugin {

  }

  class PurgecssWebpackPlugin extends Plugin {
    constructor(options: PurgecssWebpackPluginOptions)
  }

  export = PurgecssWebpackPlugin
}
