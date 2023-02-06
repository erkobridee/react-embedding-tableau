export const PeriodType = {
  Days: 'days',
  Hours: 'hours',
  Minutes: 'minutes',
  Months: 'months',
  Quarters: 'quarters',
  Seconds: 'seconds',
  Weeks: 'weeks',
  Years: 'years',
} as const;

export type TPeriodTypeKeys = keyof typeof PeriodType;

export type TPeriodType = (typeof PeriodType)[TPeriodTypeKeys];
