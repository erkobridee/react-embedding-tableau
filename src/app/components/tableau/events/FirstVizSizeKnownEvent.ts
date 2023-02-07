import type { VizSize } from '../models/VizSize';

/**
 * Initial event which is triggered as soon as the viz size is known
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/firstvizsizeknownevent.html
 */
export interface FirstVizSizeKnownEvent {
  vizSize: VizSize;
}
