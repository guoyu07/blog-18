"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_client_1 = require("apollo-client");
var apollo_link_http_1 = require("apollo-link-http");
var axios_1 = require("axios");
var _debug = require("debug");
var graphql_tag_1 = require("graphql-tag");
var Koa = require("koa");
var bodyParser = require("koa-bodyparser");
var compose = require("koa-compose");
var Router = require("koa-router");
var session = require("koa-session");
var node_fetch_1 = require("node-fetch");
var uuid = require("uuid");
var config_1 = require("../../build/config");
global.fetch = node_fetch_1.default;
var _a = process.env, APP_KEYS = _a.APP_KEYS, GITHUB_CLIENT_ID = _a.GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET = _a.GITHUB_CLIENT_SECRET;
var debug = _debug('1stg:server:router');
var router = new Router({
    prefix: '/api',
});
router
    .get('/user', function (ctx, next) {
    var user = ctx.session.user;
    var sessionID;
    if (!user) {
        sessionID = uuid();
        ctx.session.uuid = sessionID;
    }
    ctx.body = user || {
        uuid: sessionID,
    };
})
    .get('/oauth', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
    var _a, code, path, state, data, token, apollo, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.query, code = _a.code, path = _a.path, state = _a.state;
                if (!state || state !== ctx.session.uuid) {
                    return [2 /*return*/, ctx.throw('invalid oauth redirect')];
                }
                return [4 /*yield*/, axios_1.default.post('https://github.com/login/oauth/access_token', {
                        client_id: GITHUB_CLIENT_ID,
                        client_secret: GITHUB_CLIENT_SECRET,
                        code: code,
                        state: state,
                    }, {
                        headers: {
                            Accept: 'application/json',
                        },
                    })];
            case 1:
                data = (_b.sent()).data;
                if (data.error) {
                    return [2 /*return*/, ctx.throw(data)];
                }
                token = data.access_token;
                ctx.session.token = token;
                apollo = new apollo_client_1.default({
                    link: apollo_link_http_1.createHttpLink({
                        uri: 'https://api.github.com/graphql',
                        headers: {
                            Authorization: "bearer " + token,
                        },
                    }),
                    cache: new apollo_cache_inmemory_1.InMemoryCache(),
                });
                return [4 /*yield*/, apollo.query({
                        query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query {\n          viewer {\n            avatarUrl\n            id\n            login\n            name\n            url\n            websiteUrl\n          }\n        }\n      "], ["\n        query {\n          viewer {\n            avatarUrl\n            id\n            login\n            name\n            url\n            websiteUrl\n          }\n        }\n      "]))),
                    })];
            case 2:
                user = (_b.sent()).data;
                ctx.session.user = user.viewer;
                ctx.redirect("" + path.replace(/ /g, '%2B'));
                return [2 /*return*/];
        }
    });
}); });
exports.default = function (app) {
    var provided = !!app;
    var middlewares = [bodyParser(), router.routes(), router.allowedMethods()];
    if (!app) {
        app = new Koa();
        app.keys = app.keys = APP_KEYS.split(',');
        middlewares.unshift(session({}, app));
    }
    if (provided) {
        return middlewares;
    }
    app.use(compose(middlewares));
    app.listen(config_1.serverPort + 1, config_1.serverHost, function () {
        debug('Router server is now running at %s:%s', config_1.serverHost, config_1.serverPort + 1);
    });
};
var templateObject_1;
//# sourceMappingURL=index.js.map