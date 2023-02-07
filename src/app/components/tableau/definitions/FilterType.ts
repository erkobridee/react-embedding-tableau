/**
 * An enumeration of the valid types of filters that can be applied.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.filtertype.html
 */
export const FilterType = {
  Categorical: 'categorical',
  Hierarchical: 'hierarchical',
  Range: 'range',
  RelativeDate: 'relative-date',
} as const;

export type TFilterTypeKeys = keyof typeof FilterType;

export type TFilterType = (typeof FilterType)[TFilterTypeKeys];
