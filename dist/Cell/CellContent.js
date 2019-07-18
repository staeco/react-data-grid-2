import * as tslib_1 from "tslib";
import React from 'react';
import classNames from 'classnames';
import ChildRowDeleteButton from '../ChildRowDeleteButton';
import CellValue from './CellValue';
export default function CellContent(_a) {
    var idx = _a.idx, tooltip = _a.tooltip, expandableOptions = _a.expandableOptions, height = _a.height, cellMetaData = _a.cellMetaData, cellControls = _a.cellControls, props = tslib_1.__rest(_a, ["idx", "tooltip", "expandableOptions", "height", "cellMetaData", "cellControls"]);
    var column = props.column;
    var isExpandCell = expandableOptions ? expandableOptions.field === column.key : false;
    var treeDepth = expandableOptions ? expandableOptions.treeDepth : 0;
    var marginLeft = expandableOptions && isExpandCell ? expandableOptions.treeDepth * 30 : 0;
    function handleDeleteSubRow() {
        if (cellMetaData.onDeleteSubRow) {
            cellMetaData.onDeleteSubRow({
                idx: idx,
                rowIdx: props.rowIdx,
                rowData: props.rowData,
                expandArgs: expandableOptions
            });
        }
    }
    var cellDeleter = expandableOptions && treeDepth > 0 && isExpandCell && (React.createElement(ChildRowDeleteButton, { treeDepth: treeDepth, cellHeight: height, onDeleteSubRow: handleDeleteSubRow, isDeleteSubRowEnabled: !!cellMetaData.onDeleteSubRow }));
    var classes = classNames('react-grid-Cell__value', { 'cell-tooltip': !!tooltip });
    return (React.createElement("div", { className: classes },
        cellDeleter,
        React.createElement("div", { className: "react-grid-Cell__container", style: { marginLeft: marginLeft } },
            React.createElement("span", null,
                React.createElement(CellValue, tslib_1.__assign({}, props))),
            cellControls),
        tooltip && React.createElement("span", { className: "cell-tooltip-text" }, tooltip)));
}
//# sourceMappingURL=CellContent.js.map