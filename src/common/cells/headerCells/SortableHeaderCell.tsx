import React from 'react';
import { isElement } from 'react-is';
import { HeaderRowType, DEFINE_SORT } from '../../enums';
import { CalculatedColumn } from '../../types';

const SORT_TEXT = {
  [DEFINE_SORT.ASC]: '\u25B2',
  [DEFINE_SORT.DESC]: '\u25BC',
  [DEFINE_SORT.NONE]: ''
} as const;

export interface Props {
  column: CalculatedColumn;
  rowType: HeaderRowType;
  onSort(columnKey: string, direction: DEFINE_SORT): void;
  sortDirection: DEFINE_SORT;
  sortDescendingFirst: boolean;
  sortHandlePosition: string;
}

export default function SortableHeaderCell(props: Props) {
  const { column, rowType, onSort, sortDirection, sortDescendingFirst, sortHandlePosition } = props;
  function onClick() {
    let direction;
    switch (sortDirection) {
      case DEFINE_SORT.ASC:
        direction = sortDescendingFirst ? DEFINE_SORT.NONE : DEFINE_SORT.DESC;
        break;
      case DEFINE_SORT.DESC:
        direction = sortDescendingFirst ? DEFINE_SORT.ASC : DEFINE_SORT.NONE;
        break;
      default:
        direction = sortDescendingFirst ? DEFINE_SORT.DESC : DEFINE_SORT.ASC;
        break;
    }
    onSort(column.key, direction);
  }

  const { headerRenderer } = column;
  const content = !headerRenderer
    ? column.name
    : isElement(headerRenderer)
      ? React.cloneElement(headerRenderer, { column })
      : React.createElement(headerRenderer, { column, rowType });

  const sortArrow = <span className="pull-right">{SORT_TEXT[sortDirection]}</span>;
  return (
    <div className="rdg-sortable-header-cell" onClick={onClick}>
      {sortHandlePosition === 'before' && sortArrow}
      {content}
      {sortHandlePosition === 'after' && sortArrow}
    </div>
  );
}
