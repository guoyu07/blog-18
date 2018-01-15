"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GoogleFontsWebpackPlugin = require("google-fonts-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
var VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
var webpack = require("webpack");
var merge = require("webpack-merge");
var config_1 = require("./config");
var base_1 = require("./base");
exports.default = merge.smart(base_1.default, {
    entry: './src/entry-client.ts',
    target: 'web',
    devtool: config_1.__DEV__ ? 'cheap-module-eval-source-map' : false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VUE_ENV': JSON.stringify('client'),
            SERVER_PREFIX: JSON.stringify('/'),
            __SERVER__: false,
        }),
        // extract vendor chunks for better caching
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: function (module) {
                // a module is extracted into the vendors chunk
                // if it's inside node_modules
                return /node_modules/.test(module.context) &&
                    // and not a CSS file (due to extract-text-webpack-plugin limitation)
                    !/\.css$/.test(module.request);
            },
        }),
        // extract webpack runtime & manifest to avoid vendor chunk hash changing
        // on every build.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            favicon: 'src/assets/favicon.ico',
            filename: '__non_ssr_page__.html',
        })
    ].concat((config_1.__DEV__
        ? []
        : [
            new GoogleFontsWebpackPlugin({
                fonts: [
                    {
                        family: 'Lato',
                        variants: [
                            '300',
                            '300italic',
                            '400',
                            '400italic',
                            '700',
                            '700italic',
                        ],
                        subsets: ['latin', 'latin-ext'],
                    },
                ],
            }),
            new SWPrecacheWebpackPlugin({
                cacheId: 'x',
                minify: true,
                dontCacheBustUrlsMatching: /./,
                staticFileGlobsIgnorePatterns: [
                    /index\.html$/,
                    /\.map$/,
                    /\.json$/,
                ],
                stripPrefix: config_1.resolve('dist').replace(/\\/g, '/'),
                runtimeCaching: [
                    {
                        urlPattern: /\//,
                        handler: 'networkFirst',
                    },
                ],
            }),
        ]), [
        new VueSSRClientPlugin({
            filename: '../vue-ssr-client-manifest.json',
        }),
    ]),
});
//# sourceMappingURL=client.js.map