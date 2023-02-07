/**
 * Valid date ranges for a relative date filter.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.daterangetype.html
 */
export const DateRangeType = {
  Current: 'current',
  Last: 'last',
  LastN: 'last-n',
  Next: 'next',
  NextN: 'next-n',
  ToDate: 'to-date',
} as const;

export type TDateRangeTypeKeys = keyof typeof DateRangeType;

export type TDateRangeType = (typeof DateRangeType)[TDateRangeTypeKeys];
