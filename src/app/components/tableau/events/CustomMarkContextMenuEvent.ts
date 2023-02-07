import type { MarksCollection } from '../models/MarksCollection';
import type { TableauWorksheetEvent } from './TableauWorksheetEvent';

// import type {} from '../models/Workbook'

/**
 * An event which is raised when an embedded custom context menu item is clicked.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/custommarkcontextmenuevent.html
 */
export interface CustomMarkContextMenuEvent extends TableauWorksheetEvent {
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
