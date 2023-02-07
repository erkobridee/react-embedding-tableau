import type { StoryPoint } from '../models/StoryPoint';
import type { StoryPointInfo } from '../models/StoryPointInfo';

/**
 * An event that signals when a different story point is selected in a story.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/storypointswitchedevent.html
 */
export interface StoryPointSwitchedEvent {
  /** The StoryPoint that is currently active. */
  newStoryPoint: StoryPoint;

  /** The StoryPointInfo that was active before the story point switch event occurred. The returned object reflects the state of the story point before the switch occurred. */
  oldStoryPointInfo: StoryPointInfo;
}
