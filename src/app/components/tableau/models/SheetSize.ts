import type { TSheetSizeBehavior } from '../definitions/SheetSizeBehavior';
import type { Size } from './Size';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/sheetsize.html
 */
export interface SheetSize {
  /**
   * The sizing method for a sheet. The value must be one of the following: Automatic, Exactly, Range, AtLeast, and AtMost. Exactly, Range, AtLeast, and AtMost are used in combination with minSize or maxsize.
   */
  behavior: TSheetSizeBehavior;

  /**
   * The maximum size of the sheet. This is only defined when behavior is Exactly, Range or AtMost.
   */
  maxSize?: Size;

  /**
   * The minimum size of the sheet. This is only defined when behavior is Exactly, Range, or AtLeast.
   */
  minSize?: Size;
}
