import type { TSheetType } from '../definitions/SheetType';
import type { SheetSize } from './SheetSize';
import type { Workbook } from './Workbook';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/sheetinfo.html
 */
export interface SheetInfo {
  /** the index of the sheet within the published tabs. Note that hidden tabs are still counted in the ordering, as long as they are published. */
  index: number;

  /** a value indicating whether the sheet is the currently active sheet. Due to a technical limitation, this will always return false if the object is a Worksheet instance that is part of a Dashboard. */
  isActive: boolean;

  /** a value indicating whether the sheet is hidden in the UI. Note that if the entire tab control is hidden, it does not affect the state of this flag. This sheet may still report that it is visible even when the tabs control is hidden. */
  isHidden: boolean;

  /** the name of the sheet. */
  name: string;

  /** The type of the sheet. SheetType is an enum with the following values: WORKSHEET, DASHBOARD and STORY. */
  sheetType: TSheetType;

  /** The size information that the author specified when publishing the workbook. */
  size: SheetSize;

  /** The URL for this sheet. */
  url: string;

  /** The Workbook to which this Sheet belongs. */
  workbook: Workbook;
}
