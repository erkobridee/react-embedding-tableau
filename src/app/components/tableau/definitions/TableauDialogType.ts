/**
 * You can use this type with a Viz object.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableaudialogtype.html
 */
export const TableauDialogType = {
  /** Used to display the download CrossTab dialog. */
  ExportCrossTab: 'export-cross-tab',

  /** Used to display the download Data dialog. */
  ExportData: 'export-data',

  /** Used to display the download PDF dialog. */
  ExportPDF: 'export-pdf',

  /** Used to display the download PowerPoint dialog. */
  ExportPowerPoint: 'export-powerpoint',

  /** Used to display the download Workbook dialog. */
  ExportWorkbook: 'export-workbook',

  /** Used to display the Share dialog. */
  Share: 'share',
} as const;

export type TTableauDialogTypeKeys = keyof typeof TableauDialogType;

export type TTableauDialogType =
  (typeof TableauDialogType)[TTableauDialogTypeKeys];
