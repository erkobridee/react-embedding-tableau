import type { MarksCollection } from '../models/MarksCollection';
import type { TableauWorksheetEvent } from './TableauWorksheetEvent';

/**
 * An event which is raised when marks are selected on a worksheet.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/marksselectedevent.html
 */
export interface MarksSelectedEvent extends TableauWorksheetEvent {
  /** The collection of Marks that were selected. */
  getMarksAsync(): Promise<MarksCollection>;
}
