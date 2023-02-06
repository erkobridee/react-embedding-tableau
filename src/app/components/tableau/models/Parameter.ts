import type { TDataType } from '../definitions/DataType';
import type { DataValue } from './DataValue';
import type { ParameterDomainRestriction } from './ParameterDomainRestriction';

/**
 * Represents a parameter in Tableau and provides ways to introspect the parameter and change its values.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/parameter.html
 */
export interface Parameter {
  /** The allowable set of values this parameter can take. */
  allowableValues: ParameterDomainRestriction;

  /** DataValue representing the current value of the parameter. */
  currentValue: DataValue;

  /** The type of data this parameter holds.  */
  dataType: TDataType;

  /** A unique identifier for this Parameter. */
  id: string;

  /** The display name of this parameter. */
  name: string;

  //---= methods =---//

  /**
   * Modifies this parameter and assigns it a new value. The new value must fall within the domain restrictions defined by `allowableValues`. If the domain restriction is `ParameterValueType.Range`, be sure to check the `allowableValues` before assigning a new value. If the new value is out of range, the updated value will be set to either the minValue or the maxValue of the allowable range. If a step size is also specified and the new value does not fall on the step intervals, the updated value will be set to the closest, lower step, or closest, earlier date. If the domain restriction is type `ParameterValueType.List`, and there are aliases defined for the list, the aliased value should be passed to the method.
   *
   * @param { string | number | boolean | Date } newValue - The new value to assign to this parameter. _Note:_ For changing `Date` parameters, UTC Date objects are expected.
   *
   * @return {Promise<DataValue>} Promise
   *
   * The updated `DataValue`. The promise is rejected if `newValue` is invalid. However, if the domain restriction is type `AllowableValuesType.Range`, and the `newValue` is out of the range bounds, the parameter gets set to the `minValue` or the `maxValue` of the range (whichever is closer). If the range has a `stepSize` or `dateStepPeriod`, the parameter gets set to the closest, lower step, or the closest, earlier date.
   */
  changeValueAsync(
    newValue: string | number | boolean | Date
  ): Promise<DataValue>;
}
