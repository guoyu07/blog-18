import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import webpack, { Configuration } from 'webpack'

import { NODE_ENV, __DEV__, publicPath, resolve } from './config'

const sourceMap = __DEV__
const minimize = !sourceMap

const scssLoaders = (modules?: boolean) =>
  ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap,
          minimize,
          modules,
          camelCase: true,
          localIdentName: __DEV__
            ? '[name]__[local]___[hash:base64:5]'
            : '_[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap,
        },
      },
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          includePaths: [resolve('node_modules/bootstrap/scss')],
        },
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'src/styles/_pre-variables.scss',
            ...['functions', 'variables', 'mixins'].map(
              item => `node_modules/bootstrap/scss/_${item}.scss`,
            ),
            'src/styles/_post-variables.scss',
          ],
        },
      },
    ],
  })

const config: Configuration = {
  mode: NODE_ENV,
  output: {
    publicPath,
    path: resolve('dist/static'),
    filename: `[name].[${__DEV__ ? 'hash' : 'chunkhash'}].js`,
  },
  resolve: {
    alias: {
      'date-fns$': 'date-fns/esm',
      lodash$: 'lodash-es',
    },
    extensions: ['.ts', '.js'],
    modules: [resolve('src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff2?)$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
        },
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.gql$/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            loader: 'pug-plain-loader',
          },
          {
            use: ['html-loader', 'pug-plain-loader'],
          },
        ],
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: scssLoaders(true),
          } as any,
          {
            use: scssLoaders(),
          },
        ],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          compilerOptions: {
            module: 'esnext',
          },
          transpileOnly: true,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__,
    }),
    new ExtractTextPlugin({
      filename: 'app.[contenthash].css',
      allChunks: true,
      disable: __DEV__,
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve('src/tsconfig.json'),
      tslint: true,
      vue: true,
    }),
    new VueLoaderPlugin(),
  ],
}

export default config
