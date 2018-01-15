"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
var webpack = require("webpack");
var merge = require("webpack-merge");
var nodeExternals = require("webpack-node-externals");
var config_1 = require("./config");
var base_1 = require("./base");
exports.default = merge.smart(base_1.default, {
    entry: './src/entry-server.ts',
    target: 'node',
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2',
    },
    externals: nodeExternals({
        whitelist: [/\.css$/],
    }),
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VUE_ENV': JSON.stringify('server'),
            SERVER_PREFIX: JSON.stringify(config_1.innerServer),
            __SERVER__: true,
        }),
        new VueSSRServerPlugin({
            filename: '../vue-ssr-server-bundle.json',
        }),
    ],
});
//# sourceMappingURL=server.js.map