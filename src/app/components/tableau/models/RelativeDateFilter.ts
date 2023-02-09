import type { TDateRangeType } from '../definitions/DateRangeType';
import type { TPeriodType } from '../definitions/PeriodType';
import type { DataValue } from './DataValue';
import type { Filter } from './Filter';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/relativedatefilter.html
 */
export interface RelativeDateFilter extends Filter {
  /** the anchor date of the filter */
  anchorDate: DataValue;

  /** The date period of the filter. */
  periodType: TPeriodType;

  /** When getRange returns LASTN or NEXTN, this is the N value (how many years, months, etc.). */
  rangeN: number;

  /** The range of the date filter (years, months, etc.). */
  rangeType: TDateRangeType;
}
