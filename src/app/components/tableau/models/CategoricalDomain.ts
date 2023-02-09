import type { TFilterDomainType } from '../definitions/FilterDomainType';
import type { DataValue } from './DataValue';

/**
 * The domain of a categorical filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/categoricaldomain.html
 */
export interface CategoricalDomain {
  /** the domain type (relevant, all) */
  type: TFilterDomainType;

  /** the list of values in the domain of the filter */
  values: DataValue[];
}
