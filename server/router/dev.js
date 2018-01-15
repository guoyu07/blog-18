"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shelljs_1 = require("shelljs");
var _1 = require(".");
shelljs_1.exec('kill -9 $(lsof -i:7001 -t) 2> /dev/null', function (code, stdout, stderr) {
    if (stderr) {
        // tslint:disable-next-line no-console
        console.error(stderr);
        return;
    }
    _1.default();
});
//# sourceMappingURL=dev.js.map