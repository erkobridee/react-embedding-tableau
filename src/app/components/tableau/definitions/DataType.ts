/**
 * The different types of data a value can have
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.datatype.html
 */
export const DataType = {
  Bool: 'bool',
  Date: 'date',
  DateTime: 'date-time',
  Float: 'float',
  Int: 'int',
  Spatial: 'spatial',
  String: 'string',
} as const;

export type TDataTypeKeys = keyof typeof DataType;

export type TDataType = (typeof DataType)[TDataTypeKeys];
