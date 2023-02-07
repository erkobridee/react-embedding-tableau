import type { TIncludeDataValuesOption } from '../definitions/IncludeDataValuesOption';

/**
 * Options argument for the Worksheet.GetSummaryDataAsync API
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/getsummarydataoptions.html
 */
export interface GetSummaryDataOptions {
  /** The columns to return specified by field id, returns all by default. Since 1.5.0, fieldId is a property of the Column object. */
  columnsToIncludeById?: string[];

  /** Do not use aliases specified in the data source in Tableau. Default is `false`. */
  ignoreAliases?: boolean;

  /** Only return data for the currently selected marks. Default is `false`. */
  ignoreSelection?: boolean;

  /** Specify which properties to return in DataValues. The default is `IncludeDataValuesOption.AllValues`. All properties not requested will be undefined in the DataValue results. This is a performance optimization only, and will be ignored in Tableau versions prior to 2021.2. */
  includeDataValuesOption: TIncludeDataValuesOption;

  /** The number of rows of data that you want to return. A value of `0` will attempt to return all rows. `0` is the default if maxRows is not specified. `getUnderlyingTableDataAsync` - maximum number of rows returned is capped at `10,000` regardless of maxRows. `getSummaryDataAsync` - maximum number of rows returned is not capped, but performance may suffer with large row counts. */
  maxRows?: number;
}
