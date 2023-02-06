/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/sheetsizebehavior.html
 */
export const SheetSizeBehavior = {
  AtLeast: 'atleast',
  AtMost: 'atmost',
  Automatic: 'automatic',
  Exactly: 'exactly',
  Range: 'range',
} as const;

export type TSheetSizeBehaviorKeys = keyof typeof SheetSizeBehavior;

export type TSheetSizeBehavior =
  (typeof SheetSizeBehavior)[TSheetSizeBehaviorKeys];
