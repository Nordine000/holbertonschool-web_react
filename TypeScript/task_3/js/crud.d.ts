import { RowID, RowElement } from './interface.ts';

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowIdd: RowElement, rowId: RowID): RowID;

