import type { MarksCollection } from '../models/MarksCollection';
import type { Sheet } from '../models/Sheet';
import type { Worksheet } from '../models/Worksheet';

// import type {} from '../models/Workbook'

/**
 * An event which is raised when an embedded custom context menu item is clicked.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/custommarkcontextmenuevent.html
 */
export interface CustomMarkContextMenuEvent {
  /** The sheet which was the source of this event. */
  sheet: Sheet;

  /** The worksheet which was the source of this event. */
  worksheet: Worksheet;

  //---= methods =---//

  /**
   * Id of clicked embedded menu item.
   */
  getContextMenuId(): string;

  /**
   * The collection of Marks that were selected.
   *
   * @return { Promise<MarksCollection> } Promise
   */
  getSelectedMarksAsync(): Promise<MarksCollection>;
}
