"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCellFormatter = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function SimpleCellFormatter(_a) {
    var value = _a.value;
    return react_1.default.createElement("div", { title: String(value) }, value);
}
exports.SimpleCellFormatter = SimpleCellFormatter;
//# sourceMappingURL=SimpleCellFormatter.js.map