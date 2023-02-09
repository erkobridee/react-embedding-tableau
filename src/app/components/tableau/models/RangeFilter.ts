import type { TFilterDomainType } from '../definitions/FilterDomainType';
import type { DataValue } from './DataValue';
import type { Filter } from './Filter';
import type { RangeDomain } from './RangeDomain';

/**
 * A Range Filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/rangefilter.html
 */
export interface RangeFilter extends Filter {
  /** True if null values are included in the filter, false otherwise. */
  includeNullValues: boolean;

  /** Maximum value, inclusive, applied to the filter. */
  maxValue: DataValue;

  /** Minimum value, inclusive, applied to the filter. */
  minValue: DataValue;

  //---= methds =---//

  /**
   * @param domainType - ?
   *
   * @returns
   */
  getDomainAsync(domainType?: TFilterDomainType): Promise<RangeDomain>;
}
