/**
 * An enumeration describing the different types of allowable values. This is used for restricting the domain of a parameter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.parametervaluetype.html
 */
export const ParameterValueType = {
  All: 'all',
  List: 'list',
  Range: 'range',
} as const;

export type TParameterValueTypeKeys = keyof typeof ParameterValueType;

export type TParameterValueType =
  (typeof ParameterValueType)[TParameterValueTypeKeys];
