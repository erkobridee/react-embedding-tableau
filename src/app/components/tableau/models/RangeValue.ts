import type { TFilterNullOption } from '../definitions/FilterNullOption';

/**
 * RangeValue interface to provide selection value for range based selections. The associated field should be a quantitative field. For Date Values, UTC Date objects are expected. (i.e., `var min = new Date(Date.UTC(1999, 0, 1))`). While date string inputs work, UTC date inputs are officially supproted going forward for RangeValue.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/rangevalue.html
 */
export interface RangeValue {
  /** max range value for the range based selection */
  max: number | Date;

  /** min range value for the range based selection */
  min: number | Date;

  /** Including nulloptions parameter. */
  nullOption?: TFilterNullOption;
}
