/**
 * The different update types for applying filter.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.filterupdatetype.html
 */
export const FilterUpdateType = {
  Add: 'add',
  All: 'all',
  Remove: 'remove',
  Replace: 'replace',
} as const;

export type TFilterUpdateTypeKeys = keyof typeof FilterUpdateType;

export type TFilterUpdateType =
  (typeof FilterUpdateType)[TFilterUpdateTypeKeys];
