import type { ConnectionSummary } from './ConnectionSummary';
import type { DataSourceUnderlyingDataOptions } from './DataSourceUnderlyingDataOptions';
import type { DataTable } from './DataTable';
import type { DataTableReader } from './DataTableReader';
import type { Field } from './Field';
import type { LogicalTable } from './LogicalTable';
import type { TableSummary } from './TableSummary';

/**
 * Represents the data source used by a Worksheet.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datasource.html
 */
export interface DataSource {
  /** Last update time of the data source's extract, or undefined if this data source is live. */
  extractUpdateTime?: string;

  /** An array of fields associated with this data source. */
  fields: Field[];

  /** Unique string representing this data source. */
  id: string;

  /** True if this data source is an extract, false otherwise. */
  isExtract: boolean;

  /** True if this data source is published to server, false otherwise. Always undefined prior to Tableau 2021.4. */
  isPublished?: boolean;

  /** The user friendly name of the data source as seen in the UI. */
  name: string;

  //---= methods =---//

  /**
   * @throws UnsupportedMethodForDataSourceType error if this method is called on a Cube DataSource or GA.
   *
   * @deprecated since version 1.4.0. Use `DataSource.getLogicalTablesAsync`.
   *
   * @returns An array of table summary objects that are currently used in the data source.
   */
  getActiveTablesAsync(): Promise<TableSummary[]>;

  /**
   * @returns An array of descriptions of the connections within this data source.
   */
  getConnectionSummariesAsync(): Promise<ConnectionSummary[]>;

  /**
   * Gets the underlying data table for the given logical table id.
   *
   * @param { string } logicalTableId
   * @param { DataSourceUnderlyingDataOptions | undefined } options - Collection of options to change the behavior of the call.
   *
   * @returns A data table containing the underlying data of the data source.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datasource.html#getlogicaltabledataasync
   */
  getLogicalTableDataAsync(
    logicalTableId: string,
    options?: DataSourceUnderlyingDataOptions
  ): Promise<DataTable>;

  /**
   *
   * @param { string } logicalTableId - logical table id.
   * @param { number | undefined } pageRowCount - The number of rows per page. The default and maximum is 10,000 rows.
   * @param { DataSourceUnderlyingDataOptions | undefined } options - Collection of options to change the behavior of the reader.
   *
   * @returns A data table reader to access the logical table data in the data source.
   */
  getLogicalTableDataReaderAsync(
    logicalTableId: string,
    pageRowCount?: number,
    options?: DataSourceUnderlyingDataOptions
  ): Promise<DataTableReader>;

  /**
   * Gets the underlying logical tables used in the data source.
   *
   * @returns An array of logical tables that are currently used in the data source.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datasource.html#getlogicaltablesasync
   */
  getLogicalTablesAsync(): Promise<LogicalTable[]>;

  /**
   * @deprecated since version 1.4.0. Use `DataSource.getLogicalTableDataAsync`.
   *
   * @param { DataSourceUnderlyingDataOptions | undefined } options - Collection of options to change the behavior of the call.
   *
   * @returns Returns a promise containing a page of data from the underlying data of the data source.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datasource.html#getunderlyingdataasync
   */
  getUnderlyingDataAsync(
    options?: DataSourceUnderlyingDataOptions
  ): Promise<DataTable>;

  /**
   * This call has the same functionality as clicking the Refresh option on a data source in Tableau. This does not refresh an extract.
   *
   * **NOTE:** The `refreshAsync()` method is intended to be used in scenarios where manual interaction causes a need to refresh the data in the Tableau visualization. The method is not, as currently designed, meant to support or emulate streaming or live visualizations. Extensions that use the method to refresh aggressively or automatically can cause issues on Tableau Server and Tableau Online and are subject to being blocked by the Tableau Online administrator.
   *
   * This call does not currently support refreshing live Google Sheet data sources.
   *
   * @returns Promise that resolves when the data source has finished refreshing.
   */
  refreshAsync(): Promise<void>;
}
