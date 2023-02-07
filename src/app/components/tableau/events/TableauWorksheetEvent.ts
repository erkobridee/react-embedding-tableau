import type { Worksheet } from '../models/Worksheet';
import type { TableauSheetEvent } from './TableauSheetEvent';

/**
 * An event which is related to a particular Worksheet in the workbook.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/tableauworksheetevent.html
 */
export interface TableauWorksheetEvent extends TableauSheetEvent {
  /** The worksheet which was the source of this event. */
  worksheet: Worksheet;
}
