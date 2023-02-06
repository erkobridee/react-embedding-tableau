/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/toolbar.html
 */
export const Toolbar = {
  TOP: 'top',
  BOTTOM: 'bottom',
  HIDDEN: 'hidden',
} as const;

export type TToolbarKeys = keyof typeof Toolbar;

export type TToolbar = (typeof Toolbar)[TToolbarKeys];
