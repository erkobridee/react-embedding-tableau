/**
 * Represents the location of a context menu where users can add external menu items.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/apimenutype.html
 */
export const ApiMenuType = {
  /** External menu item will be injected in ubertip dialog */
  Ubertip: 'ubertip',
} as const;

export type TApiMenuTypeKeys = keyof typeof ApiMenuType;

export type TApiMenuType = (typeof ApiMenuType)[TApiMenuTypeKeys];
