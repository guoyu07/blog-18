"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("./constant");
exports.getCookie = function (name) {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
        encodeURIComponent(name).replace(/[\-\.\+\*]/g, '\\$&') +
        '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
};
exports.setCookie = function (name, value, end, path, domain, secure) {
    if (!name || /^(?:expires|max\-age|path|domain|secure)$/i.test(name)) {
        return false;
    }
    var sExpires = '';
    if (end) {
        switch (end.constructor) {
            case Number:
                sExpires =
                    end === Infinity ? "; expires=" + constant_1.INFINITY_DATE : '; max-age=' + end;
                break;
            case String:
                sExpires = '; expires=' + end;
                break;
            case Date:
                sExpires = '; expires=' + end.toUTCString();
                break;
        }
    }
    document.cookie =
        encodeURIComponent(name) +
            '=' +
            encodeURIComponent(value == null ? '' : value) +
            sExpires +
            (domain ? '; domain=' + domain : '') +
            (path ? '; path=' + path : '') +
            (secure ? '; secure' : '');
    return true;
};
exports.parseSetCookies = function (setCookies) {
    if (!Array.isArray(setCookies)) {
        setCookies = [setCookies];
    }
    return setCookies.reduce(function (result, cookies) {
        var _a = cookies.split(/; */), item = _a[0], rests = _a.slice(1);
        var cookie = item.split('=');
        var setCookieItem = {
            name: cookie[0],
            value: cookie[1],
        };
        rests.forEach(function (rest) {
            var _a = rest.split('='), key = _a[0], value = _a[1];
            setCookieItem[key] = value == null ? true : value;
        });
        result.push(setCookieItem);
        return result;
    }, []);
};
//# sourceMappingURL=cookie.js.map