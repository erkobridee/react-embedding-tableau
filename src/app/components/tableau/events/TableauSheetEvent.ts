import type { Sheet } from '../models/Sheet';

/**
 * An event which is related to a particular Sheet (worksheet, dashboard, story) in the workbook.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/tableausheetevent.html
 */
export interface TableauSheetEvent {
  /** The sheet which was the source of this event. */
  sheet: Sheet;
}
