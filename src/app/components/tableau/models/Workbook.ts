import { CustomView } from './CustomView';
import { Sheet } from './Sheet';

// TODO: remove
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/workbook.html
 */
export interface Workbook {
  /** Gets the currently active custom view, or undefined if no custom view is active. */
  activeCustomView?: CustomView<Workbook>;

  /** Gets the currently active sheet (the active tab). */
  activeSheet: Sheet<Workbook>;

  /** Gets the name of the workbook saved to the server. Note that this is not necessarily the file name. */
  name: string;

  /** Note that this is synchronous, meaning that all of the sheets are expected when loaded.  */
  publishedSheetsInfo: any[]; // TODO: define the interface SheetInfo

  //---= methods =---//

  // TODO: define
}
