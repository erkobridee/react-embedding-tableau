/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/datavalue.html
 */
export interface DataValue {
  /** The value formatted according to the locale and the formatting applied to the field or parameter. */
  formattedValue?: string;

  /** The raw native value as a JavaScript type, which is one of string, number, boolean, or Date object. Please note that special values are returned as null. The actual special value can be found in formattedValue, which would be something like 'Null', or 'No-Access'. Using nativeValue can greatly simplify your error checking since all values will be their native type value or null. */
  nativeValue: any;

  /** Contains the raw native value as a JavaScript type, which is one of string, number, boolean, or Date (as a string). Please note that special values, regardless of type, are always returned as a String surrounded by percent signs, such as '%null%', or '%no-access%'. */
  value: any;
}
