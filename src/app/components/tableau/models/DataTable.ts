import type { Column } from './Column';
import type { DataValue } from './DataValue';
import type { MarkInfo } from './MarkInfo';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datatable.html
 */
export interface DataTable {
  /** The column information, including the name, data type, and index. */
  columns: Column[];

  /** A two-dimensional array of data without the sheet or column metadata. The first array index is the row index and the second array index is the column index. */
  data: DataValue[][];

  /** Whether the data is summary data or underlying data. Returns true for summary data. */
  isSummaryData?: boolean;

  /** True if the rows returned have been limited to the maximum number of retrievable rows for `getUnderlyingDataAsync`. (This value is currently set to 10,000.) A value of true indicates that the caller requested more rows than the current limit and the underlying data source contains more rows than can be returned. Note that if `maxRows` is unspecified (`maxRows = 0`), the call to `getUnderlyingDataAsync` requests all rows in the data source. The limit on the maximum number of rows returned does not apply to `getSummaryDataAsync`. */
  isTotalRowCountLimited?: boolean;

  /** An array of information about marks. Each mark in the array corresponds to a row in the data of this DataTable. MarkInfo is only currently available within results from `getSelectedMarksAsync` / `getMarksAsync`. */
  marksInfo: MarkInfo[];

  /** Either "Underlying Data Table" or "Summary Data Table". */
  name: string;

  /** The number of rows in the returned data. */
  totalRowCount: number;
}
