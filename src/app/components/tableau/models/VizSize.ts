import type { SheetSize } from './SheetSize';

/**
 * @see edding_api/en-us/reference/interfaces/vizsize.html
 */
export interface VizSize {
  /** Gets the height of the Tableau UI elements (the chrome) surrounding the view. */
  chromeHeight: number;

  /** Gets the sheetSize record for the current sheet */
  sheetSize: SheetSize;
}
