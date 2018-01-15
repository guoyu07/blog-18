"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
exports.NODE_ENV = process.env.NODE_ENV || 'development';
exports.__DEV__ = exports.NODE_ENV === 'development';
exports.serverHost = 'localhost';
exports.serverPort = 7000;
exports.publicPath = exports.__DEV__ ? "http://" + exports.serverHost + ":" + exports.serverPort + "/" : '/';
exports.innerServer = "http://localhost:" + exports.serverPort + "/";
exports.resolve = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return path.resolve.apply(path, [process.cwd()].concat(args));
};
//# sourceMappingURL=config.js.map