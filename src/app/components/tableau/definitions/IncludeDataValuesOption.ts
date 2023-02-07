/**
 * Enum that serves as a filter on the DataValues returned from `getSummaryDataAsync`, `getUnderlyingTableDataAsync` and `getLogicalTableDataAsync`. This is an optimization of returned data values only. Tableau versions prior to 2021.2 will pass the data across and populate the DataValue properties. Please note that all properties not requested will be `undefined` in the DataValue results.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.includedatavaluesoption.html
 */
export const IncludeDataValuesOption = {
  /** DataValues will include all properties. */
  AllValues: 'all-values',

  /** DataValues will only include formattedValue properties. */
  OnlyFormattedValues: 'only-formatted-values',

  /** DataValues will only include value and nativeValue properties. */
  OnlyNativeValues: 'only-native-values',
} as const;

export type TIncludeDataValuesOptionKeys = keyof typeof IncludeDataValuesOption;

export type TIncludeDataValuesOption =
  (typeof IncludeDataValuesOption)[TIncludeDataValuesOptionKeys];
