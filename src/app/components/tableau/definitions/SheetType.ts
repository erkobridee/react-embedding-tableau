/**
 * The type of sheet a Sheet object represents
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.sheettype.html
 */
export const SheetType = {
  Dashboard: 'dashboard',
  Story: 'story',
  Worksheet: 'worksheet',
} as const;

export type TSheetTypeKeys = keyof typeof SheetType;

export type TSheetType = (typeof SheetType)[TSheetTypeKeys];
