"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
exports.dateFormat = function (date, f) {
    if (f === void 0) { f = 'YYYY-MM-DD'; }
    return date_fns_1.format(date, f);
};
exports.timeAgo = function (date) { return date_fns_1.formatDistance(date, Date.now()); };
//# sourceMappingURL=date.js.map