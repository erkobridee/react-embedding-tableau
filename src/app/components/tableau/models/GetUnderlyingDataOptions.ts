import type { GetSummaryDataOptions } from './GetSummaryDataOptions';

/**
 * Options argument for the Worksheet.getUnderlyingTableDataAsync API.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/getunderlyingdataoptions.html#includeallcolumns
 */
export interface GetUnderlyingDataOptions extends GetSummaryDataOptions {
  /** Return all the columns for the data source. Default is `false`. */
  includeAllColumns?: boolean;
}
