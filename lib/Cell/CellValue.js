import { __assign } from "tslib";
import React from 'react';
import { isElement, isValidElementType } from 'react-is';
import { SimpleCellFormatter } from '../formatters';
export default function CellValue(_a) {
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
    if (isElement(Formatter)) {
        return React.cloneElement(Formatter, getFormatterProps());
    }
    if (isValidElementType(Formatter)) {
        return React.createElement(Formatter, __assign({}, getFormatterProps()));
    }
    return React.createElement(SimpleCellFormatter, { value: value });
}
//# sourceMappingURL=CellValue.js.map