"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
var webpack = require("webpack");
var config_1 = require("./config");
var sourceMap = config_1.__DEV__;
var minimize = !sourceMap;
var config = {
    output: {
        publicPath: config_1.publicPath,
        path: config_1.resolve('dist/static'),
        filename: "[name].[" + (config_1.__DEV__ ? 'hash' : 'chunkhash') + "].js",
    },
    resolve: {
        alias: {
            'date-fns$': 'date-fns/esm',
            lodash$: 'lodash-es',
        },
        extensions: ['.ts', '.js'],
        modules: [config_1.resolve('src'), 'node_modules'],
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
                use: ['apply-loader', 'pug-loader'],
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
                options: {
                    cssModules: {
                        camelCase: true,
                    },
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: sourceMap,
                                        minimize: minimize,
                                    },
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        sourceMap: sourceMap,
                                        minimize: minimize,
                                    },
                                },
                                {
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap: sourceMap,
                                        minimize: minimize,
                                        includePaths: [config_1.resolve('node_modules/bootstrap/scss')],
                                    },
                                },
                            ],
                        }),
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(__assign({}, Object.entries(process.env).reduce(function (result, _a) {
            var key = _a[0], value = _a[1];
            if (key !== 'VUE_ENV') {
                result["process.env." + key] = JSON.stringify(value);
            }
            return result;
        }, {}), { __DEV__: config_1.__DEV__, API_PREFIX: JSON.stringify('/api') })),
        new ExtractTextPlugin({
            filename: 'app.[contenthash].css',
            disable: config_1.__DEV__,
        }),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: config_1.resolve('src/tsconfig.json'),
            tslint: true,
            vue: true,
        })
    ].concat((config_1.__DEV__
        ? [new webpack.NamedChunksPlugin(), new webpack.NamedModulesPlugin()]
        : [new webpack.optimize.ModuleConcatenationPlugin()])),
};
exports.default = config;
//# sourceMappingURL=base.js.map