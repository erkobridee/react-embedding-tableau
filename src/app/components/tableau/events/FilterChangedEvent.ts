import type { Filter } from '../models/Filter';
import type { TableauWorksheetEvent } from './TableauWorksheetEvent';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/filterchangedevent.html
 */
export interface FilterChangedEvent extends TableauWorksheetEvent {
  /** The name of the field being filtered. */
  fieldName: string;

  //---= methods =---//

  /**
   * @returns The Filter object associated with the event.
   */
  getFilterAsync(): Promise<Filter>;
}
