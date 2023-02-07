import type { TIncludeDataValuesOption } from '../definitions/IncludeDataValuesOption';

/**
 * Configuration object for fetching data from an data source object.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datasourceunderlyingdataoptions.html
 */
export interface DataSourceUnderlyingDataOptions {
  /** The columns to return specified by field name, returns all by default. */
  columnsToInclude: string[];

  /** The columns to return specified by field id, returns all by default. Since 1.5.0, fieldId is a property of the Column object. */
  columnsToIncludeById: string[];

  /** Do not use aliases specified in the data source in Tableau. Default is false. */
  ignoreAliases?: boolean;

  /** Specify which properties to return in DataValues. The default is `IncludeDataValuesOption.AllValues`. All properties not requested will be `undefined` in the DataValue results. This is a performance optimization only, and will be ignored in Tableau versions prior to 2021.2. */
  includeDataValuesOption: TIncludeDataValuesOption;

  /** The maximum number of rows to return. 10,000 by default */
  maxRows?: number;
}
