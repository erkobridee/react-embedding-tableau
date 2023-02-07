import type { CustomView } from '../models/CustomView';

/**
 * An event which is raised when there are changes to a custom view.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/customviewevent.html
 */
export interface CustomViewEvent {
  customView: CustomView;
}
