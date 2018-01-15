"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _debug = require("debug");
var koaWebpack = require("koa-webpack");
var MFS = require("memory-fs");
var webpack = require("webpack");
var config_1 = require("../build/config");
var client_1 = require("../build/client");
var server_1 = require("../build/server");
var debug = _debug('1stg:server:dev');
exports.default = function (cb) {
    // tslint:disable-next-line:variable-name
    var _resolve;
    var clientManifest;
    var bundle;
    var fs;
    var readyPromise = new Promise(function (r) {
        _resolve = r;
    });
    var ready = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _resolve();
        cb.apply(void 0, args);
    };
    var clientCompiler = webpack(client_1.default);
    var webpackMiddleware = koaWebpack({
        compiler: clientCompiler,
    });
    clientCompiler.plugin('done', function (stats) {
        stats = stats.toJson();
        stats.errors.forEach(debug);
        stats.warnings.forEach(debug);
        if (stats.errors.length) {
            return;
        }
        fs = webpackMiddleware.dev.fileSystem;
        clientManifest = JSON.parse(fs.readFileSync(config_1.resolve('dist/vue-ssr-client-manifest.json')));
        if (bundle) {
            ready({ bundle: bundle, clientManifest: clientManifest, fs: fs });
        }
    });
    var mfs = new MFS();
    var serverCompiler = webpack(server_1.default);
    serverCompiler.outputFileSystem = mfs;
    serverCompiler.watch({}, function (err, stats) {
        if (err) {
            throw err;
        }
        stats = stats.toJson();
        if (stats.errors.length) {
            return;
        }
        bundle = JSON.parse(mfs.readFileSync(config_1.resolve('dist/vue-ssr-server-bundle.json')));
        if (clientManifest) {
            ready({ bundle: bundle, clientManifest: clientManifest, fs: fs });
        }
    });
    return { readyPromise: readyPromise, webpackMiddleware: webpackMiddleware };
};
//# sourceMappingURL=dev.js.map