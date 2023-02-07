/**
 * Type of aggregation on a field.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.fieldaggregationtype.html
 */
export const FieldAggregationType = {
  Attr: 'attr',
  Avg: 'avg',
  Count: 'count',
  Countd: 'countd',
  Day: 'day',
  End: 'end',
  Hour: 'hour',
  InOut: 'in-out',
  Kurtosis: 'kurtosis',
  Max: 'max',
  Mdy: 'mdy',
  Median: 'median',
  Min: 'min',
  Minute: 'minute',
  Month: 'month',
  MonthYear: 'month-year',
  None: 'none',
  Qtr: 'qtr',
  Quart1: 'quart1',
  Quart3: 'quart3',
  Second: 'second',
  Skewness: 'skewness',
  Stdev: 'stdev',
  Stdevp: 'stdevp',
  Sum: 'sum',
  TruncDay: 'trunc-day',
  TruncHour: 'trunc-hour',
  TruncMinute: 'trunc-minute',
  TruncMonth: 'trunc-month',
  TruncQtr: 'trunc-qtr',
  TruncSecond: 'trunc-second',
  TruncWeek: 'trunc-week',
  TruncYear: 'trunc-year',
  User: 'user',
  Var: 'var',
  Varp: 'varp',
  Week: 'week',
  Weekday: 'weekday',
  Year: 'year',
} as const;

export type TFieldAggregationTypeKeys = keyof typeof FieldAggregationType;

export type TFieldAggregationType =
  (typeof FieldAggregationType)[TFieldAggregationTypeKeys];
