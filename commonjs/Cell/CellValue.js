"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_is_1 = require("react-is");
var formatters_1 = require("../formatters");
function CellValue(_a) {
    var rowIdx = _a.rowIdx, rowData = _a.rowData, column = _a.column, value = _a.value, isScrolling = _a.isScrolling;
    function getFormatterDependencies(row) {
        // convention based method to get corresponding Id or Name of any Name or Id property
        var getRowMetaData = column.getRowMetaData;
        if (getRowMetaData) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('getRowMetaData for formatters is deprecated and will be removed in a future version of ReactDataGrid. Instead access row prop of formatter');
            }
            return getRowMetaData(row, column);
        }
    }
    function getFormatterProps() {
        var row = typeof rowData.toJSON === 'function' ? rowData.toJSON() : rowData;
        return {
            value: value,
            column: column,
            rowIdx: rowIdx,
            isScrolling: isScrolling,
            row: row,
            dependentValues: getFormatterDependencies(row)
        };
    }
    var Formatter = column.formatter;
    if (react_is_1.isElement(Formatter)) {
        return react_1.default.cloneElement(Formatter, getFormatterProps());
    }
    if (react_is_1.isValidElementType(Formatter)) {
        return react_1.default.createElement(Formatter, tslib_1.__assign({}, getFormatterProps()));
    }
    return react_1.default.createElement(formatters_1.SimpleCellFormatter, { value: value });
}
exports.default = CellValue;
//# sourceMappingURL=CellValue.js.map