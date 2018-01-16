"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GITHUB_REPOSITORY_NAME = process.env.GITHUB_REPOSITORY_NAME;
exports.GITHUB_REPOSITORY_OWNER = process.env.GITHUB_REPOSITORY_OWNER;
var OwnerType;
(function (OwnerType) {
    OwnerType["user"] = "user";
    OwnerType["organization"] = "organization";
})(OwnerType = exports.OwnerType || (exports.OwnerType = {}));
exports.OWNER_TYPE = process.env.GITHUB_REPOSITORY_OWNER_TYPE;
exports.IS_USER = exports.OWNER_TYPE === OwnerType.user;
exports.REPOSITORY = {
    name: exports.GITHUB_REPOSITORY_NAME,
    owner: exports.GITHUB_REPOSITORY_OWNER,
};
exports.LOGIN = {
    login: exports.GITHUB_REPOSITORY_OWNER,
};
exports.INFINITY_DATE = 'Fri, 31 Dec 9999 23:59:59 GMT';
exports.LOCALE_COOKIE = 'LOCALE_COOKIE';
var Locale;
(function (Locale) {
    Locale["EN"] = "en";
    Locale["ZH"] = "zh";
})(Locale = exports.Locale || (exports.Locale = {}));
//# sourceMappingURL=constant.js.map