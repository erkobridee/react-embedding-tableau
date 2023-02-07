/**
 * Enum for specifying the selection type for select marks api.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.selectionupdatetype.html
 */
export const SelectionUpdateType = {
  Add: 'select-add',
  Remove: 'select-remove',
  Replace: 'select-replace',
} as const;

export type TSelectionUpdateTypeKeys = keyof typeof SelectionUpdateType;

export type TSelectionUpdateType =
  (typeof SelectionUpdateType)[TSelectionUpdateTypeKeys];
