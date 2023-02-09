import type { TFilterDomainType } from '../definitions/FilterDomainType';
import type { DataValue } from './DataValue';

/**
 * The domain of range filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/rangedomain.html
 */
export interface RangeDomain {
  /** Maximum value as specified in the domain. */
  max: DataValue;

  /** Minimum value as specified in the domain. */
  min: DataValue;

  /** the domain type (relevant, all) */
  type: TFilterDomainType;
}
