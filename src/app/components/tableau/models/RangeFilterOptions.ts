import type { TFilterNullOption } from '../definitions/FilterNullOption';

/**
 * Options for Range Filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/rangefilteroptions.html
 */
export interface RangeFilterOptions {
  max?: number | Date;
  min?: number | Date;
  nullOption?: TFilterNullOption;
}
