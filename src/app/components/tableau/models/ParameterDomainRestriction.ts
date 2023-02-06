import type { TParameterValueType } from '../definitions/ParameterValueType';
import type { TPeriodType } from '../definitions/PeriodType';
import type { DataValue } from './DataValue';

/**
 * Represents the allowable set of values which a parameter can be set to.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/parameterdomainrestriction.html
 */
export interface ParameterDomainRestriction {
  /** If `ParameterValueType.List`, the array will be the list of values which the parameter is allowed to take. */
  allowableValues: DataValue[];

  /** If `ParameterValueType.Range`, this defines the step date period used in the Parameter UI control slider. Note that if you specify a new value for the parameter, using the `changeValueAsync()` method, that does not align on the `dateStepPeriod` interval, the value will be set to the closest, earlier date. */
  dateStepPeriod: TPeriodType;

  /** If `ParameterValueType.Range`, the value will be the upper bound of allowable values for the parameter. */
  maxValue: DataValue;

  /** If `ParameterValueType.Range`, the value will be the lower bound of allowable values for the parameter. */
  minValue: DataValue;

  /** If `ParameterValueType.Range`, the value will define the step size used in the parameter UI control slider. Note that if you specify a new value for the parameter, using the `changeValueAsync()` method, that does not align on the `stepSize` interval, the value will be set to the closest, lower interval. For example, if the `stepSize` was 5 and the steps were 1, 5, 10, if the new value specified was 8, the value 5 would be used instead. */
  stepSize?: number;

  /** The type of restriction we have on the parameter's domain. This value will effect what other properties are configured on this object. */
  type: TParameterValueType;
}
