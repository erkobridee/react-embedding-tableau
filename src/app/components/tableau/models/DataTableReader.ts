import type { DataTable } from './DataTable';

/**
 * A DataTableReader allows iteration over summary or underlying data by pages. The page size is established when the DataTableReader is created.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datatablereader.html
 */
export interface DataTableReader {
  /** The number of pages in the full data table. The last page could be a partial page. */
  pageCount: number;

  /** The number of rows in the full data table. */
  totalRowCount: number;

  //---= methods =---/

  /**
   * Get a page of data. The page is returned as a DataTable. Calls to getPageAsync() after releaseAsync() will throw an exception.
   *
   * @param { number } pageNumber - The page number (zero-indexed) to fetch. The page number should be treated like an array index with range: 0 <= pageNumber < pageCount.
   *
   * @returns A DataTable containing the requested page. The number of rows returned can be less than the page size at the end of the data.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datatablereader.html#getpageasync
   */
  getPageAsync(pageNumber: number): Promise<DataTable>;

  /**
   * Release all resources held by the DataTableReader. Calling this when done with the DataTableReader is required practice as it frees up resources. Calls to getPageAsync() after releaseAsync() will throw an exception.
   */
  releaseAsync(): Promise<void>;
}
