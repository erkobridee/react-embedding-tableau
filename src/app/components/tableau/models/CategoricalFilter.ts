import type { TFilterDomainType } from '../definitions/FilterDomainType';
import type { CategoricalDomain } from './CategoricalDomain';
import type { DataValue } from './DataValue';
import type { Filter } from './Filter';

/**
 * A Categorical Filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/categoricalfilter.html
 */
export interface CategoricalFilter extends Filter {
  /** A list of values applied to this categorical filter. Notice that if this is a dependent filter, the current relavent values can be fetched by calling `getDomainAsync(tableau.FilterDomainType.Relevant)`. */
  appliedValues: DataValue[];

  /**
   * True if all the values are selected for this filter. When 'All' is selected, appliedValues returns an empty list.
   *
   * This field is available in Tableau 2019.2 or later
   */
  isAllSelected?: boolean;

  /** True if this filter is an exclude filter, false if an include filter. */
  isExcludeMode: boolean;

  //---= methods =---/

  /**  */
  getDomainAsync(domainType?: TFilterDomainType): Promise<CategoricalDomain>;
}
