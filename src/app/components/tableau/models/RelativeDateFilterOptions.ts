import type { TDateRangeType } from '../definitions/DateRangeType';
import type { TPeriodType } from '../definitions/PeriodType';

/**
 * Options for Relative Date Filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/relativedatefilteroptions.html
 */
export interface RelativeDateFilterOptions {
  /** the anchor date of the filter */
  anchorDate?: Date;

  /** The date period of the filter (years, months, etc.). */
  periodType?: TPeriodType;

  /** When getRange returns LASTN or NEXTN, this is the N value (how many years, months, etc.). */
  rangeN?: number;

  /** The range of the date filter. */
  rangeType: TDateRangeType;
}
