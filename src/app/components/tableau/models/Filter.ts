import type { TFilterType } from '../definitions/FilterType';
import type { Field } from './Field';

/**
 * An abstract base class for all of the filter types.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/filter.html
 */
export interface Filter {
  /** The id of the field being filtered. */
  fieldId: string;

  /** The name of the field being filtered. Note that this is the caption as shown in the UI, and not the actual database field name. */
  fieldName: string;

  /** The type of the filter. */
  filterType: TFilterType;

  /**The parent worksheet. */
  worksheetName: string;

  //---= methods =---//

  /** the list of worksheet names that have the filter applied. */
  getAppliedWorksheetsAsync(): Promise<string[]>;

  /** a promise containing the field for the filter. */
  getFieldAsync(): Promise<Field>;

  /**
   * Applies the filter to the specified list of worksheets. If the worksheet(s) do not exist or do not contain the field in their data sources, an exception is thrown.
   *
   * @param { string[] } applyToWorksheets - list of worksheets to apply the filter on
   *
   * @returns the list of worksheet names that have the filter applied
   */
  setAppliedWorksheetsAsync(applyToWorksheets: string[]): Promise<string[]>;
}
