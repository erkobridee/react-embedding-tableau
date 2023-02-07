/**
 * The option for specifying which values to include for filtering Indicates what to do with null values for a given filter or mark selection call.
 */
export const FilterNullOption = {
  AllValues: 'all-values',
  NonNullValues: 'non-null-values',
  NullValues: 'null-values',
} as const;

export type TFilterNullOptionKeys = keyof typeof FilterNullOption;

export type TFilterNullOption =
  (typeof FilterNullOption)[TFilterNullOptionKeys];
