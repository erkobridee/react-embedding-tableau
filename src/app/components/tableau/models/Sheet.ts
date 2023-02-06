import type { TSheetType } from '../definitions/SheetType';
import type { SheetSize } from './SheetSize';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/sheet.html
 */
export interface Sheet<W = unknown> {
  /** The index of the sheet within the published tabs. Note that hidden tabs are still counted in the ordering, as long as they are published. */
  index: number;

  /** A value indicating whether the sheet is the currently active sheet. */
  isActive: boolean;

  /** A value indicating whether the sheet is hidden (true) or visible (false) in the UI. Note that if the entire tab control is hidden, it does not affect the state of this flag. This sheet may still report that it is visible even when the tabs control is hidden. */
  isHidden: boolean;

  /** The name of the sheet. */
  name: string;

  /** The type of the sheet. */
  sheetType: TSheetType;

  /** The size information that the author specified when publishing the workbook. */
  size: SheetSize;

  /** the URL for this sheet. */
  url: string;

  /** The workbook containing this sheet */
  workbook: W;

  //---= methods =---//

  /** Sets the size information of a sheet. Note that if the sheet is a Worksheet, only SheetSizeBehavior.Automatic is allowed since you can't actually set a Worksheet to a fixed size. */
  changeSizeAsync: (sheetSize: SheetSize) => Promise<SheetSize>;
}
