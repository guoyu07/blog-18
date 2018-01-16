"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var accept_language_1 = require("accept-language");
var _debug = require("debug");
var Koa = require("koa");
var proxy = require("koa-better-http-proxy");
var compose = require("koa-compose");
var compress = require("koa-compress");
var logger = require("koa-logger");
var session = require("koa-session");
var staticCache = require("koa-static-cache");
var LRU = require("lru-cache");
var vue_server_renderer_1 = require("vue-server-renderer");
var config_1 = require("../build/config");
var router_1 = require("./router");
var utils_1 = require("utils");
accept_language_1.default.languages([utils_1.Locale.ZH, utils_1.Locale.EN]);
var ACCEPT_LANGUAGE = 'Accept-Language';
var _a = process.env, APP_KEYS = _a.APP_KEYS, GITHUB_TOKEN = _a.GITHUB_TOKEN;
var debug = _debug("1stg:server" + (config_1.__DEV__ ? ':core' : ''));
var app = new Koa();
app.keys = APP_KEYS.split(',');
var renderer;
var ready;
// tslint:disable-next-line no-unused-variable
var mfs;
var template = config_1.__DEV__
    ? // tslint:disable-next-line:no-var-requires
        require('pug').renderFile(config_1.resolve('server/template.pug'), {
            pretty: true,
        })
    : fs.readFileSync(config_1.resolve('dist/template.html'), 'utf-8');
// https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
var createRenderer = function (bundle, options) {
    return vue_server_renderer_1.createBundleRenderer(bundle, __assign({}, options, { template: template, cache: LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15,
        }), basedir: config_1.resolve('dist/static'), runInNewContext: false }));
};
var middlewares = [
    logger(),
    function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
        var url, start, originalLocale, locale, context, res, stream;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = ctx.url;
                    if (ctx.method !== 'GET' ||
                        url.lastIndexOf('.') > url.lastIndexOf('/') ||
                        !['*/*', 'text/html'].find(function (mimeType) {
                            return ctx.get('Accept').includes(mimeType);
                        }) ||
                        /^\/(api|graphql)($|\/)/.test(ctx.url)) {
                        return [2 /*return*/, next()];
                    }
                    return [4 /*yield*/, ready];
                case 1:
                    _a.sent();
                    start = Date.now();
                    originalLocale = ctx.cookies.get(utils_1.LOCALE_COOKIE);
                    locale = originalLocale || accept_language_1.default.get(ctx.get(ACCEPT_LANGUAGE));
                    if (!originalLocale) {
                        ctx.cookies.set(utils_1.LOCALE_COOKIE, locale, {
                            httpOnly: false,
                            path: '/',
                            expires: new Date(utils_1.INFINITY_DATE),
                        });
                    }
                    context = {
                        ctx: ctx,
                        locale: locale,
                        title: 'Blog | Blog system built on GitHub API with Vue SSR',
                    };
                    ctx.respond = false;
                    ctx.status = 200;
                    ctx.set({
                        'Content-Type': 'text/html',
                    });
                    res = ctx.res;
                    stream = renderer
                        .renderToStream(context)
                        .on('error', function (e) {
                        switch ((ctx.status = e.status || 500)) {
                            case 302:
                                ctx.set({ Location: e.url });
                                return res.end();
                            case 401:
                                ctx.redirect("/login?next=" + url);
                                return res.end();
                            case 404:
                                return res.end('404 | Page Not Found');
                            default:
                                res.end('500 | Internal Server Error');
                                debug("error during render : " + url);
                                // tslint:disable-next-line:no-console
                                console.error(e.stack);
                        }
                    })
                        .on('end', function () {
                        debug("whole request: " + (Date.now() - start) + "ms");
                    });
                    stream.pipe(res);
                    return [2 /*return*/];
            }
        });
    }); },
];
var sessionMiddleware = session({}, app);
if (config_1.__DEV__) {
    // tslint:disable-next-line:no-var-requires
    var _b = require('./dev').default(
    // tslint:disable-next-line:no-shadowed-variable
    function (_a) {
        var bundle = _a.bundle, clientManifest = _a.clientManifest, fs = _a.fs;
        mfs = fs;
        renderer = createRenderer(bundle, {
            clientManifest: clientManifest,
        });
    }), readyPromise = _b.readyPromise, webpackMiddleware = _b.webpackMiddleware;
    ready = readyPromise;
    middlewares.splice(1, 0, sessionMiddleware, webpackMiddleware, proxy(config_1.serverHost, {
        port: config_1.serverPort + 1,
        preserveReqSession: true,
        filter: function (ctx) { return /^\/api\//.test(ctx.url); },
    }));
}
else {
    mfs = fs;
    renderer = createRenderer(
    // tslint:disable-next-line:no-var-requires
    require(config_1.resolve('dist/vue-ssr-server-bundle.json')), {
        // tslint:disable-next-line:no-var-requires
        clientManifest: require(config_1.resolve('dist/vue-ssr-client-manifest.json')),
    });
    var MAX_AGE = 1000 * 3600 * 24 * 365; // one year
    var files = {};
    middlewares.splice.apply(middlewares, [1,
        0,
        compress(),
        staticCache(config_1.resolve('dist/static'), {
            maxAge: MAX_AGE,
        }, files),
        sessionMiddleware].concat(router_1.default(app)));
    files['/service-worker.js'].maxAge = 0;
}
middlewares.push(proxy('api.github.com/graphql', {
    filter: function (ctx) { return ctx.url === '/graphql'; },
    https: true,
    proxyReqOptDecorator: function (req, ctx) {
        req.headers.Authorization = "bearer " + (ctx.session.token || GITHUB_TOKEN);
        return req;
    },
}));
app.use(compose(middlewares));
app.listen(config_1.serverPort, config_1.serverHost, function () {
    debug('Server is now running at %s:%s', config_1.serverHost, config_1.serverPort);
});
//# sourceMappingURL=index.js.map