"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 封装fetch
 */
var isomorphic_fetch_1 = require("isomorphic-fetch");
function Api(_a) {
    var _b = _a.path, path = _b === void 0 ? '' : _b, _c = _a.method, method = _c === void 0 ? 'POST' : _c, _d = _a.header, header = _d === void 0 ? {} : _d, _e = _a.data, data = _e === void 0 ? null : _e;
    return isomorphic_fetch_1.default(path, {
        method: method,
        headers: new Headers(__assign({}, header)),
        body: data ? JSON.stringify(data) : undefined
    }).then(function (data) {
        return data.json();
    }).catch(function (error) { return console.error('Error:', error); });
}
exports.default = Api;
